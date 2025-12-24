// ======================================================
// STAR & NUMBER PATTERNS – COMPLETE CODE WITH COMMENTS
// ======================================================


// ------------------------------------------------------
// Star Pattern – 1 (Square)
// *****
// *****
// *****
// *****
// *****
// ------------------------------------------------------

let n1 = 5;

for (let i = 0; i < n1; i++) {          // controls rows
    let row = "";

    for (let j = 0; j < n1; j++) {      // controls columns
        row += "*";
    }

    console.log(row);
}

console.log("\n");


// ------------------------------------------------------
// Star Pattern – 2 (Right-angled Triangle)
// *
// **
// ***
// ****
// *****
// ------------------------------------------------------

let n2 = 5;

for (let i = 0; i < n2; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}

console.log("\n");


// ------------------------------------------------------
// Number Pattern – 3 (Increasing Numbers)
// 1
// 12
// 123
// 1234
// 12345
// ------------------------------------------------------

let n3 = 5;

for (let i = 0; i < n3; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
        row += (j + 1);
    }

    console.log(row);
}

console.log("\n");


// ------------------------------------------------------
// Number Pattern – 4 (Same Number in Each Row)
// 1
// 22
// 333
// 4444
// 55555
// ------------------------------------------------------

let n4 = 5;

for (let i = 1; i <= n4; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += i;
    }

    console.log(row);
}

console.log("\n");


// ------------------------------------------------------
// Number Pattern – 5 (Decreasing Numbers)
// 12345
// 1234
// 123
// 12
// 1
// ------------------------------------------------------

let a = 5;

for (let i = 0; i < a; i++) {
    let row = "";

    for (let j = 0; j < a - i; j++) {
        row += (j + 1);
    }

    console.log(row);
}

console.log("\n");


// ------------------------------------------------------
// Star Pattern – 6 (Reverse Star Triangle)
// *****
// ****
// ***
// **
// *
// ------------------------------------------------------

let b = 5;

for (let i = 0; i < b; i++) {
    let row = "";

    for (let j = 0; j < b - i; j++) {
        row += "*";
    }

    console.log(row);
}

console.log("\n");


// ------------------------------------------------------
// Star Pattern – 7 
//    **
//   ***
//  ****
// *****
// ------------------------------------------------------

let c = 5;

for (let i = 0; i < c; i++) {
    let row = "";

    // Add spaces
    for (let j = 0; j < c - i - 1; j++) {
        row += " ";
    }

    // Add stars
    for (let k = 0; k <= i; k++) {
        row += "*";
    }

    console.log(row);
}

console.log("\n");


// ------------------------------------------------------
// Binary Pattern – 8 (Each Row Starts with 1)
// 1
// 10
// 101
// 1010
// 10101
// ------------------------------------------------------

let d = 5;

for (let i = 0; i < d; i++) {
    let row = "";
    let toggle = 1;  // reset for each row

    for (let j = 0; j <= i; j++) {
        row += toggle;
        toggle = toggle === 1 ? 0 : 1;
    }

    console.log(row);
}

console.log("\n");


// ------------------------------------------------------
// Binary Pattern – 9

// 1
// 01
// 010
// 1010
// 10101
// ------------------------------------------------------

let e = 5;

for (let i = 0; i < e; i++) {
    let row = "";

    // Decide starting value based on row number
    let toggle = i % 2 === 0 ? 1 : 0;

    for (let j = 0; j <= i; j++) {
        row += toggle;
        toggle = toggle === 1 ? 0 : 1;
    }

    console.log(row);
}
