---
theme: ../_shared/theme-itou
title: 第四天 陣列、字串
titleTemplate: "%s — itouSlides"
author: 邱皇愷
---

# 第四天 陣列、字串

大里 APCS 營隊 · 一次裝起一大堆資料

邱皇愷

<!--
今天是「最後一天教新東西」，明天就是實戰了。節奏一樣是「教一段、練一題」，共 5 題。

今天的核心訊息：**陣列 + 迴圈 + if 三個工具合體**。前三天的東西今天全部會用到，要不斷回頭指認。

如果進度落後，優先砍：分組討論 → 隨堂小測驗 → 第 14 題（九宮格，最難）。字串那段不能砍，明天的題目會用到。
-->

---
layout: default
---

## 今天的目標

- 學會**一維陣列**：宣告、初始化、走訪
- 用陣列找**最大值 / 最小值**、計算**平均**
- 認識**二維陣列**：矩陣加總、九宮格
- 處理**字串**：長度、字元走訪、子字串與迴文
- 每教完一段，馬上到 itouOJ 練一題，完成 Day4 的 5 題

<!--
不用逐條唸。重點講「一維陣列 → 二維陣列 → 字串」這個順序，還有「今天 5 題」。
-->

---
layout: section
---

# 開場暖身

<!--
過場。
-->

---

## 回顧昨天

<v-clicks>

- 迴圈三元素：初始值、條件、更新
- 累加從 0、累乘從 1，變數放在迴圈外面
- 巢狀迴圈執行次數是外層 × 內層
- 今天要學的，是讓一個名字能裝**一整排**資料

</v-clicks>

<!--
前三條快速帶過。

重點在第四條：**今天要讓一個名字裝「一整排」資料**。這是今天最核心的一句話。
-->

---

## 暖身問題（不用寫程式）

如果要記錄全班 30 個人的分數，用昨天學的方式，你會需要宣告幾個變數？這樣做有什麼不方便？

<div class="mt-6 text-sm opacity-70">

想 30 秒，等一下公佈參考答案。

</div>

<!--
給 30 秒。這個問題的設計很好——讓他們自己感受到「30 個變數」的荒謬。

可以追問：「那如果是全校 1000 個人呢？」把痛感放大。
-->

---

## 暖身問題：參考答案

<v-clicks>

- 照昨天的做法，要宣告 30 個變數：`s1, s2, s3, ... s30`
- 不方便的地方：要找最大值得寫 30 個 `if`；要全部印出來得寫 30 行 `cout`
- 更慘的是，昨天教的**迴圈**沒辦法套用在這 30 個各自獨立的變數上
- 需要一種方式，讓「一整排資料」可以用**一個名字 + 編號**存取

</v-clicks>

<div class="mt-6 border-l-4 border-green-500 pl-4" v-click>

這就是**陣列**——今天的主角。有了陣列，昨天學的迴圈就能拿來「一次處理一整排資料」，兩個技巧合體威力大增。

</div>

<!--
四條慢慢講。

**第三條是關鍵洞察**：昨天教的迴圈**沒辦法**套用在 30 個各自獨立的變數上。這解釋了為什麼光有迴圈還不夠。

綠框那句要講滿：**有了陣列，昨天的迴圈就能拿來一次處理一整排資料，兩個技巧合體威力大增**。
-->

---

## 今天會不斷用到「昨天 + 前天」的技巧

<div class="grid grid-cols-3 gap-3 text-center text-sm">
  <div class="border-t-4 border-blue-400 pt-2">
    <div class="font-bold">Day2</div>
    <div class="opacity-70">if / else 做決定</div>
  </div>
  <div class="border-t-4 border-green-500 pt-2">
    <div class="font-bold">Day3</div>
    <div class="opacity-70">迴圈重複做事</div>
  </div>
  <div class="border-t-4 border-orange-500 pt-2">
    <div class="font-bold">Day4（今天）</div>
    <div class="opacity-70">陣列裝一整排資料</div>
  </div>
</div>

<div class="mt-4 text-sm opacity-70" v-click>

三個技巧疊在一起：**用迴圈走訪陣列，過程中用 if 做判斷**，這正是今天所有題目共同的模式。

</div>

<!--
三格圖給他們看整個累積。

最後那句是今天所有題目的共同模式：**用迴圈走訪陣列，過程中用 if 做判斷**。

這句話今天會不斷回收，先種在他們腦裡。
-->

---
layout: section
---

# 一維陣列

<!--
過場。
-->

---

## 為什麼需要陣列？

要存 5 個學生的分數，難道要宣告 5 個變數？

```cpp
int s0, s1, s2, s3, s4;   // 😩 那 1000 個學生呢？
```

用陣列：

```cpp
int score[5];             // 一次宣告 5 個整數的格子
```

<div class="grid grid-cols-5 gap-2 my-6 text-center font-mono">
  <div><div class="border-2 border-blue-500 py-4">90</div><div class="text-sm mt-1 opacity-70">[0]</div></div>
  <div><div class="border-2 border-blue-500 py-4">85</div><div class="text-sm mt-1 opacity-70">[1]</div></div>
  <div><div class="border-2 border-blue-500 py-4">78</div><div class="text-sm mt-1 opacity-70">[2]</div></div>
  <div><div class="border-2 border-blue-500 py-4">92</div><div class="text-sm mt-1 opacity-70">[3]</div></div>
  <div><div class="border-2 border-blue-500 py-4">88</div><div class="text-sm mt-1 opacity-70">[4]</div></div>
</div>

> 索引（index）**從 0 開始**，`int score[5]` 的最後一格是 `score[4]`。

<!--
那個 😩 表情就是要的效果。

五格圖要指著講，特別是下面的 `[0] [1] [2] [3] [4]`。

最後那句引言是今天最容易出錯的地方：**索引從 0 開始，`int score[5]` 的最後一格是 `score[4]`**。
-->

---

## 為什麼索引從 0 開始

<v-clicks>

- 陣列在記憶體裡是**連續**的一塊空間
- 索引其實代表「從第一格開始，往後跳幾格」
- 第一格本身不用跳，所以是 `[0]`；跳一格是 `[1]`……
- 這是 C++（以及大多數程式語言）的慣例，習慣了就不會覺得奇怪

</v-clicks>

<!--
這張是解釋原理，趕時間可以跳過。

如果講，重點在第二、三條：**索引代表「往後跳幾格」，第一格不用跳所以是 0**。

理解原理的人比死背的人不容易犯差一錯誤。
-->

---

## 宣告與初始化

```cpp
int a[5] = {90, 85, 78, 92, 88};   // 宣告同時給值
int b[5] = {};                     // 全部初始化為 0

cout << a[0];   // 90
cout << a[4];   // 88

a[2] = 100;     // 修改
```

<div class="mt-4 text-sm opacity-70">

存取和修改陣列元素的方式完全一樣：`陣列名[索引]`。

</div>

<!--
`int b[5] = {};` 全部歸零這個寫法很實用，之後計數陣列會一直用到（明天 Day5 也會用）。

快速帶過。
-->

---

## 存取超出範圍會怎樣

```cpp
int a[5] = {90, 85, 78, 92, 88};
cout << a[5];    // ⚠️ 沒有這一格！
cout << a[-1];   // ⚠️ 也沒有這一格！
```

<div class="mt-4 border-l-4 border-red-500 pl-4 text-sm">

