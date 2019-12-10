// Soldier
class Soldier {
    constructor(health,strength){
    this.health=health;
    this.strength=strength
    }

    attack() {
        return this.strength;
    }

    receiveDamage(thedamage) {
        this.health -= thedamage;

    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name=name
    }
    receiveDamage(thedamage){
        this.health -= thedamage;
        if(this.health > 0){
            return `${this.name} has received ${thedamage} points of damage`
        }
        else if(this.health === 0){
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
}
    
}

// Saxon
class Saxon extends Soldier{
   constructor(health,strength){
        super(health,strength);
   }
   receiveDamage(thedamage){
       this.health -= thedamage;
       
       if(this.health > 0){
        return `A Saxon has received ${thedamage} points of damage`
    }
    else if(this.health === 0){
        return `A Saxon has died in combat`
   }
}
    
}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];

    addViking(vikingo){
        this.vikingArmy.push(vikingo);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        
    }

    saxonAttack(){
    
    }
    showStatus(){
       
    }
    }

