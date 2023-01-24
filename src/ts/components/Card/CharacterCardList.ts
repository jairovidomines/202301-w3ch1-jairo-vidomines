import { type CharacterCardComponentStructure } from "./CharacterCardComponentStructure";

export class CharacterCardList implements CharacterCardComponentStructure {
  element: Element;

  constructor(parentElement: Element, className: string) {
    this.element = document.createElement("ul");
    this.element.className = className;
    parentElement.appendChild(this.element);
  }
}
