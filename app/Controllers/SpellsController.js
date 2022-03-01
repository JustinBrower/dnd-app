import { ProxyState } from "../AppState.js";
import { spellsService } from "../Services/SpellsService.js";




async function _getSpells() {
    try {
        await spellsService.getSpells()
    } catch (error) {
        console.log("Spell Controller error...", error);
    }
}

async function _drawSpells() {

}

export class SpellsController {
    constructor() {
        _getSpells()
    }
}