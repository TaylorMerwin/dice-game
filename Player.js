"use strict";
class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.turnScore = 0;
        this.isTurn = false;
    }
    addToTurnScore(rolled) {
        this.turnScore += rolled;
    }
}
