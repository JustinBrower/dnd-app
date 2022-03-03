import { ProxyState } from "../AppState.js";
import { spellsService } from "../Services/SpellsService.js";




async function _getSpells() {
    try {
        await spellsService.getSpells()
    } catch (error) {
        console.log("SpellsController Error...", error);
    }
    return
}

async function _addStartingSpells() {
    try {
        await spellsService.addStartingSpells()
    } catch (error) {
        console.log(error);
    }
}

async function _addVillainSpells() {
    try {
        await spellsService.addVillainSpells()
    } catch (error) {
        console.log(error);
    }
}


export class SpellsController {
    constructor() {
        console.log("SpellsController Loaded...");
        _getSpells()
        _addStartingSpells()
        _addVillainSpells()
    }
}