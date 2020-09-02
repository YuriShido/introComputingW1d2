// function toUpperFirstLetter(str) {
//   return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
// }

const camelCase = function(input) {
  let word = input.split(' ');
  // console.log(word);
  x = word[0] ;
  for(i = 1; i < word.length; i++) {
    x = x + word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
    
    return x

};
console.log(camelCase("this is a string"));
console.log(camelCase("holy heck"));
console.log(camelCase("supercalifragalisticexpialidocious"));