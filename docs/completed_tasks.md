# Completed Tasks

Maintained by Foreman/Scribe.
- **Unreported**: Scribe appends here on task success. Review with user, then move to Archive.
- **Archive**: Reported to user.

---

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

## Unreported

(Foremanが完了・Gardenerがまだユーザーへ報告していないタスク)

- [x] **21-4** `frontend/app/components/CardModal.tsx` の右パネルに「採用デッキ」セクションを追加。`data/deck_index.json` を fetch し、表示中カードの master_id に対応するアーキタイプ上位5件を採用率降順で表示する。各行: アーキタイプ名・採用率バー（%）・limitlesstcg リンクボタン。採用デッキがない場合はセクション自体を非表示。表示位置は Q&A セクションの上。`npm run build` → `git add` → `git commit` → `git push`。**採用率バーの仕様**: バー幅は絶対値（100%=満幅）ではなく、表示中の上位5件の最高値を満幅とする相対スケール（例: 最高82%なら82%のバーが満幅、64%は64/82≈78%幅）。これにより差異が視覚的に強調される。
> [!success] 2026-05-05 — 完了。変更点は1箇所のみ — バー幅の計算を `Math.min(deck.share, 100)%` から `(deck.share / maxShare) * 100%` に変更しました。上位5件の最高採用率が常に満幅になり、差異...

- [x] **18-2（改）** tag_cards.mjs タグ体系刷新（廃止＋新規追加）
> [!success] 2026-05-05 — 完了です。変更内容のまとめ：

- [x] **18-4** フロントエンド公式分類フィルター実装（カラートークン定義含む）
> [!success] 2026-05-05 — 実装完了。変更の概要：

- [x] **18-6** CardModal タグ表示実装（tagColors.ts 流用）
> [!success] 2026-05-05 — 実装完了です。変更の概要:

