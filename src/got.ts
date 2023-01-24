import type {
  AdvisorStructre,
  CharacterDataStructure,
  CharacterStructure,
  FighterStructure,
  KingStructure,
  SquireStructure,
} from "./types/types";

export class Character implements CharacterStructure {
  public isAlive = true;
  public series = "Game of Thrones";

  constructor(public characterData: CharacterDataStructure) {}

  communicate(): string {
    return `${this.characterData.name} says: `;
  }

  die(): void {
    this.isAlive = false;
  }
}

export class King extends Character implements KingStructure {
  constructor(
    characterData: CharacterDataStructure,
    public yearsOfReign: number
  ) {
    super(characterData);
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}

export class Fighter extends Character implements FighterStructure {
  constructor(
    characterData: CharacterDataStructure,
    public weapon: string,
    public dexterity: number
  ) {
    super(characterData);

    this.dexterity = this.filterDexterity(dexterity);
  }

  communicate(): string {
    return `${super.communicate()}First I hit and then I ask`;
  }

  private filterDexterity(dexterity: number): number {
    if (dexterity < 0) {
      return 0;
    }

    if (dexterity > 10) {
      return 10;
    }

    return dexterity;
  }
}

export class Squire extends Character implements SquireStructure {
  constructor(
    characterData: CharacterDataStructure,
    public kissAssLevel: number,
    public serves: Fighter
  ) {
    super(characterData);
    this.kissAssLevel = this.kissAssLevelFilter(kissAssLevel);

    if (serves instanceof Fighter) {
      this.serves = serves;
    }
  }

  communicate(): string {
    return `${super.communicate()}I'm a loser`;
  }

  private kissAssLevelFilter(kissAssLevel: number): number {
    if (kissAssLevel < 0) {
      return 0;
    }

    if (kissAssLevel > 10) {
      return 10;
    }

    return kissAssLevel;
  }
}

export class Advisor extends Character implements AdvisorStructre {
  constructor(
    characterData: CharacterDataStructure,
    public advises: Character
  ) {
    super(characterData);
    if (advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate(): string {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}

const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "../img/joffrey.jpg",
};

const jaimeData: CharacterDataStructure = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "../img/jaime.jpg",
};

const daeneryseData: CharacterDataStructure = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "../img/daenerys.jpg",
};

const tyrionData: CharacterDataStructure = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "../img/tyrion.jpg",
};

const bronnData: CharacterDataStructure = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "../img/bronn.jpg",
};

export const joffrey: King = new King(joffreyData, 2);
export const jaime = new Fighter(jaimeData, "sword", 7);
export const daenerys = new Fighter(daeneryseData, "Dragons", 10);
export const tyrion = new Advisor(tyrionData, daenerys);
export const bronn = new Squire(bronnData, 0, jaime);

export const characters = [jaime, joffrey, daenerys, tyrion, bronn];
