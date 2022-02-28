



async function _getSpells() {
    try {
        await spellService.getSpells()
    } catch (error) {
        console.log("Spell Controller error...", error);
    }
}

async function _drawSpells() {

}
