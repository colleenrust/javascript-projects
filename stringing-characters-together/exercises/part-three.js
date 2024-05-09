//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language[0] + language[1]);
//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.charAt(0) + language.charAt(1));
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${language[0]}${language[1]}' .`);


//4. Just for fun, try chaining 3 or more methods together, and then print the result.
const result = language.toUpperCase().charAt(0) + language.toLowerCase().slice(-9, -4);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

const titleCase = notTitleCase.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(titleCase);
