import { type Character } from "../../../got";
import { type CharacterStructure } from "../Character/CharacterStructure";

export interface AdvisorStructre extends CharacterStructure {
  advises: Character;
}
