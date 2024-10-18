/**
 * This program generates 100 random numbers with a mean of 75
 * and a standard deviation of 10.
 *
 * By:      Ali Mugamai
 * Version: 1.0
 * Since:   2024-10-17
 */
import { writeFileSync } from 'fs'
import { readFileSync } from 'fs'

function generateGaussian(mean: number, std: number) {
  let _2PI = Math.PI * 2
  let u1 = Math.random()
  let u2 = Math.random()

  let z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(_2PI * u2)

  return z0 * std + mean
}

function makeArray(d1: number, d2: number) {
  let arr = []
  for (let i = 0; i < d2; i++) {
    arr.push(new Array(d1))
  }
  return arr
}

function grader(assArr: string[], namesArr: string[]) {
  // Defining array
  const arr: string[][] = makeArray(namesArr.length + 1, arrAss.length)

  arr[0] = arrNames
  arr[0].unshift('')

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
