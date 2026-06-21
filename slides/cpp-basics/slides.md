---
theme: ../_shared/theme-itou
title: C++ 基礎語法
titleTemplate: "%s — itouSlides"
author: 郭家睿 itouSouta
---

# C++ 基礎語法

從零開始學習 C++ 程式設計

---
layout: default
---

## 目錄

- 第一支程式：Hello World
- 資料型別與變數
- 常數與型別轉換
- 運算子
- 條件判斷
- 迴圈
- 函式
- 陣列
- 指標入門

---
layout: section
---

# 第一支程式

---

## Hello World

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```

- `#include <iostream>` — 引入標準輸入輸出函式庫
- `using namespace std` — 使用標準命名空間
- `main()` — 程式進入點
- `cout` — 輸出到終端機
- `return 0` — 代表程式正常結束

---
layout: section
---

# 資料型別與變數

---

## 基本資料型別

| 型別     | 說明     | 範例值          |
| -------- | -------- | --------------- |
| `int`    | 整數     | `42`, `-7`      |
| `double` | 浮點數   | `3.14`, `-0.5`  |
| `char`   | 單一字元 | `'A'`, `'z'`    |
| `bool`   | 布林值   | `true`, `false` |
| `string` | 字串     | `"Hello"`       |

---

## 基本資料型別

```cpp
int age = 18;
double pi = 3.14159;
char grade = 'A';
bool isStudent = true;
string name = "itousouta";
```

---

## 變數宣告與輸入

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    int age;
    string name;

    cout << "請輸入姓名：";
    cin >> name;

    cout << "請輸入年齡：";
    cin >> age;

    cout << name << " 今年 " << age << " 歲" << endl;
    return 0;
}
```

- `cin >>` — 從終端機讀取輸入
- 宣告變數時可以不賦值，之後再指定

---

## 常數與型別轉換

```cpp
// 常數：宣告後不可更改
const double PI = 3.14159;
const int MAX_SCORE = 100;

// 型別轉換
double x = 9.7;
int y = (int)x;        // y = 9，小數點直接捨去
int a = 5, b = 2;
double result = (double)a / b;  // result = 2.5
                                // 若不轉型則為 2
```

<br>

> 整數除以整數在 C++ 中會直接捨去小數，轉型後才能得到浮點結果。

---
layout: section
---

# 運算子

---

## 運算子種類

```cpp
int a = 10, b = 3;

// 算術運算子
cout << a + b;   // 13
cout << a - b;   // 7
cout << a * b;   // 30
cout << a / b;   // 3（整數除法）
cout << a % b;   // 1（餘數）

// 比較運算子（回傳 bool）
cout << (a > b);   // true
cout << (a == b);  // false
cout << (a != b);  // true

// 邏輯運算子
bool x = true, y = false;
cout << (x && y);  // false（AND）
cout << (x || y);  // true（OR）
cout << (!x);      // false（NOT）
```

---

## 複合指定運算子

```cpp
int n = 10;

n += 5;   // n = n + 5  → 15
n -= 3;   // n = n - 3  → 12
n *= 2;   // n = n * 2  → 24
n /= 4;   // n = n / 4  → 6
n %= 4;   // n = n % 4  → 2

// 遞增 / 遞減
n++;      // n = n + 1
n--;      // n = n - 1
++n;      // 先加再用
--n;      // 先減再用
```

---
layout: section
---

# 條件判斷

---

## if / else if / else

```cpp
int score = 85;

if (score >= 90) {
    cout << "A — 優秀" << endl;
} else if (score >= 80) {
    cout << "B — 良好" << endl;
} else if (score >= 70) {
    cout << "C — 普通" << endl;
} else {
    cout << "不及格" << endl;
}
// 輸出：B — 良好
```

---

## switch

```cpp
char grade = 'B';

switch (grade) {
    case 'A':
        cout << "優秀" << endl;
        break;
    case 'B':
        cout << "良好" << endl;
        break;
    case 'C':
        cout << "普通" << endl;
        break;
    default:
        cout << "無效等級" << endl;
}
```

- `break` 不能省略，否則會繼續執行下一個 case
- `default` 處理所有未列出的情況

---
layout: section
---

# 迴圈

---

## for 迴圈

```cpp
// 基本 for 迴圈
for (int i = 0; i < 5; i++) {
    cout << i << " ";  // 0 1 2 3 4
}

