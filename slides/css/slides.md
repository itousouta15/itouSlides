---
theme: dracula
title: CSS 基礎
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
  layout: default
lineNumbers: false
layout: intro
---

# CSS

毛哥EM

---

## CSS 簡介

- HTML：骨架
- CSS：外觀
- JavaScript：行為

<img src="/img/CSS/骨架、外觀、行為.png" style="height:400px;display:block;margin:0 auto;" />

---

## 環境建設

1. 用 VS Code 開啟上週的資料夾，或建立新的資料夾
2. 建立一個新的 HTML 檔案
3. 輸入 `!` 再按 `Tab`
4. 建立 `<h1>` 與 `<style>`
5. 用 Live Server / Go Live 開瀏覽器開始寫 CSS

<img src="/img/CSS/Frame_11.jpg" style="height:320px;display:block;margin:0 auto;" />

---

## 環境建設

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<h1>我是標題</h1>
		<style>
		</style>
	</body>
</html>
```

---

<h2 style="color:red;">範例</h2>

```css
h1 {
    color: red;
}
```

---

## 一個 CSS 宣告包含

```css
h1 {
    color: red;
}
```

- selector：選擇器（對象）
- declaration：宣告
- property：屬性（要改的東西）
- value：屬性值

---

## CSS 基本語法

```css
選擇器 {
	屬性: 屬性值;
}
```

---

## 寫在哪裡？

- 在 HTML 建立 `<style>` 裡面（通常放在 `<head>` 裡面）
- 創一個 CSS 檔案，並連結到 HTML（`link`）

```html
<link rel="stylesheet" type="text/css" href="style.css" />
```

---

```html {3,12|7-11|14}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1{
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

## 選擇器

1. `.` - class 選擇器
2. `#` - id 選擇器
3. `*` - 全部選擇器
4. `h1` - 元素選擇器

---

## 常見選擇器

- `nav a`：後代選擇器
- `ol > li`：親代選擇器
- `nav, a`：群組選擇器
- `h1 + p`：相鄰兄弟
- `h1 ~ p`：一般兄弟
- `a[href="https://x.com"]`：屬性選擇器
- `a[href*="tuts"]`：包含某字
- `a[href^="http"]`：開頭是
- `[href$=".jpg"]`：結尾是

---

## 權重 specificity

- 權重越高，越有優先權
- 權重相等時，後寫的會蓋過前面

權重由高到低：

1. ID 選擇器
2. 類別 / 屬性 / 偽類
3. 元素 / 偽元素
4. `*` 等沒有權級的選擇符

---

## 權重 specificity

```css
#title {
	color: red;
}

.title {
	color: blue;
}

h1 {
	color: green;
}
```

- 同一個元素若同時被選到，`#title` 會贏
- 如果權重相同，後寫的會贏
- `!important` 可以硬蓋，但不要到處亂用

---

<img src="/img/CSS/image 1.png" style="display:block;margin:0 auto;" />

---

## 文字

<div style="display:flex; gap:1rem;">
<div style="font-size:1.35rem;flex:1;">

- `color`：顏色
- `font-size`：字體大小
- `letter-spacing`：字距
- `line-height`：行高
- `font-weight`：字體粗細
- `text-decoration`：文字裝飾
- `font-style`：字型
- `opacity`：透明度
- `text-align`：文字位置
- `font-family`：字體

</div>
<div style="flex:1;">

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
font-family: Arial, sans-serif;
```

</div>
</div>

---

## 文字粗細 font-weight

### 關鍵字

```css {none|1,2}
font-weight: normal; /* 正常 */
font-weight: bold; /* 粗 */
font-weight: lighter; /* 細一點 */
font-weight: bolder; /* 粗一點 */
```

### 絕對的數值

```css
font-weight: 100;
font-weight: 400; /* 正常 */
font-weight: 700; /* 粗體 */
font-weight: 900;
```

---

## text-decoration

常用於消除 [超連結]() 的藍色底線

```css {none|3}
text-decoration: underline; /* 底線 */
text-decoration: overline red; /* 上線並且是紅色 */
text-decoration: none; /* 沒有裝飾 */
text-decoration-color: #ff00ff; /* 線顏色 */
```

---

## 色色

- 顏色名稱：`red`
- RGB / RGBA：`rgb(255,0,0)`、`rgba(255,0,0,0.5)`
- HEX：`#ff0000`
- HSL / HSLA：`hsl(0,100%,50%)`
- Display P3：`color(display-p3 1 0 0 / 1)`

---

### RGB / RGBA

<span style=color:red>R</span>,<span style=color:green>G</span>,<span style=color:blue>B</span> 參數範圍為 0 ~ 255  
alpha 不透明介於 0 ~ 1 之間

```css
color: rgba(160, 32, 240, 0.5);
```

---

### HEX

十六進位（hexadecimal）

# #<span style=color:red>XX</span><span style=color:green>XX</span><span style=color:blue>XX</span>

- 黑色：`#000000`
- 白色：`#ffffff`

---

### HSL

- H：hue 色相（0 是紅色、120 是綠色、240 是藍色）
- S：saturation 飽和度
- L：lightness 明度

```css
color: hsl(0, 100%, 50%);
```

---

### HSL

<div style="color:hsl(var(--hhh), 100%, 50%)!important;">hue 色相（0 是紅色 120 是綠色 240 是藍色）</div>
<div data-id="hsl" style="background:linear-gradient(90deg,red,orange,yellow,green,blue,indigo,violet);height:100px"></div>
<input type="range" min="1" max="360" value="0" oninput="document.documentElement.style.setProperty('--hhh', this.value)" />

---

### HSL

S：saturation 飽和度

<div data-id="hsl" style="background:linear-gradient(90deg,hsl(0,100%,50%),hsl(0,50%,50%),hsl(0,0%,50%));height:100px"></div>

---
transition: fade
---

### HSL

L：lightness 明度

<div data-id="hsl" style="background:linear-gradient(90deg,hsl(0,100%,100%),hsl(0,100%,50%),hsl(0,100%,0%));height:100px"></div>

---

#### 套用到文字

```css
color: hsl(0, 100%, 50%);
```

#### 套用到背景

```css
background-color: hsl(0, 100%, 50%);
```

---

## 單位

- `px`
- `em`
- `rem`
- `vw/vh`
- `vmin/vmax`
- `%`

---
transition: fade
---

### px

相對顯示器的解析度，為絕對單位（pixel）

---
transition: fade
---

### em

相對父元素的字體大小（預設通常 16px）

---
transition: fade
---

### rem

相對根元素的字體大小（預設通常 16px）

---
transition: fade
---

### vw / vh

viewport（視口）寬 / 高

---
transition: fade
---

### vmin / vmax

- `vmin`：視窗寬高較小者的百分比
- `vmax`：視窗寬高較大者的百分比

---
transition: fade
---

### %

1. `width` 跟 `height` 的 % 基準是父層
2. `line-height` 以本身文字行高為基準

---

## 背景

### background-color

```css
background-color: #ff0000;
```

### Width / Height

```html
<div></div>
```

```css
div {
	background-color: burlywood;
	width: 200px;
	height: 200px;
}
```

<img src="/img/CSS/image 2.png" style="height:240px;display:block;margin:0 auto;" />

---

## 背景圖片

```css
background-image: url(./image/cloud.png); /* 背景圖片 */
background-repeat: no-repeat; /* 背景重複 */
background-size: cover; /* 不管有沒有全部進去，反正就是塞滿 */
background-size: contain; /* 全部塞進去 */
background-position: top left;
background-position: 20% 40%; /* 從左上開始算 */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;
background: no-repeat url('image.png');
```

---

<div style="display: flex; gap:1rem;">
<div style="flex:1;font-size:1rem">

`background-size: contain;`

<video style="width:100%;height:300px;border:2px solid #FFF" autoplay muted playsinline loop src="/img/CSS/long.webp"></video>
</div>

<div style="flex:1;font-size:1rem">

`background-size: cover;`

<video style="width:100%;height:300px;border:2px solid #FFF;object-fit: cover;object-position: top;" autoplay muted playsinline loop src="/img/CSS/long.webp"></video>
</div>

</div>

---

## 漸層

1. 漸層需要顏色跟角度
2. 最常見的漸層為 **線性漸層** 跟 **放射漸層**
3. 可以指定每個顏色的比例
4. 可以決定漸層位置跟大小

---

### 線性漸層 linear-gradient

```css
background: linear-gradient(方向, 顏色1 位置, 顏色2 位置);
```

---

### 線性漸層 linear-gradient

```css
background: linear-gradient(90deg, red, blue);
```

<div data-id="box1" style="background:linear-gradient(90deg,red,blue);height:100px"></div>

---

#### 顏色位置重疊

```css
background: linear-gradient(45deg, red 50%, blue 50%);
```

<div data-id="box1" style="background:linear-gradient(45deg, red 50%, blue 50%);height:100px"></div>

---

### 更多線性漸層寫法

```css
background: linear-gradient(#e66465, #9198e5);
background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
background: linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%);
```

---

### 放射漸層 radial-gradient

```css
background: radial-gradient(顏色1 位置, 顏色2 位置);
```

---

### 放射漸層 radial-gradient

```css
background: radial-gradient(red, blue);
```

<div data-id="box1" style="background:radial-gradient(red,blue);height:200px;width:200px;margin:auto"></div>

---

#### 指定形狀、範圍、中心位置

```css
background: radial-gradient(
    形狀 範圍 at 中心位置,
    顏色 色彩位置,
    顏色 色彩位置,
    ...
);
```

圓形

```css
background: radial-gradient(circle at center, 顏色1, 顏色2);
```

橢圓形

```css
background: radial-gradient(ellipse at center, 顏色1, 顏色2);
```

---

### 其他漸層

- `radial-gradient()`：由中心往外
- `conic-gradient()`：繞著中心旋轉放射

<img src="/img/CSS/XUupJaf.png" style="height:280px;display:block;margin:0 auto;" />

---

## border 邊框

```css
border-top: solid 10px red;
border-bottom: solid 10px red;
border-left: solid 10px red;
border-right: solid 10px red;

border-style: solid; /* 花邊，solid 是預設直線 */
border-width: 10px;
border-color: #00ff00;
border: solid 10px red; /* 縮寫 */
```

---

## border-radius 圓角

```css
border-radius: 50%;
border-radius: 16px;

border-radius: 四個角;
border-radius: 左上右下 右上左下;
border-radius: 左上 右上 右下 左下;
border-top-left-radius: 10%;
```

---

```html
<div></div>
```

```css
div {
	background-color: burlywood;
	width: 200px;
	height: 200px;
	border-radius: 16px;
	margin: 5rem;
}
```

<img src="/img/CSS/image 3.png" style="height:230px;display:block;margin:0 auto;" />

---

## border-radius 圓角

- 正方形寬高一樣時
- 給 `100px` 或 `50%` 圓角
- 就會變成圓形

<img src="/img/CSS/image 4.png" style="height:260px;display:block;margin:0 auto;" />

---

## 間距

---

<div style="display:flex; gap:1rem;">
<div style="flex:1;">

### margin

margin 是指物件與物件之間的距離，通常用來調整物件之間的間距。

</div>
<div style="flex:1;">

<div data-id="box1" style="background-color:#40a3e7;width:300px;height:100px;margin:0px auto;"></div>
<div data-id="box2" style="background-color:#40a3e7;width:300px;height:100px;margin:0px auto;"></div>

```html
<div></div>
<div></div>
```

</div>
</div>

---

<div style="display:flex; gap:1rem;">
<div style="flex:1;">

### margin

margin 是指物件與物件之間的距離，通常用來調整物件之間的間距。

</div>
<div style="flex:1;">

<div data-id="box1" style="background-color:#40a3e7;width:300px;height:100px;margin:10px auto;font-size:1rem;box-sizing:border-box;"></div>
<div data-id="box2" style="background-color:#40a3e7;width:300px;height:100px;margin:10px auto;font-size:1rem;box-sizing:border-box;"></div>

```css
margin: 10px; /* 四邊 */
margin: 10px 20px; /* 上下 左右 */
margin: 10px 20px 30px 40px; /* 上右下左 */
```

</div>
</div>

---

## margin 單邊設定

```css
margin-top: 16px;
margin-bottom: 16px;
margin-left: 16px;
margin-right: 16px;
```

<img src="/img/CSS/image 5.png" style="height:240px;display:block;margin:0 auto;" />

---

<div style="display:flex; gap:1rem;">
<div style="flex:1;">

### padding

padding 是指物件內容與邊框之間的距離，通常用來調整物件內容與邊框之間的間距。

</div>

<div style="flex:1;">

<div data-id="box1" style="background-color:#40a3e7;width:300px;height:100px;margin:10px auto;font-size:1rem;box-sizing:border-box;">
開淺色主題的都是邪教
</div>
<div data-id="box2" style="background-color:#40a3e7;width:300px;height:100px;margin:10px auto;font-size:1rem;padding:1rem;box-sizing:border-box;">
開淺色主題的都是邪教
</div>

```css
padding: 10px; /* 四邊 */
padding: 10px 20px; /* 上下 左右 */
padding: 10px 20px 30px 40px; /* 上右下左 */
```

</div>
</div>

---

## padding 範例

```html
<div>DARLING🫂HOLD MY HAND💅🏻👋🏻🥵‼️</div>
<div id="box">📢NOTHING🚫BEATS A JET2✈️ HOLIDAY 🔥🔛🔝🔝</div>
```

```css
div {
	background-color: lightblue;
	margin: 32px 16px;
}

#box {
	padding: 16px;
}
```

<img src="/img/CSS/image 6.png" style="height:230px;display:block;margin:0 auto;" />

---

## box-sizing

---
class: text-white
layout: image
image: /img/CSS/box-sizing.webp
---

---
background: /img/CSS/box-sizing.webp
class: text-white
---

### box 是什麼？

html 的每個元素都可被視作為一個盒子，然後可以針對這個盒子去做調整。

---

### box-sizing

```css {1-3}
width: 300px;
padding: 30px;
box-sizing: content-box; /* 預設值 */
box-sizing: border-box; /* padding 跟 border 會包含在內 */
```

<div data-id="box1" style="background-color:#40a3e7;width:360px;height:100px;margin:2rem auto;font-size:1rem;"></div>

---

### box-sizing

```css {1-2,4}
width: 300px;
padding: 30px;
box-sizing: content-box; /* 預設值 */
box-sizing: border-box; /* padding 跟 border 會包含在內 */
```

<div data-id="box1" style="background-color:#40a3e7;width:300px;height:100px;margin:2rem auto;font-size:1rem;"></div>

---

## box-sizing 地獄門有多大呢？

這是一個幾乘幾的地獄門呢？

<img src="/img/CSS/image 7.png" style="height:280px;display:block;margin:0 auto;" />

---

```html
<div></div>
<br />
<div id="box"></div>
```

```css
div {
	width: 100px;
	height: 100px;
	background-color: purple;
}

#box {
	border: 20px solid black;
}
```

<img src="/img/CSS/image 8.png" style="height:220px;display:block;margin:0 auto;" />

---

```css
box-sizing: content-box; /* 只算內容 */
box-sizing: border-box; /* 包含邊框 */
```

<img src="/img/CSS/image 9.png" style="height:240px;display:block;margin:0 auto;" />

---

## outline

outline 位置在 border 的外面一圈，不佔用元素的任何空間。

```css
#box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  border: 20px solid lightgreen;
  outline: 20px solid lightcoral;
}
```

<img src="/img/CSS/image 10.png" style="height:220px;display:block;margin:0 auto;" />

---

## display 你要怎麼佈局

Display 可以控制元素怎麼排。

---

## 區塊元素與行內元素

- 區塊元素：`<h1>`、`<p>`，前後會自動換行
- 行內元素：`<b>`、`<i>`，放在文字之間不會換行
- `<img>` 預設也是行內元素

<img src="/img/CSS/image 11.png" style="height:240px;display:block;margin:0 auto;" />

---

## display 常見值

- `inline`：像文字一樣排，不能決定寬高
- `block`：佔滿整排，下一個會換行
- `contents`：只保留內容，不保留自己的盒子
- `inline-block`：可以設寬高，但仍然由左到右排
- `none`：完全隱藏，也不佔空間

---

## display 常見值

```css
img {
	display: block;
}
```

<img src="/img/CSS/image 12.png" style="height:240px;display:block;margin:0 auto;" />

---

## 佈局環境

- `display: flex`：裡面東西依序左到右或上到下排列
- `display: grid`：像表格一樣排列

---

## Flexbox 超好用的容器

```html
<section>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</section>
```

```css
section {
	background: #191d88;
	padding: 5px;
}

div {
	width: 100px;
	height: 100px;
	background: #ffc436;
	margin: 20px;
}
```

<img src="/img/CSS/image 13.png" style="height:210px;display:block;margin:0 auto;" />

---

## display: flex

```css
section {
	background: #191d88;
	padding: 5px;
	display: flex;
}
```

<img src="/img/CSS/image 14.png" style="height:210px;display:block;margin:0 auto;" />

---

### 排序方向 flex-direction

```css
flex-direction: row; /* 預設左到右 */
flex-direction: row-reverse; /* 右到左 */
flex-direction: column; /* 上到下 */
flex-direction: column-reverse; /* 下到上 */
```

<img src="/img/CSS/image 15.png" style="height:220px;display:block;margin:0 auto;" />

---

### 超過換行 flex-wrap

```css
flex-wrap: nowrap; /* 不換行 */
flex-wrap: wrap; /* 太寬換行 */
flex-wrap: wrap-reverse; /* 換行但從下到上排 */
```

<img src="/img/CSS/image 16.png" style="height:160px;display:block;margin:0 auto;" /><img src="/img/CSS/image 17.png" style="height:160px;display:block;margin:0 auto;" />

---

### flex-flow

是 `flex-direction` 和 `flex-wrap` 的縮寫。

```css
.flex-container {
	flex-flow: <"flex-direction"> || <"flex-wrap">;
}
```

---

### 水平對齊 justify-content

```css
justify-content: flex-start; /* 靠左 */
justify-content: flex-end; /* 靠右 */
justify-content: center; /* 置中 */
justify-content: space-between; /* 水平均分 */
justify-content: space-around; /* 水平環繞均分 */
```

<img src="/img/CSS/justify-content.svg" style="height:220px;display:block;margin:0 auto;" />

---

### 垂直對齊 align-items

- `flex-start`
- `flex-end`
- `center`
- `stretch`
- `baseline`

<img src="/img/CSS/align-items.svg" style="height:220px;display:block;margin:0 auto;" />

---

### 多行對齊 align-content

```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```

- 是 `align-items` 的多行版本
- 注意 `stretch` 在元素高度被限制時不一定會正常伸展

---

### 單獨叛逆 align-self

```css
align-self: flex-start;
align-self: center;
align-self: flex-end;
```

- 用來讓單獨一個元素不要乖乖排隊

---

### 剩下的空間給誰？flex-grow

- 預設值為 `0`
- 1 以上會依照比例分配剩餘空間

<img src="/img/CSS/flex-grow.svg" style="height:220px;display:block;margin:0 auto;" />

---

### 沒空間壓榨誰？flex-shrink

- 預設值為 `1`
- 設定為 `0` 就不會縮

```css
flex-shrink: 1;
flex-shrink: 0;
```

---

### flex-basis 你怎麼看我

```css
flex-basis: 30cm;
```

- 排版分配空間時，可以把元素當成某個基準尺寸來算

---

### order

```css
order: -1; /* 放到最前面 */
order: 1; /* 放到最後面 */
order: 5;
```

---

## 中場練習

試著用今天學到的語法做出 Google 首頁

- 重點是排版
- 陰影、顏色可以直接用開發者工具看
- 如果 flex 還不熟，可以去玩 **Flexbox Froggy**

> 範例網站：<https://sysh-tech-volunteer.github.io/Web-Design-Camp/practice/google.html>
>
> Flexbox Froggy：<https://flexboxfroggy.com/#zh-tw>

---

## Position 東西放哪

目前我們東西排放得都很整齊，但有時候我們不希望它好好排（in flow）。

- 右下角客服按鈕
- 固定在上方的選單
- 蓋在畫面上的彈窗

<img src="/img/CSS/image 18.png" style="height:260px;display:block;margin:0 auto;" />

---

## 語法

```css
position: 屬性;
```

---

## Static

預設值，該在哪裡就在哪裡。

- 區塊元素佔整排
- 行內元素繼續往右排
- 通常不需要特別設定

---

## Relative - 解鎖偏移

設定成 `relative` 的元素可以使用 `top`、`bottom`、`left`、`right`。

- 看起來會移動
- 但還是佔據原本的位置

```css
#purple {
	position: relative;
	left: 30px;
	top: -50px;
}
```

<img src="/img/CSS/image 19.png" style="height:250px;display:block;margin:0 auto;" />

---

## Absolute - 在哪都行

設定成 `absolute` 的元素：

- 可以用 `top`、`bottom`、`left`、`right`
- 不再佔據原本位置
- 會以「最近的已定位祖先元素」作為參考點

---

```html
<div class="container">
	<div class="purple"></div>
	<div class="green"></div>
</div>
```

```css
.container {
	background-color: #e0def4;
	margin-top: 130px;
}

.purple {
	background: #ebbcba;
	position: absolute;
	left: 30px;
	top: 0;
}
```

<img src="/img/CSS/image 20.png" style="height:220px;display:block;margin:0 auto;" />

---

## Absolute + Relative

```css
.container {
	background-color: #e0def4;
	margin-top: 130px;
	position: relative;
}
```

<img src="/img/CSS/image 21.png" style="height:220px;display:block;margin:0 auto;" />

---

## Fixed - 卡在畫面上

- 以螢幕左上角為定位點
- 無論怎麼滾都待在那裡
- 常用在導覽列、回到頂端按鈕、分享按鈕

```css
nav {
	width: 100%;
	height: 100px;
	background: #E0DEF4;
	position: fixed;
	top: 0;
	left: 0;
}
```

<video style="width:100%;max-height:300px;" controls src="/img/CSS/Screen_Recording_2026-03-23_at_11.30.08_AM.mov"></video>

---

## Sticky

我們有時候希望某些東西固定在一個地方，但是只在那個 section 內固定。

```css
section {
	display: flex;
	position: relative;
}

h2 {
	flex-shrink: 0;
	position: sticky;
	top: 0;
}
```

<video style="width:100%;max-height:300px;" controls src="/img/CSS/Screen_Recording_2026-03-23_at_2.42.56_PM.mov"></video>

---

## Position 範例

<https://codepen.io/elvismao/pen/rNoYOKZ>

<img src="/img/CSS/sunny.webp" style="height:250px;display:block;margin:0 auto;" />

---

```html
<div class="sun">Fixed</div>
<div class="cloud">Static</div>
<div class="cloud relative">Relative</div>
<div class="building">
	Relative
	<div class="roof">Absolute</div>
</div>
```

```css
body {
	background: lightblue;
	text-align: center;
	font-weight: 800;
}
.sun {
	width: 100px;
	height: 100px;
	background: yellow;
	border-radius: 50%;
	position: fixed;
	right: 30px;
	top: 30px;
}
```

---

## Position 範例重點

- 太陽是 `fixed`
- 第一朵雲沒設 `position`，所以是 `static`
- 第二朵雲是 `relative`
- 建築物是 `relative`
- 屋頂是 `absolute`

<img src="/img/CSS/image_1.jpg" style="height:240px;display:block;margin:0 auto;" />

---

## Transform

原本位置還在，但可以做出旋轉、縮放、位移等效果。

```css
transform: rotate(90deg);
```

---

### Transform: translate

```css
transform: translate(往右偏移多少, 往下偏移多少);
transform: translateX(往右偏移多少);
transform: translateY(往下偏移多少);
```

- 支援負值
- `%` 的基準是元素自己的 width / height
- 最常見用法之一：把定位點改成元素正中間

---

### Translate 範例

```css
.translate {
	background-color: pink;
	transform: translate(100px, -50px);
}
```

<img src="/img/CSS/IFdDGiC.png" style="height:220px;display:block;margin:0 auto;" />

---

### 定位置中

```css
.outer {
	position: relative;
}

img {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

<img src="/img/CSS/jM1Hazt.png" style="height:220px;display:block;margin:0 auto;" />

---

## transition 轉場

當元素的屬性改變時，可以在指定時間平滑切換過去。

```css
transition: 屬性 轉換時間 延遲時間 速度;

transition: all .3s 0s ease;
transition: padding .3s 0s, background-color 1s 1s;
```

- hover
- JavaScript 改 class
- 點擊狀態變化

---

## overflow

假設元素超過容器大小，可以用 `overflow` 決定怎麼處理。

```css
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: overlay;
overflow: hidden visible;
```

---

## Media Query

Media 可以告訴瀏覽器在不同螢幕大小下該如何呈現。

```css
@media screen and (條件) and (條件) {
	/* CSS */
}
```

---

## Media Query

```css
@media (max-width: 600px) {
	h1 {
		font-size: 2rem;
	}
}
```

- 當螢幕寬度小於 600px
- `h1` 就改成較小螢幕適合的大小

---
transition: fade
---

玩得開心 (:

學習更多：<https://emtech.cc/p/webpallet-3>

Flex：<https://emtech.cc/p/2023ironman-3>

---

layout: center

---

本投影片由 [毛哥EM](https://elvismao.com/) 製作  
採用創用 CC「[姓名標示 4.0 國際](https://creativecommons.org/licenses/by/4.0/deed.zh-hant)」授權

<img src="/img/cc.svg" alt="CC" class="mx-auto" />

[毛哥EM資訊密技](https://emtech.cc/) · [毛哥EM公開簡報](https://g.elvismao.com/slides)
