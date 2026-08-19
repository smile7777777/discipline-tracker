# 生活自律打卡 PWA v3

新增 LeetCode、音樂、遊戲時間與室內運動。Normal Day 仍為預設模式。

## 舊資料保留
新版仍使用 `disciplineTracker_v2` localStorage key，因此只要 GitHub Pages 網址沒有改變，舊日期紀錄會保留。舊版的 `exerciseMinutes` 也會自動當作「其他運動分鐘」讀取。

建議更新前先在舊版「設定 → 匯出備份」保存一份 JSON。

## 更新 GitHub Pages
把這個資料夾中的 `index.html`、`manifest.webmanifest`、`sw.js`、`icon-192.png`、`icon-512.png` 上傳並覆蓋 repository 根目錄的同名檔案即可。

若更新後仍看到舊畫面，等 GitHub Pages 部署完成後完全關閉主畫面 App / Safari，再重新開啟一次。
