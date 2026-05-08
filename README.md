# radio-podcast-rss-archive

ラジオ・Podcast・RSS保存箱 の closed alpha prototype。番組、Podcast、RSS、BGMをPiで自動取得しLAN内で再生する。

## Status

- Version: 0.1.0-alpha.1
- Rank: 54 / P2 / Score 54
- Domain: IoT
- Public target: GitHub Release / 自宅LAN
- Manual testing: not run by Codex

## Included

- LAN simulator, mock device, CLI, and web dashboard
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.
