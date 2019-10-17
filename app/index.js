

/**
 * it is a tree class to make a tree model
 * return a model (function) to get a same raw of features and seek to the leaf
 */

/**
 * return a model (function)
 * @param {object contains: raw, cut} opt 
 */
function app(opt) {
  if (!opt) throw new Error('empty train set - parameter is not passed')
  if (typeof opt.raw !== 'object') throw new Error('empty train set - pass an object like {raw:[[],[],[]]}')
  if (opt.raw.length < 1) throw new Error('empty train set - opt.raw is empty : opt = {raw:[[],[],[]]}')
  return raw => {
    var sortedModel = Object.keys(model).sort((a, b) => model[a].level < model[b].level)
    return sortedModel.readuce((leaf, feature, index) => {
      if (match(feature, conditions[index]))
        return leaf
      return leaf
    }, false) // TODO: shoulda use recursive function not arr.reduce
  }
}

module.exports = app

function match(feature, conditionObject) {
  if (!conditionObject) throw new Error(`train model and test model don't match`)
  return conditionObject + feature // FIXME:
}

var model = {
  feature1: {
    level: 0,
    condision: '>',
    const: 300,
    set1: 'feature2',
    set2: 'feature3'
  },
  feature2: {
    level: 1
  },
  feature3: {
    level: 1,
  }
}