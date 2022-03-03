import { ProxyState } from "../AppState.js";
import { spellsService } from "../Services/SpellsService.js";




async function _getSpells() {
    try {
        await spellsService.getSpells()
    } catch (error) {
        console.log("SpellsController Error...", error);
    }
    // HAVE TO CALL SPELL FUNCTIONS HERE INSTEAD OF CONTROLLER BECAUSE _GETSPELLS IS TOO SLOW, SPELLS COME BACK UNDEFINED
    _addStartingSpells()
    _addVillainSpells()
}

//  ADDS THE STARTING HERO SPELLS
async function _addStartingSpells() {
    try {
        await spellsService.addStartingSpells()
    } catch (error) {
        console.log(error);
    }
}

// ADDS EVERY VILLAIN'S SPELL TO THEIR SPELLS ARRAY ON LOAD
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
    }
}