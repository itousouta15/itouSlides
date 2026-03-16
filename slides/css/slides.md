---
theme: default
title: CSS 簡介
titleTemplate: '%s · 毛哥 EM'
info: |
  將原本 Marp 教學投影片重構成較適合 Slidev 的版本。
class: text-center
transition: fade-out
mdc: true
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
fonts:
  sans: Inter, Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif
  mono: JetBrains Mono, SFMono-Regular, Menlo, monospace
css: ./styles.css
---

<div class="hero-wrap">
  <div class="eyebrow">毛哥 EM · Frontend Basics</div>
  <h1 class="hero-title">CSS 簡介</h1>
  <p class="hero-subtitle">把內容、節奏、視覺都從 Marp 重做成更適合教學的 Slidev 版本</p>

  <div class="hero-pills">
    <span>Selector</span>
    <span>Typography</span>
    <span>Color</span>
    <span>Spacing</span>
    <span>Gradient</span>
  </div>
</div>

<div class="hero-orb orb-a"></div>
<div class="hero-orb orb-b"></div>
<div class="hero-gridline"></div>

---
layout: section
---

# CSS 在做什麼？

---

# CSS 簡介

<div class="layer-stack mt-8">
  <div class="layer-card html">
    <div class="layer-kicker">HTML</div>
    <div class="layer-title">骨架</div>
    <div class="layer-body">決定頁面有哪些內容、結構怎麼排。</div>
  </div>
  <div class="layer-card css">
    <div class="layer-kicker">CSS</div>
    <div class="layer-title">外觀</div>
    <div class="layer-body">顏色、字型、留白、版面與視覺風格。</div>
  </div>
  <div class="layer-card js">
    <div class="layer-kicker">JavaScript</div>
    <div class="layer-title">行為</div>
    <div class="layer-body">互動、狀態、動畫與資料邏輯。</div>
  </div>
</div>

<div class="caption mt-6">一句話：<b>HTML 決定是什麼，CSS 決定長怎樣，JS 決定會做什麼。</b></div>

---
layout: two-cols
---

# 範例

```css {all|2}
h1 {
  color: red;
}
```

::right::

<div class="demo-surface mt-14">
  <div class="browser-top">
    <span></span><span></span><span></span>
  </div>
  <div class="demo-page">
    <div class="demo-heading red">標題變紅了</div>
    <div class="demo-note">同一段 HTML，套上 CSS 之後視覺就不一樣。</div>
  </div>
</div>

---
layout: two-cols
---

# 一個 CSS 宣告包含什麼？

<div class="token-list mt-8">
  <div v-click class="token-card"><b>selector</b><span>選擇器：要套用給誰</span></div>
  <div v-click class="token-card"><b>declaration</b><span>宣告：一組大括號內的規則</span></div>
  <div v-click class="token-card"><b>property</b><span>屬性：要改哪一個欄位</span></div>
  <div v-click class="token-card"><b>value</b><span>屬性值：改成什麼樣子</span></div>
</div>

::right::

<div class="code-annotated mt-10">
  <pre><code><span class="selector">h1</span> {
  <span class="property">color</span>: <span class="value">red</span>;
}</code></pre>
  <div class="callout s1">selector</div>
  <div class="callout s2">declaration</div>
  <div class="callout s3">property</div>
  <div class="callout s4">value</div>
</div>

---
layout: two-cols
---

# 寫在哪裡？

<div class="info-card mt-8">
  <h3>方式 1：寫在 HTML 的 &lt;style&gt;</h3>
  <p>適合小實驗、教學展示，通常放在 <code>&lt;head&gt;</code> 裡。</p>
</div>

<div class="info-card mt-4">
  <h3>方式 2：獨立成 CSS 檔案</h3>
  <p>真實專案最常見，方便重用、維護、分工。</p>
</div>

```html
<link rel="stylesheet" href="style.css" />
```

::right::

```html {3,7-11,14}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>
<body>
  <h1>標題</h1>
</body>
</html>
```

---
layout: two-cols
---

# 常見選取器

<div class="selector-grid mt-8">
  <div class="selector-chip"><code>.</code><span>class</span></div>
  <div class="selector-chip"><code>#</code><span>id</span></div>
  <div class="selector-chip"><code>*</code><span>全部</span></div>
</div>

<div class="caption mt-8">通常會優先用 <b>class</b>，因為可重複使用、也比較好維護。</div>

::right::

```html
<h1 class="title">Hello</h1>
<section id="app"></section>
<p>任何元素都可能被 * 選到</p>
```

```css
.title { color: #60a5fa; }
#app { padding: 24px; }
* { box-sizing: border-box; }
```

---
layout: two-cols
---

# 文字相關屬性

<div class="property-list mt-6">
  <div><code>color</code><span>顏色</span></div>
  <div><code>font-size</code><span>字體大小</span></div>
  <div><code>letter-spacing</code><span>字距</span></div>
  <div><code>line-height</code><span>行高</span></div>
  <div><code>font-weight</code><span>粗細</span></div>
  <div><code>text-decoration</code><span>裝飾</span></div>
  <div><code>font-style</code><span>斜體等樣式</span></div>
  <div><code>opacity</code><span>透明度</span></div>
  <div><code>text-align</code><span>對齊方式</span></div>
  <div><code>font-family</code><span>字型</span></div>
