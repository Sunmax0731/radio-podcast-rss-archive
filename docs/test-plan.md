# テスト計画

- Repo: `radio-podcast-rss-archive`
- Domain: IoT
- Rank: 54 / P2 / Score 54
- Idea No: 17
- アイデア名: ラジオ・Podcast・RSS保存箱
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\IoT\radio-podcast-rss-archive`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/radio-podcast-rss-archive-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