`a[5]`、`a[-1]` 是**未定義行為**——不會有清楚的錯誤訊息，只會讀到隔壁記憶體的垃圾資料，或直接讓程式當掉（RE）。這是陣列最危險的地方：**編譯器不會幫你檢查索引對不對**。

</div>

<!--
**今天第一個大坑。**

關鍵：**編譯器不會幫你檢查索引對不對**——這跟前幾天「編譯器會抓錯」的印象相反，要特別強調。

後果是未定義行為：讀到垃圾、或直接 RE。沒有清楚的錯誤訊息，很難除錯。
-->

---

## 陣列開多大：寧可多開，不要剛好

```cpp
int n;             // 題目說 n ≤ 1000
cin >> n;
int a[1005];        // ← 開得比上限大一點
```

<div class="mt-4 border-l-4 border-yellow-500 pl-4 text-sm">

多開幾格幾乎不花任何成本，但少開一格就會踩到未定義行為。養成習慣：**看到題目的上限，開的陣列大小要比它更大一點**。

</div>

<!--
實用建議：**看到題目上限，開得比它更大一點**。

「多開幾格幾乎不花成本，少開一格就踩雷」——成本效益很明顯。

這條 Day5 的檢查清單會再出現。
-->

---

## 用迴圈走訪陣列

```cpp
int n;
cin >> n;
int a[1005];

for (int i = 0; i < n; i++) {    // 讀進來
    cin >> a[i];
}
for (int i = 0; i < n; i++) {    // 走一遍
    cout << a[i] << " ";
}
```

<div class="mt-4 text-sm opacity-70">

昨天學的 `for` 迴圈，配上陣列的索引，就能一次處理一整排資料。 **迴圈變數 `i` 剛好可以當成陣列的索引來用。**

</div>

<!--
**今天最重要的一張。**

關鍵句：**迴圈變數 `i` 剛好可以當成陣列的索引來用**。

這就是「陣列 + 迴圈」合體的那一刻，值得停久一點。可以說：「昨天教的 for，今天終於知道為什麼那麼重要了。」
-->

---

## 小測驗：迴圈條件對不對？

```cpp
int n = 5;
int a[10];
for (int i = 0; i <= n; i++) {
    cin >> a[i];
}
```

這段程式有什麼問題？

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">

**差一錯誤**：條件是 `i <= n`，會跑 `i = 0` 到 `i = 5`，共讀入 **6 個**值，但 n 只有 5 個。應該用 `i < n`（或 `i <= n-1`）才對。

</div>

</v-click>

<!--
考差一錯誤。回收昨天的內容。

答案：`i <= n` 會讀 6 個，應該用 `i < n`。

這個錯誤今天會有人真的犯，先預防。
-->

---

## 找最大值與最小值

```cpp
int mx = a[0], mn = a[0];        // 先假設第 0 個既是最大也是最小
for (int i = 1; i < n; i++) {
    if (a[i] > mx) mx = a[i];    // 比目前的大就更新
    if (a[i] < mn) mn = a[i];    // 比目前的小就更新
}
```

<br>

> 還記得第二天的「三數取最大」嗎？同樣的招式，換成迴圈跑陣列。

<!--
回收 Day2 的「三數取最大」——同樣的招式，換成迴圈跑陣列。

要明確指出這個連結，讓他們感受到知識是累積的，不是每天重來。

注意迴圈從 `i = 1` 開始（因為 `i = 0` 已經當起始值了）。
-->

---

## 起始值陷阱：為什麼不能用 0

```cpp
int mx = 0;                       // ❌ 危險！
for (int i = 0; i < n; i++) {
    if (a[i] > mx) mx = a[i];
}
```

<div class="mt-4 border-l-4 border-red-500 pl-4 text-sm">

如果整個陣列都是**負數**（例如 `-5, -3, -8`），沒有一個數字比 0 大， `mx` 會一直卡在 0，變成錯誤答案。**起始值一定要設成 `a[0]`**，用「陣列裡真實存在的值」開始比較才安全。

</div>

<!--
**今天第二個大坑，也是最重要的一個。**

用具體例子講：陣列全是負數 `-5, -3, -8`，沒有一個比 0 大，`mx` 會卡在 0。

結論：**起始值一定要用 `a[0]`，用「陣列裡真實存在的值」開始比較才安全**。

這條 Day5 的程式碼健檢會再考一次。
-->

---

## 計算總和與平均

```cpp
long long sum = 0;
for (int i = 0; i < n; i++) {
    sum += a[i];
}
cout << sum << endl;
cout << (double)sum / n << endl;   // 平均要轉型
```

<div class="mt-4 text-sm opacity-70">

累加的招式跟昨天完全一樣，只是把「數字」換成「陣列裡的每一格」。求平均別忘了第二天教的整數除法陷阱。

</div>

<!--
累加招式跟昨天一樣，只是換成陣列的每一格。

提醒平均要轉型——回收 Day2 的整數除法陷阱。

`long long` 下一張會解釋。
-->

---

## 為什麼總和要用 `long long`

<v-clicks>

- `int` 的範圍大約是 ±21 億
- 如果陣列有 1000 個數字，每個都接近 int 上限，加起來很容易**超出 int 範圍**
- 這種情況叫**溢位（overflow）**，算出來的總和會變成錯誤的數字，而且不會報錯
- 遇到「很多數字加總」的題目，養成習慣改用 `long long`（範圍大很多）

</v-clicks>

<!--
「溢位」是新名詞，要講清楚。

關鍵：**算出來會變成錯誤的數字，而且不會報錯**——又是一個「能跑但是錯」的例子。

實用建議：**遇到「很多數字加總」的題目，養成習慣用 `long long`**。
-->

---

## 小測驗：這樣寫對嗎？

```cpp
int a[5] = {3, -7, 2, -9, 5};
int mx = 0;
for (int i = 0; i < 5; i++) {
    if (a[i] > mx) mx = a[i];
}
cout << mx;
```

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">

**不對**。這裡最大值應該是 `5`，但因為起始值設成 `0`，而 `5 > 0` 成立，剛好矇對了。如果最大值是負的（例如全部都是負數），就會錯誤地印出 `0`。

</div>

</v-click>

<!--
這題設計得很好——答案是「不對，但剛好矇對」。

要講清楚這個區分：**這次剛好答案是正的所以對了，但如果全是負數就會錯**。

「剛好對」不等於「寫對」，這個觀念很重要。
-->

---

## 練習：追蹤找最大值

```cpp
int a[4] = {5, 2, 9, 3};
int mx = a[0];
for (int i = 1; i < 4; i++) {
    if (a[i] > mx) mx = a[i];
}
```

自己列表格，追蹤每一輪 `mx` 的變化。

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">

| i    | a[i] | a[i] &gt; mx？ | mx  |
| ---- | ---- | -------------- | --- |
| 開始 | —    | —              | 5   |
| 1    | 2    | 否             | 5   |
| 2    | 9    | 是             | 9   |
| 3    | 3    | 否             | 9   |

最終 `mx = 9`。

</div>

</v-click>

<!--
讓他們自己列表格，給 2 分鐘。

回收 Day3 教的「卡住就手動跑一遍」。
-->

---

## 陣列常見錯誤總複習

<div class="text-sm">

