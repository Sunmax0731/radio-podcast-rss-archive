# 要件定義

- Repo: `radio-podcast-rss-archive`
- Domain: IoT
- Rank: 54 / P2 / Score 54
- Idea No: 17
- アイデア名: ラジオ・Podcast・RSS保存箱
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 背景
番組、Podcast、RSS、BGMをPiで自動取得しLAN内で再生する。

## 課題
定期取得したい音声や記事をPC常時起動に頼りがち。

## closed alpha要件
- LAN simulator, mock device, CLI, and web dashboardとして実機や本番外部サービスなしで代表フローを確認できる。
- `samples/representative-suite.json`で4代表シナリオを自動検証する。
- MVPだけで止めず、UI/UX、責務分割、運用、配布準備まで整備する。
- 手動テスト未実施を明記し、QCDS最高評価はS-に制限する。
