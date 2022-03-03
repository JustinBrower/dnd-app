import { diceService } from "../Services/DiceService.js";


export class DiceController {
    constructor() {
        console.log("DiceController Loaded...");
    }

    async roll20(roll) {
        try {
            await diceService.roll20(roll)
        } catch (error) {
            console.log(error);
        }
    }


    async roll100(roll) {
        try {
            await diceService.roll100(roll)
        } catch (error) {
            console.log(error);
        }
    }


    async roll12(roll) {
        try {
            await diceService.roll12(roll)
        } catch (error) {
            console.log(error);
        }
    }

    async roll10(roll) {
        try {
            await diceService.roll10(roll)
        } catch (error) {
            console.log(error);
        }
    }

    async roll8(roll) {
        try {
            await diceService.roll8(roll)
        } catch (error) {
            console.log(error);
        }
    }

    async roll6(roll) {
        try {
            await diceService.roll6(roll)
        } catch (error) {
            console.log(error);
        }
    }

    async roll4(roll) {
        try {
            await diceService.roll4(roll)
        } catch (error) {
            console.log(error);
        }
    }
}