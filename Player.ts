export class Player {
  name: string;
  score: number;
  turnScore: number;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
    this.turnScore = 0;
  }

  getScore() {
    return this.score;
  }

  getTurnScore() {
    return this.turnScore;
  }

  addToTurnScore(rolled: number) {
    this.turnScore += rolled;
  }

  resetTurnScore() {
    this.turnScore = 0;
  }

  addToScore() {
    this.score += this.turnScore;
  }

}
