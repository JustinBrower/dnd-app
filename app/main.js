import { ProtaganistController } from "./Controllers/ProtaganistController.js";
import { SpellsController } from "./Controllers/SpellsController.js";

class App {
  spellsController = new SpellsController();
  protaganistController = new ProtaganistController();
}

window["app"] = new App();
