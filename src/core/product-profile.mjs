export const productProfile = {
  "repo": "radio-podcast-rss-archive",
  "title": "ラジオ・Podcast・RSS保存箱",
  "domain": "IoT",
  "version": "0.1.0-alpha.1",
  "rank": 54,
  "tier": "P2",
  "score": 54,
  "publicTarget": "GitHub Release / 自宅LAN",
  "overview": "番組、Podcast、RSS、BGMをPiで自動取得しLAN内で再生する。",
  "problem": "定期取得したい音声や記事をPC常時起動に頼りがち。",
  "differentiation": "Piを常時収集、PCやスマホを閲覧端末に分ける。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/simulator",
    "src/device-adapter",
    "src/host-adapter"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "実機なしで検証できるようsample telemetry、mock device、dry-run CLI、Web dashboardに閉じる。",
    "家庭LAN公開時は認証、端末allowlist、危険操作の二段階確認、ログ、復旧手順を必須にする。",
    "カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存は読み取り、匿名サンプル、dry-runを既定にする。"
  ]
};
