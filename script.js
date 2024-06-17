function firstNonRepeatedChar(str) {
 // Write your code here
let charCount = {};
	for(let i = 0; i < str.length; i++) {
    let char = str[i];
    if(charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}
	for(let i = 0; i < str.length; i++) {
    let char = str[i];
    if(charCount[char] === 1) {
        return char;
    }
}
	return null;
}
const input = propt("Enter a string");
alert(firstNonRepeatedChar(input)); 
