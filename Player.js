export class Player {
    constructor(name) {
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
    addToTurnScore(rolled) {
        this.turnScore += rolled;
    }
    resetTurnScore() {
        this.turnScore = 0;
    }
    addToScore() {
        this.score += this.turnScore;
    }
}
