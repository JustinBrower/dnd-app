import { ProxyState } from "../AppState.js";
import { dndApi } from "./AxiosService.js"


class SpellsService {
    async getSpells() {
        const res = await dndApi.get('spells')
        console.log("API Spells", res.data);
        ProxyState.apiSpells = res.data.results
    }
    async addStartingSpells() {
        let s0 = ProxyState.apiSpells.find(s => s.name == "Fire Bolt")
        let s1 = ProxyState.apiSpells.find(s => s.name == "Ray of Frost")
        ProxyState.mySpells.push(s0, s1)
    }
    async addHeroSpell(spell) {
        ProxyState.apiSpells.find(s => s.name == spell)
        ProxyState.mySpells.push(spell)
    }
    async addVillainSpells() {
        let s0 = ProxyState.apiSpells.find(s => s.name == "Fire Bolt")
        ProxyState.v0Spells.push(s0)
        console.log("Villain's Spells are...", ProxyState.v0Spells);
    }




}


export const spellsService = new SpellsService()