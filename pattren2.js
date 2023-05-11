// function to print a diamond star pattern
function printDiamondStarPattern(rows) {
    // set the middle row for the diamond
    const midRow = Math.ceil(rows / 2);
    
    // loop through each row
    for (let i = 1; i <= rows; i++) {
      // calculate the number of spaces and stars to print for this row
      const numSpaces = Math.abs(midRow - i);
      const numStars = rows - (2 * numSpaces);
      
      // print the spaces and stars for this row
      let rowStr = "";
      for (let j = 0; j < numSpaces; j++) {
        rowStr += " ";
      }
      for (let j = 0; j < numStars; j++) {
        rowStr += "*";
      }
      console.log(rowStr);
    }
  }
  
  // example usage: print a diamond star pattern with 7 rows
  printDiamondStarPattern(7);
  