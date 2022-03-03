import { Protaganist } from "./Models/Protaganist.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { generateId } from "./Utils/generateId.js"
import { isValidProp } from "./Utils/isValidProp.js"



const testProtag = new Protaganist({
  id: generateId(),
  name: "Mr. Hero",
  health: 20,
  isDead: false,
  imgUrl: "https://gamepedia.cursecdn.com/wizardoflegend_gamepedia_en/thumb/6/6b/Master_Sura.png/192px-Master_Sura.png?version=cb9ebaa6a7f1f19fbdbc15b5049d0f2e"
})

// const testVillain = new Villain({
//   id: generateId(),
//   name: "Mr. Bad Guy",
//   health: 20,
//   isDead: false,
//   spells: testVillainSpells,
//   imgUrl: ""
// })

class AppState extends EventEmitter {
  /** @type {import('./Models/SpellIndex').Spell[]} */
  apiSpells = []
  mySpells = []
  v0Spells = []

  /** @type {import('./Models/Protaganist').Protaganist{}} */
  hero = testProtag

  /** @type {import('./Models/Villain').Villain{}} */
  // villains = [testVillain]
  // activeVillain = testVillain

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