// 計算 1 到 100 的總和
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
cout << sum;  // 5050
```

結構：`for (初始化; 條件; 更新)`

---

## while / do-while

```cpp
// while：先判斷再執行
int n = 1;
while (n <= 5) {
    cout << n << " ";  // 1 2 3 4 5
    n++;
}

// do-while：先執行再判斷（至少執行一次）
int x = 0;
do {
    cout << "執行一次" << endl;
    x++;
} while (x < 0);
// 即使條件為 false，仍會輸出一次
```

---

## break 與 continue

```cpp
// break：跳出迴圈
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    cout << i << " ";  // 0 1 2 3 4
}

// continue：跳過本次，繼續下一輪
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    cout << i << " ";  // 1 3 5 7 9
}
```

---
layout: section
---

# 函式

---

## 函式基礎

```cpp
// 宣告：回傳型別 函式名稱(參數列表)
int add(int a, int b) {
    return a + b;
}

// 無回傳值用 void
void greet(string name) {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    int result = add(3, 7);  // result = 10
    greet("itousouta");      // Hello, itousouta!
    return 0;
}
```

---

## 函式多載（Overloading）

```cpp
// 同名函式，不同參數型別
int multiply(int a, int b) {
    return a * b;
}

double multiply(double a, double b) {
    return a * b;
}

int main() {
    cout << multiply(3, 4);       // 12（呼叫 int 版本）
    cout << multiply(2.5, 1.5);   // 3.75（呼叫 double 版本）
    return 0;
}
```

C++ 根據傳入的引數型別自動選擇對應的函式。

---
layout: section
---

# 陣列

---

## 一維陣列

```cpp
// 宣告與初始化
int scores[5] = {90, 85, 78, 92, 88};

// 存取元素（索引從 0 開始）
cout << scores[0];  // 90
cout << scores[4];  // 88

// 用迴圈走訪
int sum = 0;
for (int i = 0; i < 5; i++) {
    sum += scores[i];
}
cout << "平均：" << sum / 5.0 << endl;  // 平均：86.6
```

---

## 二維陣列

```cpp
// 3 列 3 行的矩陣
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// 走訪二維陣列
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        cout << matrix[i][j] << " ";
    }
    cout << endl;
}
// 1 2 3
// 4 5 6
// 7 8 9
```

---
layout: section
---

# 指標入門

---

## 指標是什麼？

```cpp
int x = 42;

int* ptr = &x;  // ptr 儲存 x 的記憶體位址

cout << x;     // 42（變數值）
cout << &x;    // 0x... （x 的位址）
cout << ptr;   // 0x... （ptr 存的位址，與 &x 相同）
cout << *ptr;  // 42（解參考：取得指標指向的值）

// 透過指標修改值
*ptr = 100;
cout << x;     // 100
```

- `&` — 取址運算子
- `*` — 解參考運算子

---

## 指標與陣列

```cpp
int arr[4] = {10, 20, 30, 40};
int* p = arr;  // 陣列名稱本身就是指向第一個元素的指標

cout << *p;       // 10
cout << *(p + 1); // 20
cout << *(p + 2); // 30

// 等同於
cout << arr[0];   // 10
cout << arr[1];   // 20
```

<br>

> 指標算術：`p + 1` 不是加 1 byte，而是往後移動一個 `int` 的大小（4 bytes）。

---
layout: fact
---

# 練習

寫一支程式，輸入 10 個整數，找出最大值與最小值。

---
layout: quote
---

# "The most important property of a program is whether it accomplishes the intention of its user."

C.A.R. Hoare

---
layout: default
---

## 延伸學習

- **STL 容器**：`vector`, `map`, `set`
- **物件導向**：`class`, 繼承, 多型
- **模板（Template）**：泛型程式設計
- **記憶體管理**：`new` / `delete`
- **標準演算法**：`sort`, `find`, `accumulate`

<br>

推薦資源：

- [cppreference.com](https://cppreference.com) — 最完整的 C++ 參考文件
- [Compiler Explorer](https://godbolt.org) — 線上即時看組語輸出
