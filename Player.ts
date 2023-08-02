class Player {
  name: string;
  score: number;
  turnScore: number;
  isTurn: boolean;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
    this.turnScore = 0;
    this.isTurn = false;
  }

  addToTurnScore(rolled: number) {
    this.turnScore += rolled;
  }
}
