# Completed Tasks

Maintained by Foreman/Scribe.
- **Unreported**: Scribe appends here on task success. Review with user, then move to Archive.
- **Archive**: Reported to user.

---

## Unreported

### Phase 35-3: ワザロック(相手)廃止・ロックサブタグ整理・トレーナー効果無効移動 ✅ (2026-05-17)
- [x] §B-7 `ワザロック(相手)` 廃止: `>ワザ` → `ロック>ワザ`（§B-8-7, 19件）、`>どうぐ` → `ロック>どうぐ`（§B-8-8, 5件）、`>スタジアム` は §B-8-6 で既に処理済み
- [x] ロックサブタグ名から「ロック」除去: `グッズロック`→`グッズ` / `サポートロック`→`サポート` / `ACE SPECロック`→`ACE SPEC`
- [x] `ロック>トレーナー効果無効` 廃止 → `無効>グッズ`（5件）/ `無効>サポート`（7件）として §B-26 に移動
- [x] `tag_cards.mjs` GROUP_ORDER / SECTION_MAP 同期（`ワザロック(相手)` 削除、`ロック>ワザ/どうぐ` 追加、`無効>グッズ/サポート` 追加）
- [x] `tag_qa_entries.mjs` 同リネーム適用
- [x] `card_tags.json` リビルド: ロック 61件（ワザ:19/どうぐ:5/グッズ:14/サポート:3/ACE SPEC:1/特性:17/スタジアム:2）、無効>グッズ:5件/無効>サポート:7件
- [x] `group_categories_proposal.md` §B-7廃止・§B-8更新・§B-26無効サブタグ追加・タグ一覧更新

### Phase 35-2: 独自タグ「スタジアム」廃止・サブタグ移行 ✅ (2026-05-17)
- [x] `スタジアム>封印` → `ロック>スタジアム`（§B-8-6新設）: 2件（ダイオウドウ/イーユイ）
- [x] `スタジアム>参照` → `カード種別参照>スタジアム`（§B-28追加）: 22件
- [x] `スタジアム>トラッシュ` は Phase 35-1で既に `フィールド干渉>スタジアムトラッシュ`（§B-6-3）に移行済み
- [x] `スタジアム` 親タグを `tag_cards.mjs` §B-15ブロックから全削除、§B-15セクション廃止
- [x] §B-6-3ルールを §B-6 セクション直下に移動（`スタジアム` タグ除去）
- [x] GROUP_ORDER から `スタジアム`/`スタジアム>参照`/`スタジアム>封印` 削除、`ロック>スタジアム`/`カード種別参照>スタジアム` 追加
- [x] SECTION_MAP 同期
- [x] `card_tags.json` リビルド: 旧スタジアムタグ 0件確認
- [x] `group_categories_proposal.md` §B-8/§B-15/§B-28/タグ一覧 更新

### Phase 32-6: Phase 32 レビュー・廃止タグ全カード/Q&A 確認 ✅ (2026-05-17)
- [x] 廃止タグ（Phase 32-4廃止の独立参照タグ群12種・Phase 32-2廃止のロックタグ等）が `card_tags.json` / `qa_entry_tags.json` に残存しないことを確認（0件）
- [x] `サーチ>スタジアム`・`サーチ>ポケモンのどうぐ`（Phase 31-9追加）が GROUP_ORDER / SECTION_MAP に未追加であることを発見・修正
- [x] `tag_cards.mjs` GROUP_ORDER に `サーチ>スタジアム`・`サーチ>ポケモンのどうぐ` 追加、SECTION_MAP に `§B-1` エントリ追加
- [x] `card_tags.json` / `qa_entry_tags.json` / `qa_index.json` リビルド
- [x] フロントエンドビルド確認（エラーなし）
- [x] `group_categories_proposal.md` §B-1 タグ一覧を現行タグ体系（ドロー/サーチ/トラッシュ回収 分離後）に更新・`サーチ>スタジアム` 27件・`サーチ>ポケモンのどうぐ` 24件 追記

### Phase 32-5: ポケモンのどうぐ整理 — >参照サブタグ新設・参照系カード移行 ✅ (2026-05-17)
- [x] `カード種別参照>ポケモンのどうぐ` (158件) のうち「装着有無・数を条件とする参照系カード」10ユニーク・14バリアントを特定
  - 「がついているなら」型（5件: ダイノーズ/ゲノセクト/コバルオン/ワルビアルex/オンバーン）
  - 「の数×」型（5件: ロトム×4形態/ドータクン）
- [x] `tag_cards.mjs` §B-30 新規ルール追加（`ポケモンのどうぐ>参照`）、`カード種別参照>ポケモンのどうぐ` 条件を絞り込み
- [x] `tag_qa_entries.mjs` 同パターン追加
- [x] GROUP_ORDER / SECTION_MAP に §B-30 エントリ追加
- [x] リビルド後: `ポケモンのどうぐ>参照` 14件新設 / `カード種別参照>ポケモンのどうぐ` 158件 → 144件
- [x] `group_categories_proposal.md` §B-30 節追加・§B-28 件数更新・タグ一覧更新

### Phase 31-9: サーチ>スタジアム アクロマの執念追加・漏れ補完 ✅ (2026-05-17)
- [x] `アクロマの執念`（45934/46060/46825）が `サーチ>スタジアム` に未タグであることを確認（`サーチ>エネルギー` は付与済み）
- [x] `シークレットボックス`（45783）が全 `サーチ` サブタグ漏れであることを確認（グッズ/ポケモンのどうぐ/サポート/スタジアム 4種同時サーチ）
- [x] 原因: アクロマの執念テキスト「スタジアムとエネルギーを」（6文字）が `.{0,5}` 制限を超過; シークレットボックスは `「スタジアム」` 形式が既存 `.{0,5}スタジアム.{0,5}を` にマッチしない
- [x] `tag_cards.mjs` §B-1-S2/S3/S3b/S3c にパターン追加: `スタジアム.{0,5}を` → `.{0,10}を`, 「グッズ/サポート/スタジアム/ポケモンのどうぐ」引用形式の新パターン追加
- [x] リビルド後: `サーチ>スタジアム` 23件 → 27件（アクロマの執念×3・シークレットボックス×1 追加）

### Phase 31-7: トラッシュ回収>山札 漏れ補完 ✅ (2026-05-17)
- [x] `せいなるはい`（4バリアント: 30304/47351/48672/50069）が `トラッシュ回収>山札` に未タグであることを確認
- [x] 旧カード(30304)は「山札にもどす」、新カード(47351/48672/50069)は「山札にもどして切る」と2パターンあることを特定
- [x] `tag_cards.mjs` §B-1-T3 に `/トラッシュから.{0,10}ポケモン.{0,60}(?:山札にもどす|山札にもどして切る)/` パターン追加
- [x] リビルド後: `トラッシュ回収>山札` 14件 → 18件（エネルギーリサイクル×12・ウパー・大漁ネット・**せいなるはい×4** ）

### Phase 28-7: Phase 28 レビュー・廃止タグ全カード/Q&A 確認 ✅ (2026-05-17)
- [x] 廃止タグ（`ワザロック`・`手札干渉>手札トラッシュ`・`手札干渉>手札参照`・`進化加速>山札から`・`特性無効`・`回復>複数回復`）が `card_tags.json` / `qa_entry_tags.json` に残存しないことを確認
- [x] `qa_entry_tags.json` に `進化加速>山札から` が4件残存していたため `tag_qa_entries.mjs` から削除してリビルド
- [x] `qa_index.json` リビルド・フロントエンドビルド確認（エラーなし）

### Phase 32-4: カード種別参照タグ新設 ✅ (2026-05-16)
- [x] §B-28 参照系独立タグ（`ポケモンex参照`・`テラスタル参照`・`ルール持ち参照`・`メガシンカex参照`・`ポケモンのどうぐ参照`・`特殊エネルギー参照`・`古代参照`・`未来参照`・`参照 たねポケモン`・`参照 1進化ポケモン`・`参照 2進化ポケモン`・`ポケモンのどうぐ>トラッシュ`）を廃止
- [x] 新親タグ `カード種別参照` + サブタグ12種（`>ポケモンex` 85件・`>テラスタル` 46件・`>ルール持ち` 29件・`>メガシンカex` 20件・`>古代` 16件・`>未来` 26件・`>たねポケモン` 240件・`>1進化ポケモン` 11件・`>2進化ポケモン` 100件・`>ポケモンのどうぐ` 158件・`>どうぐトラッシュ` 18件・`>特殊エネルギー` 39件）に統合
- [x] `tag_cards.mjs` / `tag_qa_entries.mjs` / GROUP_ORDER / SECTION_MAP 同期
- [x] `card_tags.json` / `qa_entry_tags.json` / `qa_index.json` リビルド
- [x] `group_categories_proposal.md` §B-28 節新設・サマリー・タグ一覧更新

### Phase 32-3: 特殊状態関連タグ新設 ✅ (2026-05-16)
- [x] `特殊状態>耐性` 新設: 特殊状態にならない効果カード（バブル水エネルギー・お祭り会場・古びた化石5種、計10件）
- [x] `特殊状態>参照` 新設: 特殊状態を条件とする効果カード（ウネルミナモex・モロバレル・ムウマージ・ユレイドル等、計14件）
- [x] 旧ルール（`特殊エネルギー` 限定 `特殊状態にならない` チェック・`にならず`バグ）を廃止し汎用パターンに置換
- [x] `group_categories_proposal.md` §B-2-6/7 節追加・サマリー更新
- [x] `card_tags.json` リビルド

## Archive

### Phase 1: Data Quality ✅
- [x] Create and run `harvest_ids.js`
- [x] Run `scrape_details.js` (20,448/20,460)
- [x] Create `normalize_cards.js` → `master_cards.json` / `card_variants.json`

### Phase 2: Data Fixes ✅
- [x] Duplicate card display fix (e.g. ふうせん). Output: `docs/duplicate_analysis.md`

### Phase 3: Search Improvements ✅
- [x] Fuzzy kana search (katakana↔hiragana normalization) — already implemented

### Phase 4a: Group Discovery ✅
- [x] Analyze card texts → `docs/group_categories_proposal.md`
- [x] **USER REVIEW** — All groups approved 2026-04-05

### Phase 4b: Tagging Implementation ✅
- [x] `scripts/tag_cards.mjs` → `data/card_tags.json`, `docs/tagging_stats.md`
  - 5,112 cards processed; 2,623 tagged (51.3%)

### Phase 4c: Group Search UI ✅
- [x] Tag filter panel in `CardSearch.tsx` (hierarchical, AND logic, violet chips)

### Phase 5a: Q&A Data Collection ✅
- [x] Scrape official FAQ → `data/qa_entries.json` (845 entries, 475 unique cards)
- [x] Competitive analysis → `docs/pnote_comparison.md`

### Phase 5b: Q&A Mapping ✅
- [x] `data/qa_card_map.json` + `data/qa_index.json` (55.8% coverage: 2,855/5,112 cards)

### Phase 5c: Q&A Display ✅
- [x] Q&A section in `CardModal.tsx` (directQA + relatedQA with reason labels)
  - Uses `qa_entries.json` + `qa_index.json`. `qa_card_map.json` is unused/gitignored.

### Phase 5d: Cross-Group Q&A Inference — DEFERRED
- [ ] 保留: 類似グループのQ&Aから暗黙的に裁定を推測する機能。具体例が出たら設計。

### Phase 5e: Q&A Coverage Improvement — FUTURE CANDIDATE
- [ ] 将来候補: カバレッジ55.8%→改善。Phase 5c〜7完了後に着手。

### Phase 6: UI Improvements ✅
- [x] Mobile responsive redesign (375px / 768px, 44px touch targets)
- [x] Multi-card comparison view (ComparisonTray + ComparisonModal, max 4 cards)

### Phase 6: Code Quality Fixes ✅ (2026-03-25)
- [x] Fix body.overflow conflict → `useBodyScrollLock.ts` hook (ref-counting)
- [x] Guard ComparisonModal minWidth for 1-card edge case

### Phase 6b: Tag Search Self-Check ✅
- [x] 31 top-level groups verified. Critical: `特性無効` 78% FP, `手札シャッフル` 50% mislabeled. Output: `docs/tag_accuracy_report.md`

### Phase 6c: Same-Name Different-Card Bug Fix ✅
- [x] normalize_cards.js: add attack+ability fingerprint to key. Masters: 1,555 → 1,774 (+219)
- [x] Regenerate `card_tags.json`
- [x] Rebuild `qa_index.json` (2,855 cards, 911 directQA, 111,508 relatedQA)
- [x] Generate `docs/split_cards_review.md` (355 groups, ~18,900 lines)

### Phase 6d: DB Integrity Self-Check ✅
- [x] All 5 checks passed (0 issues). Output: `docs/db_integrity_report.md`

### Phase 6e: Tag Bug Fixes ✅
- [x] Fix 3 known bugs: `特性無効` FP, `手札シャッフル` conflation, `スタジアム>参照` negative condition
- [x] Full tag accuracy LLM review — 6 systemic fixes, +24 cards tagged. Output: `docs/tag_review_llm_report.md`

### Phase 6f: Tag Coverage Expansion ✅
- [x] §B-18 rename → `特殊連動` + ロケット団 sub-tag (144 cards)
- [x] Name-based tagging for 11 Stadiums + 3 Special Energies
- [x] `キャラクター連動` category (§B-23, 400 cards, 4 new prefixes added)

### Phase 6g: Exhaustive Split Card Tag Verification ✅ (11 batches, 355 groups)
- [x] 6g-1〜6g-11 全355グループ検証完了。最終サマリー: `docs/split_cards_exhaustive_report.md`

### Phase 6h: Known Tag Pattern Fixes ✅
- [x] §B-17-1: テラスタル-on-bench conditional damage (13 cards newly tagged)
- [x] §3-4 手札参照: 3 missing cards added (バリヤード, フーディン×2)

### Phase 6i: Tag Bug Fixes ✅ (2026-04-09)
- [x] Split `ダメージ軽減` → `軽減` (104) / `無効` (99)
- [x] Special Energy effect tagging (32 cards already covered; added rule-text patterns)
- [x] Add `ダメージ操作>抵抗無視` sub-tag §B-24 (36 cards)
- [x] Fix missing `グッズロック` on ブルンゲルex

