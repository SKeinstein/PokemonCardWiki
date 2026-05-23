export type OfficialClassGroup = {
    label: string;
    tags: string[];
    token: { active: string; inactive: string };
};

export const OFFICIAL_CLASS_GROUPS: OfficialClassGroup[] = [
    {
        label: 'カード種別',
        tags: ['たねポケモン', '1進化ポケモン', '2進化ポケモン', 'グッズ', 'サポート', 'スタジアム', 'ポケモンのどうぐ', '特殊エネルギー', 'ルールを持つポケモン', 'ワザマシン'],
        token: {
            active: 'bg-sky-600 border-sky-500 text-white',
            inactive: 'bg-gray-800 border-gray-600 text-gray-300 hover:border-sky-500 hover:text-sky-300',
        },
    },
    {
        label: '特別なカード',
        tags: ['ポケモンex', 'メガシンカex', 'ACE SPEC', 'テラスタル', '古代', '未来'],
        token: {
            active: 'bg-purple-600 border-purple-500 text-white',
            inactive: 'bg-gray-800 border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300',
        },
    },
    {
        label: 'キャラクター',
        tags: ['ロケット団', 'Nのポケモン', 'ホップのポケモン', 'シロナのポケモン', 'ヒビキのポケモン', 'マリィのポケモン', 'アオキのポケモン', 'リーリエのポケモン', 'ナンジャモのポケモン', 'ペパーのポケモン', 'ダイゴのポケモン', 'エリカのポケモン', 'カスミのポケモン'],
        token: {
            active: 'bg-teal-600 border-teal-500 text-white',
            inactive: 'bg-gray-800 border-gray-600 text-gray-300 hover:border-teal-500 hover:text-teal-300',
        },
    },
];

export function getOfficialTagColor(tag: string): string {
    for (const group of OFFICIAL_CLASS_GROUPS) {
        if (group.tags.includes(tag)) return group.token.active;
    }
    return 'bg-gray-700 border-gray-600 text-gray-300';
}

// ── Custom (独自) tag groups — Phase 33 axis②/耐性/axis④ 視覚グループ化 ──
//
// 各グループに専用色を割り当て、独自タグパネルでセクション分けして表示する。
// 該当しない親タグ (既存独自タグ群) は DEFAULT_CUSTOM_TAG_TOKEN (violet) に流れる。

export type CustomTagToken = {
    chipSelected: string;
    chipExpanded: string;
    chipDefault: string;
    expandSelected: string;
    expandExpanded: string;
    expandDefault: string;
    ring: string;
    subtagBorder: string;
    subtagLabel: string;
    subtagSelected: string;
    subtagDefault: string;
    chipDisplay: string;
    chipDisplayParent: string;
};

export type CustomTagGroup = {
    label: string;
    parents: string[];
    token: CustomTagToken;
};

export const DEFAULT_CUSTOM_TAG_TOKEN: CustomTagToken = {
    chipSelected: 'bg-violet-600 border-violet-500 text-white',
    chipExpanded: 'bg-violet-900/70 border-violet-500 text-violet-100 font-bold',
    chipDefault: 'bg-gray-800 border-gray-600 text-gray-300 hover:border-violet-500 hover:text-violet-300',
    expandSelected: 'bg-violet-700 border-violet-500 text-violet-200',
    expandExpanded: 'bg-violet-700 border-violet-500 text-violet-100',
    expandDefault: 'bg-gray-700 border-gray-600 text-gray-400 hover:border-violet-500 hover:text-violet-300',
    ring: 'ring-2 ring-violet-400/90 shadow-[0_0_12px_rgba(167,139,250,0.55)]',
    subtagBorder: 'border-violet-400/70',
    subtagLabel: 'text-violet-400/80',
    subtagSelected: 'bg-violet-600 border-violet-500 text-white',
    subtagDefault: 'bg-gray-800/80 border-violet-900/50 text-gray-300 hover:border-violet-500 hover:text-violet-300',
    chipDisplay: 'bg-violet-900/60 border-violet-700 text-violet-200',
    chipDisplayParent: 'text-violet-400/70',
};

