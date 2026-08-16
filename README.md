# 生活自律打卡 PWA

## 功能
- 每日自動積分
- Normal / Life Day / Survival 模式
- 每週總分與等級
- 連續打卡天數
- 最近 14 天分數趨勢
- 月曆熱力圖
- localStorage 本機保存
- JSON 匯出 / 匯入
- PWA manifest + Service Worker
- iPhone / Android 主畫面安裝

## 本機測試
PWA 的 Service Worker 不能直接用 file:// 完整測試。
在這個資料夾執行：

python3 -m http.server 8000

然後瀏覽器開啟：
http://localhost:8000

## 放到 GitHub Pages
1. 建立一個 GitHub repository。
2. 把這個資料夾內所有檔案放到 repository 根目錄。
3. GitHub → Settings → Pages。
4. Source 選 Deploy from a branch。
5. Branch 選 main / root。
6. 等 Pages 網址出現後，用手機 Safari / Chrome 打開。
7. iPhone：分享 → 加入主畫面。

資料仍然只保存在該裝置瀏覽器的 localStorage，因此換裝置前請先「匯出備份」。
