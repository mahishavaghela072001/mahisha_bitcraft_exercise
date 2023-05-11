function findLongestWord(str) {
    // Split the string into an array of words
    const wordsArr = str.split(' ');
  
    // Initialize a variable to hold the current longest word
    let longestWord = '';
  
    // Loop through each word in the array and compare its length to the length of the current longest word
    for (let i = 0; i < wordsArr.length; i++) {
      if (wordsArr[i].length > longestWord.length) {
        longestWord = wordsArr[i];
      }
    }
  
    // Return the longest word
    return longestWord;
  }
  
  // Example usage:
  const str = 'Hello world  Mahisha Bitcraft_Exercise';
  const longestWord = findLongestWord(str);
  console.log(longestWord); 
  