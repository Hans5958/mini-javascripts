const input = require('./input')

input.split('\n').map(str => str.replace(/[^\d]+/g, '')).reduce((acc, curr) => Number(curr[0] + curr[curr.length-1]) + acc, 0)