import { joffrey } from "./characters/characters";
import { CharacterCardComponent } from "./components/Card/CharacterCardComponent";
import { CharacterCardContainer } from "./components/Card/CharacterCardContainer";

const container = document.querySelector(".container")!;
const charachterCard = document.querySelector(".character__card")!;

const king = new CharacterCardComponent(container, joffrey, "card-body");

const charachterContainer = new CharacterCardContainer(charachterCard, "clase");
