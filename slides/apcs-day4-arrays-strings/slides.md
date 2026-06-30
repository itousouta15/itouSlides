---
theme: ../_shared/theme-itou
title: 第四天 陣列、字串
titleTemplate: "%s — itouSlides"
author: 邱皇愷
---

# 第四天 陣列、字串

大里 APCS 營隊 · 一次裝起一大堆資料

邱皇愷

---
layout: default
---

## 今天的目標

- 學會**一維陣列**：宣告、初始化、走訪
- 用陣列找**最大值 / 最小值**、計算**平均**
- 認識**二維陣列**：矩陣加總、九宮格
- 處理**字串**：長度、字元走訪、簡單比對
- 完成 ZeroJudge 實作題

<br>

> 一個變數只能存一個值；陣列讓你用一個名字存「一整排」值。

---
layout: section
---

# 一維陣列

---

## 為什麼需要陣列？

要存 5 個學生的分數，難道要宣告 5 個變數？

```cpp
int s0, s1, s2, s3, s4;   // 😩 那 100 個學生呢？
```

用陣列：

```cpp
int score[5];             // 一次宣告 5 個整數的格子
score[0] = 90;
score[1] = 85;
// ...
```

> 陣列的索引（index）**從 0 開始**，`score[5]` 的最後一格是 `score[4]`。

---

## 宣告與初始化

```cpp
// 宣告同時給值
int a[5] = {90, 85, 78, 92, 88};

// 全部初始化為 0
int b[5] = {};

// 存取單一元素（索引 0 ~ 4）
cout << a[0];   // 90
cout << a[4];   // 88

// 修改元素
a[2] = 100;
```

<br>

> ⚠️ 存取超出範圍（如 `a[5]`、`a[-1]`）是未定義行為，會出現奇怪結果。

---

## 用迴圈走訪陣列

```cpp
int a[5] = {90, 85, 78, 92, 88};

// 印出每個元素
for (int i = 0; i < 5; i++) {
    cout << a[i] << " ";    // 90 85 78 92 88
}
```

讀入 n 個數字到陣列：

```cpp
int n;
cin >> n;
int a[100];
for (int i = 0; i < n; i++) {
    cin >> a[i];
}
```

> 迴圈 + 陣列是黃金組合，幾乎所有陣列操作都靠 `for` 走訪。

---

## 找最大值與最小值

```cpp
int a[5] = {90, 85, 78, 92, 88};

int mx = a[0], mn = a[0];     // 先假設第 0 個最大也最小
for (int i = 1; i < 5; i++) {
    if (a[i] > mx) mx = a[i]; // 比目前的大就更新
    if (a[i] < mn) mn = a[i]; // 比目前的小就更新
}
cout << "最大 " << mx << endl;   // 92
cout << "最小 " << mn << endl;   // 78
```

> 還記得第二天的「三數取最大」嗎？同樣的招式，換成迴圈跑陣列。

---

## 計算總和與平均

```cpp
int a[5] = {90, 85, 78, 92, 88};

int sum = 0;
for (int i = 0; i < 5; i++) {
    sum += a[i];
}
cout << "總和 " << sum << endl;            // 433
cout << "平均 " << sum / 5.0 << endl;      // 86.6
```

<br>

> 平均要用 `5.0`（或轉型），否則整數除整數會把小數捨掉！

---
layout: section
---

# 二維陣列

---

## 二維陣列：像表格一樣

```cpp
// 3 列 3 行
int m[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

cout << m[0][0];   // 1   （第 0 列，第 0 行）
cout << m[1][2];   // 6   （第 1 列，第 2 行）
```

> `m[i][j]`：第一個 `i` 是「第幾列」，第二個 `j` 是「第幾行」。

---

## 走訪二維陣列：巢狀迴圈

```cpp
int m[3][3] = {{1,2,3},{4,5,6},{7,8,9}};

for (int i = 0; i < 3; i++) {       // 每一列
    for (int j = 0; j < 3; j++) {   // 每一行
        cout << m[i][j] << " ";
    }
    cout << endl;
}
```

```
1 2 3
4 5 6
7 8 9
```

> 第三天學的巢狀迴圈，在這裡正好派上用場。

---

## 應用：矩陣全部加總

```cpp
int m[3][3] = {{1,2,3},{4,5,6},{7,8,9}};

int sum = 0;
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        sum += m[i][j];
    }
}
cout << sum;   // 45
```

<br>

> 九宮格、棋盤、地圖…只要是「格子狀」的資料，都能用二維陣列裝。

---
layout: section
---

# 字串

---

## 字串就是一串字元

```cpp
#include <string>
using namespace std;

string s = "Hello";

cout << s;          // Hello
cout << s.size();   // 5   （字串長度）
cout << s[0];       // H   （像陣列一樣用索引取字元）
cout << s[4];       // o
```

> `string` 其實就是「一排 `char`」，可以像陣列一樣用 `s[i]` 取每個字元。

---

## 讀入字串

```cpp
string word;
cin >> word;            // 讀一個「單字」（遇到空白就停）

string line;
getline(cin, line);     // 讀「一整行」（含空白）
```

<br>

> `cin >> ` 遇到空白會斷開；要讀含空白的整句話請用 `getline`。

---

## 走訪字串的每個字元

```cpp
string s = "APCS";

// 方法一：用索引
for (int i = 0; i < s.size(); i++) {
    cout << s[i] << " ";    // A P C S
}

// 方法二：range-based for（較簡潔）
for (char c : s) {
    cout << c << " ";       // A P C S
}
```

---

## 應用：統計字元

> 計算字串裡有幾個母音（a, e, i, o, u）。

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

---

## 字串比對與串接

```cpp
string a = "abc", b = "abc", c = "xyz";

cout << (a == b);        // 1 (true)  直接用 == 比較
cout << (a == c);        // 0 (false)

string full = a + c;     // 串接：abcxyz
cout << full;

full += "!";             // 接在後面：abcxyz!
```

> C++ 的 `string` 可以直接用 `==` 比較、用 `+` 串接，比 C 語言方便很多。

---
layout: fact
---

# ZeroJudge 時間

完成今天的陣列 / 字串實作題

平台邀請碼：`ZOcMRt`

---
layout: default
---

## 今日重點回顧

- 陣列索引**從 0 開始**，`a[n]` 的最後一格是 `a[n-1]`
- **迴圈 + 陣列**：走訪、找最大最小、求總和平均
- **二維陣列** `m[i][j]` 用巢狀迴圈走訪，適合格子狀資料
- 字串可用 `s[i]` 取字元、`s.size()` 取長度
- `string` 能直接用 `==` 比較、用 `+` 串接

<br>

> 明天總複習 + 實戰演練，把這四天的功力全部用上！
