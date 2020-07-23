"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const nk = readLine().split(" ");

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);
    var supremum = 0,
      tmp;
    for (let i = 1; i < n; i++) {
      for (let j = i + 1; j <= n; j++) {
        tmp = i & j;
        // console.log("tmp = "+tmp);
        if (tmp < k && supremum < tmp) {
          supremum = tmp;
        }
        tmp = 0;
      }
    }
    console.log(supremum);
  }
}
