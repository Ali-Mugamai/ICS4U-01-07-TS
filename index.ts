/**
 * This program generates 100 random numbers with a mean of 75
 * and a standard deviation of 10.
 *
 * By:      Ali Mugamai
 * Version: 1.0
 * Since:   2020-01-01
 */

import { writeFileSync } from "fs"

function generateGaussian(mean: number ,std: number){
  // https://discourse.psychopy.org/t/javascript-gaussian-function/17724/2
  var _2PI = Math.PI * 2;
  var u1 = Math.random();
  var u2 = Math.random();
  
  var z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(_2PI * u2);
  var z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(_2PI * u2);

  return z0 * std + mean;
}

let sum = 0
let numbers = ''

// Generate 100 Gaussian random numbers
for (var counter = 0; counter < 100; counter++) {
  const normalNumber = generateGaussian(75, 10)
  sum = sum + normalNumber
  numbers = numbers + normalNumber + '\n'
  console.log(normalNumber)
}

console.log("\n")
console.log(sum / counter)
console.log("\n")
console.log(numbers)
writeFileSync("NormalNumbers.txt", numbers)

console.log("Done.")
<<<<<<< HEAD

<<<<<<< HEAD
  for (let y = 1; y <= assArr.length - 1; y++) {
    arr[y][0] = arrAss[y]
    for (let x = 1; x <= namesArr.length - 1; x++) {
      arr[y][x] = Math.round(generateGaussian(75, 10)).toString()
    }
  }

  return arr
}

const namesFile = readFileSync('./Students.txt', 'utf-8')
const assFile = readFileSync('./Assignments.txt', 'utf-8')

const arrNames = namesFile.toString().replace(/\r\n/g, '\n').split('\n')
arrNames.pop()
const arrAss = assFile.toString().replace(/\r\n/g, '\n').split('\n')
arrAss.pop()

const returned: string[][] = grader(arrAss, arrNames)

let exportString: string = ''

for (let y = 0; y < returned.length; y++) {
  for (let x = 0; x < returned[0].length; x++) {
    exportString += returned[y][x]
    exportString += ','
  }
  exportString += '\n'
}

writeFileSync('table(3).csv', exportString)
=======
>>>>>>> 986ea75569a6643a91d99e144fd63bec6397ffd5
=======
>>>>>>> 1f7d66058edbbf3e9684854397aaad841ca328be
