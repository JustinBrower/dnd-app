import { diceService } from "../Services/DiceService.js";


export class DiceController {
    constructor() {
        console.log("DiceController Loaded...");
    }


    async roll(dice) {
        try {
            await diceService.roll(dice)
        } catch (error) {
            console.log(error);
        }
    }
}