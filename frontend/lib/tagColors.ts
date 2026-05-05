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
        label: 'ルール',
        tags: ['ポケモンex', 'メガシンカex', 'ACE SPEC'],
        token: {
            active: 'bg-amber-600 border-amber-500 text-white',
            inactive: 'bg-gray-800 border-gray-600 text-gray-300 hover:border-amber-500 hover:text-amber-300',
        },
    },
    {
        label: '形態テーマ',
        tags: ['テラスタル', '古代', '未来'],
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