</div>

::right::

```css
color: #fff;
font-size: 10px;
letter-spacing: 2px;
line-height: 20px;
font-weight: 500;
text-decoration: none;
font-style: italic;
opacity: 0.5;
text-align: left;
font-family: "Microsoft JhengHei";
```

<div class="mini-preview mt-6">
  <div class="preview-line one">This is typography.</div>
  <div class="preview-line two">字距、粗細、透明度都會影響感覺。</div>
</div>

---
layout: two-cols
---

# font-weight 與 text-decoration

<div class="info-card mt-8">
  <h3>font-weight</h3>
  <p>可以用關鍵字，也可以用 100～900 的數值。</p>
</div>

```css
font-weight: normal;
font-weight: bold;
font-weight: 400;
font-weight: 700;
```

::right::

<div class="info-card mt-8">
  <h3>text-decoration</h3>
  <p>最常見用途：移除超連結預設底線。</p>
</div>

```css
text-decoration: underline;
text-decoration: overline red;
text-decoration: none;
text-decoration-color: #ff00ff;
```

<div class="deco-samples mt-6">
  <div class="sample underline">underline</div>
  <div class="sample overline">overline</div>
  <div class="sample none">none</div>
</div>

---
layout: two-cols
---

# 背景圖片

```css
background-image: url(./image/cloud.png);
background-repeat: no-repeat;
background-size: cover;
background-size: contain;
background-position: top left;
background-position: 20% 40%;
```

<div class="caption mt-6">重點就三件事：<b>放哪裡、要不要重複、怎麼縮放。</b></div>

::right::

<div class="bg-demo-grid mt-10">
  <div>
    <div class="bg-box contain"></div>
    <div class="bg-label">contain：完整塞進去</div>
  </div>
  <div>
    <div class="bg-box cover"></div>
    <div class="bg-label">cover：先塞滿再裁切</div>
  </div>
</div>

---
layout: section
---

# 顏色

---
layout: two-cols
---

# 顏色怎麼寫？

<div class="color-modes mt-8">
  <div class="mode-card"><b>名稱</b><span><code>red</code></span></div>
  <div class="mode-card"><b>RGB / RGBA</b><span><code>rgb(255,0,0)</code></span></div>
  <div class="mode-card"><b>HEX</b><span><code>#ff0000</code></span></div>
  <div class="mode-card"><b>HSL</b><span><code>hsl(0,100%,50%)</code></span></div>
</div>

::right::

<div class="swatch-grid mt-10">
  <div class="swatch"><span>red</span></div>
  <div class="swatch rgb"><span>rgba()</span></div>
  <div class="swatch hex"><span>#ff0000</span></div>
  <div class="swatch hsl"><span>hsl()</span></div>
</div>

---
layout: two-cols
---

# RGB / HEX / HSL

<div class="stacked-cards mt-8">
  <div class="stack-card">
    <h3>RGB / RGBA</h3>
    <p>R、G、B 範圍是 0～255；A 是透明度 0～1。</p>
    <code>rgba(160, 32, 240, 0.5)</code>
  </div>
  <div class="stack-card">
    <h3>HEX</h3>
    <p>十六進位寫法，常見像 <code>#000000</code>、<code>#ffffff</code>。</p>
  </div>
</div>

::right::

<div class="stack-card mt-8">
  <h3>HSL</h3>
  <p>Hue 色相、Saturation 飽和度、Lightness 明度。</p>
  <code>color: hsl(0, 100%, 50%);</code>
</div>

<div class="hsl-bars mt-6">
  <div class="bar hue"></div>
  <div class="bar sat"></div>
  <div class="bar light"></div>
</div>

---
layout: two-cols
---

# 理解 HSL

<div class="hsl-card mt-10">
  <div class="hsl-line"><b>H</b><span>色相：0 紅、120 綠、240 藍</span></div>
  <div class="hsl-line"><b>S</b><span>飽和度：越高越鮮豔</span></div>
  <div class="hsl-line"><b>L</b><span>明度：越高越接近白色</span></div>
</div>

::right::

<div class="interactive-look mt-8">
  <div class="bar hue"></div>
  <div class="bar sat"></div>
  <div class="bar light"></div>
  <div class="hsl-use">
    <code>color: hsl(0, 100%, 50%);</code>
    <code>background: hsl(0, 100%, 50%);</code>
  </div>
</div>

---
layout: two-cols
---

# 單位

<div class="unit-list mt-8">
  <div class="unit-card"><b>px</b><span>絕對單位，pixel</span></div>
  <div class="unit-card"><b>em</b><span>相對父元素字級</span></div>
  <div class="unit-card"><b>rem</b><span>相對根元素字級</span></div>
  <div class="unit-card"><b>vw / vh</b><span>相對視口大小</span></div>
  <div class="unit-card"><b>%</b><span>相對父層或屬性基準</span></div>
