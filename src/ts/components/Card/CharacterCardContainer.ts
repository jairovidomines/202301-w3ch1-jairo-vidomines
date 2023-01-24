import { type CharacterCardComponentStructure } from "./CharacterCardComponentStructure";

export class CharacterCardContainer implements CharacterCardComponentStructure {
  element: Element;

  constructor(parentElement: Element, className: string) {
    this.element = document.createElement("div");
    this.element.className = className;
    parentElement.appendChild(this.element);
  }
}
