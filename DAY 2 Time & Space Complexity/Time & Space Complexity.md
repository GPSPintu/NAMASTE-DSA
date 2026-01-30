# ⏱ Time & Space Complexity

Understanding **Time Complexity** and **Space Complexity** is essential for writing efficient and scalable algorithms.  
They help us analyze how an algorithm performs as the input size (`n`) increases.

---

## ⏱ Time Complexity

**Time Complexity** measures how the **execution time** of an algorithm grows with respect to the input size.

👉 **Lower Time Complexity = Faster Algorithm**

It focuses on how the number of operations increases as input size increases, not on actual execution time.

---

## Common Time Complexities

| Notation | Description | Example |
|--------|------------|--------|
| **O(1)** | Constant time – does not depend on input size | Accessing an array element |
| **O(log n)** | Logarithmic – input size is reduced each step | Binary Search |
| **O(n)** | Linear – time grows proportionally with input | Traversing an array |
| **O(n log n)** | Linearithmic – efficient divide and conquer | Merge Sort, Quick Sort |
| **O(n²)** | Quadratic – nested iterations | Bubble Sort, Selection Sort |
| **O(2ⁿ)** | Exponential – grows very fast | Recursive Fibonacci |
| **O(n!)** | Factorial – all permutations | Traveling Salesman Problem |

---

## 🧮 Space Complexity

**Space Complexity** measures the amount of **extra memory** an algorithm uses relative to the input size.

This includes:
- Variables
- Data structures
- Function call stack (recursion)

---

## Common Space Complexities

| Notation | Description |
|--------|------------|
| **O(1)** | Constant space – fixed memory usage |
| **O(n)** | Linear space – memory grows with input size |
| **O(n²)** | Quadratic space – typically used in 2D arrays |

---

## ✅ Key Takeaways

- **Time Complexity** focuses on performance (speed)
- **Space Complexity** focuses on memory usage
- Efficient algorithms aim to balance both
- **Big-O notation** represents the worst-case scenario
