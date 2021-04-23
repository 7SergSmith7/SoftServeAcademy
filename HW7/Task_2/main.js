// Task 2

class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
  }

  toString() {
    return this.name;
  }
}

class Referee {
  declareWinner(firstFighter, secondFighter, firstHitFighterName) {
    let firstHit, secondHit;
    //     const roundToWinSecond = Math.ceil(secondFighter.health / firstFighter.damagePerAttack);
    //     const roundToWinFirst = Math.ceil(firstFighter.health / secondFighter.damagePerAttack);

    if (firstFighter.toString() == firstHitFighterName) {
      [firstHit, secondHit] = [firstFighter, secondFighter];
    } else {
      [firstHit, secondHit] = [secondFighter, firstFighter];
    }
    return this.winnerAnnouncement(this.fightingLog(firstHit, secondHit));
  }

  fightingLog(firstHitFighter, secondHitFighter) {
    let healthFirst = firstHitFighter.health;
    let healthSecond = secondHitFighter.health;
    for (;;) {
      healthSecond -= firstHitFighter.damagePerAttack;
      this.hitLog(firstHitFighter, secondHitFighter, healthSecond);
      if (healthSecond <= 0) return firstHitFighter;
      healthFirst -= secondHitFighter.damagePerAttack;
      this.hitLog(secondHitFighter, firstHitFighter, healthFirst);
      if (healthFirst <= 0) return secondHitFighter;
    }
  }
  hitLog(striker, gettingHit, currentHealth) {
    console.log(
      `${striker.toString()} нанес ${
        striker.damagePerAttack
      } урона бойцу ${gettingHit.toString()}, его здоровье ${currentHealth}`
    );
  }
  winnerAnnouncement(winner) {
    return `Победителем стал ${winner.toString()}!`;
  }
}

const fighter1 = new Fighter("Sam", 10, 2);
const fighter2 = new Fighter("Den", 12, 3);
const referee = new Referee();

console.log(referee.declareWinner(fighter1, fighter2, "Sam"));
