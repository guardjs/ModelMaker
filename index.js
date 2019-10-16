

const d3 = require('./app/')

var model = d3({ raw: [1, 2, 3, 4, 5] })

var result = model('does not matter yet')
console.log(result)

module.exports = {
  status: 'uprising'
}
