





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
}
///////


export const diceService = new DiceService()