| 錯誤         | 長什麼樣子              | 怎麼避免                         |
| ------------ | ----------------------- | -------------------------------- |
| 索引差一錯誤 | `i <= n` 卻該用 `i < n` | 想清楚是「幾個」還是「到第幾個」 |
| 陣列開太小   | `int a[n]` 剛好卡在上限 | 開得比題目上限大一點             |
| 起始值設 0   | 找最大值卻全是負數      | 起始值用 `a[0]`，不要用 0        |
| 溢位         | 總和超過 int 範圍       | 總和用 `long long`               |

</div>

<!--
四個錯誤的對照表，叫他們拍照。

四個都是今天會遇到的，先給他們一張除錯地圖。
-->

---
layout: section
---

# 練習時間

<!--
過場。
-->

---

## 第 12 題　最大最小平均

輸入 n 個整數，輸出最大值、最小值、平均值（**四捨五入至小數點後 2 位**）。

<div class="grid grid-cols-2 gap-4 my-4 font-mono text-sm">
  <div class="border border-gray-400 border-opacity-40 p-3">
    <div class="opacity-60 text-xs mb-1">輸入</div>5<br/>3 7 2 9 4
  </div>
  <div class="border border-gray-400 border-opacity-40 p-3">
    <div class="opacity-60 text-xs mb-1">輸出</div>9<br/>2<br/>5.00
  </div>
</div>

<!--
第一題實作，綜合了今天前半段所有內容。

注意輸出是**三行**，而且平均要**固定兩位小數**。
-->

---

## 第 12 題　讀題

<v-clicks>

- 輸入是 n，再來一整排 n 個整數
- 輸出**三行**：最大值、最小值、平均值
- 平均值要**固定兩位小數**，就算剛好整除也要印 `.00`

</v-clicks>

<!--
三條讓他們自己回答。

第三條是最容易漏的：**就算剛好整除也要印 `.00`**（5 要輸出 `5.00`）。
-->

---

## 第 12 題　規劃骨架

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[1005];
    for (int i = 0; i < n; i++) cin >> a[i];
    // 這裡找最大最小、算平均
    return 0;
}
```

<!--
快速帶過。注意陣列開 1005（比上限大一點，剛剛才教過）。
-->

---

## 第 12 題　邊走訪邊記錄

```cpp
int mx = a[0], mn = a[0];
long long sum = 0;
for (int i = 0; i < n; i++) {
    if (a[i] > mx) mx = a[i];
    if (a[i] < mn) mn = a[i];
    sum += a[i];
}
```

<div class="mt-4 text-sm opacity-70">

一個迴圈裡同時做三件事：比大小找最大、比大小找最小、順便累加。不需要為每件事各寫一個迴圈。

</div>

<!--
**一個迴圈同時做三件事**——這個觀念要點出來。

不需要為找最大、找最小、算總和各寫一個迴圈。這是效率也是簡潔度。
-->

---

## 第 12 題　輸出固定兩位小數

```cpp
#include <cstdio>   // ← printf 需要這個
// ...
cout << mx << endl << mn << endl;
printf("%.2f\n", (double)sum / n);
```

<div class="mt-4 border-l-4 border-red-500 pl-4 text-sm">

⚠️ 平均要**固定兩位小數**：5 要輸出 `5.00`，不是 `5`。 `printf("%.2f")` 是最簡單的做法，記得先 `#include <cstdio>`。

</div>

<!--
`printf("%.2f")` 對他們是新東西，但不用深講，當成「固定格式的工具」用就好。

紅框要強調：**5 要輸出 `5.00`，不是 `5`**。這是這題最容易 WA 的地方。

記得 `#include <cstdio>`。
-->

---

## 第 12 題　完整程式

```cpp
#include <iostream>
#include <cstdio>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[1005];
    for (int i = 0; i < n; i++) cin >> a[i];

    int mx = a[0], mn = a[0];
    long long sum = 0;
    for (int i = 0; i < n; i++) {
        if (a[i] > mx) mx = a[i];
        if (a[i] < mn) mn = a[i];
        sum += a[i];
    }
    cout << mx << endl << mn << endl;
    printf("%.2f\n", (double)sum / n);
    return 0;
}
```

<!--
給他們對答案。
-->

---
layout: fact
---

# 動手做

