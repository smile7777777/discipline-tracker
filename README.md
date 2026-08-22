# 生活自律打卡 PWA v4

## 新增
- 喝水 mL
- 無糖 / 含糖飲料與份數
- 女朋友從一般社交獨立
- 睡眠新增起床時間
- 精力 / 心情追蹤（不作為責備用途）
- 完整 Compiler LeetCode 頁
  - Phase 1 / 2 / 3
  - 題型篩選
  - Tier S
  - 核心概念
  - 題目掌握狀態
  - 七項真正完成標準
  - 推薦下一題
  - Phase 進度
- 評分改成連續曲線與遞減報酬
- 評分邏輯放在獨立 core.min.js，不在 UI 顯示
- 舊日期若沒有 schemaVersion=4，沿用 v3 評分，以避免歷史分數升級後跳動
- localStorage key 仍是 disciplineTracker_v2，因此舊紀錄保留

## 更新 GitHub Pages
將以下檔案全部放到原 repository root 並覆蓋舊檔：
- index.html
- app.js
- core.min.js
- sw.js
- manifest.webmanifest
- icon-192.png
- icon-512.png

然後：
git add .
git commit -m "v4 tracker"
git push origin main

GitHub Pages 會自動重新部署。

## 更新前
建議先在舊版 App：
設定 → 匯出備份

## 關於「隱藏評分」
GitHub Pages 是純前端網站，因此沒有真正私密的 server backend。
本版會把評分引擎放在獨立壓縮 JS，正常 UI 不顯示任何權重或門檻。
若要做到連瀏覽器 View Source 都看不到算法，需要之後搬到 Cloudflare Worker / Vercel Function / 其他 serverless backend。
