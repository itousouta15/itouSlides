---
theme: ../_shared/theme-itou
title: 第五天 總複習與實戰演練
titleTemplate: "%s — itouSlides"
author: 郭家睿 邱皇愷
---

# 第五天 總複習與實戰演練

大里 APCS 營隊 · 把四天的功力全部用上

郭家睿 · 邱皇愷

---
layout: default
---

## 今天的流程

- **總複習**：四天的重點一次掃過
- **實戰演練**：模擬 APCS 實作題
- **錯誤講解**：常見地雷與除錯技巧
- **QA 時間**：有問題盡量問
- 結業 🎉

<br>

> 今天不教新東西，而是把學過的串起來、真的寫出一題完整的程式。

---
layout: section
---

# 總複習

---

## Day 2 · 變數與流程控制

```cpp
int n;  double d;  char c;  string s;   // 型態

cin >> n;                  // 讀入
if (n % 2 == 0) ... else ... ;          // 奇偶判斷

// 整數 / 整數會捨去小數！算平均要轉型
double avg = sum / (double)count;
```

- 整數除法、`==` vs `=`、`%` 餘數是最常踩的雷

---

## Day 3 · 迴圈

```cpp
for (int i = 0; i < n; i++) { ... }     // 次數明確
while (條件) { ... }                     // 看條件

// 巢狀迴圈：表格、圖形、二維資料
for (int i = ...) for (int j = ...) { ... }
```

- 迴圈三元素：初始值、條件、更新
- `break` 跳出、`continue` 跳過這一輪

---

## Day 4 · 陣列與字串

```cpp
int a[100];
for (int i = 0; i < n; i++) cin >> a[i];  // 讀入陣列

// 找最大、求總和
int mx = a[0], sum = 0;
for (int i = 0; i < n; i++) {
    if (a[i] > mx) mx = a[i];
    sum += a[i];
}

string s;  cin >> s;
for (char ch : s) { ... }                 // 走訪字串
```

---
layout: section
---

# 實戰演練

---

## 題目一：成績統計

> 輸入一個整數 n，接著輸入 n 個分數。輸出「最高分、最低分、平均分（取到小數點後兩位）」。

**拆解問題：**

1. 讀入 n，用迴圈把分數存進陣列
2. 走訪陣列找最大、最小、求總和
3. 平均 = 總和 / n（記得轉型！）

> 先別急著打程式，先想清楚「步驟」再下手。

---

## 題目一：參考解答

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int n;  cin >> n;
    int a[1000], mx, mn, sum = 0;
    for (int i = 0; i < n; i++) cin >> a[i];

    mx = mn = a[0];
    for (int i = 0; i < n; i++) {
        if (a[i] > mx) mx = a[i];
        if (a[i] < mn) mn = a[i];
        sum += a[i];
    }
    cout << mx << " " << mn << " ";
    cout << fixed << setprecision(2) << sum / (double)n << endl;
    return 0;
}
```

---

## 題目二：迴文判斷

> 輸入一個字串，判斷它是不是「迴文」（正著讀、反著讀都一樣，如 `level`、`abcba`）。

**拆解問題：**

1. 用兩個指標：一個從頭 `i`，一個從尾 `j`
2. 比較 `s[i]` 和 `s[j]`，不一樣就不是迴文
3. 往中間靠攏，直到交會

---

## 題目二：參考解答

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;  cin >> s;
    bool ok = true;

    int i = 0, j = s.size() - 1;
    while (i < j) {
        if (s[i] != s[j]) { ok = false; break; }
        i++;  j--;
    }
    cout << (ok ? "YES" : "NO") << endl;
    return 0;
}
```

---
layout: section
---

# 常見錯誤講解

---

## 五大地雷

| 地雷                | 後果            | 解法                |
| ------------------- | --------------- | ------------------- |
| 整數 / 整數         | 平均少了小數    | 轉型 `(double)`     |
| `==` 寫成 `=`       | 條件永遠成立    | 比較用兩個等號      |
| 陣列索引越界 `a[n]` | 怪異結果 / 當掉 | 範圍是 `0 ~ n-1`    |
| 忘記更新 → 無窮迴圈 | 程式跑不完      | 檢查 `i++` 有沒有漏 |
| 變數沒初始化        | 垃圾值          | 宣告就給初始值      |

---

## 除錯小技巧

- **讀懂錯誤訊息**：編譯器通常會告訴你第幾行、什麼問題
- **印出中間值**：用 `cout` 把變數印出來，看哪一步不對
- **縮小範圍**：把程式拆小段測試，找出出錯的位置
- **手動跑一遍**：拿紙筆把小範例（如 n=3）走一次

<br>

> 「會除錯」比「一次寫對」更重要 —— 高手也是錯了再改出來的。

---
layout: fact
---

# QA 時間

任何問題都可以問！

slido：掃描現場 QR code 匿名發問

---
layout: quote
---

# "Talk is cheap. Show me the code."

Linus Torvalds

---
layout: default
---

## 結業 & 接下來

這五天你學會了：

- C++ 基本語法、變數、運算子、流程控制
- 迴圈、陣列、字串
- 在 ZeroJudge 上實作解題

**繼續往前：**

- 多刷 ZeroJudge / APCS 歷屆題
- 認識 `vector`、`sort` 等 STL 工具
- 報名 APCS 檢定，挑戰實作分數！

<br>

> 寫程式是練出來的，今天結束才是真正的開始 💪