打開 [oj.itousouta.me → 課程 Day4 → 第 12 題](https://oj.itousouta.me/problems/22)

寫到 AC 為止，再往下聽

<!--
預留 15 分鐘。

助教下場。常見卡點：
1. `mx` / `mn` 起始值設 0（剛講過，還是會有人犯）
2. 平均沒有固定兩位小數 → WA
3. 忘記 `#include <cstdio>` → CE
-->

---
layout: section
---

# 二維陣列基礎

<!--
過場。
-->

---

## 二維陣列：像表格一樣

```cpp
int m[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

<div class="my-6 flex justify-center">
  <table class="font-mono text-center">
    <tr>
      <td class="opacity-50 px-3 text-sm">　</td>
      <td class="opacity-50 px-3 text-sm">j=0</td>
      <td class="opacity-50 px-3 text-sm">j=1</td>
      <td class="opacity-50 px-3 text-sm">j=2</td>
    </tr>
    <tr>
      <td class="opacity-50 px-3 text-sm">i=0</td>
      <td class="border-2 border-blue-500 px-6 py-2">1</td>
      <td class="border-2 border-blue-500 px-6 py-2">2</td>
      <td class="border-2 border-blue-500 px-6 py-2">3</td>
    </tr>
    <tr>
      <td class="opacity-50 px-3 text-sm">i=1</td>
      <td class="border-2 border-blue-500 px-6 py-2">4</td>
      <td class="border-2 border-blue-500 px-6 py-2">5</td>
      <td class="border-2 border-green-500 px-6 py-2">6</td>
    </tr>
    <tr>
      <td class="opacity-50 px-3 text-sm">i=2</td>
      <td class="border-2 border-blue-500 px-6 py-2">7</td>
      <td class="border-2 border-blue-500 px-6 py-2">8</td>
      <td class="border-2 border-blue-500 px-6 py-2">9</td>
    </tr>
  </table>
</div>

`m[1][2]` = **6**。第一個 `i` 是「第幾**列**」，第二個 `j` 是「第幾**行**」。

<!--
表格圖很清楚，指著講。

**關鍵口訣：第一個 `i` 是列、第二個 `j` 是行。**

`m[1][2] = 6` 讓他們自己在圖上找一次，確認理解。
-->

---

## 二維陣列其實是「陣列的陣列」

<v-clicks>

- 一維陣列是一排格子；二維陣列是**一排「一排格子」**
- `m[3][3]` 可以想成：先有 3 個一維陣列，每個裡面又有 3 格
- 存取時要給**兩個**索引：先選第幾排（列），再選那一排裡的第幾格（行）

</v-clicks>

<!--
補充理解，趕時間可跳。

「一排『一排格子』」這個說法可以幫助理解。
-->

---

## 走訪二維陣列：巢狀迴圈

```cpp
int n, m;
cin >> n >> m;
int a[105][105];

for (int i = 0; i < n; i++) {       // 每一列
    for (int j = 0; j < m; j++) {   // 每一行
        cin >> a[i][j];
    }
}
```

<br>

> 昨天學的巢狀迴圈，在這裡正好派上用場。讀入、走訪、加總——二維陣列的一切都是這個雙層 for。

<!--
回收昨天的巢狀迴圈——**昨天學的東西今天正好派上用場**。

最後那句引言：**讀入、走訪、加總——二維陣列的一切都是這個雙層 for**。給他們一個穩定的模板。
-->

---

## 二維陣列開多大

```cpp
int a[105][105];    // 如果 n, m ≤ 100，兩維都要開大一點
```

<div class="mt-4 border-l-4 border-yellow-500 pl-4 text-sm">

二維陣列要**兩個維度都**開得比上限大，只開對一邊沒有用。題目說 n, m ≤ 100，兩維都至少要開 101 以上。

</div>

<!--
提醒：**兩個維度都要開大，只開對一邊沒有用**。

這個錯誤不常見但很難查，先預防。
-->

---

## 練習：追蹤二維陣列走訪

```cpp
int m[2][2] = {{1, 2}, {3, 4}};
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
        cout << m[i][j] << " ";
    }
}
```

會依序印出哪些數字？

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">

**`1 2 3 4`**——外層 `i=0` 時，內層 `j` 跑 0,1，印出 `m[0][0]=1`、`m[0][1]=2`；外層 `i=1` 時同樣跑一輪，印出 `m[1][0]=3`、`m[1][1]=4`。

</div>

</v-click>

<!--
讓他們自己想，給 1 分鐘。

答案 `1 2 3 4`。重點是理解走訪順序：先跑完第 0 列，再跑第 1 列。
-->

---

## 小測驗：這是第幾列第幾行？

```cpp
int m[4][4];
// ...
cout << m[2][0];
```

`m[2][0]` 存取的是第幾列、第幾行（從 0 算起）？

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">**第 2 列、第 0 行**。第一個索引永遠是列，第二個永遠是行。</div>

</v-click>

<!--
考「第一個是列、第二個是行」。

快問快答。
-->

---
layout: section
---

# 練習時間

<!--
過場。
-->

---

## 第 13 題　矩陣加總

輸入 n × m 的矩陣，輸出所有元素總和。

<div class="grid grid-cols-2 gap-4 mb-3 font-mono text-sm">
  <div class="border border-gray-400 border-opacity-40 p-3">
    <div class="opacity-60 text-xs mb-1">輸入</div>2 3<br/>1 2 3<br/>4 5 6
  </div>
  <div class="border border-gray-400 border-opacity-40 p-3">
    <div class="opacity-60 text-xs mb-1">輸出</div>21
  </div>
</div>

<!--
題目很單純，但下一張的思考才是重點。
-->

---

## 第 13 題　想清楚：需要真的開陣列嗎？

<v-clicks>

- 題目只要「總和」，不需要之後再用到矩陣裡個別的值
- 既然如此，**邊讀邊加**就好，不必開一個二維陣列存起來
- 這是很重要的判斷力：**先想清楚題目要什麼，再決定要不要開資料結構**

</v-clicks>

<!--
**這張是今天最重要的思維訓練，比題目本身重要。**

三條慢慢講。第三條是通則：**先想清楚題目要什麼，再決定要不要開資料結構**。

呼應 Day3 第 9 題「不是每個表格都需要巢狀迴圈」——都是在訓練「不要看到關鍵字就套模板」。
-->

---

## 第 13 題　程式

```cpp
int n, m;
cin >> n >> m;

long long sum = 0;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
        int x;
        cin >> x;
        sum += x;        // ← 讀進來馬上加，不用存
    }
}
cout << sum << endl;
```

<div class="mt-4 border-l-4 border-yellow-500 pl-4 text-sm">

會用二維陣列不代表每次都要用；先想清楚題目要什麼。

</div>

<!--
`sum += x;` 讀進來馬上加，不用存。

指出來：這裡連陣列都沒開，但題目照樣解出來了。
-->

---

## 第 13 題　如果真的開了陣列也不算錯

```cpp
int a[105][105];
for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++) cin >> a[i][j];

long long sum = 0;
for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++) sum += a[i][j];
```

<div class="mt-4 text-sm opacity-70">

這樣寫**也會 AC**，只是多寫了一個用不到的陣列，多跑一次迴圈。兩種寫法都對，差別只在效率和簡潔度——先求對，再求好。

</div>

<!--
**這張的態度很重要**：兩種寫法都對，開陣列也會 AC。

最後那句要講：**先求對，再求好**。不要讓他們因為「寫得不夠漂亮」而不敢交。
-->

---
layout: fact
---

# 動手做

打開 [oj.itousouta.me → 課程 Day4 → 第 13 題](https://oj.itousouta.me/problems/23)

寫到 AC 為止，再往下聽

<!--
預留 10 分鐘。這題應該最快。

助教下場，重點提醒用 `long long` 存總和。
-->

---
layout: section
---

# 二維陣列進階

<!--
過場。
-->

---

## 同一個迴圈，同時走列與行

```cpp
for (int i = 0; i < 3; i++) {
    int row = 0, col = 0;
    for (int j = 0; j < 3; j++) {
        row += a[i][j];    // 第 i 列
        col += a[j][i];    // 第 i 行
    }
}
```

<div class="mt-4 border-l-4 border-yellow-500 pl-4 text-sm">

`a[i][j]` 和 `a[j][i]` 只差在索引順序 —— 一個走列、一個走行，可以用**同一個迴圈**同時處理，不用寫成兩段。之後檢查九宮格會直接用到這個技巧。

</div>

<!--
**這是個很漂亮的技巧，值得停下來欣賞。**

關鍵：`a[i][j]` 和 `a[j][i]` **只差在索引順序**——一個走列、一個走行。

用手在表格上比劃：橫著走 vs 直著走。

黃框最後一句是伏筆：**等一下九宮格會直接用到**。
-->

---
layout: section
---

# 練習時間

<!--
過場。
-->

---

## 第 14 題　九宮格驗證（幻方）

輸入 3×3 方格，判斷每列、每行、兩條對角線的總和是否**全部相等**。

<div class="grid grid-cols-2 gap-6">
<div class="font-mono text-center text-sm">
  <table class="mx-auto">
    <tr><td class="border border-gray-400 px-4 py-2">4</td><td class="border border-gray-400 px-4 py-2">9</td><td class="border border-gray-400 px-4 py-2">2</td></tr>
    <tr><td class="border border-gray-400 px-4 py-2">3</td><td class="border border-gray-400 px-4 py-2">5</td><td class="border border-gray-400 px-4 py-2">7</td></tr>
    <tr><td class="border border-gray-400 px-4 py-2">8</td><td class="border border-gray-400 px-4 py-2">1</td><td class="border border-gray-400 px-4 py-2">6</td></tr>
  </table>
  <div class="mt-2 opacity-70">每列、每行、對角線都 = 15</div>
</div>
<div class="text-sm">

要檢查 **8 條線**：

- 3 條列
- 3 條行
- 2 條對角線

</div>
</div>

<!--
今天最難的一題。先講明白這題比較複雜。

那個 4 9 2 / 3 5 7 / 8 1 6 的幻方可以讓他們自己驗算幾條線，確認都是 15——親手算過比較有感覺。

強調要檢查 **8 條線**。
-->

---

## 第 14 題　讀題：這題要檢查什麼

<v-clicks>

- 3 條**列**：每一列三個數字加起來
- 3 條**行**：每一行三個數字加起來
- 1 條**主對角線**：左上到右下
- 1 條**反對角線**：右上到左下
- 全部 8 條線的總和都要**等於同一個數**，才輸出 `Magic`

</v-clicks>

<!--
五條列清楚：3 列 + 3 行 + 2 對角線 = 8 條。

讓他們數一次，確認是 8 不是 6。
-->

---

## 第 14 題　為什麼不能只檢查列？

<div class="text-sm">

如果只檢查 3 條列的總和相等，會不會誤判？

</div>

<v-click>

<div class="mt-6 border-l-4 border-red-500 pl-4">

**會**。每列總和相等，不代表行和對角線也相等——例如把某一列的數字順序打亂，列總和不變，但行的總和就會跟著錯。 **8 條線都要檢查，缺一不可。**

</div>

</v-click>

<!--
**這張在教「為什麼需求是這樣」，不只是照做。**

先問他們「只檢查列夠不夠？」讓他們猜。

答案是不夠，並解釋原因：把某列數字打亂，列總和不變但行會錯。
-->

---

## 第 14 題　定基準：以第一列為標準

```cpp
int a[3][3];
for (int i = 0; i < 3; i++)
    for (int j = 0; j < 3; j++) cin >> a[i][j];