### Phase 6j: Performance & Refactoring ✅ (2026-04-12)
- [x] `useDeferredValue` — already implemented
- [x] `tag_cards.mjs` declarative rule engine refactor (bit-for-bit identical output verified)

### Phase 6k: Trainer Card Text Investigation & Fix ✅
- [x] 6k-1 調査 → `docs/trainer_text_investigation.md`
- [x] 6k-2 修正 → バトルコロシアムに `無効>ベンチへのワザダメージ` タグ確認

### Phase 6l: Data Corruption Investigation & Fix ✅
- [x] 6l-1 調査 → `docs/data_corruption_report.md`
- [x] 6l-2 再スクレイプ → normalize → tag_cards → build_qa_index 再実行

### Phase 6m: ダメージ軽減タグ再構築 ✅
- [x] 6m-1 新タグ体系導入: `軽減`(無条件/exVGXから/ベンチへのダメージ/その他条件付き), `無効`(ベンチへのワザダメージ/ベンチへの効果とダメージ/ワザの効果のみ/ダメカン配置/全体/条件付きその他)

### Phase 6n: Q&A タグ付けシステム ✅
- [x] 6n-1 `scripts/tag_qa_entries.mjs` → `data/qa_entry_tags.json`
- [x] 6n-2 `build_qa_index.mjs` 更新 → relatedQA をサブタグ完全一致に変更
- [x] 6n-3 `CardModal.tsx` → relatedQA ラベルをサブタグ表示に変更
- [x] 6n-4 検証 → マシマシラ・ロック闘エネルギー PASS。`docs/qa_tag_verification.md`

### Phase 7: Competitive Analysis ✅
- [x] `docs/pnote_comparison.md` — pnote DNS dead。6競合比較済み。差別化ポイント確認済み。

---


- [x] **7-1 ID収集**: `node scripts/ptcg_crawler/harvest_ids.js` を実行し、`data/card_ids.json` を最新化する。実行前後の件数差分をログに出力する。 #claude/queue
> [!success] 2026-04-18 — **7-1 ID収集 完了**

- [x] **7-2 詳細スクレイプ**: `node scripts/ptcg_crawler/scrape_details.js` を実行し、新カードの詳細を `data/card_details.json` に追記する（差分処理済みのため既存カードはスキップされる）。完了後に新規追加件数を報告する。 #claude/queue
> [!success] 2026-04-18 — 完了しました。

- [x] **7-3 正規化**: `node scripts/ptcg_crawler/normalize_cards.js` を実行し、`data/master_cards.json` と `data/card_variants.json` を更新する。更新前後の master_cards・card_variants の件数差分を報告する。 #claude/queue
> [!success] 2026-04-18 — 正規化を実行しました。結果は以下の通りです。

- [x] **7-4 タグ付け**: `node scripts/tag_cards.mjs` を実行し、新カードへのタグ付けを行う。その後 `data/card_tags.json` の「タグ付き件数 / 全体件数」を報告する。もし新しいカード種別や能力タイプが増えていてタグルールでカバーできていない場合、`scripts/tag_cards.mjs` にルールを追加してから再実行する。 #claude/queue
> [!success] 2026-04-18 — タグ付け完了。

- [x] **7-5 QAインデックス再ビルド**: `node scripts/build_qa_index.mjs` を実行し、`data/qa_index.json` を最新化する。relatedQA ありカード数の変化を報告する。 #claude/queue
> [!success] 2026-04-18 — `qa_index.json` を再ビルドしました。

- [x] **6o-1 §2 相手入れ替え (L81-101)**: C-04/C-05/バウンスのレビュー。`atk`のみ検査か確認し、特性版があれば `all` に変更検討。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-18 — ## §2 相手入れ替え レビュー結果

- [x] **6o-2 §3 手札干渉 (L103-144)**: トラッシュ/山札戻し (L103-129) と手札参照 (L130-144) のレビュー。乗算形式・パターン網羅性に注目。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-18 — レビュー完了。乗算形式・網羅性の観点で確認結果。

- [x] **6o-3 §4-1 ベンチ狙撃>ダメージ型 (L147-151)**: `BENCH_BRACKET` 正規表現の文字種（全角・半角括弧）の網羅性を確認。`〔〕` `［］` 以外の表現がないか調査。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-18 — 調査完了。報告します。

- [x] **6o-4 §4-3 ベンチ狙撃>移動型 (L173-177)**: 「のせ替える」以外の表現（「移す」「動かす」等）がないか調査。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-18 — ## §4-3 ベンチ狙撃>移動型 調査結果

- [x] **6o-5 §5 エネ加速 (L180-216)**: §5-A 山札→手札 (L180-183), §5-C 手札→ポケモン (L193-205), §5-D トラッシュ→ポケモン (L206-216) を一括レビュー。`{0,15}` → `{0,20}` 等の調整余地、隣接パターン漏れに注目。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-18 — ## §5 エネ加速 一括レビュー結果

- [x] **6o-6 §B-1 ドロー>サーチ系 (L228-267)**: ポケモンサーチ (L228-241), トレーナーズサーチ (L242-253), トラッシュ回収 (L254-267) を一括レビュー。「手札に加える」以外の表現（「使える」「持ってくる」等）とカード種別漏れを確認。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-18 — ## §B-1 ドロー>サーチ系 レビュー結果

- [x] **6o-7 §B-2 特殊状態付与 5種 (L270-279)**: 「どく/やけど/こんらん/ねむり/マヒ」以外の記述形式（「〜にする」のバリエーション等）がないか調査。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-18 — ## 調査結果: §B-2 特殊状態付与 パターン漏れ

- [x] **6o-8 §B-4 ダメカン操作 (L298-303)**: 「のせ替える」以外のダメカン操作表現がないか調査。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — ## §B-4 ダメカン操作 調査結果

- [x] **6o-9 §B-5 エネ移動>つけ替え (L305-310)**: 隣接制約（`{1,N}` → `{0,N}` 緩和の余地）をレビュー。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — ## §B-5 エネ移動>つけ替え レビュー結果

- [x] **6o-10 §B-6 エネ除去 (L312-323)**: 検査対象（`atk` / `abl` / `all` のどれを使っているか）の妥当性を確認。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — ## §B-6 エネ除去 スコープ検証結果

- [x] **6o-11 §B-7 ワザロック/にげられない (L326-341)**: 「にげられない」が全角表現で書かれるバリエーションがないか調査。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — 調査完了。結論: パッチ不要。

- [x] **6o-12 §B-8 グッズサポートロック (L343-358)**: 文字種「」有無は対応済み、追加パターン（「使えない」のバリエーション等）がないか調査。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — ## §B-8 グッズサポートロック 調査結果

- [x] **6o-13 §B-9 軽減 (L360-396)**: ルールテキスト vs 特性テキストの検査対象を確認。`rul` / `abl` / `all` の使い分けの妥当性を評価。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — ## Phase 6o-13 §B-9 軽減 検査対象の評価

- [x] **6o-14 §B-10 カウンター効果 (L443-446)**: 「ダメージを受けたとき」以外の発動条件表現がないか調査。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — ---

- [x] **6o-15 §B-11 自傷 (L448-461)**: 「このポケモンにも〇ダメージ」以外の自傷パターン（「自分にも〜」等）がないか調査。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — **調査・修正結果:**

- [x] **6o-16 §B-12 ベンチ展開 (L463-484)**: 「ベンチに出す」以外の表現（「ベンチに置く」「ベンチに加える」等）がないか調査。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — 分析完了。結果を整理します：

- [x] **6o-17 §B-13 進化加速 (L486-505)**: 隣接制約（`{1,N}` → `{0,N}` 緩和）の余地をレビュー。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — 結果が揃いました。レビューをまとめます。

- [x] **6o-18 §B-14/15/16 山札破壊・スタジアム・サイド操作 (L507-526)**: 3カテゴリ一括でパターン漏れ確認。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — 完了。結果まとめ：

- [x] **6o-19 §B-17 条件ダメージ (L528-587)**: 最も複雑なルール群。場参照/相手参照/コイン可変の網羅性を重点的にレビュー。サンプルカードを多めに抽出して確認。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — 十分なデータが揃いました。レビュー結果をまとめます。

- [x] **6o-20 §B-18 特殊連動 (L589-625)**: 新キャラ・新セット追加でルール漏れがないか確認。最新のカードプール（Phase 7-1〜7-4 で追加分含む）を中心に調査。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — tagging_stats.md はすでに最新（215/14/24/28/147）でした。更新不要です。

- [x] **6o-21 §B-22 特性無効 (L666-688)**: 境界ケース（特定条件下のみ無効化等）の精度を確認。誤検出・漏れ両方をレビュー。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — 分析完了。レポートをまとめます。

- [x] **6o-22 §B-26 ベンチ保護 (L709-734)**: `abl` と `rul` 両方をチェックしているか確認。漏れていれば `all` への変更を検討。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — 正常に動作しています。変更の要約：

- [x] **6o-23 §B-24 ダメージ操作>抵抗無視 (L737-745)**: 検査対象が `atk` のみで適切か確認。特性版があるか調査。手順は Phase 6o 共通手順に従う。 #claude/queue
> [!success] 2026-04-19 — 完了しました。

- [x] **6o-24 全体検証**: 6o-1〜6o-23 完了後、`node scripts/tag_cards.mjs` を最終実行し、`docs/tagging_stats.md` を生成。修正前後のタグ付き件数の総合差分を `docs/tag_review_phase6o_summary.md` にまとめて報告。 #claude/queue
> [!success] 2026-04-19 — Phase 6o 全体検証完了です。結果は以下の通りです。

- [x] **10-1** AND/OR タグトグル実装（CardSearch.tsx） #claude/queue model:sonnet
> [!success] 2026-04-23 — 実装完了です。変更内容をまとめます：

- [x] **10-2** タグ「にげロック」分離（tag_cards.mjs + frontend） #claude/queue model:sonnet
> [!success] 2026-04-24 — 完了です。変更サマリー：

- [x] **10-3** エネルギーコスト検索実装（build_cost_index.mjs + CardSearch.tsx） #claude/queue model:sonnet
> [!success] 2026-04-24 — 実装完了です。変更内容のまとめ:

- [x] **10-4** Phase 10 レビュー・修正・commit/push #claude/queue model:sonnet
> [!success] 2026-04-24 — commit & push 完了です。

