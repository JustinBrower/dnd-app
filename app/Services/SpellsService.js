import { ProxyState } from "../AppState.js";
import { Spell } from "../Models/Spell.js";
import { dndApi } from "./AxiosService.js"


class SpellsService {
    async getSpellsIndex() {
        const res = await dndApi.get('/api/spells')
        console.log("API Spells Index", res.data);
        ProxyState.apiSpells = res.data.results
    }

    async addStartingSpells() {
        this.addHeroSpell("Fire Bolt")
        this.addHeroSpell("Ray of Frost")
        this.addVillainSpell('Fire Bolt')
    }

    //  CURRENTLY apiSpells.url IS COMING BACK UNDEFINED

    async addHeroSpell(spell) {
        let spellIndex = ProxyState.apiSpells.find(s => s.name == spell)
        let foundSpell = await dndApi.get(spellIndex.url)
        let trueSpell = new Spell(foundSpell)
        console.log("after mapping...", trueSpell);
        ProxyState.mySpells.push(trueSpell)
    }

    async addVillainSpell(spell) {
        let spellIndex = ProxyState.apiSpells.find(s => s.name == spell)
        debugger
        console.log("url is...", spellIndex.url);
        let foundSpell = await dndApi.get(spellIndex.url)
        console.log("Found Spell is...", foundSpell);
        let trueSpell = new Spell(foundSpell)
        console.log("after mapping...", trueSpell);
        ProxyState.v0Spells.push(trueSpell)
    }
}


export const spellsService = new SpellsService()