---
theme: ../_shared/theme-itou
title: 第二天 認識變數
titleTemplate: "%s — itouSlides"
author: 郭家睿 itouSouta
---

# 第二天 認識變數

大里 APCS 營隊 · 資料型態、運算子與流程控制

郭家睿

---
layout: default
---

## 今天的目標

- 認識基本**資料型態**：`int` / `float` / `double` / `char` / `string`
- 學會**變數**的宣告、初始化與型態轉換
- 熟悉各種**運算子**：算術、遞增遞減、比較、邏輯
- 用 **if / else if / else** 做流程控制
- 完成 ZeroJudge 觀念題與小練習

<br>

> 變數是程式的「記憶」，運算子是程式的「思考」，流程控制是程式的「決定」。

---
layout: section
---

# 資料型態

---

## 為什麼需要型態？

電腦的記憶體只是一堆 0 和 1，**型態**告訴電腦：

- 這塊資料要佔多少空間
- 該怎麼解讀它（是整數？小數？文字？）

```cpp
int   age   = 18;       // 整數
double pi   = 3.14159;  // 小數
char  grade = 'A';      // 單一字元（用單引號）
string name = "itou";   // 字串（用雙引號）
bool  ok    = true;     // 布林：true / false
```

---

## 基本資料型態

| 型別     | 說明             | 範例值          | 大約範圍         |
| -------- | ---------------- | --------------- | ---------------- |
| `int`    | 整數             | `42`, `-7`      | 約 ±21 億        |
| `float`  | 浮點數（精度低） | `3.14f`         | 約 7 位有效數字  |
| `double` | 浮點數（精度高） | `3.14159`       | 約 15 位有效數字 |
| `char`   | 單一字元         | `'A'`, `'9'`    | 0 ~ 255          |
| `bool`   | 布林值           | `true`, `false` | 只有兩種值       |
| `string` | 字串             | `"Hello"`       | 任意長度文字     |

<br>

> 競賽中小數通常一律用 `double`，幾乎不用 `float`。

---

## float 與 double 的差異

```cpp
#include <iostream>
using namespace std;

int main() {
    float  a = 0.1234567890123456;
    double b = 0.1234567890123456;

    cout.precision(17);
    cout << a << endl;  // 0.12345679104328156  ← 後面開始不準
    cout << b << endl;  // 0.12345678901234560  ← 比較準
    return 0;
}
```

- `float` 只有約 7 位有效數字，`double` 約 15 位
- **記不住就用 `double`**，比較不會出錯

---

## 變數宣告與初始化

```cpp
int a;          // 宣告：先佔位，值不確定（垃圾值）
a = 10;         // 賦值

int b = 20;     // 宣告同時初始化（建議！）

int x = 1, y = 2, z = 3;   // 一次宣告多個

cout << a + b;  // 30
```

<br>

> 養成「宣告就初始化」的習慣，可以避免很多奇怪的 bug。

---

## 從鍵盤讀入資料

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cout << "請輸入兩個整數：";
    cin >> a >> b;            // 用空白或換行分隔

    cout << "相加 = " << a + b << endl;
    return 0;
}
```

- `cin >>` 從鍵盤讀入，可以連續讀好幾個
- 輸入 `3 5` → 輸出 `相加 = 8`

---

## 型態轉換

```cpp
double x = 9.7;
int y = (int)x;        // y = 9，小數直接捨去（不是四捨五入！）

int a = 5, b = 2;
cout << a / b;              // 2   ← 整數除以整數會捨去小數
cout << (double)a / b;      // 2.5 ← 先轉成 double 再除
```

<br>

> 「整數 / 整數 = 整數」是最常見的踩雷點，要算平均、比例時記得轉型。

---
layout: section
---

# 運算子

---

## 算術運算子

```cpp
int a = 17, b = 5;

cout << a + b;   // 22
cout << a - b;   // 12
cout << a * b;   // 85
cout << a / b;   // 3   （整數除法，捨去小數）
cout << a % b;   // 2   （餘數 modulo）
```

<br>

`%` 餘數運算在競賽超常用：

- `n % 2 == 0` → 判斷偶數
- `n % 2 == 1` → 判斷奇數

---

## 遞增 / 遞減

```cpp
int n = 10;

