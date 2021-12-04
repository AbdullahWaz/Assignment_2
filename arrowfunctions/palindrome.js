const isPalindrome = str => {
    return (str == str
        .split("")
        .reverse()
        .join("")
    );
  };
  
  const sampleStrings = [
    "a",
    "121",
    "bad",
    ".1.",
    "palindrome",
    "radar",
    "dad"
  ];
  
  for (let item of sampleStrings) {
    console.log(`${item} : ${isPalindrome(item)}`);
  }