</div>

::right::

<div class="unit-visual mt-10">
  <div class="unit-row"><span>px</span><div style="width: 35%"></div></div>
  <div class="unit-row"><span>em</span><div style="width: 52%"></div></div>
  <div class="unit-row"><span>rem</span><div style="width: 60%"></div></div>
  <div class="unit-row"><span>vw</span><div style="width: 80%"></div></div>
  <div class="unit-row"><span>%</span><div style="width: 45%"></div></div>
</div>

<div class="caption mt-5">如果你想要更能跟著畫面縮放，通常會優先考慮 <b>rem</b>、<b>vw/vh</b>、<b>%</b>。</div>

---
layout: section
---

# 間距與盒模型

---
layout: two-cols
---

# margin 與 padding

<div class="info-card mt-10">
  <h3>margin</h3>
  <p>元素和元素之間的距離。</p>
</div>

```css
margin: 10px;
margin: 10px 20px;
margin: 10px 20px 30px 40px;
```

::right::

<div class="spacing-stage mt-10">
  <div class="spacing-demo margin-demo">
    <div class="space-tag outer">margin</div>
    <div class="spacing-box">內容</div>
  </div>
  <div class="spacing-demo padding-demo mt-6">
    <div class="space-tag inner">padding</div>
    <div class="spacing-box padded">內容</div>
  </div>
</div>

---
layout: two-cols
---

# box-sizing

<div class="stack-card mt-10">
  <h3>每個 HTML 元素都可以看成一個盒子</h3>
  <p>寬度、內距、邊框會一起影響最後看起來的大小。</p>
</div>

```css
width: 300px;
padding: 30px;
box-sizing: content-box;
box-sizing: border-box;
```

::right::

<div class="box-sizing-grid mt-10">
  <div class="box-model-card">
    <div class="label">content-box</div>
    <div class="outer">
      <div class="inner small"></div>
    </div>
  </div>
  <div class="box-model-card">
    <div class="label">border-box</div>
    <div class="outer fixed">
      <div class="inner full"></div>
    </div>
  </div>
</div>

<div class="caption mt-6"><b>border-box</b> 通常比較直覺，因為你設定的寬高比較接近最後看到的尺寸。</div>

---
layout: section
---

# 漸層

---
layout: two-cols
---

# 線性漸層 linear-gradient

<div class="gradient-notes mt-8">
  <div>1. 漸層至少要有 <b>方向</b> 與 <b>顏色</b></div>
  <div>2. 可以加上每個顏色停靠的位置</div>
  <div>3. 最常見是 <b>linear-gradient</b> 與 <b>radial-gradient</b></div>
</div>

```css
background: linear-gradient(90deg, red, blue);
background: linear-gradient(45deg, red 50%, blue 50%);
```

::right::

<div class="gradient-showcase mt-10">
  <div class="grad-card g1"></div>
  <div class="grad-card g2"></div>
</div>

---
layout: two-cols
---

# 放射漸層 radial-gradient

```css
background: radial-gradient(red, blue);
background: radial-gradient(circle at center, #fff, #3b82f6);
background: radial-gradient(ellipse at center, #f472b6, #0f172a);
```

<div class="caption mt-6">可以指定形狀、範圍和中心位置。</div>

::right::

<div class="radial-grid mt-8">
  <div class="radial-ball one"></div>
  <div class="radial-ball two"></div>
  <div class="radial-ball three"></div>
</div>

---
layout: center
class: text-center
---

# 小總結

<div class="summary-grid mt-8">
  <div class="summary-card"><b>選取器</b><span>先決定要改誰</span></div>
  <div class="summary-card"><b>文字</b><span>字體、粗細、對齊與裝飾</span></div>
  <div class="summary-card"><b>顏色</b><span>RGB / HEX / HSL</span></div>
  <div class="summary-card"><b>盒模型</b><span>margin / padding / box-sizing</span></div>
  <div class="summary-card"><b>背景</b><span>圖片、位置、cover / contain</span></div>
  <div class="summary-card"><b>漸層</b><span>linear / radial</span></div>
</div>

<div class="caption mt-8">只要搞懂這些，已經可以開始把一個很素的 HTML 做得像樣了。</div>

---
layout: center
class: text-center
---

# 玩得開心 :)

<div class="resource-panel mt-8">
  <a href="https://emtech.cc/p/webpallet-3" target="_blank">學習更多：WebPallet 3</a>
  <a href="https://emtech.cc/p/2023ironman-3" target="_blank">延伸閱讀：Flex 教學</a>
  <a href="https://g.elvismao.com/slides" target="_blank">毛哥 EM 公開簡報</a>
</div>

---
layout: end
---

# Credits

本投影片內容整理自原始 Marp 版本，重新編排成 Slidev 結構。  
原作者與資源：

- [毛哥 EM](https://elvismao.com/)
- [毛哥 EM 資訊密技](https://emtech.cc/)
- 採用創用 CC「[姓名標示 4.0 國際](https://creativecommons.org/licenses/by/4.0/deed.zh-hant)」授權
