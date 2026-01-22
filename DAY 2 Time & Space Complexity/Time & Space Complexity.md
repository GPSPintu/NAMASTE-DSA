# Time & Space Complexity

Understanding **Time Complexity** and **Space Complexity** is essential for writing efficient algorithms.  
They help us measure how an algorithm performs as the input size grows.

---

## ⏱ Time Complexity

**Time Complexity** measures the efficiency of an algorithm in terms of **execution time** as the input size (`n`) increases.

 **Lower Time Complexity = Faster Algorithm**

It describes how the running time of an algorithm grows with respect to input size.

---

### Common Time Complexities

| Notation | Meaning | Example |
|--------|--------|--------|
| **O(1)** | Constant time – independent of input size | Accessing an array element |
| **O(log n)** | Logarithmic – input is halved each step | Binary Search |
| **O(n)** | Linear – grows directly with input size | Looping through an array |
| **O(n log n)** | Linearithmic – common in efficient sorting | Merge Sort, Quick Sort |
| **O(n²)** | Quadratic – nested loops | Bubble Sort, Selection Sort |
| **O(2ⁿ)** | Exponential – doubles with each input | Recursive Fibonacci |
| **O(n!)** | Factorial – all possible permutations | Traveling Salesman Problem |

---

##  Space Complexity

**Space Complexity** measures how much **extra memory** an algorithm requires relative to the input size.

It includes:
- Variables
- Data structures
- Recursive call stack

---

## Common Space Complexities

| Notation | Meaning |
|--------|--------|
| **O(1)** | Constant space – memory usage does not grow |
| **O(n)** | Linear space – memory grows with input |
| **O(n²)** | Quadratic space – used in 2D arrays or matrices |

---

### Key Takeaways

- Time Complexity focuses on **speed**
- Space Complexity focuses on **memory**
- Efficient algorithms balance **both**
- Big-O notation represents the **worst-case scenario**





