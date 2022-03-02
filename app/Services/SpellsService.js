import { ProxyState } from "../AppState.js";
import { dndApi } from "./AxiosService.js"


class SpellsService {
    async getSpells() {
        const res = await dndApi.get('spells')
        console.log("API Spells", res.data);
        ProxyState.apiSpells = res.data.results
    }
    async addStartingSpells() {
        let newSpell = ProxyState.apiSpells.find(s => s.name == "Fire Bolt")
        ProxyState.mySpells.push(newSpell)
    }
}


export const spellsService = new SpellsService()