---
theme: ../_shared/theme-itou
title: HTML 基礎語法
titleTemplate: "%s — itouSlides"
author: 郭家睿 itouSouta
---

# HTML 基礎語法

從零開始認識網頁的骨架

---
layout: default
---

## 目錄

- 什麼是網頁？什麼是 HTML？
- 基本文件結構
- 標題與段落
- 文字效果
- 清單
- 超連結
- 圖片
- 表格
- 表單與輸入框
- 路徑

---
layout: section
---

# 什麼是網頁？

---

## 網頁其實就是…

_可以用瀏覽器打開的文字檔_

但純文字太無聊，所以我們在文字之間加上**標記**，讓它們有不同的意義。

<br>

網站由三層組成：

| 層次 | 技術       | 負責             |
| ---- | ---------- | ---------------- |
| 骨架 | **HTML**   | 內容與結構       |
| 外觀 | CSS        | 顏色、字型、排版 |
| 行為 | JavaScript | 互動、動態效果   |

---

## HTML 是什麼？

**HyperText Markup Language**  
超文本標記語言

```html
<h1>這是標題</h1>
<p>這是一段文字</p>
```

- 用 `<標籤>` 和 `</標籤>` 包住內容
- 標籤告訴瀏覽器這個內容的**意義**
- HTML 本身不決定外觀，只決定結構

---
layout: fact
---

# pen.new

馬上開始寫 HTML，不需要安裝任何東西

---
layout: section
---

# 元素與結構

---

## 元素的組成

```
開始標籤        結束標籤
   ↓               ↓
<h1>  這是標題  </h1>
       ↑
      內容
```

<br>

整個 `<h1>這是標題</h1>` 合稱一個**元素 (element)**

---

## 基本文件結構

Emmet 快捷鍵：`!` + `Tab`

```html
<!DOCTYPE html>
<html lang="zh-Hant-TW">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>我的第一個網頁</title>
	</head>
	<body>
		<!-- 網頁內容放在這裡 -->
	</body>
</html>
```

- `<!DOCTYPE html>` — 告訴瀏覽器這是 HTML5 文件
- `<head>` — 網頁的設定，不直接顯示
- `<body>` — 實際顯示在畫面上的內容

---

## Emmet 快速輸入

不用每次都手打 `<h1></h1>`

| 打這個    | 按 Tab 後變成           |
| --------- | ----------------------- |
| `h1`      | `<h1></h1>`             |
| `p`       | `<p></p>`               |
| `a`       | `<a href=""></a>`       |
| `img`     | `<img src="" alt="" />` |
| `ul>li*3` | `<ul>` 含三個 `<li>`    |

---
layout: section
---

# 標題與段落

---

## 標題：h1 ~ h6

```html
<h1>一級標題（最重要）</h1>
<h2>二級標題</h2>
<h3>三級標題</h3>
<h4>四級標題</h4>
<h5>五級標題</h5>
<h6>六級標題（最小）</h6>
```

- 數字越小、層級越高
- 一個頁面通常只有一個 `<h1>`
- 不要為了讓字變大而跳級使用

---

## 段落與文字效果

```html
<p>
	這是一個段落。
	<b>粗體</b>
	、
	<i>斜體</i>
	、
	<s>刪除線</s>
	、
	<u>底線</u>
</p>

<p>
	化學式：H
	<sub>2</sub>
	O 數學式：x
	<sup>2</sup>
	+ 1
</p>
```

---

## 空白與換行

```html
<!-- HTML 中多個空格、換行都只算一個空格 -->
<p>第一行 第二行</p>
<!-- 顯示：第一行 第二行 -->

<!-- 要強制換行，使用 <br> -->
<p>
	第一行
	<br />
	第二行
</p>
```

> 注意：`<br>` 是**自閉合標籤**，不需要結束標籤

---
layout: section
---

# 清單

---

## 無序清單 ul

```html
<ul>
	<li>HTML</li>
	<li>CSS</li>
	<li>JavaScript</li>
</ul>
```

顯示結果：

- HTML
- CSS
- JavaScript

---

## 有序清單 ol

```html
<ol>
	<li>開啟瀏覽器</li>
	<li>輸入網址</li>
	<li>按下 Enter</li>
</ol>
```

顯示結果：

1. 開啟瀏覽器
2. 輸入網址
3. 按下 Enter