int target = a[0][0] + a[0][1] + a[0][2];   // 以第一列為基準
bool ok = true;
```

<div class="mt-4 text-sm opacity-70">

先算出第一列的總和當作「標準答案」，之後每一條線都跟它比對，只要有一條不一樣，就代表不是幻方。

</div>

<!--
策略講清楚：**先算第一列當「標準答案」，之後每條線都跟它比**。

這是一個通用的解題策略（定基準再比對），值得點出來。
-->

---

## 第 14 題　同時檢查列與行

```cpp
for (int i = 0; i < 3; i++) {
    int row = 0, col = 0;
    for (int j = 0; j < 3; j++) {
        row += a[i][j];    // 第 i 列
        col += a[j][i];    // 第 i 行
    }
    if (row != target || col != target) ok = false;
}
```

<!--
回收第 44 張的技巧，這裡實際用上了。

一個迴圈同時算 `row` 和 `col`，很漂亮。
-->

---

## 第 14 題　檢查兩條對角線

```cpp
if (a[0][0] + a[1][1] + a[2][2] != target) ok = false;   // 主對角線
if (a[0][2] + a[1][1] + a[2][0] != target) ok = false;   // 反對角線

cout << (ok ? "Magic" : "Not Magic") << endl;
```

<div class="mt-4 text-sm opacity-70">

對角線只有兩條，數量固定，直接手動列出來比迴圈更簡單清楚。

</div>

<!--
最後那句是實用的判斷：**數量固定只有兩條，直接手寫比用迴圈更簡單清楚**。

不是所有東西都要寫成迴圈——這也是一種判斷力。
-->

---

## 第 14 題　完整程式

```cpp
int a[3][3];
for (int i = 0; i < 3; i++)
    for (int j = 0; j < 3; j++) cin >> a[i][j];

int target = a[0][0] + a[0][1] + a[0][2];
bool ok = true;

for (int i = 0; i < 3; i++) {
    int row = 0, col = 0;
    for (int j = 0; j < 3; j++) { row += a[i][j]; col += a[j][i]; }
    if (row != target || col != target) ok = false;
}
if (a[0][0] + a[1][1] + a[2][2] != target) ok = false;
if (a[0][2] + a[1][1] + a[2][0] != target) ok = false;

cout << (ok ? "Magic" : "Not Magic") << endl;
```

<!--
給他們對答案。這題程式碼比較長，讓他們慢慢對。
-->

---
layout: fact
---

# 動手做

打開 [oj.itousouta.me → 課程 Day4 → 第 14 題](https://oj.itousouta.me/problems/24)

寫到 AC 為止，再往下聽

<!--
預留 20 分鐘，這題最花時間。

助教下場。常見卡點：
1. 漏掉對角線（只檢查列和行）
2. 反對角線的索引寫錯（`a[0][2] + a[1][1] + a[2][0]`）
3. `ok` 忘記初始化成 true

寫不完的人可以先跳過，晚點回來。
-->

---
layout: fact
---

# ☕ 中場休息

15 分鐘後回來，我們進入「字串」

<!--
15 分鐘。

上半場（陣列）資訊量很大，這個休息不要省。

預告：「下半場是字串，會比較輕鬆一點，而且跟陣列非常像。」
-->

---
layout: section
---

# 字串基礎

<!--
過場。
-->

---

## 字串就是一串字元

```cpp
string s = "APCS";
```

<div class="grid grid-cols-4 gap-2 my-6 text-center font-mono max-w-md">
  <div><div class="border-2 border-purple-500 py-4 text-xl">A</div><div class="text-sm mt-1 opacity-70">s[0]</div></div>
  <div><div class="border-2 border-purple-500 py-4 text-xl">P</div><div class="text-sm mt-1 opacity-70">s[1]</div></div>
  <div><div class="border-2 border-purple-500 py-4 text-xl">C</div><div class="text-sm mt-1 opacity-70">s[2]</div></div>
  <div><div class="border-2 border-purple-500 py-4 text-xl">S</div><div class="text-sm mt-1 opacity-70">s[3]</div></div>
</div>

```cpp
cout << s.size();   // 4  （長度）
cout << s[0];       // A  （像陣列一樣用索引取字元）
```

> `string` 其實就是「一排 `char`」，走訪方式跟陣列一模一樣。

<!--
**今天下半場最重要的一句話：`string` 其實就是「一排 `char`」，走訪方式跟陣列一模一樣。**

這句話一講，他們就會發現字串不是新東西，是陣列的應用。這會大幅降低學習壓力。

`s.size()` 和 `s[0]` 兩個用法要記住。
-->

---

## 讀入字串

```cpp
string s;
cin >> s;               // 讀一個「單字」（遇到空白就停）
```

<div class="mt-4 border-l-4 border-yellow-500 pl-4 text-sm">

`cin >>` 讀字串時，遇到空白或換行就會停止。如果字串裡有空格（例如一整句話），要改用 `getline(cin, s)` 讀一整行。今天的題目都是單字，用 `cin >>` 就好。

</div>

<!--
重點：**`cin >>` 遇到空白就停**。

今天的題目都是單字，用 `cin >>` 就好。`getline` 只是先知道有這個東西。
-->

---

## `cin >>` vs `getline`：差在哪

<div class="grid grid-cols-2 gap-4 text-sm">
  <div class="border-2 border-blue-500 p-4">
    <div class="font-bold mb-2"><code>cin &gt;&gt; s</code></div>
    只讀到第一個空白為止。<br/>
    輸入 <code>hello world</code> 只會讀到 <code>hello</code>
  </div>
  <div class="border-2 border-green-500 p-4">
    <div class="font-bold mb-2"><code>getline(cin, s)</code></div>
    讀一整行，包含中間的空白。<br/>
    輸入 <code>hello world</code> 會完整讀到
  </div>
</div>

<div class="mt-4 text-sm opacity-70">

今天的 5 題輸入都不含空白，用 `cin >>` 就足夠。之後遇到「一整句話」的輸入格式時，記得改用 `getline`。

</div>

<!--
左右對照很清楚。

`hello world` 只讀到 `hello` 這個例子很具體。

最後那句：今天 5 題都不含空白，用 `cin >>` 就夠。不要讓他們現在就糾結 getline。
-->

---

## 走訪字串的每個字元

```cpp
for (int i = 0; i < s.size(); i++) {
    cout << s[i] << " ";
}

