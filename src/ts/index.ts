import {
  joffrey,
  jaime,
  tyrion,
  daenerys,
  bronn,
} from "./characters/characters";
import { CharacterCardComponent } from "./components/Card/CharacterCardComponent";
import { CharacterCardContainer } from "./components/Card/CharacterCardContainer";
import { CharacterCardImage } from "./components/Card/CharacterCardImage";
import { CharacterCardList } from "./components/Card/CharacterCardList";

const container = document.querySelector(".container")!;
const characterContainer = new CharacterCardContainer(
  container,
  "character__card"
);

const characterList = new CharacterCardList(
  container,
  "characters-list row list-unstyled"
);

const characterCard = document.querySelector(".character__card")!;

const image = new CharacterCardImage(
  characterCard,
  joffrey,
  "character__picture card-img-top"
);
const king = new CharacterCardComponent(characterCard, joffrey, "card-body");

const imageQueen = new CharacterCardImage(
  characterCard,
  daenerys,
  "character__picture card-img-top"
);
const queen = new CharacterCardComponent(characterCard, daenerys, "card-body");

const imageFighter = new CharacterCardImage(
  characterCard,
  jaime,
  "character__picture card-img-top"
);
const fighter = new CharacterCardComponent(characterCard, jaime, "card-body");

const imageSquirrel = new CharacterCardImage(
  characterCard,
  bronn,
  "character__picture card-img-top"
);
const squirrel = new CharacterCardComponent(characterCard, bronn, "card-body");

const imageAdvisor = new CharacterCardImage(
  characterCard,
  tyrion,
  "character__picture card-img-top"
);
const advisor = new CharacterCardComponent(characterCard, tyrion, "card-body");
