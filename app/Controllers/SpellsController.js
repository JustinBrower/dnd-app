import { ProxyState } from "../AppState.js";
import { spellsService } from "../Services/SpellsService.js";




async function _getSpells() {
    try {
        await spellsService.getSpells()
    } catch (error) {
        console.log("Spell Controller error...", error);
    }
    try {
        await spellsService.addStartingSpells()
    } catch (error) {
        console.log(error);
    }
}


export class SpellsController {
    constructor() {
        _getSpells()
    }
}