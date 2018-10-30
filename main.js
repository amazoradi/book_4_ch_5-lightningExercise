// 1) Make an array from the one below called fave_demo that contains only ages from 18 - 49
let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]

let filteredAges = ages.filter( age => age.valueOf() >= 18 && age.valueOf() <= 49)
console.log(filteredAges)


// 2) Choose a loop method of your choice to get this result from this array:
let nums = [1, 2, 3, 4, "5", 6, "7"]
// expected result:
// [3, 5, 7, 9, 11, 13]

let selectedNums = nums.map((a, b) => (+a) + (+b)).filter(num => num.valueOf() > 1)
console.log(selectedNums)




// 3) Capitalize 'the', insert a comma after 'teacher' and output "Yoda says, "The greatest teacher, failure is"

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]

yoda_quote[0]="The"
yoda_quote[2]="teacher,"
let saying = yoda_quote.reduce((a, b) => `${a} ${b}`)
console.log(saying)

// 4)  * Sort the following numbers in descending order
//   * Remove any integers greater than 19.
//     * Multiply each remaining number by 1.5 and then substract 1.
//       * Then output(either in the DOM or the console) the sum of all the resulting numbers.


  const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]

let sortNum = integers.sort((a, b) => b - a).filter(num => num <= 19).map(x => (x*1.5) -1).reduce((a,b) => a +b)
  console.log(sortNum)