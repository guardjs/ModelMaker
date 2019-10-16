

/**
 * it is a tree class to make a tree model
 * return a model (function) to get a same raw of features and seek to the leaf
 */

/**
 * return a model (function)
 * @param {object contains: raw, cut} opt 
 */
function app(opt) {
  if (!opt) return i => i
  if (typeof opt.raw !== 'object') return i => i
  if (opt.raw.length < 1) return i => i
  return raw => `Everything is ok but it's not implemented and not working yet`
}

module.exports = app
