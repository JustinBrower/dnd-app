import { Protaganist } from "./Models/Protaganist.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { generateId } from "./Utils/generateId.js"
import { isValidProp } from "./Utils/isValidProp.js"


const testProtag = new Protaganist({
  id: generateId(),
  health: 20,
  isDead: false,
  imgUrl: ""
})

class AppState extends EventEmitter {
  /** @type {import('./Models/SpellIndex').Spell[]} */
  apiSpells = []
  mySpells = []

  /** @type {import('./Models/Protaganist').Protaganist{}} */


  protagObject = testProtag

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
