



// 4 || 6 || 10 || 12 || 20 || 100)


class DiceService {

    async roll(data) {
        let splitData = data.split("+")
        let TrueRoll = 0
        for (let i = 0; i < splitData.length; i++) {
            let newDiceArr = splitData[i]
            console.log(newDiceArr);
            let trueDice = newDiceArr.split("d")
            let validDice = [4, 6, 8, 10, 12, 20, 100]
            let ifValid = validDice.find(d => d == trueDice[1])
            if (ifValid == undefined) {
                return console.log("Not a valid dice");
            }
            console.log("This dice is...", trueDice[0] + "d" + trueDice[1]);
            let numberOfDice = trueDice[0]
            let numberOfSides = trueDice[1]
            let dataRoll = 0
            for (let i = 1; i <= numberOfDice; i++) {
                let rawRoll = Math.floor(Math.random() * numberOfSides) + 1
                console.log("Rolling " + [i] + "...", rawRoll);
                dataRoll += rawRoll
            }
            TrueRoll += dataRoll
        }
        console.log("Roll is...", TrueRoll);
        return TrueRoll
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