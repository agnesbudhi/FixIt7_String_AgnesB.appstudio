/* Create a variable named quoteString and put this string in it: 
Failure is simply the opportunity to begin again this time more intelligently.
*/

let quoteString = "Failure is simply the opportunity o begin again this time more intelligently."
console.log(quoteString)

// Using a string method, change the text in quoteString to all upper case and save it in a new variable named upperCaseString.
let upperCaseString = quoteString.toUpperCase()
console.log(upperCaseString)

// Create a new variable named authorString and put this text in it. 
let authorString = "= Henry Ford"
console.log(authorString)

/* Then use a string method to put the authorString value on the end of the quoteString value, 
saving the new string in a variable named completeString. 
*/
let completeString = quoteString.concat(authorString)
console.log(completeString)

/*Now create a new string variable named secondQuote and put this string in it: 
Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King
*/
let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
console.log(secondQuote)

// Using a string method, change the text in secondQuote to all lower case and save it in a new variable named lowerCaseString.
let lowerCaseString = secondQuote.toLowerCase()
console.log(lowerCaseString)

// Find the character at the 3rd position of secondQuote.
console.log(secondQuote.charAt(n3))

/* Create a new variable named findString. Using a string method, remove this part of the 
secondQuote string and put it in findString variable:
What separates the talented individual from the successful one is a lot of hard work.
*/
let findString = secondQuote.replace('What separates the talented individual from the successful one is a lot of hard work.','') 
console.log(findString)