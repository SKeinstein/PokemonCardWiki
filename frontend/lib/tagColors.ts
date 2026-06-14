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

// キャラクター系公式タグ（Nのポケモン等）はチップでは「のポケモン」を省いて表示する。
// データ上のタグ名は公式サイト準拠のまま（QA結合・index が依存）。
export function officialTagLabel(tag: string): string {
    return tag.replace(/のポケモン$/, '');
}

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
    // Phase 33-M: 攻撃セクション本体はファセット枠 (ATTACK_FACET_COLUMNS)。
    // Phase 33-N: 防御セクション本体もファセット枠 (DEFENSE_FACET_COLUMNS)。
    // ダメージ修飾 (旧別棚) は通常の 親>サブ 木として「その他」グループに流す。
];

export const OTHER_CUSTOM_TAG_GROUP_LABEL = 'その他';

// ── Phase 33-M: 攻撃ファセット枠 ────────────────────────────────────────────
//
// 攻撃セクションは 親>サブ の木でなく 4軸ファセット (機構/タイミング/条件/範囲)。
// 専用枠で「列ごとに最大1つ選ぶ」UI にする (CardSearch の AttackFacetFrame)。
// タグ自体はフラットな親タグとしてデータに入っており、通常パネルからは除外する。

export type AttackFacetColumn = {
    key: string;
    question: string;
    questionClass: string;
    parents: string[];
    token: CustomTagToken;
};

// Phase 33-P 配色見直し: 攻撃枠＝暖色 (rose) 単色 / 防御枠＝寒色 (blue) 単色。
// 列の区別は見出し文言と位置で行い、チップの色は「攻か防か」だけを語る。
// 公式タグ (sky/purple/teal)・独自その他 (violet) との色相衝突も避ける。
const ATTACK_FACET_TOKEN: CustomTagToken = {
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
};

const DEFENSE_FACET_TOKEN: CustomTagToken = {
    chipSelected: 'bg-blue-600 border-blue-500 text-white',
    chipExpanded: 'bg-blue-900/70 border-blue-500 text-blue-100 font-bold',
    chipDefault: 'bg-gray-800 border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-300',
    expandSelected: 'bg-blue-700 border-blue-500 text-blue-200',
    expandExpanded: 'bg-blue-700 border-blue-500 text-blue-100',
    expandDefault: 'bg-gray-700 border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-300',
    ring: 'ring-2 ring-blue-400/90 shadow-[0_0_12px_rgba(96,165,250,0.55)]',
    subtagBorder: 'border-blue-400/70',
    subtagLabel: 'text-blue-400/80',
    subtagSelected: 'bg-blue-600 border-blue-500 text-white',
    subtagDefault: 'bg-gray-800/80 border-blue-900/50 text-gray-300 hover:border-blue-500 hover:text-blue-300',
    chipDisplay: 'bg-blue-900/60 border-blue-700 text-blue-200',
    chipDisplayParent: 'text-blue-400/70',
};

export const ATTACK_FACET_COLUMNS: AttackFacetColumn[] = [
    {
        key: 'mechanism',
        question: '① どうやって？',
        questionClass: 'text-rose-300',
        parents: ['ワザダメージ', 'ダメカンを置く', 'ダメカン移動'],
        token: ATTACK_FACET_TOKEN,
    },
    {
        key: 'timing',
        question: '② いつ？',
        questionClass: 'text-rose-300',
        parents: ['即時', '次の番も', '特性・場', '反射'],
        token: ATTACK_FACET_TOKEN,
    },
    {
        key: 'condition',
        question: '③ 何を参照？',
        questionClass: 'text-rose-300',
        parents: ['無条件', '自分の場', '相手の場', 'コイン', '枚数参照', '種別', '特殊状態参照', 'HP/ダメカン'],
        token: ATTACK_FACET_TOKEN,
    },
    {
        key: 'scope',
        question: '④ どこに飛ぶ？',
        questionClass: 'text-rose-300',
        parents: ['ベンチに届く', '自分側', 'お互い', 'バトル場のみ'],
        token: ATTACK_FACET_TOKEN,
    },
];

export const ATTACK_FACET_TAGS = new Set(ATTACK_FACET_COLUMNS.flatMap(c => c.parents));

// ── Phase 33-N: 防御ファセット枠 ────────────────────────────────────────────
//
// 防御セクションも攻撃と同じ列ごと単一選択のファセット枠 (3軸: 機構/タイミング・条件/対象)。

export const DEFENSE_FACET_COLUMNS: AttackFacetColumn[] = [
    {
        key: 'defMechanism',
        question: '① なにを防ぐ？',
        questionClass: 'text-blue-300',
        parents: ['受けるダメージ軽減', '受けるダメージ無効', '効果を受けない', '特殊状態にならない'],
        token: DEFENSE_FACET_TOKEN,
    },
    {
        key: 'defTiming',
        question: '② いつ・条件は？',
        questionClass: 'text-blue-300',
        parents: ['常時', '次の相手の番', 'コインしだい', '特定の相手のみ'],
        token: DEFENSE_FACET_TOKEN,
    },
    {
        key: 'defTarget',
        question: '③ だれを守る？',
        questionClass: 'text-blue-300',
        parents: ['このポケモン', '場の全員', 'ベンチ', '相手を弱める'],
        token: DEFENSE_FACET_TOKEN,
    },
];

export const DEFENSE_FACET_TAGS = new Set(DEFENSE_FACET_COLUMNS.flatMap(c => c.parents));

// ── Phase 33-AC: ルール用語 (結合専用タグ) ──────────────────────────────────
//
// QAタグ結合のためだけに付与する独自タグ。検索 UI のフィルターパネルには出さず、
// CardModal の共通タグ表示でのみ色違い (amber) で出現する。
// 親タグ「ルール用語」配下に「のぞむなら」等の公式ルール用語を集約。

const RULE_TERMS_TOKEN: CustomTagToken = {
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
};

export const RULE_TERMS_PARENTS = ['ルール用語'];
export const RULE_TERMS_TAGS = new Set(RULE_TERMS_PARENTS);

const PARENT_TO_GROUP = new Map<string, CustomTagGroup>();
for (const group of CUSTOM_TAG_GROUPS) {
    for (const parent of group.parents) PARENT_TO_GROUP.set(parent, group);
}
// facet tags resolve to their column token (選択中チップ等の色解決用)
for (const col of [...ATTACK_FACET_COLUMNS, ...DEFENSE_FACET_COLUMNS]) {
    for (const parent of col.parents) {
        PARENT_TO_GROUP.set(parent, { label: col.question, parents: col.parents, token: col.token });
    }
}
// rule-term tags: 結合専用なので filter panel には出さないが、共通タグ表示で amber 色解決
for (const parent of RULE_TERMS_PARENTS) {
    PARENT_TO_GROUP.set(parent, { label: 'ルール用語', parents: RULE_TERMS_PARENTS, token: RULE_TERMS_TOKEN });
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
