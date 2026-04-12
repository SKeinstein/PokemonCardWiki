import { useEffect } from "react";

/**
 * Ref-counted body scroll lock.
 *
 * Multiple modals can call this hook simultaneously. The body is locked on the
 * first mount and unlocked only when the last consumer unmounts, preventing the
 * scroll position from being incorrectly restored while another modal is still open.
 */

let lockCount = 0;
let savedScrollY = 0;

function lockBody() {
    if (lockCount === 0) {
        savedScrollY = window.scrollY;
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${savedScrollY}px`;
        document.body.style.width = "100%";
    }
    lockCount++;
}

function unlockBody() {
    lockCount--;
    if (lockCount <= 0) {
        lockCount = 0;
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, savedScrollY);
    }
}

export function useBodyScrollLock() {
    useEffect(() => {
        lockBody();
        return () => {
            unlockBody();
        };
    }, []);
}
