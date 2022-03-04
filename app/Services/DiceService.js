





class DiceService {

    async roll20() {
        let rawRoll = (Math.random() * 20)
        let trueRoll = Math.round(rawRoll)
        if (trueRoll == 0) {
            this.roll20()
            console.log("re-rolled");
        }
        if (trueRoll == 21) {
            this.roll20()
            console.log("re-rolled")
        }
        console.log("Roll is...", trueRoll + 1);
        trueRoll = roll
        return roll
    }

    async roll100() {
        let rawRoll = (Math.random() * 101)
        let trueRoll = Math.round(rawRoll)
        if (trueRoll == 0) {
            trueRoll = 1
        }
        if (trueRoll == 101) {
            trueRoll = 100
        }
        console.log("Roll is...", trueRoll);
        trueRoll = roll
        return roll
    }

    async roll12() {
        let rawRoll = (Math.random() * 13)
        let trueRoll = Math.round(rawRoll)
        if (trueRoll == 0) {
            trueRoll = 1
        }
        if (trueRoll == 13) {
            trueRoll = 12
        }
        console.log("Roll is...", trueRoll);
        trueRoll = roll
        return roll
    }

    async roll10() {
        let rawRoll = (Math.random() * 11)
        let trueRoll = Math.round(rawRoll)
        if (trueRoll == 0) {
            trueRoll = 1
        }
        if (trueRoll == 11) {
            trueRoll = 10
        }
        console.log("Roll is...", trueRoll);
        trueRoll = roll
        return roll
    }

    async roll8() {
        let rawRoll = (Math.random() * 9)
        let trueRoll = Math.round(rawRoll)
        if (trueRoll == 0) {
            trueRoll = 1
        }
        if (trueRoll == 9) {
            trueRoll = 8
        }
        console.log("Roll is...", trueRoll);
        trueRoll = roll
        return roll
    }

    async roll6() {
        let rawRoll = (Math.random() * 7)
        let trueRoll = Math.round(rawRoll)
        if (trueRoll == 0) {
            trueRoll = 1
        }
        if (trueRoll == 7) {
            trueRoll = 6
        }
        console.log("Roll is...", trueRoll);
        trueRoll = roll
        return roll
    }

    async roll4() {
        let rawRoll = (Math.random() * 5)
        console.log("Before Round", rawRoll);
        let trueRoll = Math.round(rawRoll)
        if (trueRoll == 0) {
            trueRoll = 1
        }
        if (trueRoll == 5) {
            trueRoll = 4
        }
        console.log("Roll is...", trueRoll);
        trueRoll = roll
        return roll
    }
}

export const diceService = new DiceService()