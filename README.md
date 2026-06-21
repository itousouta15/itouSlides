# itouSlides

<img width="1280" height="813" alt="image" src="https://github.com/user-attachments/assets/44a04591-f695-4655-b4f4-12f0be258939" />


公開的簡報集合與展示站，使用 [Astro](https://astro.build/) 與 [Slidev](https://sli.dev/) 建置。

## Features
- 簡報首頁會自動列出所有 slide
- 支援分類篩選與深色模式切換
- 簡報內容與網站前台分離，方便維護
- 可輸出靜態網站部署到 Cloudflare Pages 或其他靜態主機

## Tech Stack

- Astro
- Slidev
- Cloudflare Workers / Static Assets
- pnpm

## Requirements

- Node.js `>= 22.12.0`
- pnpm `10.x`

## Getting Started

```bash
pnpm install
pnpm dev
```

開發模式預設會在本機啟動 Astro dev server。

## Scripts

- `pnpm dev`: 啟動本機開發伺服器
- `pnpm build`: 先產生 slide，再輸出正式站點
- `pnpm build:slides`: 只產生 slide 資料
- `pnpm preview`: 預覽 production build
- `pnpm format`: 格式化整個專案

## Project Structure

- `src/pages/`: Astro 頁面
- `src/components/`: 共用元件
- `src/layouts/`: 頁面版型
- `src/data/slides.json`: 簡報資料來源
- `slides/`: Slidev 簡報內容與共用 theme
- `build-slides.mjs`: 產生 slide 資料的建置腳本

## Deployment

這個專案以靜態網站輸出，`wrangler.jsonc` 目前對應 Cloudflare Workers / Assets 設定。

如果你要部署到 Cloudflare：

```bash
pnpm build
pnpm preview
```

再把 `dist/` 上傳到你的部署平台，或使用你自己的 Cloudflare 部署流程。

## Notes

- `astro.config.mjs` 內的 `site` 仍可能需要依你的正式網域調整。
- 若你要新增一份簡報，可以先把內容放進 `slides/`，再更新 `src/data/slides.json`。