n++;     // n = 11   等同 n = n + 1
n--;     // n = 10   等同 n = n - 1

// 複合指定運算子
n += 5;  // n = n + 5  → 15
n -= 3;  // n = n - 3  → 12
n *= 2;  // n = n * 2  → 24
n %= 5;  // n = n % 5  → 4
```

<br>

> `i++` 在 for 迴圈裡會天天看到，先記住「把自己加 1」就好。

---

## 比較運算子

回傳 `bool`（`true` / `false`）：

```cpp
int a = 10, b = 3;

cout << (a > b);    // 1 (true)
cout << (a < b);    // 0 (false)
cout << (a >= b);   // 1
cout << (a <= b);   // 0
cout << (a == b);   // 0   ← 兩個等號才是「相等」
cout << (a != b);   // 1   ← 不等於
```

<br>

> 最常見的錯誤：把「比較」的 `==` 寫成「賦值」的 `=`！

---

## 邏輯運算子

把多個條件組合起來：

```cpp
bool sunny = true, weekend = false;

cout << (sunny && weekend);  // false   AND：兩個都要成立
cout << (sunny || weekend);  // true    OR ：至少一個成立
cout << (!sunny);            // false   NOT：反過來
```

實際應用：判斷分數在 60 ~ 100 之間

```cpp
int score = 85;
bool valid = (score >= 60 && score <= 100);  // true
```

---
layout: section
---

# 流程控制

---

## if / else

```cpp
int n;
cin >> n;

if (n % 2 == 0) {
    cout << "偶數" << endl;
} else {
    cout << "奇數" << endl;
}
```

- `if (條件)` 條件成立才執行 `{ }` 裡的程式
- `else` 處理「不成立」的情況
- 大括號 `{ }` 把要一起執行的程式包起來

---

## if / else if / else

```cpp
int score = 85;

if (score >= 90) {
    cout << "A — 優秀" << endl;
} else if (score >= 80) {
    cout << "B — 良好" << endl;
} else if (score >= 60) {
    cout << "C — 及格" << endl;
} else {
    cout << "不及格" << endl;
}
// 輸出：B — 良好
```

> 由上往下檢查，**第一個成立的就執行**，後面就跳過了，所以順序很重要！

---
layout: section
---

# 隨堂練習

---

## 練習一：判斷奇偶數

> 輸入一個整數，輸出它是「奇數」還是「偶數」。

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    if (n % 2 == 0) cout << "even" << endl;
    else            cout << "odd"  << endl;
    return 0;
}
```

---

## 練習二：三數取最大值

> 輸入三個整數，輸出最大的那一個。

```cpp
int a, b, c;
cin >> a >> b >> c;

int max = a;                 // 先假設 a 最大
if (b > max) max = b;        // 如果 b 更大，換成 b
if (c > max) max = c;        // 如果 c 更大，換成 c

cout << max << endl;
```

<br>

> 這個「先假設、再逐一比較更新」的技巧，明天找陣列最大值還會再用到。

---

## 練習三：簡易計算機

> 輸入兩個整數和一個運算符號（`+ - * /`），輸出結果。

```cpp
int a, b;
char op;
cin >> a >> op >> b;        // 例如輸入：6 + 3

if      (op == '+') cout << a + b;
else if (op == '-') cout << a - b;
else if (op == '*') cout << a * b;
else if (op == '/') cout << a / b;
else                cout << "未知運算";
```

---
layout: fact
---

# ZeroJudge 時間

打開 ZeroJudge，完成今天的觀念題與練習題

平台邀請碼：`ZOcMRt`

---
layout: default
---

## 今日重點回顧

- **型態**：整數用 `int`，小數用 `double`，文字用 `char` / `string`
- **整數 / 整數會捨去小數** → 要算平均記得轉型
- **`%` 餘數**可以判斷奇偶數
- 比較相等是 `==`（兩個等號），別跟賦值 `=` 搞混
- **if / else if / else** 由上往下檢查，第一個成立的執行

<br>

> 明天我們會用「迴圈」讓電腦幫我們重複做幾千幾萬次事情。
