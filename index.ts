/**
 * This program generates 100 random numbers with a mean of 75
 * and a standard deviation of 10.
 *
 * By:      Ali Mugamai
 * Version: 1.0
 * Since:   2020-01-01
 */

import { writeFileSync, readFileSync } from 'fs'

/**
 * generateGaussian() function - generates suitable number
 *
 * @param {number} mean - average number to generate
 * @param {number} deviation - deviation from the mean
 * @returns {number} randomNum - random number generated
 */
function generateGaussian(mean: number, deviation: number): number {
  // https://discourse.psychopy.org/t/javascript-gaussian-function/17724/2
  const _2PI = Math.PI * 2
  const num1 = Math.random()
  const num2 = Math.random()

  let randomNum = Math.sqrt(-2.0 * Math.log(num1)) * Math.cos(_2PI * num2)
  randomNum = randomNum * deviation + mean

  if (randomNum > 100) {
    randomNum = 100
  }
  return randomNum
}

/**
 * generate 2d array
 *
 * @param {string} students - classmates to be graded
 * @param {string} units - individual units and assignments
 */
function studentUnitArray(students: String[], units: String[]): void {
  const unitLength = units.length - 1
  const table = []
  table.push(units)

  for (let count = 0; count < students.length; count++) {
    const tempTable = []
    tempTable.push(students[count])

    for (let count2 = 0; count2 <= unitLength; count2++) {
      tempTable.push(Math.round(generateGaussian(75, 10)))
    }
    table.push(tempTable)
  }
  const formattedTable = table.join(',\n')
  writeFileSync('marks1.csv', formattedTable)
}

// file path for students
const studentFile = readFileSync('Students.txt', 'utf-8')
const studentList = studentFile.split(/\r?\n/)
studentList.pop()

// file path for units
const assignmentFile = readFileSync('Assignments.txt', 'utf-8')
const assignmentList = assignmentFile.split(/\r?\n/)
assignmentList.pop()

// organization
studentUnitArray(studentList, assignmentList)

const csv = readFileSync('marks1.csv', 'utf-8')
console.log('')
console.log(csv)

console.log('\nDone.')
