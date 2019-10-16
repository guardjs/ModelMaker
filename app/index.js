

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
  return raw => `Everything is ok but it's not implemented and not working yet`
}

module.exports = app