for (char c : s) {      // 比較簡潔的寫法
    cout << c << " ";
}
```

<div class="mt-4 text-sm opacity-70">

兩種寫法效果一樣。第二種叫「range-based for」，讀作「對 s 裡的每個字元 c」，不用自己管索引，看到就直接記住這個寫法即可。

</div>

<!--
兩種寫法都給。

`for (char c : s)` 是新語法，說明讀作「對 s 裡的每個字元 c」，**看到就直接記住這個寫法即可**，不用深究原理。

明天 Day5 的題目會用到這個寫法。
-->

---

## 字串比對與串接

```cpp
string a = "abc", b = "abc", c = "xyz";

cout << (a == b);            // 1   直接用 == 比較
string full = a + c;         // abcxyz
```

<div class="mt-4 text-sm opacity-70">

C++ 的 `string` 可以直接用 `==` 比較、用 `+` 串接，比 C 語言方便很多。

</div>

<!--
`==` 和 `+` 可以直接用，這對他們是好消息。

快速帶過。
-->

---

## `substr`：取一段字串

```cpp
string s = "programming";
cout << s.substr(0, 4);     // prog   從索引 0 取 4 個字元
cout << s.substr(4, 3);     // ram    從索引 4 取 3 個字元
cout << s.substr(7);        // ming   從索引 7 取到最後
```

<div class="mt-4 text-sm opacity-70">

`substr(起點, 長度)`——長度可以省略，代表取到字串結尾。等一下子字串搜尋那題會大量用到。

</div>

<!--
`substr(起點, 長度)`——三個例子涵蓋了常見用法。

第三個（省略長度 = 取到結尾）要特別點出來，Q9 會考。

預告：**等一下子字串搜尋那題會大量用到**。
-->

---

## 應用：統計字元

計算字串裡有幾個母音（a, e, i, o, u）。

```cpp
string s;
cin >> s;
int count = 0;

for (char c : s) {
    if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u') {
        count++;
    }
}
cout << count;
```

<!--
母音統計，是 `for (char c : s)` 的實際應用。

那串 `c=='a'||c=='e'||...` 有點長但很直覺，快速帶過。

（明天 Day5 會學到用計數陣列做更漂亮的統計，這裡先用最直接的寫法。）
-->

---

## 字元也可以拿來比較大小

```cpp
char c = 'd';
cout << (c >= 'a' && c <= 'z');   // 1，判斷是不是小寫字母
```

<div class="mt-4 text-sm opacity-70">

字元在電腦裡本質上是數字，所以可以直接用 `>=`、`<=` 比較， `'a'` 到 `'z'` 剛好是連續的一段數字，這個技巧之後判斷英文字母時很好用。

</div>

<!--
**這張是明天的重要伏筆。**

關鍵：**字元在電腦裡本質上是數字**，`'a'` 到 `'z'` 是連續的一段。

明天 Day5 的 `cnt[c - 'A']` 就是建立在這個概念上，今天先種下。
-->

---

## 小測驗：這樣走訪對嗎？

```cpp
string s = "hi";
for (int i = 0; i <= s.size(); i++) {
    cout << s[i];
}
```

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">

**不對**，又是差一錯誤。`s.size()` 是 2，條件 `i <= 2` 會讓 `i` 跑到 2，但合法索引只有 `s[0]`、`s[1]`，`s[2]` 已經超出範圍。應該用 `i < s.size()`。

</div>

</v-click>

<!--
又是差一錯誤，這次發生在字串上。

答案：`i <= s.size()` 會超出範圍，應該用 `i < s.size()`。

差一錯誤今天已經出現三次了（陣列、字串），可以點出這個模式。
-->

---

## 小測驗：substr 用法

```cpp
string s = "itousouta";
cout << s.substr(4, 4);
```

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">**`sout`**——從索引 4（第 5 個字元 `s`）開始，取 4 個字元。</div>

</v-click>

<!--
`s.substr(4, 4)` = `sout`。

讓他們自己數索引，練習「從 0 開始數」。
-->

---
layout: section
---

# 練習時間

<!--
過場。
-->

---

## 第 15 題　子字串搜尋

輸入字串 s 與 t，判斷 t 是否為 s 的連續一段。

<div class="my-3 font-mono text-sm text-center">
p r o <span class="border-2 border-green-500 px-1">g r a m</span> m i n g　　找 <span class="border-2 border-green-500 px-1">gram</span> → Yes
</div>

<!--
題目用顏色標出來很清楚。

先讓他們想 1 分鐘：怎麼判斷 `gram` 在不在 `programming` 裡？
-->

---

## 第 15 題　想法：每個起點都試一次

<v-clicks>

- 從 s 的每一個位置開始，切出跟 t 一樣長的一段
- 拿這一段跟 t 比對，一樣就是找到了
- 起點不能太後面——剩下的長度要**至少跟 t 一樣長**才夠切

</v-clicks>

<!--
三條就是完整演算法。

**第三條最關鍵**：起點不能太後面，剩下的長度要至少跟 t 一樣長。這是這題最容易寫錯的地方。
-->

---

## 第 15 題　用範例走一次

<div class="text-sm">

`s = "programming"`，`t = "gram"`（長度 4）

</div>

| 起點 i | s.substr(i, 4) | 等於 t？ |
| ------ | -------------- | -------- |
| 0      | `prog`         | 否       |
| 1      | `rogr`         | 否       |
| 2      | `ogra`         | 否       |
| 3      | `gram`         | ✅ 是！  |

<div class="mt-4 text-sm opacity-70">

找到後立刻 `break`，不用把剩下的起點都試完。

</div>

<!--
**一定要走這張表**，光看程式碼很難懂。

一列一列走，讓他們看到 i=3 時終於配對成功。

最後那句：找到就 `break`（回收 Day3）。
-->

---

## 第 15 題　程式

```cpp
string s, t;
cin >> s >> t;

