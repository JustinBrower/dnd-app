import { ProxyState } from "../AppState.js";
import { spellsService } from "../Services/SpellsService.js";

async function _getSpellsIndex() {
    try {
        await spellsService.getSpellsIndex()
    } catch (error) {
        console.log(error);
    }
}

async function _addStartingSpells() {
    try {
        await spellsService.addStartingSpells()
    } catch (error) {
        console.log(error);
    }
}

async function _addVillainSpell() {
    try {
        await spellsService.addVillainSpell()
    } catch (error) {
        console.log(error);
    }
}

export class SpellsController {
    constructor() {
        console.log("SpellsController Loaded...");
        ProxyState.on("apiSpells", _addStartingSpells)
        ProxyState.on("apiSpells", _addVillainSpell)
        _getSpellsIndex()
    }

    async addHeroSpell(spell) {
        try {
            await spellsService.addHeroSpell(spell)
        } catch (error) {
            console.log(error);
        }
    }
}