import { type Character } from "../../characters/Character/Character";
import { type CharacterCardComponentStructure } from "./CharacterCardComponentStructure";

export class CharacterCardImage implements CharacterCardComponentStructure {
  element: Element;
  person: Character;

  constructor(parentElement: Element, character: Character, className: string) {
    this.person = character;
    this.element = document.createElement("IMG");
    (this.element as HTMLImageElement).src =
      character.characterData.imageSource;
    this.element.className = className;
    parentElement.appendChild(this.element);
  }
}