- [x] **11-1** cost_index 構造改修 + エネフィルター AND修正（build_cost_index.mjs + CardSearch.tsx） #claude/queue model:sonnet
> [!success] 2026-04-26 — 完了しました。変更の概要:
> [!failure] 2026-04-25 — Failed to authenticate. API Error: 401 {"type":"error","error":{"type":"authentication_error","message":"Invalid auth...
> [!failure] 2026-04-25 — Failed to authenticate. API Error: 401 {"type":"error","error":{"type":"authentication_error","message":"Invalid auth...

- [x] **11-2** 詳細フィルターパネル整理（名称変更・テクニック廃止・全解除追加） #claude/queue model:sonnet
> [!success] 2026-04-26 — 変更内容が正しく適用されています。完了です。
> [!failure] 2026-04-25 — Failed to authenticate. API Error: 401 {"type":"error","error":{"type":"authentication_error","message":"Invalid auth...
> [!failure] 2026-04-25 — Failed to authenticate. API Error: 401 {"type":"error","error":{"type":"authentication_error","message":"Invalid auth...

- [x] **11-3** タイプ・弱点・抵抗力の日本語表示（CardSearch + CardModal） #claude/queue model:sonnet
> [!success] 2026-04-26 — 型エラーなし。変更内容をまとめて確認します。
> [!failure] 2026-04-25 — Failed to authenticate. API Error: 401 {"type":"error","error":{"type":"authentication_error","message":"Invalid auth...
> [!failure] 2026-04-25 — Failed to authenticate. API Error: 401 {"type":"error","error":{"type":"authentication_error","message":"Invalid auth...

- [x] **11-4** 画像読み込み失敗時フォールバック（CardSearch + CardModal） #claude/queue model:sonnet
> [!success] 2026-04-26 — 型エラーなし。変更内容まとめ：

- [x] **11-5** Phase 11 レビュー・修正・commit/push #claude/queue model:sonnet
> [!success] 2026-04-26 — コミット・プッシュ完了です。

- [x] **12-1** タグ50音順ソート（CardSearch.tsx） #claude/queue model:sonnet
> [!success] 2026-04-25 — 親タグ（line 160）とサブタグ（line 616）の両方を `localeCompare('ja')` に変更しました。Unicode コードポイント順から日本語の50音順ソートになります。

- [x] **12-2** 展開中タグの視覚強調（CardSearch.tsx） #claude/queue model:sonnet
> [!success] 2026-04-25 — 変更内容：

- [x] **12-3** タグ件数バッジ表示（CardSearch.tsx） #claude/queue model:sonnet
> [!success] 2026-04-25 — 完了しました。変更内容：

- [x] **12-4** Phase 12 レビュー・commit/push #claude/queue model:sonnet
> [!success] 2026-04-25 — 完了です。変更内容のサマリー：

- [x] **13-1** マスターカードへのタグ集約（CardSearch.tsx） #claude/queue model:sonnet
> [!success] 2026-04-27 — 完了しました。変更内容のまとめです：

- [x] **13-2** タグ件数バッジをバリアント数ベースに修正（CardSearch.tsx） #claude/queue model:sonnet
> [!success] 2026-04-27 — 完了しました。修正内容：

- [x] **13-3** Phase 13 レビュー・commit/push #claude/queue model:sonnet
> [!success] 2026-04-27 — 完了です。

- [x] **14-1** CardModal QA表示実装 #claude/queue model:sonnet
> [!success] 2026-04-28 — 完了です。変更点のまとめ：

- [x] **14-2** Phase 14 レビュー・commit/push #claude/queue model:sonnet
> [!success] 2026-04-28 — Phase 14 レビュー完了。変更のまとめ：

- [x] **15-1** 上位バリアント表示（CardModal） #claude/queue model:sonnet
> [!success] 2026-04-29 — 完了しました。変更内容：

- [x] **15-2** QAセクション改善（CardModal） #claude/queue model:sonnet
> [!success] 2026-04-29 — 完了です。変更内容のまとめ：

- [x] **15-3** バリアント全件モーダル（CardModal） #claude/queue model:sonnet
> [!success] 2026-04-29 — 完了です。

- [x] **15-4** Phase 15 レビュー・commit/push #claude/queue model:sonnet
> [!success] 2026-04-29 — 完了。コミット・プッシュしました。

- [x] **6n-1 調査・設計**: `data/card_details.json` から「山札を引く」系テキストを持つカードをサンプル抽出し、現行 `ドロー>枚数固定` `ドロー>手札補充` `ドロー>コイン可変` の3タグで完全カバーできているか確認する。カバーできていないパターンを列挙し、追加・修正が必要なタグルール案を `docs/` に出力する（新規ファイル名は任意）。 #claude/queue
> [!success] 2026-04-30 — 調査結果をまとめました。

- [x] **6n-2 実装**: 6n-1 の調査結果ファイルを読み、提案されたタグルール修正を `scripts/tag_cards.mjs` に適用する。適用後 `node scripts/tag_cards.mjs` を実行し、before/after の `ドロー` 系タグ付き件数差分（`git diff data/card_tags.json | grep '^[+-]' | grep -c '"draw'` 等）を確認して誤検出がないことを検証する。問題なければ `git add data/card_tags.json scripts/tag_cards.mjs && git commit && git push` する。 #claude/queue
> [!success] 2026-04-30 — 完了しました。変更内容のまとめ：

- [x] **6m-1** 「たねポケモン」「1進化」「2進化」「ex」「V/VMAX/VSTAR」「GX」のカードカテゴリタグ追加（tag_cards.mjs + card_tags.json + git push）。`scripts/tag_cards.mjs` に新規タグルールセクション「カードカテゴリ」を追加し、以下のタグを定義すること: `カードカテゴリ>たねポケモン`（`supertype === "Pokémon"` かつ `subtypes` に `"Basic"` を含む）、`カードカテゴリ>1進化`（`subtypes` に `"Stage 1"` を含む）、`カードカテゴリ>2進化`（`subtypes` に `"Stage 2"` を含む）、`カードカテゴリ>ex`（`name` が `/\sex$|\sex\s/i` にマッチ）、`カードカテゴリ>V/VMAX/VSTAR`（`subtypes` に `"V"`, `"VMAX"`, `"VSTAR"` のいずれかを含む）、`カードカテゴリ>GX`（`subtypes` に `"GX"` を含む）。実行後に各タグの件数を報告し、`git add data/card_tags.json scripts/tag_cards.mjs && git commit -m "Add card category tags" && git push`。 #claude/queue model:sonnet
> [!success] 2026-04-30 — 完了しました。変更内容の詳細：

- [x] **15.5-A** トレーナーカード重複統合（normalize_cards.js の createMasterKey 修正 + pipeline 再実行）。`scripts/ptcg_crawler/normalize_cards.js` の `createMasterKey(card)` を修正: `hp === null` かつ `attacks.length === 0` かつ `abilities.length === 0` の場合は `rules` を key に含めず `${card.name}_none_none_none_none_none` を返す。修正後 `node scripts/ptcg_crawler/normalize_cards.js` → `node scripts/tag_cards.mjs` → `node scripts/build_qa_index.mjs` を順に実行。完了後に master_cards.json の件数変化、`きずぐすり`・`ふしぎなアメ` が各1件になっているかを確認し、`git add` → `git commit` → `git push` して報告する。 #claude/queue model:sonnet
> [!success] 2026-05-01 — 完了です。

- [x] **15.5-B** CardModal バリアントサムネイル `sm:min-h-0` 追加（CardModal.tsx）。`frontend/app/components/CardModal.tsx` のバリアントサムネイル container div（`className="px-2 pb-2 sm:p-4 bg-gray-950 sm:flex-grow sm:overflow-y-auto custom-scrollbar border-t border-gray-800/40 sm:border-t-0 overflow-hidden"`）に `sm:min-h-0` を追加する。`npm run build` → `git commit` → `git push`。完了後に変更箇所と push 結果を報告。 #claude/queue model:sonnet
> [!success] 2026-05-01 — 完了。

- [x] **15.5-C** variantUtils.ts `genRank` を修正して SWSH era の全set_code（S系+MC/MP系）を rank 5 に。`frontend/lib/variantUtils.ts` の `genRank()` を修正: `/^SV/.test` → rank 6、`/^SM/.test` → rank 4、`/^S/.test` → rank 5（SV/SM 以外の S系全部）、`/^XY/.test` → rank 3、`/^BW/.test` → rank 2、`/^MC|^MP/.test` → rank 5、その他 → rank 1 の順で判定する。`npm run build` → `git commit` → `git push`。変更後 `きずぐすり` のモーダルで `スタートデッキ100 バトルコレクション` バリアントのサムネイルが正しく表示されることを確認して報告。 #claude/queue model:sonnet
> [!success] 2026-05-01 — 完了。変更内容のまとめ:

- [x] **18-1** 「」語彙抽出・キュレーション — `data/official_classifications.json` 生成済み

- [x] **18-3** `scripts/build_official_class_index.mjs` 作成・実行 — `data/official_class_index.json` 生成済み

- [x] **21-1** `scripts/fetch_deck_lists.mjs` を新規作成して実行。limitlesstcg から Standard（`?format=standard&time=2025-2026`）と Standard JP（`?format=standard-jp&time=2025-2026`）の全ページをクロールし、各デッキリストページ（`/decks/list/{id}`）からカード情報（name, setCode, number, count）と対戦情報（id, archetype, tournament, date, format）を取得する。ページネーション全ページを処理すること（`/decks/lists?format=...&time=2025-2026&page=N`）。レートリミット: 1リクエスト/秒以上の間隔を空ける。出力: `data/deck_lists_raw.json`（形式: `[{ id, archetype, tournament, date, format, cards: [{name, setCode, number, count}] }]`）。取得デッキ数と重複除外後のユニークアーキタイプ数を報告。 #claude/queue model:sonnet
> [!success] 2026-05-04 — スクリプトは正常稼働中です。状況をまとめます：

- [x] **21-2** `scripts/build_en_jp_card_map.mjs` と `data/set_name_map.json` を新規作成して実行。`data/deck_lists_raw.json` からユニークなENカードID（例: `TWM/130`）を抽出し、limitlesstcg の各カードページ（`https://limitlesstcg.com/cards/{SET}/{NUM}`）を取得してJP Printsセクション（セット名と番号）を抽出する。`data/card_variants.json` に存在する set_code の一覧（`jq '[.[].set_code] | unique'` 等で確認）を参照しながら、limitlesstcg JP Prints のセット名（例: "Mask of Change"）→ こちらのDB set_code（例: "SV6"）の対応表を `data/set_name_map.json` にハードコード。H/I/J世代（SV系 set_code）のみ対象。レートリミット: 1リクエスト/秒以上。出力: `data/en_jp_card_map.json`（形式: `{ "TWM/130": { "jpSet": "SV6", "jpNumber": "081" }, ... }`）。マッピング成功率・未対応カードリストを報告。 ← 21-1完了後に #claude/queue を付与
> [!success] 2026-05-04 — モニターのタイムアウトは問題ありません。スクリプトはすでに正常終了済みです（exit code 0）。

- [x] **21-3** `scripts/build_deck_index.mjs` を新規作成して実行。`data/deck_lists_raw.json` + `data/en_jp_card_map.json` + `data/card_variants.json` + `data/master_cards.json` を使い、ENカードID → JP set_code/number → card_variants の master_id を解決する。アーキタイプ別に各カードの採用デッキ数を集計し（同アーキタイプの全デッキ中何件に入っているか）、採用率（share = count/total × 100）を算出。出力: `data/deck_index.json`（形式: `{ "<master_id>": [{ "archetype": "Dragapult ex", "count": 145, "total": 180, "share": 80.6, "url": "https://limitlesstcg.com/decks/{id}" }], ... }`）。集計結果（対応 master_id 数・未解決カード数・トップアーキタイプ一覧）を報告。 ← 21-2完了後に #claude/queue を付与
> [!success] 2026-05-04 — 正常です。集計結果を報告します。

- [x] **5e-1 調査**: `data/qa_card_map.json` のカバレッジ未達44.2%（約2,257枚）を分析する。`data/card_tags.json` でタグ付きだが `qa_index.json` に relatedQA がゼロのカードを特定し、なぜマッチしないかを調べる（タグはあるがQ&Aエントリー側にそのタグが付いていない、タグ体系の粒度ミスマッチ等）。改善できそうなパターンを列挙し、対応方針を `docs/qa_coverage_analysis.md` に出力する。 #claude/queue
> [!success] 2026-04-14 — `docs/qa_coverage_analysis.md` を出力しました。分析結果のサマリーです。

- [x] **5e-2 修正**: `docs/qa_coverage_analysis.md` を読み、以下を実施する。（1）`scripts/tag_qa_entries.mjs` に不足しているサブタグルールを追加する（優先: `条件ダメージ>場参照`, `ダメージ操作>抵抗無視`, `ポケモン入れ替え>ワザ` 等、同ファイルの分析結果に基づく）。（2）`tag_cards.mjs` でカード側にサブタグが欠落しているパターンがあれば補完する。（3）`node scripts/tag_qa_entries.mjs` → `node scripts/build_qa_index.mjs` を順に再実行し `qa_entry_tags.json` と `qa_index.json` を再生成する。（4）修正前後のカバレッジ（relatedQA あり枚数）を比較し、結果を `docs/qa_coverage_analysis.md` に追記する。 #claude/queue
> [!success] 2026-04-15 — 完了しました。結果をまとめます。

---

## Unreported (Phase 21)

- [x] **21-4** `frontend/app/components/CardModal.tsx` の右パネルに「採用デッキ」セクションを追加。`data/deck_index.json` を fetch し、表示中カードの master_id に対応するアーキタイプ上位5件を採用率降順で表示する。各行: アーキタイプ名・採用率バー（%）・limitlesstcg リンクボタン。採用デッキがない場合はセクション自体を非表示。表示位置は Q&A セクションの上。`npm run build` → `git add` → `git commit` → `git push`。**採用率バーの仕様**: バー幅は絶対値（100%=満幅）ではなく、表示中の上位5件の最高値を満幅とする相対スケール（例: 最高82%なら82%のバーが満幅、64%は64/82≈78%幅）。これにより差異が視覚的に強調される。
> [!success] 2026-05-05 — 完了。変更点は1箇所のみ — バー幅の計算を `Math.min(deck.share, 100)%` から `(deck.share / maxShare) * 100%` に変更しました。上位5件の最高採用率が常に満幅になり、差異...

- [x] **21-5** Phase 21 総合レビュー
> [!success] 2026-05-08 — レビュー完了。ビルド正常。データ整合性OK（orphaned keys 0件）。カバレッジ 360/1860 (19.4%) — EN→JPマッピング555件の制約上、想定内。「デッキ一覧」ラベルを「デッキ例」に修正（リンク先が1デッキのため）。

#### Phase 18-2（改）: tag_cards.mjs タグ体系刷新

**概要**: 廃止タグの削除と新規独自タグの追加を1タスクで実施。

**廃止**:
- `scripts/tag_cards.mjs` から §B-18（特殊連動）と §B-23（〜のポケモン/CHARACTER_PREFIXES）のセクションを削除
- `VALID_TAGS` から `特殊連動*` `〜のポケモン*` を削除

**新規追加（独自タグ・参照系）** — `card_tags.json` に追加。`official_class_index.json` とは別:
- `ポケモンex参照` — テキストに「ポケモンex」「ポケモンex・V」を含むカード
- `テラスタル参照` — テキストに「テラスタル」を含むカード
- `ルール持ち参照` — テキストに「ルールを持つポケモン」を含むカード
- `メガシンカex参照` — テキストに「メガシンカex」を含むカード
- `ポケモンのどうぐ参照` — テキストに「ポケモンのどうぐ」を含むカード
- `特殊エネルギー参照` — テキストに「特殊エネルギー」を含むカード
- `ACE SPEC参照` — テキストに「ACE SPEC」を含むカード
- `古代参照` — テキストに「古代」を含む（ハードコードリスト外のカード）
- `未来参照` — テキストに「未来」を含む（ハードコードリスト外のカード）
- `参照 たねポケモン` — テキストに「たねポケモン」を含むカード
- `参照 1進化ポケモン` — テキストに「1進化ポケモン」を含むカード
- `参照 2進化ポケモン` — テキストに「2進化ポケモン」を含むカード
- `どうぐトラッシュ` — 相手のポケモンのどうぐをトラッシュする効果を持つカード（チラーミィ、アズマオウ、シークレットボックス、カットロトム、メガトンブロアー、ロトム、Nのバチュル、怖いお兄さん、ペパーのホシガリス、オニスズメ、ヒートバーナー、ラッタ、メガドラミドロex）

**手順**:
1. 廃止セクション削除・VALID_TAGS更新
2. 新規タグのパターンマッチを追加・VALID_TAGS更新
3. `node scripts/tag_cards.mjs` 実行確認
4. `git add` → `git commit`（push は 18-5 でまとめて）
- [x] **18-2（改）** tag_cards.mjs タグ体系刷新（廃止＋新規追加）
> [!success] 2026-05-05 — 完了です。変更内容のまとめ：

#### Phase 18-4: フロントエンド公式分類フィルター実装

**概要**: `frontend/app/components/CardSearch.tsx` を改修。

**前提**: 18-2（改）完了後に着手。

**変更点**:
1. `data/official_class_index.json` を fetch で読み込む
2. 公式分類タグをフラットなチェックボックス/ボタン群として表示
   - 表示順（案）: ポケモンex / メガシンカex / テラスタル / ACE SPEC / ルールを持つポケモン / 古代 / 未来 / ロケット団 / Nのポケモン / ホップのポケモン / シロナのポケモン … / たねポケモン / 1進化ポケモン / 2進化ポケモン / グッズ / サポート / スタジアム / ポケモンのどうぐ / ワザマシン / 特殊エネルギー
3. 選択時は `official_class_index[タグ名]` のカード名リストでフィルタ（複数選択時は AND）
4. 既存の ex/テラスタル/ACE SPEC チェックボックスを廃止（公式分類フィルターに統合）
5. 独自タグパネルから `特殊連動` `〜のポケモン` カテゴリを削除
6. 独自タグ（ドロー、サーチ、エネ加速 等）はそのまま維持
7. カテゴリドロップダウン（ポケモン/グッズ等）は現状維持 — フラット化は Phase 20 で対応
8. **カラートークン定義（18-6 と共有）**: `frontend/app/lib/tagColors.ts` を新規作成し、公式分類・独自タグの色定数をエクスポート。CardSearch と CardModal 両方から import して使う。
   - 公式分類タグ: `bg-violet-100 text-violet-700 border-violet-300`（紫系 — 公式・権威的）
   - 独自タグ（親タグ）: `bg-amber-100 text-amber-700 border-amber-300`（橙系 — セマンティック）
   - 独自タグ（子タグ `>` 含む）: `bg-amber-50 text-amber-600 border-amber-200`（薄橙 — 詳細）
9. `npm run build` → commit
- [x] **18-4** フロントエンド公式分類フィルター実装（カラートークン定義含む）
> [!success] 2026-05-05 — 実装完了。変更の概要：

#### Phase 18-6: CardModal タグ表示

**概要**: カード詳細モーダル（`frontend/app/components/CardModal.tsx`）の右パネル上部にタグセクションを追加。

**前提**: 18-4 完了後（`frontend/app/lib/tagColors.ts` が存在すること）。

**データソース**:
- 公式分類タグ: `data/official_class_index.json` を fetch（キー=カード名 → `string[]`）
- 独自タグ: `data/card_tags.json` を fetch（`cardId` = `official_id`、同名カードは同タグ）
- lookup: `master_id` → `master_cards.json` の `name` → 両インデックスを引く。または新規 `/api/tags` エンドポイントを追加して `masterId` で返す（どちらでも可、実装しやすい方で）

**表示仕様**:
- 右パネルの最上部（採用デッキセクションより上）
- セクションタイトル「タグ」
- 公式分類タグ: `tagColors.ts` の公式色でバッジ表示
- 独自タグ: 親タグ（`>` なし）と子タグ（`>` あり）を `tagColors.ts` の独自色で分けて表示。テキストは `>` を含む完全形で表示（例: `エネ加速 / エネ加速>山札→手札`）
- タグが0件の場合はセクション非表示
- [x] **18-6** CardModal タグ表示実装（tagColors.ts 流用）
> [!success] 2026-05-05 — 実装完了です。変更の概要:

#### Phase 18-5: Phase 18 レビュー・修正・commit/push

**前提**: 18-6 完了後（Phase 18 全タスクの変更をまとめて push）。

**手順**:
1. `git diff HEAD` で全変更確認
2. 動作確認: 「シロナのポケモン」でシロナのガバイト等がヒットするか、「ロケット団」でポケモン・トレーナーズ両方ヒットするか、独自タグフィルターが引き続き動作するか
3. `npm run build` → `git add` → `git commit` → `git push`
- [x] **18-5** Phase 18 レビュー・修正・commit/push
> [!success] 2026-05-05 — 完了です。

#### Phase 18 後-A: 基本エネルギー言及カード独自タグ整理

- [x] **後-A** 基本エネルギー言及カードの独自タグ整理 — エネルギー加速等の既存タグへの漏れ補完
> [!success] 2026-05-06 — 後-A タスク完了。`scripts/tag_cards.mjs` 6箇所修正。対象142件/36ユニーク名。スキップ7名（既存タグ非対応）。最終件数: エネ加速>山札→手札 89, 山札→ポケモン 101, エネ移動>自分・場 46, トラッシュ回収>エネルギー 131, エネ除去>自己コスト 217（42→217, ソウブレイズ誤検知修正含む）。

#### Phase 18 後-B: グッズ/サポート/スタジアム参照タグ補完

- [x] **後-B** グッズ/サポート/スタジアム参照タグの全件漏れチェック・補完 #claude/queue
> [!success] 2026-05-07 — **後-B 完了。** 変更サマリー：

#### Phase 20-1: テキスト・ワザ検索UI廃止

**手順**:
1. `CardSearch.tsx` のテキスト検索入力フォーム・関連 state・フィルタロジックをコメントアウト（削除ではない）
2. `npm run build` → commit

- [x] **20-1** テキスト・ワザ検索UI廃止（コメントアウト） #claude/queue
> [!success] 2026-05-07 — 型エラーなし。`effectQuery` 変数はロジック内に残るため未使用警告も出ません。テキスト・ワザ検索の `<input>` をコメントアウトしました。フィルタロジックは `effectQuery` が常に `""` なのでノー...

#### Phase 20-2: スマホ版カード表示4枚/行

**手順**:
1. `CardSearch.tsx` のカードグリッドの responsive クラスを修正（デフォルト4列に）
2. `npm run build` → commit

- [x] **20-2** スマホ4枚/行表示 #claude/queue
> [!success] 2026-05-07 — スマホのデフォルト列数を 2 → 4 に変更しました。最大値も 4 → 6 に拡張しています（スライダーで1〜6列まで調整可能）。

#### Phase 20-3: カテゴリ・タイプのフラット化

**概要**: PC版でカテゴリ・タイプを公式フィルター内で弱点・抵抗力と同列に配置。

- [x] **20-3** カテゴリ・タイプのフラット化 #claude/queue
> [!success] 2026-05-08 — カテゴリ・タイプの `<select>` を主フィルターバーから削除し、公式フィルターパネル内にチップボタンとして移動。`officialFilterCount` に追加、全解除ボタンにリセット追加。モバイルトグルのバッジも整理（列数スライダー専用に）。

#### Phase 20-4: Phase 20 レビュー・修正・commit/push

- [x] **20-4** Phase 20 レビュー・修正・commit/push #claude/queue
> [!success] 2026-05-07 — 完了。Phase 20の3タスクをまとめてコミット・プッシュしました。

#### Phase 21-5: Phase 21 レビュー・修正・commit/push

- [x] **21-5** Phase 21 総合レビュー。`data/deck_index.json` でドラパルトex・カビゴンex 等メジャーカードが複数アーキタイプを持つことを確認。CardModal でアーキタイプが正しく表示されること・limitlesstcg リンクが正しいことを確認。採用デッキがないカード（例: 旧世代限定カード）でセクションが非表示になることを確認。`npm run build` → 問題あれば修正 → `git push`。 #claude/queue
> [!success] 2026-05-07 — **Phase 21 総合レビュー 結果**

#### Phase 22-1: variantUtils.ts — SAR/AR優先・プロモ除外廃止

`frontend/lib/variantUtils.ts` の `pickDefaultVariant` を以下の通り改修する。

**変更方針**: プロモ除外ルールを廃止し、全バリアントを対象に「世代優先 → レア優先順 → set_code降順」でソートする。

**新 RARITY_RANK**（小さいほど優先、未定義は 99）:
- SAR: 0, AR: 1, TR: 2, RR: 3, R: 4, U: 5, C: 6, "": 7, SR: 8, UR: 9, MA: 10, MUR: 11, BWR: 12

**削除するもの**:
- `nonPromo` フィルタとフォールバック（プロモ除外ロジック全体）
- `MAIN_RARITY` の Set 定義
- ソートの step (2)「メインパック × 低レア」判定

**新しいソート順（3ステップ）**:
1. `genRank(b.set_code) - genRank(a.set_code)`（世代降順）
2. `rarityRank(a.rarity) - rarityRank(b.rarity)`（レア優先順昇順）
3. `b.set_code.localeCompare(a.set_code, undefined, { numeric: true })`（set_code降順）

実装後 `npm run build` でエラーなし確認 → `git add frontend/lib/variantUtils.ts` → `git commit` → `git push`。

- [x] **22-1** `frontend/lib/variantUtils.ts` の `pickDefaultVariant` 改修（SAR/AR優先・プロモ除外廃止・ソート簡略化） #claude/queue model:sonnet
> [!success] 2026-05-09 — 完了。変更内容:

#### Phase 23-1: official_class_index を official_id ベースに変更

**背景**: 現在の `data/official_class_index.json` はカード名キー `{ "ゲッコウガex": ["テラスタル"] }` だが、同名でテラスタル版・非テラスタル版が混在するため正確な分類ができない。`official_id` キーに変更することで、各印刷物（バリアント）を正確にタグ付けできる。

**ビルドスクリプト `scripts/build_official_class_index.mjs` の改修**:
- 出力形式を `{ "45685": ["テラスタル", ...] }` (official_id → tags[]) に変更
- `card_details.json` には同一 official_id が複数行存在するため、タグ付け時に重複を除去すること
- 各メカニズムの official_id 対応:
  - `names`: 指定名のカードを全バリアント検索し、全 official_id にタグ付け
  - `nameWithAttack`: firstAttack が一致するバリアントのみの official_id にタグ付け（これが今回の修正の核心）
  - `prefix`, `cardKind`, `rulesContain`, `rulesNonEmpty`, `cardKindAndRules`: 全マッチカードの official_id にタグ付け
- 出力ファイル: `data/official_class_index.json`（形式変更）

**フロントエンドの修正（CardSearch.tsx, CardModal.tsx）**:
- フィルタ判定: master_id グループ内のいずれかの official_id がタグを持つ → ヒット（"ANY variant" ロジック）
- タグ表示（CardModal）: 表示バリアント（pickDefaultVariant の選択結果）の official_id で参照
- `data/official_class_index.json` を fetch する箇所のキー参照を更新

`node scripts/build_official_class_index.mjs` でビルド確認（件数が大きく変わっていないことを確認）。フロントエンドは `npm run build` でエラーなし確認。コミットはしない（23-3 でまとめてpush）。

- [x] **23-1** official_class_index を official_id ベースに変更（builder + frontend） #claude/queue
> [!success] 2026-05-09 — エラーなし。変更まとめ：
> - `build_official_class_index.mjs`: `card_variants.json` 読み込み追加、`masterToOids` マップ構築、`addTagsForMaster()` ヘルパー追加。全分類ルールで `addTag(master_id)` → `addTagsForMaster(master_id)` に変更。出力キーが `master_id` → `official_id`（数値文字列）に変更。バリアント数: 4637件。
> - `CardModal.tsx`: prop を `officialTags?: string[]` → `officialClassIndex?: OfficialClassIndex` に変更。タグ表示を `selectedVariant.official_id` でインデックス参照（IIFE使用）。
> - `CardSearch.tsx`: `officialClassMap` useMemo を `variantsMap` ベースで構築（master_id配下の全official_idのタグをunion）。CardModal呼び出しを `officialTags={...}` → `officialClassIndex={officialClassIndex}` に変更。

#### Phase 23-2: テラスタル/古代/未来 を official_id 確定リスト化

**前提**: 23-1 完了後。

**方針**: テラスタル・古代・未来はいずれも SV 世代で完結したメカニズムであり、今後新カードが追加されることはない。そのため、現時点で存在する全 official_id を一度だけ列挙して確定リストとして持つ。将来「ニンフィアex（非テラスタル）」が発売されても config を触らずに済む。

**builder への `officialIds` メカニズム追加**（`scripts/build_official_class_index.mjs`）:
- `hardcoded` の各タグ設定に `officialIds: number[]` フィールドを追加できるようにする
- `officialIds` が設定されている場合、`names`/`nameWithAttack` を無視し、指定 official_id に直接タグ付けする
- `names`/`nameWithAttack` は他のタグ（古代・未来等でまだ必要なものや今後のタグ）で引き続き使用するため builder から削除しない

**テラスタルの official_id リスト生成手順**:
1. `card_details.json` から現在の `names` リスト（ウミトリオex, リキキリンex … イーブイex）に該当する全エントリを抽出
2. 各名前について、以下の非テラスタル版の firstAttack を持つバリアントを除外する:
   - ミライドンex: `リジェクトボルト`, `スラッシュクロー`
   - コライドンex: `ほうふくてっつい`, `ツメできりさく`
   - ピカチュウex: `10まんボルト`, `しっぽではたく`, `ボルテッカー`
   - ゲッコウガex: `へんげしゅりけん`
   - サザンドラex: `ダークバイト`
   - ラプラスex: `ハイドロターン`
3. 残った全 official_id を `officialIds` として `official_classifications.json` に書き込む
4. テラスタルの `names` と `nameWithAttack` を削除（`officialIds` に統合）

**古代・未来も同様に処理**:
- 古代: 現在の `names` リスト（イダイナキバ等12件 + 覚醒のドラム・探検家の先導）の全 official_id を抽出。`nameWithAttack` のうち正しいエントリ（げんせいらんだ・はじょうもうこう）に対応する官僚的id を含め、除外すべきバリアントを弾く:
  - コライドン: `かくごのキバ`
  - コライドンex: `ツメできりさく`, `ひひいろのキバ`, `ほうふくてっつい`（現在誤って ADD されている nameWithAttack エントリも削除）
- 未来: 現在の `names` リスト（テツノワダチ等10件 + リブートポッド・暗号マニアの解読）の全 official_id を抽出。除外:
  - ミライドン: `でんきのツメ`
  - ミライドンex: `スラッシュクロー`

`node scripts/build_official_class_index.mjs` 再実行後、テラスタル/古代/未来の件数と主要カード（コライドンex が古代から消えている、ピカチュウex のテラスタル版のみ残っている等）を確認すること。

- [x] **23-2** `officialIds` メカニズム追加 + テラスタル/古代/未来を確定 official_id リストに移行 #claude/queue
> [!success] 2026-05-09 — 差分ゼロ。出力が完全に一致しました。

#### Phase 23-3: その他の公式フィルター修正

**前提**: 23-1 完了後（23-2 と並行可）。

`data/official_classifications.json` と `scripts/build_official_class_index.mjs` を修正する。

**1. prefix の cardKind フィルタ追加（builder 改修）**:
- `prefix` エントリに任意の `cardKindFilter: string[]` フィールドを追加できるようにする
- マッチ時に `card.cardKind` が `cardKindFilter` に含まれるかチェック（フィールドなければ従来通り全種マッチ）
- `official_classifications.json` で以下のprefixエントリに `cardKindFilter: ["ポケモン"]` を追加:
  - `アオキのポケモン`（アオキの手際が誤ってタグ付けされている）
  - `リーリエのポケモン`（リーリエの決心が誤ってタグ付けされている）
  - 同様の問題がある他のキャラ prefix も調査して対応

**2. rulesContain 追加（テキスト参照型カードの拾い漏れ）**:
- `ホップのポケモン`: `rulesContain: "「ホップのポケモン」"` を追加 → ハロンタウン、いしのどうくつをカバー
- `マリィのポケモン`: `rulesContain: "「マリィのポケモン」"` を追加 → スパイクタウンジムをカバー
- `Nのポケモン`: `rulesContain: "「Nのポケモン」"` を追加 → バーベナ、ヘレナをカバー

**3. ロケット団エネルギー追加**:
- `ロケット団` タグの `hardcoded.names` に `"ロケット団エネルギー"` を追加（prefix "ロケット団の" にマッチしないため）

修正後 `node scripts/build_official_class_index.mjs` を実行。アオキの手際・ハロンタウン・ロケット団エネルギー等が正しくタグ付けされていることを確認。

- [x] **23-3** prefix cardKindFilter 追加 + rulesContain 拾い漏れ修正 + ロケット団エネルギー追加 #claude/queue
> [!success] 2026-05-09 — 3件とも正しく修正されています。

#### Phase 23-4: Phase 23 レビュー・commit/push

- [x] **23-4** Phase 23 総合レビュー。`npm run build` エラーなし確認 → `git commit` → `git push` #claude/queue
> [!success] 2026-05-09 — 完了。

#### Phase 24-1: ベースライン取得・パターンマッチ問題調査・検証設計

**目的**: 移行前の状態を記録し、既知のパターンマッチ問題の原因を特定し、移行後の検証基準を先に設計する（コード変更なし）。

**ベースライン**: `data/card_tags.json` と `data/qa_entry_tags.json` から全タグのカード件数・Q&A件数を集計し `docs/tag_migration_baseline.md` に保存。

**調査対象（なぜマッチしたか/しなかったかを `scripts/tag_cards.mjs` で特定し記録）**:
- マギアナ: `エネ加速>手札→ポケモン` 誤検出の原因パターン。同じ理由で誤検出されている他カードを列挙し修正案を記録
- エネルギーリサイクル: `エネ加速` にマッチしている原因（加速ではなく回収）を調査
- レガシーエネルギー: `トラッシュ回収>エネルギー` に誤検出されている原因を調査
- ビワ: `ドロー>シャッフル後` に入っているが正しいか。カードテキストを確認して正しいタグを判断し記録
- ピュール: `ドロー>手札トラッシュ後` が付いていない理由を調査
調査で得た知見（パターンのクラス、見落とし傾向）を他タグへ横展開できるか検討し記録すること。

**検証設計（移行後に 24-7 で実行する検証計画を今のうちに設計）**:
以下の内容を `docs/tag_migration_baseline.md` に追記する:
1. **スポットチェックリスト**: 移行後に各カードが持つべきタグを明示する（例: マギアナ→エネ加速なし、エネルギーリサイクル→トラッシュ回収あり&エネ加速なし、レガシーエネルギー→トラッシュ回収なし）。スポットチェック対象は既知問題カードに加え、移行で影響を受ける各タグから代表カードを2〜3件選んで列挙
2. **カード数許容範囲**: 各タグで「何件±何件まで許容するか」をベースライン件数から計算して記載（例: 廃止タグは0件になるべき、エネ加速は移行後も±10件以内等）
3. **Q&Aカバレッジ閾値**: 移行前のカバレッジ数を記録し、移行後にこれを下回らないことを合否基準とする
4. **廃止タグリスト**: 移行後に1件も残ってはいけないタグの一覧を明記

- [x] **24-1** ベースライン取得（全タグのカード数・Q&A数を docs/tag_migration_baseline.md に記録）+ マギアナ/エネルギーリサイクル/レガシーエネルギー/ビワ/ピュールのパターンマッチ問題を tag_cards.mjs で原因特定・記録 + 24-7 で使う検証計画（スポットチェックリスト・件数許容範囲・Q&A閾値・廃止タグリスト）を同ファイルに設計・記録。コード変更はしない #claude/queue
> [!success] 2026-05-09 — `docs/tag_migration_baseline.md` (327行) を作成しました。内容サマリー：

#### Phase 24-2: 改名・単純変更

**前提**: 24-1 完了後。

以下を `scripts/tag_cards.mjs` と `scripts/tag_qa_entries.mjs` の両方に適用し、`VALID_TAGS` を更新する。

**改名**:
- `グッズサポートロック` → `ロック`（サブタグ: `ロック>グッズロック`, `ロック>サポートロック`, `ロック>トレーナー効果無効`, `ロック>ACE SPECロック`）
- `サイド操作` → `サイド関連`
- `スタジアム>破壊` → `スタジアム>トラッシュ`
- `サーチ>自由選択` → `サーチ>好きなカード`

**にげるコスト無償 + にげロック を統合**:
- 新親タグ `逃げる操作` を作成
- `にげるコスト無償` のカード → `逃げる操作>減少`（コスト軽減）
- コストを増やす効果のカードが存在するか調査し、あれば `逃げる操作>増加`
- `にげロック>相手` → `逃げる操作>逃げられない:相手`
- `にげロック>自分` → `逃げる操作>逃げられない:自分`
- `にげるコスト無償`・`にげロック` タグを廃止

**廃止**:
- `ベンチ展開>リバイバル`（15件）: 該当カードに `トラッシュ回収` タグを付与してから削除
- `ACE SPEC`（65件）: 公式フィルターに移行済みのため独自タグから削除

リビルド後、ベースラインと件数を比較して主要タグの件数が意図通りか確認すること。

- [x] **24-2** グッズサポートロック→ロック・サイド操作→サイド関連・スタジアム>破壊→トラッシュ・サーチ>自由選択→好きなカード・にげるコスト無償+にげロック→逃げる操作（統合）・ベンチ展開>リバイバル廃止・ACE SPEC廃止。tag_cards.mjs と tag_qa_entries.mjs を同期更新し VALID_TAGS 更新後リビルド #claude/queue
> [!success] 2026-05-09 — 完了です。変更内容まとめ：

#### Phase 24-3: エネ系再編

**前提**: 24-2 完了後。

`scripts/tag_cards.mjs` と `scripts/tag_qa_entries.mjs` を同期して変更する。

**エネ移動 解体**:
- `エネ移動>自分・集約`・`エネ移動>自分・拡散`・`エネ移動>自分・場のエネ自由配分` → `エネ加速>ポケモン`（新設: 場のポケモン間のエネルギー移動）
- `エネ移動>相手のエネ` → `エネ除去>つけかえ`（新設）
- `エネ移動` 親タグを廃止（全カード移行後）

**エネ加速 サブタグ改名**:
- `エネ加速>山札→ポケモン` → `エネ加速>山札`
- `エネ加速>トラッシュ→ポケモン` → `エネ加速>トラッシュ`
- `エネ加速>手札→ポケモン` → `エネ加速>手札`

**エネ加速 内容修正**:
- `docs/tag_migration_baseline.md` の調査結果をもとにマギアナを `エネ加速` から除外（パターンを修正し、同様の誤検出カードも除外）
- `エネ加速>山札→手札`（89件）→ `サーチ>エネルギー`（新設）に移動
- エネルギーリサイクルを `エネ加速` から除外し `トラッシュ回収` に追加（`docs/tag_migration_baseline.md` の調査結果を参照）
- メガフシギバナex の特性（場のエネルギーを別のポケモンへ移動）→ `エネ加速>ポケモン` に追加
- タギングル: 特殊なコンボ用カードのため現状維持（変更しない）

VALID_TAGS 更新後リビルド。

- [x] **24-3** エネ移動解体（→エネ加速>ポケモン / エネ除去>つけかえ）・エネ加速サブタグ改名（→ポケモン削除）・マギアナ除外・エネ加速>山札→手札→サーチ>エネルギー移動・エネルギーリサイクル→トラッシュ回収・メガフシギバナex追加。tag_cards.mjs と tag_qa_entries.mjs 同期更新・VALID_TAGS更新・リビルド #claude/queue
> [!success] 2026-05-09 — 完了です。変更サマリー:

#### Phase 24-4: サーチ再編

**前提**: 24-3 完了後（サーチ>エネルギーが存在する状態）。

`scripts/tag_cards.mjs` と `scripts/tag_qa_entries.mjs` を同期して変更する。

**サブタグ新設**:
- `サーチ>スタジアム`: 現在 `サーチ>グッズ` に誤って入っているスタジアムサーチカードを特定し移動
- `サーチ>ポケモンのどうぐ`: 現在 `サーチ>ポケモン` に入っているワザマシン等のどうぐサーチカードを特定し移動

**「トレーナーズ全般サーチ」カードの全サブタグ付与**:
以下のカードはグッズ・サポート・スタジアム・ポケモンのどうぐ等を横断してサーチできる。各カードのテキストを確認し、該当する全サブタグ（ポケモン/グッズ/サポート/スタジアム/ポケモンのどうぐ/エネルギー/好きなカード等）を付与すること: ヨルノズク・ロケット団のラムダ・カキツバタ（他に同様のカードがあれば対応）

VALID_TAGS に `サーチ>スタジアム`・`サーチ>ポケモンのどうぐ` を追加。リビルド。

- [x] **24-4** サーチ>スタジアム新設（グッズから分離）・サーチ>ポケモンのどうぐ新設（ポケモンから分離）・ヨルノズク/ロケット団のラムダ/カキツバタ等トレーナーズ全般サーチカードへの全サブタグ付与。tag_cards.mjs と tag_qa_entries.mjs 同期更新・リビルド #claude/queue
> [!success] 2026-05-09 — 全て完了しました。

#### Phase 24-5: トラッシュ回収再分類 + どうぐトラッシュ統合

**前提**: 24-4 完了後。

`scripts/tag_cards.mjs` と `scripts/tag_qa_entries.mjs` を同期して変更する。

**トラッシュ回収 サブタグ再分類**:
- 現在のサブタグ（`エネルギー`・`ポケモン`・`自由選択`）を廃止し、「どこへ戻すか」で分類し直す
- 新サブタグ: `トラッシュ回収>場`・`トラッシュ回収>手札`・`トラッシュ回収>山札`
- `場` に入るカードの例: 鬼の仮面・キングドラex・ヨマワル・ママンボウ・変化の書・ホウオウ（他も調査）
- エネルギーリサイクル（24-3 で追加済み）は `トラッシュ回収>手札` か `トラッシュ回収>山札` か効果を確認して分類
- `docs/tag_migration_baseline.md` の調査結果をもとにレガシーエネルギーを除外
- 場のポケモンへのエネルギー付与は `エネ加速` の領域なので `トラッシュ回収` から除外

**どうぐトラッシュ 統合**:
- `どうぐトラッシュ`（18件）を廃止
- 該当カードに `ポケモンのどうぐ>トラッシュ`（新設）を付与
- `スタジアム>トラッシュ` と同様の構成

VALID_TAGS 更新。リビルド。

- [x] **24-5** トラッシュ回収サブタグを「場/手札/山札」に再分類・レガシーエネルギー除外・どうぐトラッシュ廃止→ポケモンのどうぐ>トラッシュ新設。tag_cards.mjs と tag_qa_entries.mjs 同期更新・VALID_TAGS更新・リビルド #claude/queue
> [!success] 2026-05-09 — エラーなし。完了です。

#### Phase 24-6: ドロー・その他個別修正

**前提**: 24-5 完了後。

`scripts/tag_cards.mjs` と `scripts/tag_qa_entries.mjs` を同期して変更する。

- ビワ: `docs/tag_migration_baseline.md` の調査結果をもとに正しいタグに修正（ドローではなく手札干渉系と予想されるが、カードテキストを確認して判断）
- ピュール: `ドロー>手札トラッシュ後` が付いていない原因（24-1 調査済み）をもとにパターンを修正・追加

パターン修正を加えた場合、同じ修正が他のカードにも適用されて意図しない追加が起きないか確認すること。リビルド。

- [x] **24-6** ビワを正しいタグに修正・ピュールにドロー>手札トラッシュ後追加（パターン修正）。tag_cards.mjs と tag_qa_entries.mjs 同期更新・リビルド #claude/queue
> [!success] 2026-05-09 — 完了です。

#### Phase 24-7: 検証

**前提**: 24-6 完了後。

`docs/tag_migration_baseline.md` のベースラインと現在の状態を比較して検証レポートを `docs/tag_migration_verification.md` に出力する。

**確認項目**:
- 全タグのカード数・Q&A数をベースラインと比較（10%以上の差異があるタグを一覧）
- Q&Aカバレッジ（relatedQA ありカード数）がベースラインから大きく減っていないか
- スポットチェック（以下カードが正しいタグを持つか）:
  - マギアナ: `エネ加速` がないこと
  - エネルギーリサイクル: `トラッシュ回収` にあり `エネ加速` にないこと
  - レガシーエネルギー: `トラッシュ回収` にないこと
  - ゲッコウガex（テラスタル版）: `エネ加速>ポケモン` があること（メガフシギバナex も同様）
  - ヨルノズク: `サーチ` に複数のサブタグがあること
  - ビワ・ピュール: 正しいタグになっていること
- 廃止タグ（ACE SPEC・エネ移動・にげるコスト無償・にげロック・どうぐトラッシュ・ベンチ展開>リバイバル等）がどのカードにも残っていないこと

- [x] **24-7** ベースラインとの差分比較・スポットチェック・Q&Aカバレッジ確認を実施し docs/tag_migration_verification.md に検証レポート出力 #claude/queue
> [!success] 2026-05-09 — `docs/tag_migration_verification.md` を作成しました。

#### Phase 24-8: Phase 24 レビュー・commit/push

- [x] **24-8** Phase 24 総合レビュー。`npm run build` エラーなし確認 → `git add` → `git commit` → `git push` #claude/queue
> [!success] 2026-05-09 — 完了。

#### Phase 25-1: ベースライン取得 + 分類調査

対象タグの現状を記録し、25-2〜25-3 の実装に必要な分類計画を設計する。コード変更なし。

**出力先**: `docs/tag_phase25_baseline.md`

**集計**: `data/card_tags.json` と `data/qa_entry_tags.json` から以下タグのカード数・Q&A数を記録。
- ダメカン操作（サブタグなし）、ベンチ狙撃>移動型、ダメージ操作>与ダメ強化、ダメージ操作>被ダメ増加、条件ダメージ（各サブタグ含む）

**ダメカン操作 分類計画**: 現在の `ダメカン操作` タグを持つ全カードのテキストを確認し、以下の3サブタグへの分類案を記録すること。
- `ダメカン操作>のせる`: ダメカンをポケモンに置く効果（トリガー型含む。例: パチリス「エネをつけるたび」、グレイシア「次の番の終わり」）
- `ダメカン操作>移動`: ダメカンをのせ替える・移動させる（`ベンチ狙撃>移動型` カードも含む）
- `ダメカン操作>反射`: ダメージを受けたとき/気絶したとき相手にダメカンをのせる
- 上記3つのいずれかに分類できないカードがあれば列挙して理由を記録

**ベンチ狙撃>移動型 全リスト**: 25-2 で `ダメカン操作>移動` に移す対象を明示

**条件ダメージ調査**: 以下パターンが現在タグ漏れしているか確認し、漏れがあれば追加パターン案を記録。
- 括弧なし「+Nダメージ追加」形式（例: 「100ダメージ追加」）
- 「Nダメージ増やす」形式

**検証計画**: 25-4 で使うスポットチェックリストと件数許容範囲を同ファイルに記録。

- [x] **25-1** ベースライン取得（全対象タグのカード数・Q&A数）+ ダメカン操作カード全件の分類案 + ベンチ狙撃>移動型リスト + 条件ダメージパターン漏れ調査。docs/tag_phase25_baseline.md に出力。コード変更なし #claude/queue
> [!success] 2026-05-11 — `docs/tag_phase25_baseline.md` を作成しました。主な調査結果：

#### Phase 25-2: ダメカン操作 サブタグ新設 + ベンチ狙撃>移動型廃止

`scripts/tag_cards.mjs` と `scripts/tag_qa_entries.mjs` の両方に適用する。

**ダメカン操作 サブタグ新設**（25-1 の分類計画を参照）:
- `ダメカン操作>のせる`: ダメカンをのせる効果（既存パターン `ダメカンを.{1,30}のせる` から のせ替え・反射を除いたもの）。危ない廃墟・パチリス・グレイシア等のトリガー型も含む
- `ダメカン操作>移動`: `ダメカンを.{1,30}のせ替える` パターン全般
- `ダメカン操作>反射`: 「ワザを受けたとき」「気絶したとき」ダメカンをのせる系（name-based 対応が必要な可能性あり）

**ベンチ狙撃>移動型 廃止**: 25-1 のリストに載った全カードが `ダメカン操作>移動` を持つことをリビルドで確認してから `ベンチ狙撃>移動型` パターンを削除する。

VALID_TAGS 更新（新規3タグ追加・`ベンチ狙撃>移動型` 削除）。リビルド後、ダメカン操作の親タグ件数が大幅に減っていないことを確認。

- [x] **25-2** ダメカン操作>のせる/移動/反射 サブタグ新設 + ベンチ狙撃>移動型廃止。tag_cards.mjs と tag_qa_entries.mjs 同期更新・VALID_TAGS更新・リビルド #claude/queue
> [!success] 2026-05-11 — 完了です。変更サマリー：

#### Phase 25-3: ダメージ操作タグ改名 + 条件ダメージパターン補完

- [x] **25-3** `ダメージ操作>与ダメ強化` → `与ダメージ増加`・`ダメージ操作>被ダメ増加` → `被ダメージ増加` 改名。条件ダメージGap-1〜4（トラッシュコスト×ダメージ/トラッシュ参照×ダメージ/手札枚数×ダメージ/山札公開枚数×ダメージ）を `§B-17-4〜7` として tag_cards.mjs と tag_qa_entries.mjs に追加。リビルド。
> [!success] 2026-05-12 — 完了。`与ダメージ増加`: 86件・`被ダメージ増加`: 3件（件数変化なし・改名のみ）。条件ダメージ: 567→638 (+71)、場参照: 337→408 (+71)、相手参照: 76→83 (+7)、コイン可変: 205→205（変化なし）。

#### Phase 25-3: ダメージ操作 改名 + 条件ダメージ パターン補完

`scripts/tag_cards.mjs` と `scripts/tag_qa_entries.mjs` の両方に適用する。

**ダメージ操作 改名**:
- `ダメージ操作>与ダメ強化` → `ダメージ操作>与ダメージ増加`
- `ダメージ操作>被ダメ増加` → `ダメージ操作>被ダメージ増加`

**条件ダメージ パターン補完**（25-1 の調査結果を参照）:
- 漏れが確認されたパターンを `条件ダメージ>場参照` または `条件ダメージ>相手参照` の適切な方に追加
- 追加後、意図しないカードが拾われていないことを確認（タグ付き件数が大幅に増加しないこと）
- 漏れがなかった場合はこのステップをスキップして良い

VALID_TAGS 更新。リビルド。

- [x] **25-3** ダメージ操作>与ダメ強化→与ダメージ増加・被ダメ増加→被ダメージ増加 改名 + 条件ダメージパターン補完（25-1調査結果ベース）。tag_cards.mjs と tag_qa_entries.mjs 同期更新・リビルド #claude/queue
> [!success] 2026-05-11 — `frontend/data/card_tags.json` も更新されました。旧タグ名は完全に消えています。

#### Phase 25-4: 検証

`docs/tag_phase25_baseline.md` のベースラインと現在の状態を比較し、`docs/tag_phase25_verification.md` に出力。

**確認項目**:
- 全対象タグのカード数・Q&A数をベースラインと比較（10%以上の差異があるタグを列挙）
- スポットチェック（25-1 の計画に従う）:
  - ベンチ狙撃>移動型 がどのカードにも残っていないこと
  - ヨノワール等 → `ダメカン操作>移動` を持つこと
  - グレイシア等 → `ダメカン操作>のせる` を持つこと
  - ダメカン反射系カード → `ダメカン操作>反射` を持つこと
  - `ダメージ操作>与ダメ強化`・`被ダメ増加` がどのカードにも残っていないこと
- Q&Aカバレッジがベースラインから大きく減っていないこと

- [x] **25-4** ベースラインとの差分比較・スポットチェック・廃止タグ確認を実施し docs/tag_phase25_verification.md に出力 #claude/queue
> [!success] 2026-05-11 — `docs/tag_phase25_verification.md` を作成しました。

#### Phase 25-5: レビュー・commit/push

- [x] **25-5** Phase 25 総合レビュー。`npm run build` エラーなし確認 → `git add` → `git commit` → `git push` #claude/queue
> [!success] 2026-05-11 — Phase 25 総合レビュー完了。ビルドエラーなし、9ファイル変更（`card_tags.json`, `qa_entry_tags.json`, スクリプト2本, ドキュメント5件）をコミット・プッシュしました。

#### Phase 26-1: variantUtils.ts 改修（新しさ優先・同世代ノーマル優先）

`frontend/lib/variantUtils.ts` の `pickDefaultVariant` を改修する。

**現状（Phase 22 実装）**: 世代降順 → レア優先（SAR=0, AR=1, TR=2, …）→ set_code降順

**新しい方針**:
- **第1ソートキー**: セットの発売日（新しい順）。`set_code` から発売日を引くマップを用意するか、既存の `genRank` を発売日順に対応させる
- **第2ソートキー**: 同世代内ではノーマル寄りを優先（SAR/AR/UR/SR を後回し）。具体的には `rarityRank` を逆転させ、C/U/R 等を小さい値（優先）、SAR/AR を大きい値（後回し）にする
- **第3ソートキー**: `set_code` 降順（タイブレーク）

実装後、以下のカードで期待通りの表示になることを確認:
- ボスの指令: カラスバ版（デッキコード mC 収録）が表示されること
- ポケモンセンターのお姉さん: 最新版が表示されること
- モンスターボール: 最新版が表示されること

`npm run build` → `git commit` → `git push`

- [x] **26-1** variantUtils.ts 改修（発売日ベース新しさ優先・同世代ノーマル優先）。npm run build 確認 → git commit → git push #claude/queue
> [!success] 2026-05-13 — 完了しました。

#### Phase 27-1: リセット・全解除のUIずれ修正

`frontend/app/components/CardSearch.tsx` のリセット/全解除ボタン表示時のレイアウトずれを修正する。フィルター項目を選択するとリセットボタンが出現してレイアウトがずれる現象。ボタン領域の高さをあらかじめ確保し（例: `min-h` や invisible なプレースホルダー）、選択時にボタンをアクティブ化する方式で対応。`npm run build` で確認。

- [x] **27-1** リセット・全解除ボタン出現によるUIずれ修正（事前に領域確保）。npm run build 確認 #claude/queue
> [!success] 2026-05-13

#### Phase 27-2: セレビィのタグ修正

`scripts/tag_cards.mjs` でセレビィが `サーチ>スタジアム` にのみ分類されているが、`サーチ>ポケモン` も持つべきかカードテキストを確認し、必要であれば追加する。`node scripts/tag_cards.mjs` → `node scripts/tag_qa_entries.mjs` → `node scripts/build_qa_index.mjs` でリビルド。`git commit` → `git push`。

- [x] **27-2** セレビィのタグ確認・修正（サーチ>ポケモン追加検討）。リビルド → git push #claude/queue
> [!success] 2026-05-13




#### Phase 28-3: 最大HP強化タグ新設

`scripts/tag_cards.mjs` に §B-29 最大HP強化 タグを新設。パターン: `最大HP.{0,20}「[＋+]\d+」`（全角・半角プラス両対応）。グラビティーマウンテン「-30」は自然除外。`scripts/tag_qa_entries.mjs` にも同一パターンを追加。GROUP_ORDER / SECTION_MAP も更新。リビルド後 24件（card_tags）・2件（qa_entry_tags）ヒット確認。

- [x] **28-3** 最大HP強化タグ新設（§B-29）。tag_cards.mjs + tag_qa_entries.mjs 同期・リビルド → git push #claude/queue
> [!success] 2026-05-14 — 完了。24カード・2 QAエントリーに最大HP強化タグ付与。
#### Phase 28-3: 最大HP強化タグ 新設

`scripts/tag_cards.mjs` に新規タグ `最大HP強化` を追加する。

**対象**: カードテキストに「最大HPは「＋N」される」「最大HPが「＋N」される」「最大HPが「+N」される」のいずれかの形式を含むカード。

**確認済みカード（10件）**: アノホラグサ、ヒーローマント、イイネイヌ、エキサイトスタジアム、ルンパッパ、シロナのパワーウエイト、ローブシン、ガチゴラス、グロウ草エネルギー、アンジュフラエッテ

サブタグは不要（10件程度のため）。VALID_TAGS に `最大HP強化` を追加。`tag_qa_entries.mjs` にも同期。リビルド後、上記10件が確実にタグを持つことを確認。`git commit` → `git push`。

- [x] **28-3** 最大HP強化タグ新設（最大HP+N パターン追加）。tag_cards.mjs + tag_qa_entries.mjs 同期・VALID_TAGS更新・リビルド → git push #claude/queue
> [!success] 2026-05-14

#### Phase 29-1: テキスト検索復活（特性名・ワザ名・効果テキスト）

`frontend/app/components/CardSearch.tsx` を改修する。

**コメントアウト解除**:
- 行28: `// const [effectQuery, setEffectQuery] = useState("");` → アンコメント
- 行93: `// const deferredEffectQuery = useDeferredValue(effectQuery);` → アンコメント
- 行478〜492: テキスト検索 input 要素のコメントブロック → アンコメント。placeholder を `"特性名・ワザ名・テキスト..."` に変更

**フィルターロジック実装**（行313の `// if (deferredEffectQuery) { ... }` を置き換え）:
```
if (deferredEffectQuery) {
  const q = deferredEffectQuery.toLowerCase();
  const searchTarget = [
    ...card.abilities.map(a => a.name + ' ' + (a.text ?? '')),
    ...card.attacks.map(a => a.name + ' ' + (a.text ?? '')),
    ...card.rules,
  ].join(' ').toLowerCase();
  if (!searchTarget.includes(q)) return false;
}
```

検索対象: 特性名・特性テキスト、ワザ名・ワザテキスト、rules テキスト（ex/V のルールボックス等含む）。カード名は既存の名前検索が担当するため対象外。

`npm run build` エラーなし確認 → `git commit` → `git push`

- [x] **29-1** テキスト検索復活（effectQuery アンコメント + 特性名/ワザ名/テキスト検索ロジック実装）。npm run build 確認 → git commit → git push #claude/queue
> [!success] 2026-05-14

#### Phase 30-1: 最終進化フィルター実装

`frontend/app/components/CardSearch.tsx` に「進化先がいないポケモンのみ表示」するトグルフィルターを追加する。

**判定ロジック** (`MasterCard` の `card_kind` と `evolutions` を使用):
```
// nameToKind map を useMemo で構築（masterCards から）
// name: string → card_kind: string

const isFinalEvolution = (card: MasterCard): boolean => {
  const kind = card.card_kind;
  const evo = card.evolutions ?? [];
  if (kind === '2 進化') return true;
  if (evo.length === 0) return ['たね', '1 進化', '2 進化'].includes(kind);
  const groupKinds = evo.map(n => nameToKind.get(n)).filter(Boolean);
  if (kind === '1 進化') return !groupKinds.includes('2 進化');
  if (kind === 'たね') return !groupKinds.includes('1 進化') && !groupKinds.includes('2 進化');
  return false;
};
```

期待値（設計時に確認済み）: 2進化153件 + 1進化385件 + たね405件 = 943件。実装後にこの件数と概ね一致することを確認。

**UI**: 公式フィルターパネル内またはカテゴリフィルターの近くに「最終進化のみ」チェックボックス/トグルを追加。ポケモンカテゴリ選択中のみ表示しても良いし、常時表示でも可（実装しやすい方で）。

**フィルター連携**: `finalEvoOnly` state（boolean）を追加し、`filteredCards` の useMemo 内で `if (finalEvoOnly && !isFinalEvolution(card)) return false;` を追加。

`npm run build` エラーなし確認 → `git commit` → `git push`

- [x] **30-1** 最終進化フィルター実装（isFinalEvolution ロジック + finalEvoOnly トグル UI）。npm run build 確認 → git commit → git push #claude/queue
> [!success] 2026-05-14

#### Phase 30-2: 採用デッキ表示を日本語化

`frontend/app/components/CardModal.tsx` の採用デッキセクションのラベルを日本語にする。現状は英語表記になっている箇所を確認し、日本語に変更。`npm run build` で確認。

- [x] **30-2** CardModal 採用デッキセクションのラベルを日本語化。npm run build 確認 #claude/queue
> [!success] 2026-05-14

#### Phase 27-3: ワザコピー — ヤドキング調査・追加

`data/card_tags.json` で `ワザコピー` タグを持つカードを確認し、ヤドキングが含まれていなければカードテキストを調査して含めるべきか判断する。他にも `ワザコピー` に含まれるべきで漏れているカードがあれば合わせて追加する。`node scripts/tag_cards.mjs` → リビルド → `git commit` → `git push`。

- [x] **27-3** ワザコピータグ：ヤドキング調査・追加、他漏れ確認。リビルド → git push #claude/queue
> [!success] 2026-05-16


#### Phase 27-4: 総合レビュー

`npm run build` エラーなし確認 → `git push`（未push分があれば）

- [x] **27-4** Phase 27 総合レビュー。`npm run build` エラーなし確認 → `git push` #claude/queue
> [!success] 2026-05-16 — Phase 27 総合レビュー完了。ビルドエラーなし（TypeScript OK、静的ページ生成 8/8）。全 Phase 27 コミット（27-1〜27-3）はpush済み。
#### Phase 27-4: Phase 27 レビュー・commit/push

27-1〜27-3 の各タスクが個別に push 済みであれば不要。まとめて push する場合はここで。

- [x] **27-4** Phase 27 総合レビュー。`npm run build` エラーなし確認 → `git push`（未push分があれば） #claude/queue
> [!success] 2026-05-16

#### Phase 27-5: 軽減・無効タグ クリーンアップ

`scripts/tag_cards.mjs` と `scripts/tag_qa_entries.mjs` の両方に適用する。

1. **グロウ草エネルギーの誤タグ削除**: `軽減>その他条件付き` からグロウ草エネルギーを除外する。テキスト「最大HPが＋20される」は damage reduction ではなく HP 増加であり、`軽減` に含めるべきではない。name-based rule を修正するか、条件文から除外する
2. **dead tag 削除**: `軽減>exVGXから` のパターン定義と VALID_TAGS エントリを削除（現在マッチするカードが0件）
3. **リネーム**: `無効>条件付きその他` → `無効>条件付き`（`tag_cards.mjs` のタグ名・VALID_TAGS・`tag_qa_entries.mjs` を同期）

リビルド後、グロウ草エネルギーに `軽減` タグが残っていないこと、`軽減>exVGXから` がどのカードにも残っていないことを確認。`node scripts/tag_cards.mjs` → `node scripts/tag_qa_entries.mjs` → `node scripts/build_qa_index.mjs` → `git commit` → `git push`

- [x] **27-5** グロウ草エネルギー誤タグ削除・軽減>exVGXから dead tag削除・無効>条件付きその他→条件付きリネーム。リビルド → git push #claude/queue
> [!success] 2026-05-16

#### Phase 28-1: ワザロック廃止

`scripts/tag_cards.mjs` と `scripts/tag_qa_entries.mjs` の両方に適用する。

- `ワザロック>相手ロック` の該当カードに `ロック` を付与してから `ワザロック` タグ全体（親タグ＋全サブタグ）を削除
- `ワザロック>自己ロック` のカードはタグ削除のみ（ユースケースなし）
- VALID_TAGS から `ワザロック` 関連エントリを全削除
- リビルド → `npm run build` 確認 → `git commit` → `git push`

- [x] **28-1** ワザロック廃止（>相手ロック→ロック付与後にワザロック全削除、>自己ロック削除）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16

#### Phase 28-2: 手札干渉 サブタグ廃止

`scripts/tag_cards.mjs` と `scripts/tag_qa_entries.mjs` の両方に適用する。

- `手札干渉>手札トラッシュ` を廃止。該当カードは既存の `サーチ` / `ドロー` / `エネ除去>自己コスト` 等の適切なタグを持っているはずなので、サブタグ削除のみ
- `手札干渉>手札参照` を廃止。同様にサブタグ削除のみ
- 廃止後に `手札干渉` 親タグのみ持つカードが残らないこと（残る場合は別タグに振り分け）
- VALID_TAGS から 2 サブタグを削除
- リビルド → `npm run build` 確認 → `git commit` → `git push`

- [x] **28-2** 手札干渉サブタグ廃止（手札トラッシュ・手札参照）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16

#### Phase 28-4: 進化加速 整理

`scripts/tag_cards.mjs` と `scripts/tag_qa_entries.mjs` の両方に適用する。

- `進化加速>山札から` サブタグを廃止（細分化不要、親タグ `進化加速` のみで運用）
- イーブイの特性「ブースト進化」が `進化加速` に含まれているか確認し、なければ追加
- VALID_TAGS から `進化加速>山札から` を削除
- リビルド → `npm run build` 確認 → `git commit` → `git push`

- [x] **28-4** 進化加速整理（>山札から廃止 + イーブイ確認）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16

#### Phase 28-5: 特性無効 → ロック>特性 統合

`scripts/tag_cards.mjs` と `scripts/tag_qa_entries.mjs` の両方に適用する。

- 新サブタグ `ロック>特性` を VALID_TAGS に追加
- `特性無効` タグを持つカードに `ロック>特性` を付与
- `特性無効` タグを全削除し、VALID_TAGS からも削除
- リビルド → `npm run build` 確認 → `git commit` → `git push`

- [x] **28-5** 特性無効→ロック>特性 統合（新サブタグ追加・特性無効廃止）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16

#### Phase 28-6: 回復>複数回復 廃止

`回復>複数回復`（§B-3-3、計画 12 件）を廃止。タグは tag_cards.mjs・card_tags.json に実装されておらず、対象カードは `回復>固定HP回復` で捕捉済み。ドキュメントのみ更新。

- `group_categories_proposal.md` §B-3-3 行を削除
- D-2 表の公民館分類を `§B-3（回復>固定HP回復）` に修正

- [x] **28-6** 回復>複数回復廃止（再分類後に削除）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-17

#### Phase 31-3: ベンチ展開 サブタグ追加（山札・トラッシュ）

`ベンチ展開` にサブタグを追加し、`トラッシュ回収>場` の代替先を用意する（31-1 への準備として 31-3 を先に実行）。

- 新サブタグ `ベンチ展開>山札`（山札からベンチに出す効果）
- 新サブタグ `ベンチ展開>トラッシュ`（トラッシュからベンチに出す効果、旧 `トラッシュ回収>場` の役割）
- VALID_TAGS に追加・判定ルール追加（既存 `ベンチ展開` ルールから分岐 or 別ルール）
- 該当カードに新サブタグを付与
- `tag_qa_entries.mjs` も同期
- リビルド → `npm run build` → `git commit` → `git push`

- [x] **31-3** ベンチ展開サブタグ追加（>山札・>トラッシュ）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16


#### Phase 31-1: トラッシュ回収>場 削除

`トラッシュ回収>場`（69件）を廃止。該当カードは既存の `ベンチ展開>トラッシュ`・`エネ加速>トラッシュ` ルールで捕捉済みのため、振替後にルール削除。

- `tag_cards.mjs`: §B-1-T2ブロック削除・VALID_TAGSから`トラッシュ回収>場`削除
- `tag_qa_entries.mjs`: 同ブロック削除
- リビルド: `tag_cards.mjs` → `build_qa_index.mjs`

- [x] **31-1** トラッシュ回収>場 削除（69件をベンチ展開>トラッシュ/エネ加速>トラッシュに振替後、ルール削除）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16

#### Phase 31-2: ハルクジラex / ムゲンダイナ スタジアム参照タグ追加

ハルクジラex はスタジアムがあるとダメージ増加、ムゲンダイナもスタジアム参照（スピンロトムと同等扱い）。

- `scripts/tag_cards.mjs` で既存の `スタジアム` 親タグと参照系サブタグを確認（スピンロトムが持つサブタグを参考に）
- ハルクジラex / ムゲンダイナのカードテキストを確認し、スピンロトムと同じ参照系サブタグを付与
- 必要に応じてルール（name-based or pattern）を追加
- 同期更新・リビルド → `npm run build` → `git commit` → `git push`

- [x] **31-2** ハルクジラex/ムゲンダイナ にスタジアム参照タグ付与（スピンロトム同等扱い）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16

#### Phase 31-4: 特殊状態回復 サブタグ新設

`回復` タグに `>特殊状態` サブタグを追加。

- 新サブタグ `回復>特殊状態` を VALID_TAGS に追加
- 「特殊状態がすべて回復する」「やけど・どくをなおす」「特殊状態を回復する」等のテキストパターンを判定ルールに追加
- 該当カードを調査・タグ付与
- `tag_qa_entries.mjs` も同期
- リビルド → `npm run build` → `git commit` → `git push`

- [x] **31-4** 回復>特殊状態 サブタグ新設。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16

#### Phase 31-5: にげる操作 → にげるコスト リネーム

タグ名 `にげる操作` を `にげるコスト` にリネームし、サブタグを `軽減` / `増加` に整理。

- タグ名 `にげる操作` → `にげるコスト` に変更（`tag_cards.mjs`, `tag_qa_entries.mjs`, VALID_TAGS, `data/card_tags.json` の該当タグ全件）
- 既存サブタグ `にげる操作>軽減` 系 → `にげるコスト>軽減`（減らす・ゼロにする）
- 新サブタグ `にげるコスト>増加`（相手のにげるコストを増やす効果。Phase 25 のダメージ操作と類似パターンで探す）
- 既存サブタグ `にげる操作>自分ロック` / `>相手ロック` は名前を `にげるコスト>自分ロック` / `>相手ロック` にリネームのみ（`ロック` への完全統合は 32-2 で対応）
- `tag_qa_entries.mjs` も同期
- リビルド → `npm run build` → `git commit` → `git push`

- [x] **31-5** にげる操作→にげるコスト リネーム + サブタグ 軽減/増加 整理。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16

#### Phase 31-6: Phase 31 レビュー・commit/push

旧タグ名（`にげる操作`、`トラッシュ回収>場` 等）が `data/card_tags.json` と `data/qa_entry_tags.json` のどこにも残っていないことを確認。`npm run build` エラーなし → 未 push 分があれば push。

- [x] **31-6** Phase 31 レビュー・廃止タグ確認・push #claude/queue
> [!success] 2026-05-16 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code▗[1C▗[3C▖[1C▖[2CClaude[1CCode[1Cv2.1.143


#### Phase 32-1: ポケモンいれかえ サブタグ一新 + 相手入れ替え統合

`ポケモン入れ替え`（§1）と`相手入れ替え`（§2）を統合し、`ポケモンいれかえ`（§1）に一本化。サブタグを `自分`/`味方`/`相手:C-04型`/`相手:C-05型`/`バウンス` に刷新。にげるコスト系サブタグは§1から切り離し。

**変更内容:**
- 旧 `ポケモン入れ替え` + サブタグ（ワザ/特性/グッズ/スタジアム/にげるコスト） → 廃止
- 旧 `相手入れ替え` + サブタグ（C-04型/C-05型/バウンス） → 廃止
- 新 `ポケモンいれかえ>自分`: バトルポケモンが退場する効果（ワザ・特性・グッズ・スタジアム）
- 新 `ポケモンいれかえ>味方`: ベンチポケモンを指定してバトルに引き出す効果（特性）
- 新 `ポケモンいれかえ>相手:C-04型`: 相手バトル→ベンチ（次を相手が選ぶ）
- 新 `ポケモンいれかえ>相手:C-05型`: 相手ベンチ→バトル（自分が指定）
- 新 `ポケモンいれかえ>バウンス`: 相手ポケモンをカードごと山札に戻す（0件・テキスト未収録）
- `tag_cards.mjs` / `tag_qa_entries.mjs` / GROUP_ORDER / SECTION_MAP 同期
- `card_tags.json` / `qa_entry_tags.json` / `qa_index.json` リビルド
- `npm run build` 成功確認

**件数（Phase 32-1）:** ポケモンいれかえ 400 / 自分 203 / 味方 7 / 相手:C-04型 28 / 相手:C-05型 165 / バウンス 0

- [x] **32-1** ポケモンいれかえ サブタグ一新 + 相手入れ替え統合（自分/味方/相手:C-04型/C-05型/バウンス）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16

- [x] **32-2** ロックタグ大規模整理（スタジアム/どうぐ/にげられない/にげられない（自分）/ワザ サブタグ追加・元タグから移行）。同期更新・リビルド → git push
> [!success] 2026-05-16
> - `ロック付与`（19件）→ `ワザロック(相手)` 改名、`>ワザ`/`>スタジアム`/`>どうぐ` サブタグ新設（計26件）
> - `逃げる操作>相手ロック`（70件）→ `にげられない>ワザ` 移行。ホミカの演奏新規検出（計71件）
> - `逃げる操作>自分ロック`（4件）→ `にげられない（自分）` スタンドアロン移行
> - `ワザロック(相手)>スタジアム`: ダイオウドウ/イーユイ（2件）
> - `ワザロック(相手)>どうぐ`: ジャミングタワー（5件）
#### Phase 32-2: ロックタグ大規模整理

`ロック` タグのサブタグ体系を整理。28-5 で `ロック>特性` は追加済み前提。

- 既存サブタグ命名規則確認（`ロック>○○ロック` 形式があれば短縮 → `ロック>○○`）
- 新サブタグ追加:
  - `ロック>スタジアム`（既存 `スタジアム>封印` から移行）
  - `ロック>ポケモンのどうぐ`（ブルンゲルex 等。`ポケモンのどうぐ` タグの「封印」相当）
  - `ロック>にげられない`（31-5 後の `にげるコスト>相手ロック` から移行）
  - `ロック>にげられない（自分）`（31-5 後の `にげるコスト>自分ロック` から移行）
  - `ロック>ワザ`（28-1 で `ロック` 親タグ付与済み旧 `ワザロック>相手ロック` 該当カードをサブタグ細分化）
- `ロック>トレーナー効果無効` は別タグに分類し直すべきだが、暫定で残置（Worker 判断 or 暫定 `ロック>トレーナー`）
- 元タグ側の該当ルール・サブタグを削除（`スタジアム>封印`, `にげるコスト>自分ロック/相手ロック` 等）
- VALID_TAGS 全更新、`tag_qa_entries.mjs` 同期
- リビルド → `npm run build` → `git commit` → `git push`

- [x] **32-2** ロックタグ大規模整理（スタジアム/どうぐ/にげられない/にげられない（自分）/ワザ サブタグ追加・元タグから移行）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code▗[1C▗[3C▖[1C▖[2CClaude[1CCode[1Cv2.1.143

#### Phase 32-3: 特殊状態関連タグ新設（特殊水エネルギー等）

公式の「特殊状態」（どく・まひ・ねむり・こんらん・やけど）とは別に、独自タグを新設し、特殊水エネルギーなどの該当カードに付与。

- 既存タグ `特殊状態`（公式分類）と被らない名前で独自タグを設計（暫定 `特殊状態関連` を第一候補、Worker 判断可）
- 該当カード調査: 特殊水エネルギー、特殊状態に絡む効果を持つカード
- VALID_TAGS 追加、`tag_qa_entries.mjs` 同期
- リビルド → `npm run build` → `git commit` → `git push`

- [x] **32-3** 特殊状態関連タグ新設（特殊水エネルギー等の特殊状態参照カード分類）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code▗[1C▗[3C▖[1C▖[2CClaude[1CCode[1Cv2.1.143

#### Phase 32-4: カード種別参照タグ新設

「ポケモンex参照」「メガシンカex参照」など、公式のカード種別を参照する系の独自タグを統合した親タグを新設。

- 新親タグ `カード種別参照` を作成
- 既存の独立タグ「ポケモンex参照」「メガシンカex参照」等を `カード種別参照>ポケモンex` `>メガシンカex` 等のサブタグに移行
- 「ポケモンのどうぐ参照」は対象外（独立扱い）。サーチ系も対象外
- VALID_TAGS 全更新、元タグ削除、`tag_qa_entries.mjs` 同期
- リビルド → `npm run build` → `git commit` → `git push`

- [x] **32-4** カード種別参照タグ新設（ポケモンex参照等のサブタグ統合）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code▗[1C▗[3C▖[1C▖[2CClaude[1CCode[1Cv2.1.143

#### Phase 28-6: 回復>複数回復 廃止

`scripts/tag_cards.mjs` と `scripts/tag_qa_entries.mjs` の両方に適用する。

- `回復>複数回復` の該当カードが `回復>固定回復` または `回復>全回復` を持っているか確認
- 持っていない場合は適切な方（固定 or 全）を付与
- `回復>複数回復` サブタグを全削除し、VALID_TAGS からも削除
- リビルド → `npm run build` 確認 → `git commit` → `git push`

- [x] **28-6** 回復>複数回復廃止（再分類後に削除）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code╭───[1CClaude[1CCode[1Cv2.1.143[1C──────────────────...

#### Phase 28-7: Phase 28 レビュー・commit/push

廃止タグ（ワザロック・ワザロック>相手ロック・ワザロック>自己ロック、手札干渉>手札トラッシュ、手札干渉>手札参照、進化加速>山札から、特性無効、回復>複数回復）が `data/card_tags.json` と `data/qa_entry_tags.json` のどのカード/Q&A にも残っていないことを確認。`npm run build` エラーなし → 未 push 分があれば push。

- [x] **28-7** Phase 28 レビュー・廃止タグ全カード/Q&A 確認・push #claude/queue
> [!success] 2026-05-16 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code▗[1C▗[3C▖[1C▖[2CClaude[1CCode[1Cv2.1.143

#### Phase 31-7: トラッシュ回収>山札 漏れ補完

KeinMemo: 「山札のカード全て拾いきれていないと思われる。せいなるはいなど」

- 既存 `トラッシュ回収>山札` ルール（`scripts/tag_cards.mjs` 内 `§B-1-T3` 付近）を確認
- 「せいなるはい」のカードテキスト・効果を確認し、`トラッシュ回収>山札` が付与されているか調査
- 同じくトラッシュからカードを山札に戻す系で漏れているカードを横断調査（grep / 全件スキャン）
- 漏れているカードに `トラッシュ回収>山札` を付与（ルール拡張 or name-based 補完）
- `tag_qa_entries.mjs` も同期
- リビルド → `npm run build` → `git commit` → `git push`

- [x] **31-7** トラッシュ回収>山札 漏れ補完（せいなるはい等の調査・追加）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code▗[1C▗[3C▖[1C▖[2CClaude[1CCode[1Cv2.1.143


#### Phase 31-8: 進化加速 グッズ・スタジアム補完

グッズ・スタジアム種別で `進化加速` タグが漏れているカードを横断調査（rules テキストの進化関連テキストを全件スキャン）。
調査対象6件のうち、**活力の森**（スタジアム）が `進化加速>ルール制限解除` の該当と判明。
テキスト「出したばかりの番（最初の自分の番をのぞく）でもポケモンに進化できる」が、既存 regex `/最初の自分の番.{1,30}でも進化でき/` にマッチしていなかった（"でもポケモンに進化でき" の間に"ポケモンに"が挿入）。
パターンを `/最初の自分の番.{1,50}でも.{0,20}進化でき/` に拡張し、イーブイex（"には進化できない"）が誤タグされないことも確認。
活力の森 3 cardID × 進化加速・進化加速>ルール制限解除 を追加（115→118件、ルール制限解除 12→15件）。

- [x] **31-8** 進化加速 グッズ・スタジアム補完（活力の森追加・パターン拡張）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-17
#### Phase 31-8: 進化加速 グッズ・スタジアム補完

KeinMemo: 「ふしぎなアメとかのグッズやスタジアムがあるはず」

- 既存 `進化加速` タグ（28-4 で `>山札から` 廃止済み、現状は親タグのみ）の現在の付与状況を確認
- 「進化を加速するグッズ・スタジアム」系で漏れているカードを調査（ふしぎなアメ、その他）
- 該当カードに `進化加速` を付与（name-based or pattern）
- `tag_qa_entries.mjs` も同期
- リビルド → `npm run build` → `git commit` → `git push`

- [x] **31-8** 進化加速 グッズ・スタジアム補完（ふしぎなアメ等の調査・追加）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code▗[1C▗[3C▖[1C▖[2CClaude[1CCode[1Cv2.1.143

#### Phase 31-9: サーチ>スタジアム アクロマの執念 追加

KeinMemo: 「スタジアムにアクロマの執念が無い」

- 「アクロマの執念」のカードテキストを確認（公式テキストはネット参照 or PokemonCardWiki 内データ参照）。スタジアムをサーチする系であれば `サーチ>スタジアム` の付与対象
- 該当する場合、`scripts/tag_cards.mjs` の `サーチ>スタジアム` ルールに name-based か pattern を追加
- 他にも `サーチ>スタジアム` 漏れカードがないか横断確認
- `tag_qa_entries.mjs` も同期
- リビルド → `npm run build` → `git commit` → `git push`

- [x] **31-9** サーチ>スタジアム アクロマの執念追加（他漏れ確認含む）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code▗[1C▗[3C▖[1C▖[2CClaude[1CCode[1Cv2.1.143

#### Phase 32-5: ポケモンのどうぐ 整理

`ポケモンのどうぐ` タグの整理（現状サブタグは「トラッシュ」のみ）。

- 「ポケモンのどうぐ参照」に含まれるカード群の一部を `ポケモンのどうぐ>参照` サブタグへ移行
  - そのカード自体がポケモンのどうぐであるものは含めない（公式フィルターで調べられるため）
  - サーチ系は対象外（`サーチ` タグの方）
- 既存 `ポケモンのどうぐ>トラッシュ` は維持
- 「封印」相当は **32-2 で `ロック>ポケモンのどうぐ` に移行済みの想定**なので、ここでは触らない
- VALID_TAGS 更新、`tag_qa_entries.mjs` 同期
- リビルド → `npm run build` → `git commit` → `git push`

- [x] **32-5** ポケモンのどうぐ整理（>参照 サブタグ追加、参照系カードを移行）。同期更新・リビルド → git push #claude/queue
> [!success] 2026-05-16 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code▗[1C▗[3C▖[1C▖[2CClaude[1CCode[1Cv2.1.143

#### Phase 32-6: Phase 32 レビュー・commit/push

Phase 32 の全変更が反映されたか確認、廃止タグ（`相手入れ替え` 親タグ、`ポケモンいれかえ>ワザ/スタジアム/グッズ/特性/にげるコスト操作` 等）が残っていないことを確認。`npm run build` エラーなし → 未 push 分があれば push。

- [x] **32-6** Phase 32 レビュー・廃止タグ全カード/Q&A 確認・push #claude/queue
> [!success] 2026-05-16 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code▗[1C▗[3C▖[1C▖[2CClaude[1CCode[1Cv2.1.143

#### Phase 35-1: フィールド干渉 新設、エネ除去タグ削除・分散

新独自タグ「フィールド干渉」を新設し、以下のサブタグを追加する。エネ除去タグ自体は削除する。

移動先一覧:
- エネ除去>つけかえ（相手の場のエネルギーを付け替える）→ フィールド干渉>エネルギーつけかえ
- エネ除去>相手エネ除去 → フィールド干渉>エネルギートラッシュ
- エネ除去>つけかえ（自分の場のエネルギー移動）→ エネ加速>つけかえ
- エネ除去>自己コスト → 条件ダメージ
- スタジアム>トラッシュ → フィールド干渉>スタジアムトラッシュ（35-2 と合わせた設計だが、フィールド干渉側の受け皿をこのタスクで作る）
- カード種別参照>どうぐトラッシュ → フィールド干渉>どうぐトラッシュ

- [x] **35-1** 独自タグ「フィールド干渉」を新設（サブタグ: エネルギーつけかえ/エネルギートラッシュ/スタジアムトラッシュ/どうぐトラッシュ）し、エネ除去タグを削除・各サブタグを移動先へ振り分ける。カード種別参照>どうぐトラッシュもフィールド干渉>どうぐトラッシュに移動する #claude/queue
> [!success] 2026-05-17 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code╭───[1CClaude[1CCode[1Cv2.1.143[1C──────────────────...

#### Phase 35-2: スタジアム独自タグ削除（35-1 依存）

スタジアム独自タグを削除し、各サブタグを移動する。

移動先一覧:
- スタジアム>封印 → ロック>スタジアム（新設サブタグ）
- スタジアム>参照 → カード種別参照（既存タグ）
- スタジアム>トラッシュ → フィールド干渉>スタジアムトラッシュ（35-1 で新設済み）

- [x] **35-2** 独自タグ「スタジアム」を削除し、スタジアム>封印→ロック>スタジアム（新設）、スタジアム>参照→カード種別参照、スタジアム>トラッシュ→フィールド干渉>スタジアムトラッシュに移動する #claude/queue
> [!success] 2026-05-17 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code▗[1C▗[3C▖[1C▖[2CClaude[1CCode[1Cv2.1.143

#### Phase 35-3: ロック整理（ワザロック統合・サブタグ名修正・無効への分離）

- ワザロック(相手)>ワザ → ロック（サブタグなし）
- ワザロック(相手)>スタジアム → ロック>スタジアム（35-2 で新設）
- ワザロック(相手)>どうぐ → ロック>ポケモンのどうぐ
- ワザロック(相手) タグ自体を削除
- ロック>グッズロック → ロック>グッズ
- ロック>サポートロック → ロック>サポート
- ロック>ACE SPECロック → ロック>ACE SPEC
- ロック>トレーナー効果無効 → 無効>グッズ / 無効>サポート（新サブタグ）

- [x] **35-3** ワザロック(相手)をロックに統合し、ロックのサブタグ名から「ロック」の文字を除去し（グッズロック→グッズ等）、ロック>トレーナー効果無効を無効>グッズ/無効>サポートへ移動する #claude/queue
> [!success] 2026-05-17 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code▗[1C▗[3C▖[1C▖[2CClaude[1CCode[1Cv2.1.143

#### Phase 35-4: にげられない/ポケモンチェック削除・移動

- にげられない → ロック>にげられない（移動）
- にげられない（自分）→ 回復>にげられない（自分）（移動）
- ポケモンチェック → 削除し、ダメカン操作>のせるに吸収

- [x] **35-4** 独自タグ「ポケモンチェック」を削除してダメカン操作>のせるに吸収し、「にげられない」をロック>にげられないに、「にげられない（自分）」を回復>にげられない（自分）に移動する #claude/queue
> [!success] 2026-05-17 — 7[r8[?25h[?25l[?2004h[?1004h[?2031h]0;✳ Claude Code▗[1C▗[3C▖[1C▖[2CClaude[1CCode[1Cv2.1.143


#### Phase 35-5: ポケモンいれかえ>自分/味方 再分類・サーファー追加

- §1-A (>自分): ワザによる自己退場のみに絞り込み（このポケモンをベンチポケモンと入れ替えるワザ）
- §1-B (>味方): グッズ/サポート/スタジアム/特性による自由交代全般に拡張
- 移動 (>自分 → >味方): ポケモンいれかえ / スクランブルスイッチ / なみのりビーチ / ダイケンキ / メガカイリューex
- 新規追加 (>味方): サーファー（マッチ漏れ修正）

- [x] **35-5** ポケモンいれかえ>自分の分類ミスを>味方に修正し、サーファーのマッチ漏れを追加する #claude/queue
> [!success] 2026-05-17 — §1-A を「このポケモン」ワザ限定に絞り込み / §1-B に abl パターン追加・名前リスト拡張 / 自分203→31件、味方7→205件
