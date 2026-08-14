# 🚀 快速部署指南 | Quick Deployment Guide

## 方法一：使用 Git 命令行（推薦）

### 1️⃣ 在 GitHub 建立 Repository
- 登入 GitHub → 點擊右上角 `+` → **New repository**
- Repository name 填寫：`Artifactconservationhk`
- 設為 **Public**
- 勾選 ✅ **Add a README file**
- 點擊 **Create repository**

### 2️⃣ 將本資料夾內容上傳
```bash
# 進入專案資料夾
cd Artifactconservationhk

# 初始化 Git（如果尚未初始化）
git init

# 設定遠端 Repository（替換為你的 GitHub 用戶名）
git remote add origin https://github.com/YOUR-USERNAME/Artifactconservationhk.git

# 添加所有檔案
git add .

# 提交
git commit -m "Initial commit: ArtifactConservationHK website"

# 推送到 GitHub
git push -u origin main
```

### 3️⃣ 啟用 GitHub Pages
1. 進入 Repository → **Settings** 頁籤
2. 左側選單點擊 **Pages**
3. **Source** 選擇 `main` branch
4. **Folder** 選擇 `/ (root)`
5. 點擊 **Save**

約 1-2 分鐘後，你的網站就會在以下網址上線：
```
https://YOUR-USERNAME.github.io/Artifactconservationhk/
```

---

## 方法二：直接上傳檔案（不用 Git）

1. 在 GitHub 建立 Repository（同上步驟）
2. 進入 Repository → 點擊 **Add file** → **Upload files**
3. 將以下 5 個檔案拖拽上傳：
   - `index.html`
   - `styles.css`
   - `script.js`
   - `favicon.svg`
   - `.github/workflows/deploy.yml`（需先建好資料夾結構）
4. 點擊 **Commit changes**
5. 同樣到 **Settings → Pages** 啟用 GitHub Pages

---

## ✏️ 後續修改內容

### 修改文字內容
直接用文字編輯器打開 `index.html`，找到對應的 `<span class="zh">中文</span>` 和 `<span class="en">English</span>` 進行修改。

### 修改顏色主題
打開 `styles.css`，修改 `:root` 區塊的顏色變數：
```css
--color-primary: #6B3A2A;      /* 主色 - 深棕 */
--color-accent: #C49A3C;       /* 強調色 - 金色 */
--color-secondary: #2C5F7C;    /* 輔色 - 深藍 */
```

### 修改聯絡資訊
在 `index.html` 中搜尋 `info@artifactconservationhk.org` 替換為你的真實電郵。

---

## 🔧 自訂網域（進階）

如果你想使用自己的網域（如 `www.artifactconservation.hk`）：
1. 在 Repository 根目錄建立 `CNAME` 檔案（無副檔名）
2. 內容只寫你的網域名稱，例如：`www.artifactconservation.hk`
3. 到你的網域註冊商後台，新增一筆 CNAME 紀錄指向 `YOUR-USERNAME.github.io`
4. GitHub Pages 設定頁面填入你的網域並勾選 **Enforce HTTPS**

---

## ❓ 常見問題

**Q: 網站顯示 404？**
A: 確認 GitHub Pages 已啟用，且 `index.html` 放在根目錄。

**Q: 修改後網站沒更新？**
A: GitHub Pages 快取約 1-5 分鐘，稍等再重新整理（可試 Ctrl+Shift+R 強制刷新）。

**Q: 可以加更多頁面嗎？**
A: 可以！建立新的 `.html` 檔案（如 `about.html`），然後在 `index.html` 的導航列加入連結即可。

---

有任何問題歡迎隨時詢問！🙌
