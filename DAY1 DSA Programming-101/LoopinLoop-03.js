// Double Loop - 1
for (let i = 0; i < 3; i++) {          // Outer loop: i goes from 0 to 2
    for (let j = 0; j < 3; j++) {      // Inner loop: j goes from 0 to 2 for each i
        console.log("i = " + i + " j = " + j);  // Print current i and j
    }
}
console.log("*************");

// Double Loop - 2
for (let i = 0; i < 3; i++) {          // i goes 0 → 2
    for (let j = 0; j < i; j++) {      // j goes from 0 up to *one less than i*
        console.log("i = " + i + " j = " + j);
    }
}

console.log("*************");

// Double Loop - 3
for (let i = 0; i < 5; i++) {           // i goes 0 → 4
    for (let j = 0; j <= i; j++) {      // j goes 0 → i (inclusive)
        console.log("i = " + i + " j = " + j);
    }
}

console.log("*************");

// Double Loop - 4
for (let i = 0; i < 3; i++) {           // i goes 0 → 2
    for (let j = i; j > 0; j--) {       // j starts at i, counts DOWN until > 0
        console.log("i = " + i + " j = " + j);
    }
}

console.log("*************");

// Double Loop - 5
for (let i = 0; i < 3; i++) {           // i goes 0 → 2
    for (let j = i; j >= 0; j--) {      // j starts at i, counts down to 0 (inclusive)
        console.log("i = " + i + " j = " + j);
    }
}

console.log("*************");

// Double Loop - 6
for (let i = 5; i > 0; i--) {           // i starts at 5, counts DOWN to 1
    for (let j = 0; j < i; j++) {       // j goes from 0 → (i-1)
        console.log("i = " + i + " j = " + j);
    }
}