bool found = false;
for (int i = 0; i + t.size() <= s.size(); i++) {
    if (s.substr(i, t.size()) == t) { found = true; break; }
}
cout << (found ? "Yes" : "No") << endl;
```

<div class="mt-4 border-l-4 border-yellow-500 pl-4 text-sm">

迴圈條件是 `i + t.size() <= s.size()`——起點不能太後面，否則剩下的長度不夠比。找到就用 `break` 提早結束，不用試完所有起點。

</div>

<!--
迴圈條件 `i + t.size() <= s.size()` 是重點，用手指著講。

黃框把兩個重點都講到了：條件的意義 + break 提早結束。
-->

---

## 第 15 題　也可以這樣寫

```cpp
cout << (s.find(t) != string::npos ? "Yes" : "No") << endl;
```

<div class="mt-4 text-sm opacity-70">

`s.find(t)` 是 `string` 內建的搜尋功能，找不到會回傳特殊值 `string::npos`。兩種寫法效果一樣，今天先知道自己動手寫的版本在做什麼，之後熟悉了可以改用這個更精簡的寫法。

</div>

<!--
`s.find(t)` 是內建做法，一行解決。

態度要拿捏好：**先知道自己動手寫的版本在做什麼，之後熟悉了再用精簡寫法**。不要讓他們覺得剛剛白學了。
-->

---

## 第 15 題　常見錯誤：迴圈條件寫錯

```cpp
for (int i = 0; i < s.size(); i++) {         // ❌ 少考慮 t 的長度
    if (s.substr(i, t.size()) == t) { ... }
}
```

<div class="mt-4 border-l-4 border-red-500 pl-4 text-sm">

如果 `i` 太靠近 s 的尾端，`s.substr(i, t.size())` 會**取不滿** t 的長度（字串長度不夠時 `substr` 只會回傳剩下的部分），導致比對永遠不相等，或在某些情況下引發例外。條件一定要包含 `i + t.size() <= s.size()` 的檢查。

</div>

<!--
承接第 70 張，示範漏掉 `t.size()` 的後果。

`substr` 在長度不夠時只會回傳剩下的部分 → 比對永遠不相等。
-->

---
layout: fact
---

# 動手做

打開 [oj.itousouta.me → 課程 Day4 → 第 15 題](https://oj.itousouta.me/problems/25)

寫到 AC 為止，再往下聽

<!--
預留 15 分鐘。

助教下場。常見卡點：
1. 迴圈條件漏掉 `+ t.size()`
2. `substr` 的第二個參數寫成結束位置而不是長度
-->

---
layout: section
---

# 雙指標技巧

<!--
過場。
-->

---

## 雙指標：從頭尾往中間夾

<div class="my-4 text-center font-mono text-lg">
l&nbsp;&nbsp;e&nbsp;&nbsp;v&nbsp;&nbsp;e&nbsp;&nbsp;l<br/>
<span class="text-sm opacity-70">↑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br/>頭尾往中間夾</span>
</div>

```cpp
int i = 0, j = s.size() - 1;
while (i < j) {
    // 比較 s[i] 跟 s[j]
    i++; j--;
}
```

<div class="mt-4 text-sm opacity-70">

這個技巧叫**雙指標**：兩個位置同時往中間移動，只要走到一半（`i < j` 不成立）就能檢查完整個字串。等一下迴文判斷就是雙指標最經典的應用。

</div>

<!--
**今天最後一個新技巧，而且很優雅。**

那個 `level` 加上兩個箭頭的圖很清楚，指著講。

關鍵：**兩個位置同時往中間移動，只要走到一半就檢查完整個字串**。
-->

---
layout: section
---

# 練習時間

<!--
過場。
-->

---

## 第 16 題　迴文判斷

輸入字串，判斷正著讀和反著讀是否相同。

<div class="my-4 text-center font-mono text-lg">
l&nbsp;&nbsp;e&nbsp;&nbsp;v&nbsp;&nbsp;e&nbsp;&nbsp;l
</div>

<div class="grid grid-cols-2 gap-4 my-4 font-mono text-sm">
  <div class="border border-gray-400 border-opacity-40 p-3">
    <div class="opacity-60 text-xs mb-1">輸入</div>level
  </div>
  <div class="border border-gray-400 border-opacity-40 p-3">
    <div class="opacity-60 text-xs mb-1">輸出</div>Yes
  </div>
</div>

<!--
「迴文」這個詞要解釋一下（正著讀反著讀一樣）。

可以舉中文的例子：「上海自來水來自海上」。
-->

---

## 第 16 題　想法：套用雙指標

<v-clicks>

- 一個指標 `i` 從最前面開始，一個指標 `j` 從最後面開始
- 比較 `s[i]` 跟 `s[j]`，不一樣就不是迴文
- 一樣的話，`i` 往後移、`j` 往前移，繼續比對
- 直到 `i` 跟 `j` 在中間相遇（或錯過）為止

</v-clicks>

<!--
四條就是完整演算法，直接套用剛教的技巧。
-->

---

## 第 16 題　程式

```cpp
string s;
cin >> s;

