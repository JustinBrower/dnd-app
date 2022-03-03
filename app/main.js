import { DiceController } from "./Controllers/DiceController.js";
import { ProtaganistController } from "./Controllers/ProtaganistController.js";
import { SpellsController } from "./Controllers/SpellsController.js";



class App {
  spellsController = new SpellsController();
  protaganistController = new ProtaganistController();
  diceController = new DiceController();
}

window["app"] = new App();
