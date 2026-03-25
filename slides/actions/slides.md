---
theme: ../_shared/theme-em
title: GitHub Actions
titleTemplate: "%s — 毛哥EM"
author: 毛哥EM
---

# GitHub Actions

毛哥EM

---

## 文章教學

[emtech.cc/tag/看好了 GitHub Actions,我只示範一次](https://emtech.cc/tag/%E7%9C%8B%E5%A5%BD%E4%BA%86%20GitHub%20Actions,%E6%88%91%E5%8F%AA%E7%A4%BA%E7%AF%84%E4%B8%80%E6%AC%A1)

<img src="https://emtech.cc/static/2024ironman-1/thumbnail.webp" width="400" />

---

## 這份簡報在講什麼？

- 什麼是 GitHub Actions？
- 基本概念：Workflow / Job / Step / Runner / Action
- YAML 結構與常見語法
- 常見範例案例：
  - 自動測試（以 Node.js + pnpm 為例）
  - 自動部署（GitHub Pages / Docker）
- Secrets、安全與權限
- 進階技巧：快取、matrix、monorepo
- 最後：如何開始使用

---

## 什麼是 GitHub Actions？

- GitHub 內建的 **自動化平台**
- 用來實作：
  - CI（Continuous Integration，持續整合）
  - CD（Continuous Delivery/Deployment，持續交付/部署）
  - 其他自動化流程（標記 Issue、同步文件…）

---

### 特點

- 事件驅動（Event-driven）
- 使用 YAML 檔描述「Workflow」
- 執行環境由 GitHub 或自架 Runner 提供
- 有「Marketplace」可以拿別人寫好的 Action 用

---

## Workflow 檔案放哪裡？

`.github/workflows/<檔名>.yml`

例如：`ci.yml`

---

```yaml
name: CI

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run tests
        run: echo "你成功了！"
```

---

## 核心名詞

- **Workflow**：一個自動化流程（一個 `yml` 檔）
- **Event**：觸發 Workflow 的事件（push、PR、定時排程…）
- **Job**：Workflow 裡的一個「任務」（可以有多個 Job）
- **Step**：Job 裡的一個「步驟」（Shell 指令，或使用 Action）
- **Runner**：實際執行 Job 的機器（VM / 自己的機器）
- **Action**：可重用的「步驟模組」，可以是官方或社群維護

---

### `on:` 觸發條件（Events）

常見事件：

- `push`：推送 commit 到某分支
- `pull_request`：建立 / 更新 PR
- `workflow_dispatch`：手動在 UI 按按鈕觸發
- `schedule`：類似 crontab，定時執行
- `release`：發佈 Release 時觸發

---

範例：

```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch: {}
  schedule:
    - cron: "0 3 * * *" # 每天 UTC 03:00 執行
```

---

### Job：一個工作

- 放在 `jobs:` 底下
- 每個 Job 有：
  - `runs-on`: 要跑在哪種 Runner 上
  - `steps`: 一連串步驟
  - `needs`: 指定依賴的其他 Job
  - `strategy`: matrix 等進階設定

---

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install
      - run: pnpm test
```

---

### Steps：run vs uses

Step 有兩種常見寫法：

1. **使用現成 Action** → `uses`
2. **直接跑指令** → `run`

---

```yaml
steps:
  - name: Checkout code
    uses: actions/checkout@v4

  - name: Setup Node.js
    uses: actions/setup-node@v4
    with:
      node-version: "20"
      cache: "pnpm"

  - name: Install dependencies
    run: pnpm install

  - name: Run tests
    run: pnpm test
```

---

### Runner：執行環境

#### GitHub-hosted Runner（最常用）

- `ubuntu-latest`
- `windows-latest`
- `macos-latest`
- 預裝許多常用工具（git、Node、Python、Docker…）

---

#### Self-hosted Runner

- 自己的機器（on-prem / 自架 VM / 樹莓派…）
- 適合需要特殊硬體（GPU）或內網資源
- 在 GitHub Repo / Org 介面註冊

```yaml
runs-on: self-hosted
```

---

### Action 是什麼？

- 可重複使用的「步驟模組」
- 來源：
  - 官方：`actions/checkout`、`actions/setup-node`
  - 社群：`docker/build-push-action`
  - 自己寫（同 Repo 或獨立 Repo）
- 使用方式：`uses: owner/repo@version`

---

#### 下載與設定 Node.js

```yaml
- uses: actions/checkout@v4
- uses: actions/setup-node@v4
  with:
    node-version: "20"
```

---

## GitHub Actions YAML 基本骨架

```yaml
name: Workflow 名稱

on:
  # 觸發條件

jobs:
  job_id_1:
    name: Job 顯示名稱
    runs-on: ubuntu-latest
    steps:
      # Step 列表

  job_id_2:
    needs: job_id_1
    runs-on: ubuntu-latest
    steps:
      # Step 列表
```

---

## 範例 1：Node.js + pnpm CI

- 有 Node 專案，使用 pnpm
- 在 push / PR 時自動：安裝依賴、跑 lint + test

---

```yaml
name: Node CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "pnpm"
      - run: corepack enable
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm test
```

---

## 範例 2：部署到 GitHub Pages

每次 push 到 `main` 就自動 build，部署到 GitHub Pages

---

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "pnpm"
      - run: corepack enable
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
```

---

```yaml
deploy:
  needs: build
  runs-on: ubuntu-latest
  environment:
    name: github-pages
    url: ${{ steps.deployment.outputs.page_url }}
  steps:
    - id: deployment
      uses: actions/deploy-pages@v4
```

---

## 範例 3：Build & Push Docker

push tag 時自動 build Docker image 並推到 GHCR

---

```yaml
name: Docker Release

on:
  push:
    tags: ["v*.*.*"]

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4
      - name: Log in to GHCR
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - name: Build and push
        uses: docker/build-push-action@v6
        with:
          push: true
          tags: ghcr.io/${{ github.repository }}:${{ github.ref_name }}
```

---

## Secrets & 安全性

- Repo Settings → **Secrets and variables → Actions**
- 可以設定 `secrets.MY_SECRET`
- 也有 Org / Environment level 的 Secrets

---

### 在 Workflow 裡使用 Secrets

```yaml
env:
  API_KEY: ${{ secrets.MY_API_KEY }}

steps:
  - name: Call API
    run: curl -H "Authorization: Bearer $API_KEY" https://api.example.com
```

#### 安全建議

- 不要把 Token 寫死在 YAML / 程式碼
- 使用內建 `GITHUB_TOKEN` 搭配 `permissions:` 降低權限
- 僅讓真正需要的 Job / Environment 能讀取特定 secrets

---

## `GITHUB_TOKEN` 與 Permissions

GitHub 每個 Workflow run 會自動提供 `GITHUB_TOKEN`

建議顯式指定權限（最小權限原則）：

```yaml
permissions:
  contents: read
  pull-requests: write
  packages: write
```

---

## Cache：加速安裝依賴

Node + pnpm：

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: "20"
    cache: "pnpm"
```

通用快取：

```yaml
- uses: actions/cache@v4
  with:
    path: ~/.pnpm-store
    key: pnpm-${{ runner.os }}-${{ hashFiles('pnpm-lock.yaml') }}
    restore-keys: |
      pnpm-${{ runner.os }}-
```

---

## Artifacts：上傳 / 下載產物

上傳：

```yaml
- uses: actions/upload-artifact@v4
  with:
    name: junit-report
    path: reports/junit.xml
```

下載：

```yaml
- uses: actions/download-artifact@v4
  with:
    name: junit-report
    path: ./reports
```

---

## Matrix：一次測多個環境

```yaml
jobs:
  test:
    strategy:
      fail-fast: false
      matrix:
        node-version: [18, 20]
        os: [ubuntu-latest, windows-latest]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - run: corepack enable
      - run: pnpm install
      - run: pnpm test
```

自動跑：(18, ubuntu) / (20, ubuntu) / (18, windows) / (20, windows)

---

## Monorepo 小技巧

- 用 `paths` / `paths-ignore` 過濾觸發
- 多個 Job / matrix 搭配 package 名稱

```yaml
on:
  push:
    branches: [main]
    paths:
      - "apps/web/**"
      - ".github/workflows/**"
```

---

## 除錯

- 失敗的 Job → 點進去看 Logs
- 可以重新跑單一 Job 或整個 Workflow
- `ACTIONS_STEP_DEBUG` Secret 開更詳細 Log
- 本地模擬：`nektos/act`

---

## 最佳實務

- 把 Workflow 拆小：CI / Release / Deploy 分開
- 重用：使用「可重用 Workflow」（`workflow_call`）
- 版本固定：`uses: actions/checkout@v4`，不用 `@main`
- 多用 `permissions:` & Secrets
- 善用 Marketplace，不要重造輪子

---

## 如何開始上手？

1. 打開你的 GitHub Repo
2. 點上方 **Actions** 分頁
3. 從官方範本建立或手動新增 `.github/workflows/ci.yml`
4. 一邊 commit，一邊看 Actions tab 裡的執行結果
5. 漸進式增加：CI → Release → Deploy → 各種自動化

---

## 小結

- GitHub Actions：GitHub 內建、事件驅動的自動化平台
- 核心組成：Workflow / Event / Job / Step / Runner / Action
- 可以用來：自動測試、自動部署、自動發版、Issue/PR 自動化
- 只要會寫一點 YAML，就能讓專案從「手動」升級到「自動化」

---


---
layout: statement
---

本投影片由 [毛哥EM](https://elvismao.com/) 製作  
採用創用 CC「[姓名標示 4.0 國際](https://creativecommons.org/licenses/by/4.0/deed.zh-hant)」授權

<img src="./img/cc.svg" alt="CC" class="mx-auto" />

[毛哥EM資訊密技](https://emtech.cc/) · [毛哥EM公開簡報](https://g.elvismao.com/slides)
