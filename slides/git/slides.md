---
theme: dracula
title: Git & GitHub 基礎
titleTemplate: "%s — 毛哥EM"
author: 毛哥EM
transition: fade
mdc: true
fonts:
  sans: LXGW WenKai TC
  serif: LXGW WenKai TC
  mono: Fira Code
htmlAttrs:
  lang: zh-Hant-TW
defaults:
  layout: intro
---

# Git & GitHub

毛哥EM

---

## 文章教學

<https://emtech.cc/p/github-and-git/>

---
layout: statement
---

你們用過 Git / GitHub 嗎？

---
layout: statement
---

「等等剛才寫錯了...可以改回來嗎？」

---
layout: statement
---

「額原本真的是這樣嗎？怎麼跑不起來了？」

---
layout: section
---

## 版本控制

---
layout: image
image: ./img/folder-1.webp
backgroundSize: contain
backgroundSize: auto 85%
---

---
layout: image
image: ./img/folder-2.webp
backgroundSize: contain
backgroundSize: auto 85%
---

---
layout: image
image: ./img/folder-3.webp
backgroundSize: contain
backgroundSize: auto 85%
---

---
layout: image
image: ./img/folder-4.webp
backgroundSize: contain
backgroundSize: auto 85%
---

---
layout: statement
---

「可以把程式碼 email 給我嗎？」

---
layout: statement
---
  
「欸等等這垃圾是誰寫的？」

---
layout: statement
---

introducing...

---
layout: statement
---

# Git

---
---

## Git 可以幹嘛？
ª
- 專案版本控制：記錄修改歷史
- 團隊協作：多人同時編輯、合併
- 回溯錯誤：回到之前正常的狀態
- Open Source

> 「哦，原來這個垃圾是我寫的。」

---

## Git 是什麼？

分散式版本控制系統（DVCS）。

- 每個人電腦都有完整專案（倉庫）
- 每次提交（commit），都像是儲存一個快照（snapshot）
- 支援離線操作

---

## 版本控制類型

- 本地端版本控制（Local VCS）
- 集中式版本控制（CVCS）
- 分散式版本控制（DVCS）

---

## Git 的邏輯

Git 就像是在寄包裹。  
GitHub 是物流中心，git 是物流。

---

- 從網上下載 → `clone`（複製整個倉庫）
- 已有倉庫、取得更新 → `pull`

---

上傳檔案，就像寄包裹：

1. 填寫寄件人資訊（只需一次）
2. `add`：選擇要傳送的資料
3. `commit`：打包並留下訊息
4. `push`：寄出去

---

## 安裝 Git

<https://git-scm.com/>

> 安裝完後請先註冊 [GitHub 帳號](https://github.com)  
> 並用 VS Code 打開一個資料夾

---

## 初始設定

打開終端機並輸入：

```bash
git config --global user.name "你的名字"
git config --global user.email "you@example.com"
```

---
layout: statement
---

我們來嘗試把今天做的網站部署到 GitHub 上！

---

## GitHub 是什麼？

☁️ 線上 Git 倉庫平台，工程師的 Facebook / 雲端硬碟

- 團隊協作
- Issue / Pull Request
- Actions 自動化
- 網頁展示（GitHub Pages）

---

## 克隆（Clone）專案

```bash
git clone https://github.com/someone/project.git
```

簡單來說：下載 repo 並自動設定好遠端

---

## 加入檔案到版本控制

```bash
git add index.html  # 加入單一檔案
git add .           # 加入所有變更
```

---

接著提交：

```bash
git commit -m "第一次提交"
```

---

## 之後每次更新...

```bash
git add .
git commit -m "更新了 XXX 功能"
git push
```

建議每個功能 / 步驟都提交一次

---

## 從遠端拉取

```bash
git pull
```

---

## 查看狀態與歷史

```bash
git status
git log --oneline
```

---

## 建立新倉庫

```bash
git init
```

建立 `.git/` 隱藏資料夾，開始版本控制

---

## Git 分支（Branch）

```bash
git branch dev      # 建立 dev 分支
git checkout dev    # 切換到 dev
git switch dev      # 現代用法
```

讓你同時開發多條功能線，不互相干擾

---

## 分支合併（Merge）

```bash
git checkout main
git merge dev
```

如果有衝突（conflict）需要手動解決再 commit

---

## 將本地倉庫推上 GitHub

```bash
# 1. 建立 GitHub repo
# 2. 加入遠端
git remote add origin https://github.com/你/repo.git
# 3. 推上去
git push -u origin main
```

---

## Pull Request

和網路上的朋友一起寫程式！

1. Fork 專案
2. 建立分支 + 編輯 + commit
3. Push 到你自己的 repo
4. 建立 Pull Request（PR）

---

## 常見指令複習

```bash
git clone <網址>
git add .
git commit -m "訊息"
git push
git pull
```

---
layout: statement
---

本投影片由 [毛哥EM](https://elvismao.com/) 製作  
採用創用 CC「[姓名標示 4.0 國際](https://creativecommons.org/licenses/by/4.0/deed.zh-hant)」授權

<img src="./img/cc.svg" alt="CC" class="mx-auto" />

[毛哥EM資訊密技](https://emtech.cc/) · [毛哥EM公開簡報](https://g.elvismao.com/slides)
