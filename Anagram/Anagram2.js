// Explain the concept of anagram and write a function to check if two strings are anagrams of each other.

let word1 = "racecar"; 
let word2 = "carrace";

let letters = word1.split('');
    let table = {};
    for (let index = 0; index < letters.length; index++){
        table[letters[index]] = 0;
    }
    for (let index = 0; index < letters.length; index++){
        table[letters[index]]++;
    }
    console.log(table);         //O/P: { r: 2, a: 2, c: 2, e: 1 }

// Using for...of loop
let key;
let value;
for ([key, value] of Object.entries(table)) {
    for (let i = 0; i<word2.length;i++) {
        if (key == word2[i]){
            value = value - 1;
        }
    }
  console.log(`${key} ${value}`);
}

if (value == 0) {
    console.log("Words are Anagram");
}
else {
    console.log("Words are Not Anagram");
}
