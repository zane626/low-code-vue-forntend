/**
 * Created by zane on 2021/9/6 下午2:33
 * @description .
 */

class OnlyKey {
  constructor () {
    this._keys = new Set()
  }

  has (key) {
    return this._keys.has(key)
  }

  addKey (key) {
    this._keys.add(key)
  }

  addKeys (keys = []) {
    keys.forEach(i => this._keys.add(i))
  }

  getKey () {
    const key = 'jing_' + Math.random().toString(36).slice(-8)
    return this.has(key) ? this.getKey() : key
  }
}

function getOnlyKey () {
  if (OnlyKey.prototype.Instance) {
    return OnlyKey.prototype.Instance
  } else {
    OnlyKey.prototype.Instance = new OnlyKey()
    return OnlyKey.prototype.Instance
  }
}

export default getOnlyKey()