bool ok = true;
int i = 0, j = s.size() - 1;
while (i < j) {
    if (s[i] != s[j]) { ok = false; break; }
    i++; j--;                          // 兩邊一起往中間走
}
cout << (ok ? "Yes" : "No") << endl;
```

<div class="mt-4 text-sm opacity-70">

只要走一半就能得到答案，比「反轉整個字串再比對」更快，而且不需要額外開一個字串來存反轉的結果。

</div>

<!--
最後那句是這個技巧的價值：**只要走一半，而且不需要額外開一個字串存反轉結果**。

比「反轉整個字串再比對」更快也更省。
-->

---

## 第 16 題　逐步追蹤 "level"

| 步驟 | i   | j   | s[i] | s[j] | 相等？    |
| ---- | --- | --- | ---- | ---- | --------- |
| 1    | 0   | 4   | l    | l    | ✅        |
| 2    | 1   | 3   | e    | e    | ✅        |
| 3    | 2   | 2   | —    | —    | i=j，停止 |

<div class="mt-4 text-sm opacity-70">

`i` 跟 `j` 相遇時（`i < j` 不再成立），代表已經檢查完整個字串，中間那個字元不需要跟自己比。

</div>

<!--
奇數長度的追蹤表。

重點：**中間那個字元不需要跟自己比**，所以 `i = j` 時就停。
-->

---

## 第 16 題　偶數長度也適用嗎？

`s = "abba"` 追蹤一次：

| 步驟 | i   | j   | s[i] | s[j] | 相等？       |
| ---- | --- | --- | ---- | ---- | ------------ |
| 1    | 0   | 3   | a    | a    | ✅           |
| 2    | 1   | 2   | b    | b    | ✅           |
| —    | 2   | 1   | —    | —    | i&gt;j，停止 |

<div class="mt-4 text-sm opacity-70">

偶數長度時 `i` 會直接**跳過** `j`（`i > j`），不會有兩個指標相等的情況，但迴圈條件 `i < j` 一樣正確處理了這種情況，不需要特別分兩種寫法。

</div>

<!--
**這張在教邊界思考，很重要。**

偶數長度時 `i` 會直接跳過 `j`（`i > j`），但條件 `i < j` 一樣正確處理。

結論：**不需要特別分兩種寫法**。好的迴圈條件會自然涵蓋所有情況。
-->

---
layout: fact
---

# 動手做

打開 [oj.itousouta.me → 課程 Day4 → 第 16 題](https://oj.itousouta.me/problems/26)

寫到 AC 為止——今天 5 題全部完成！

<!--
今天最後一次實作，預留 15 分鐘。

目標：**今天 5 題全部 AC**。

助教下場。常見卡點：
1. `j` 初始值寫成 `s.size()` 而不是 `s.size() - 1`
2. 忘記 `i++; j--;`（無窮迴圈 → TLE）
-->

---
layout: fact
---

# 🍱 短暫休息

10 分鐘後回來，做綜合小考

<!--
10 分鐘。時間不夠可砍。
-->

---
layout: section
---

# 隨堂小測驗

<!--
過場。今天 10 題，時間不夠可以只問 Q1、Q2、Q3、Q5。
-->

---

## Q1

`int a[5];` 合法的索引範圍是多少？

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">**`a[0]` 到 `a[4]`**，總共 5 格。</div>

</v-click>

<!--
考索引範圍。`a[0]` 到 `a[4]`。
-->

---

## Q2

找陣列最大值時，起始值為什麼要設成 `a[0]` 而不是 `0`？

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">因為陣列可能**全部是負數**，這種情況下沒有任何值比 0 大，
起始值設 0 會讓答案永遠錯誤地停在 0。</div>

</v-click>

<!--
考起始值陷阱。今天最重要的觀念之一。
-->

---

## Q3

`m[2][3]` 存取的是第幾列、第幾行？

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">**第 2 列、第 3 行**。第一個索引是列，第二個是行。</div>

</v-click>

<!--
考列 / 行的順序。
-->

---

## Q4

`s.substr(2, 3)` 是從哪裡開始、取幾個字元？

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">**從索引 2 開始，取 3 個字元**。</div>

</v-click>

<!--
考 substr 的參數意義。
-->

---

## Q5

雙指標判斷迴文時，`i` 和 `j` 分別往哪個方向移動？

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">`i` 從頭往後（`i++`），`j` 從尾往前（`j--`），兩個一起往中間靠攏。</div>

</v-click>

<!--
考雙指標的移動方向。
-->

---

## Q6

如果陣列裡的數字總和可能超過 21 億，應該用哪個型態存總和？

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">**`long long`**——`int` 的範圍大約只有 ±21 億，超過會溢位算錯。</div>

</v-click>

<!--
考溢位跟 long long。
-->

---

## Q7

`cin >> s` 讀取字串時，遇到什麼會停止？

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">**空白或換行**。要讀含空白的一整行要用 `getline(cin, s)`。</div>

</v-click>

<!--
考 `cin >>` 的停止條件。
-->

---

## Q8

矩陣加總那一題，為什麼可以「邊讀邊加」而不用真的開二維陣列？

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">因為題目只要**總和**，不需要之後再用到矩陣裡個別的值，
讀進來的當下就能直接累加，不必先存起來。</div>

</v-click>

<!--
考「先想清楚題目要什麼」的判斷力。這題答對代表思維訓練有效。
-->

---

## Q9

`string s = "hello"; cout << s.substr(1);` 會印出什麼？

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">**`ello`**——`substr` 省略長度時，代表取到字串結尾。</div>

</v-click>

<!--
考 substr 省略長度的行為。
-->

---

## Q10

九宮格驗證那一題，為什麼只檢查 3 條列是不夠的？

<v-click>

<div class="mt-6 border-l-4 border-green-500 pl-4">列總和相等不代表行、對角線也相等——把某列數字打亂，
列總和不變，但其他線可能就不相等了。8 條線缺一不可。</div>

</v-click>

<!--
考九宮格為什麼要檢查 8 條線。這題最難。
-->

---
layout: section
---

# 分組討論

<!--
過場。時間不夠可以整段跳過，或只做討論①。
-->

---

## 討論①

跟旁邊同學互相解釋一次：為什麼找最大值的起始值要用 `a[0]`，不能用 `0`？想一個會讓 `0` 這個起始值出錯的具體例子。

<!--
互相解釋起始值陷阱，並**自己想一個具體反例**。

「想得出反例」才代表真的理解，比背結論有效。
-->

---

## 討論②

二維陣列 `m[i][j]` 跟 `m[j][i]`，如果矩陣不是正方形（列數 ≠ 行數），這兩個寫法可能會出什麼問題？跟同學討論看看。

<!--
這題比較進階：矩陣不是正方形時，`m[j][i]` 可能會超出範圍。

引導：如果是 2×3 的矩陣，`m[2][0]` 就超出列數了。

答不出來沒關係，這題是給比較快的學生想的。
-->

---

## 討論③

`s[i]` 走訪字串和 `a[i]` 走訪陣列，寫法幾乎一模一樣。跟旁邊同學討論：這兩者本質上為什麼可以用同一種方式處理？

<!--
引導他們說出：**字串本質上就是字元陣列**，所以走訪方式一樣。

這題回收第 56 張，應該都答得出來。
-->

---

## 討論④

如果要用陣列存「全班期中考跟期末考」兩次成績，你會怎麼設計資料結構？需要幾維的陣列？跟旁邊同學討論看看。

<!--
開放討論，引導到「二維陣列」：一維是學生、另一維是考試次數。

或是兩個一維陣列也可以。兩種答案都對，重點是有想過。
-->

---
layout: section
---

# 今日重點回顧

<!--
過場。
-->

---

## 回顧①：一維陣列

<v-clicks>

- 索引**從 0 開始**，`a[n]` 的最後一格是 `a[n-1]`
- 陣列要開得比題目上限**大一點**，避免踩到未定義行為
- 找最大最小的起始值要用 **`a[0]`**，不要用 0

</v-clicks>

<!--
三條都是今天的重點，特別是第三條（起始值用 `a[0]`）。
-->

---

## 回顧②：二維陣列

<v-clicks>

- `m[i][j]`：`i` 是列、`j` 是行，用巢狀迴圈走訪
- 兩個維度都要開得比上限大
- 只要總和的話，邊讀邊加就好，不必真的開陣列

</v-clicks>

<!--
第三條「只要總和就邊讀邊加」是思維重點，再講一次。
-->

---

## 回顧③：字串

<v-clicks>

- 字串可用 `s[i]` 取字元、`s.size()` 取長度、`substr` 取一段
- 走訪字串跟走訪陣列的方式一模一樣
- **雙指標**從頭尾往中間夾，適合迴文這類對稱問題

</v-clicks>

<!--
第二條「走訪字串跟走訪陣列一模一樣」是今天下半場的核心。
-->

---

## 回顧④：今天的節奏

<div class="text-sm">

| 教了什麼     | 馬上練   |
| ------------ | -------- |
| 一維陣列     | 第 12 題 |
| 二維陣列基礎 | 第 13 題 |
| 二維陣列進階 | 第 14 題 |
| 字串基礎     | 第 15 題 |
| 雙指標技巧   | 第 16 題 |

</div>

<div class="mt-4 text-sm opacity-70">

教一段、練一題，跟前兩天一樣。

</div>

<!--
五題的對照表。

問一下「今天五題全 AC 的舉手？」
-->

---

## 四天累積下來，你已經會的事

<v-clicks>

- Day1：輸入、輸出、程式的基本骨架
- Day2：用 if / else 讓程式做決定
- Day3：用迴圈讓程式重複做事
- Day4（今天）：用陣列、字串裝一整排資料

</v-clicks>

<div class="mt-6 border-l-4 border-blue-500 pl-4" v-click>

這四樣工具組合起來，已經能解決非常多實際的問題了。

</div>

<!--
**這張很重要，是給他們的成就感總結。**

四條一條一條點出來，慢慢講。

藍框那句要講滿：**這四樣工具組合起來，已經能解決非常多實際的問題了**。

明天就是要證明這件事。
-->

---

## 明天預告

<div class="text-lg mt-6">

明天是總複習與實戰演練，把這四天的功力全部用上！

</div>

<div class="mt-6 text-sm opacity-70">

不會教新語法，而是練習「拿到題目該怎麼想」——這才是寫程式真正的核心能力。

</div>

<!--
明天是總複習 + 90 分鐘實戰 + 頒獎。

**要先講清楚：明天不教新語法**，而是練「拿到題目該怎麼想」。

提醒他們明天有計時比賽，可以先做點心理準備（但不要造成壓力）。
-->

---
layout: statement
---

# 謝謝大家

明天見

<!--
收尾。

今天是最後一天學新東西，可以說一句：「明天你們就要自己用這些工具解題了，我很期待。」
-->