export const CUSTOM_TAG_GROUPS: CustomTagGroup[] = [
    {
        label: 'ダメージ系（攻撃）',
        parents: ['ワザダメージ', 'ダメカン直置き', '与ダメージ修飾', 'ダメカン移動', 'ワザを受けたとき', '番の終わり'],
        token: {
            chipSelected: 'bg-rose-600 border-rose-500 text-white',
            chipExpanded: 'bg-rose-900/70 border-rose-500 text-rose-100 font-bold',
            chipDefault: 'bg-gray-800 border-gray-600 text-gray-300 hover:border-rose-500 hover:text-rose-300',
            expandSelected: 'bg-rose-700 border-rose-500 text-rose-200',
            expandExpanded: 'bg-rose-700 border-rose-500 text-rose-100',
            expandDefault: 'bg-gray-700 border-gray-600 text-gray-400 hover:border-rose-500 hover:text-rose-300',
            ring: 'ring-2 ring-rose-400/90 shadow-[0_0_12px_rgba(251,113,133,0.55)]',
            subtagBorder: 'border-rose-400/70',
            subtagLabel: 'text-rose-400/80',
            subtagSelected: 'bg-rose-600 border-rose-500 text-white',
            subtagDefault: 'bg-gray-800/80 border-rose-900/50 text-gray-300 hover:border-rose-500 hover:text-rose-300',
            chipDisplay: 'bg-rose-900/60 border-rose-700 text-rose-200',
            chipDisplayParent: 'text-rose-400/70',
        },
    },
    {
        label: 'ダメージ系（防御・耐性）',
        parents: ['受けるダメージ軽減', '受けるダメージ無効', '耐性'],
        token: {
            chipSelected: 'bg-cyan-600 border-cyan-500 text-white',
            chipExpanded: 'bg-cyan-900/70 border-cyan-500 text-cyan-100 font-bold',
            chipDefault: 'bg-gray-800 border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-300',
            expandSelected: 'bg-cyan-700 border-cyan-500 text-cyan-200',
            expandExpanded: 'bg-cyan-700 border-cyan-500 text-cyan-100',
            expandDefault: 'bg-gray-700 border-gray-600 text-gray-400 hover:border-cyan-500 hover:text-cyan-300',
            ring: 'ring-2 ring-cyan-400/90 shadow-[0_0_12px_rgba(34,211,238,0.55)]',
            subtagBorder: 'border-cyan-400/70',
            subtagLabel: 'text-cyan-400/80',
            subtagSelected: 'bg-cyan-600 border-cyan-500 text-white',
            subtagDefault: 'bg-gray-800/80 border-cyan-900/50 text-gray-300 hover:border-cyan-500 hover:text-cyan-300',
            chipDisplay: 'bg-cyan-900/60 border-cyan-700 text-cyan-200',
            chipDisplayParent: 'text-cyan-400/70',
        },
    },
    {
        label: 'タイミング（共通）',
        parents: ['ワザ使用時', 'トリガー型', '常時'],
        token: {
            chipSelected: 'bg-amber-600 border-amber-500 text-white',
            chipExpanded: 'bg-amber-900/70 border-amber-500 text-amber-100 font-bold',
            chipDefault: 'bg-gray-800 border-gray-600 text-gray-300 hover:border-amber-500 hover:text-amber-300',
            expandSelected: 'bg-amber-700 border-amber-500 text-amber-200',
            expandExpanded: 'bg-amber-700 border-amber-500 text-amber-100',
            expandDefault: 'bg-gray-700 border-gray-600 text-gray-400 hover:border-amber-500 hover:text-amber-300',
            ring: 'ring-2 ring-amber-400/90 shadow-[0_0_12px_rgba(251,191,36,0.55)]',
            subtagBorder: 'border-amber-400/70',
            subtagLabel: 'text-amber-400/80',
            subtagSelected: 'bg-amber-600 border-amber-500 text-white',
            subtagDefault: 'bg-gray-800/80 border-amber-900/50 text-gray-300 hover:border-amber-500 hover:text-amber-300',
            chipDisplay: 'bg-amber-900/60 border-amber-700 text-amber-200',
            chipDisplayParent: 'text-amber-400/70',
        },
    },
];

export const OTHER_CUSTOM_TAG_GROUP_LABEL = 'その他';

const PARENT_TO_GROUP = new Map<string, CustomTagGroup>();
for (const group of CUSTOM_TAG_GROUPS) {
    for (const parent of group.parents) PARENT_TO_GROUP.set(parent, group);
}

export function getCustomTagGroup(parent: string): CustomTagGroup | null {
    return PARENT_TO_GROUP.get(parent) ?? null;
}

export function getCustomTagToken(parent: string): CustomTagToken {
    return PARENT_TO_GROUP.get(parent)?.token ?? DEFAULT_CUSTOM_TAG_TOKEN;
}

export function getCustomTagDisplayToken(tag: string): { chip: string; parent: string } {
    const parent = tag.indexOf('>') >= 0 ? tag.substring(0, tag.indexOf('>')) : tag;
    const token = getCustomTagToken(parent);
    return { chip: token.chipDisplay, parent: token.chipDisplayParent };
}