---

## 巢狀清單

```html
<ul>
	<li>
		前端
		<ul>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
		</ul>
	</li>
	<li>
		後端
		<ul>
			<li>Node.js</li>
			<li>Python</li>
		</ul>
	</li>
</ul>
```

---
layout: section
---

# 超連結與圖片

---

## 超連結 a

```html
<!-- 基本用法 -->
<a href="https://www.google.com">Google</a>

<!-- 在新分頁開啟 -->
<a href="https://www.google.com" target="_blank">Google（新分頁）</a>

<!-- 連到同一個網站的其他頁面 -->
<a href="/about">關於我們</a>

<!-- 連到頁面的某個位置 -->
<a href="#section-2">跳到第二節</a>
```

---

## 圖片 img

```html
<!-- 基本用法 -->
<img src="./images/photo.jpg" alt="風景照片" />

<!-- 網路圖片 -->
<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" />
```

- `src` — 圖片來源（路徑或網址）
- `alt` — 圖片無法顯示時的替代文字（對 SEO 和無障礙很重要）
- `<img>` 是自閉合標籤

---
layout: section
---

# 表格

---

## 表格結構

```html
<table>
	<tr>
		<th>名稱</th>
		<th>用途</th>
	</tr>
	<tr>
		<td>HTML</td>
		<td>網頁結構</td>
	</tr>
	<tr>
		<td>CSS</td>
		<td>網頁外觀</td>
	</tr>
</table>
```

| 標籤      | 說明                 |
| --------- | -------------------- |
| `<table>` | 整個表格             |
| `<tr>`    | 一列（table row）    |
| `<th>`    | 標題格（粗體、置中） |
| `<td>`    | 資料格（table data） |

---
layout: section
---

# 表單與輸入框

---

## 輸入框 input

```html
<!-- 文字輸入 -->
<input type="text" placeholder="輸入你的名字" />

<!-- 密碼（內容會被遮住） -->
<input type="password" placeholder="輸入密碼" />

<!-- 勾選框 -->
<input type="checkbox" id="terms" />
<label for="terms">我同意服務條款</label>

<!-- 單選框（同一 name 只能選一個） -->
<input type="radio" name="color" value="red" />
紅
<input type="radio" name="color" value="blue" />
藍
```

---

## 常用 input 屬性

```html
<!-- placeholder：提示文字 -->
<input type="text" placeholder="請輸入姓名" />

<!-- disabled：停用（無法互動） -->
<input type="text" disabled />

<!-- checked：預設勾選 -->
<input type="checkbox" checked />

<!-- required：必填 -->
<input type="text" required />
```

---

## 表單 form

```html
<form action="資料傳送到哪裡" method="get">
	<input type="text" name="q" placeholder="搜尋關鍵字" />
	<input type="submit" value="送出" />
</form>
```

<br>

**Google 搜尋原理：**

```html
<form action="https://www.google.com/search" method="get">
	<input type="text" name="q" placeholder="搜尋 Google" />
	<input type="submit" value="搜尋" />
</form>
```

---
layout: section
---

# 路徑

---

## 絕對路徑 vs 相對路徑

```html
<!-- 絕對路徑：完整的網址或從根目錄開始 -->
<img src="https://example.com/images/logo.png" />
<img src="/images/logo.png" />

<!-- 相對路徑：相對於目前檔案的位置 -->
<img src="./images/logo.png" />
<!-- 同一層資料夾 -->
<img src="../images/logo.png" />
<!-- 上一層再進 images -->
```

<br>

```
project/
├── index.html          ← 你在這裡
├── images/
│   └── logo.png        ← ./images/logo.png
└── pages/
    └── about.html      ← ./pages/about.html
```

---
layout: default
---

## 延伸學習

- **語意化標籤**：`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`
- **HTML5 新功能**：`<video>`, `<audio>`, `<canvas>`
- **可及性（Accessibility）**：`aria-*` 屬性、鍵盤導航
- **SEO 基礎**：`<meta>` 標籤、Open Graph

<br>

推薦資源：

- [MDN Web Docs](https://developer.mozilla.org/zh-TW/docs/Web/HTML) — 最完整的 HTML 參考文件
- [HTML 驗證器](https://validator.w3.org) — 檢查 HTML 是否符合規範

---
src: ../global/cc.md
---
