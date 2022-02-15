// class Cat {
//     constructor(name) {
//         this._name = name;
//         this._hunger = hunger;
//         this._thirst = thirst;
//         this._energy = energy;
//         this._happiness = happiness;
//     }
// }


// // GETTERS ----------------------->

// get hunger() {
//    return this._hunger; 
// }

// get thirst() {
//     return this._thirst; 
// }

// get energy() {
//     return this._energy; 
// }

// get happiness() {
//     return this._happiness; 
// }

// // SETTERS ----------------------->

// set hunger(value) {
//     this._hunger = value;
// }

// set thirst(value) {
//     this._thirst = value;
// }

// set energy(value) {
//     this._energy = value;
// }

// set happiness(value) {
//     this._happiness = value;
// }


// // GET RANDOM NUMBER ----------------------->

// let randomValue = () => {
//     return Math.floor(Math.random() * 100);
// }

// // FUNCTIONS ----------------------->

// const feedCat = () => {
//     if (this._hunger > 50) {
//         return `${this._name} isn't hungry.`
//     } else {
//         return `${this._name} needs food.`
//     }
// }


class Cat {
    constructor(name) {
      this._name = name;
      this._tiredness = this.randomValue(100);
      this._hunger = this.randomValue(100);
      this._loneliness = this.randomValue(100);
      this._happiness = this.randomValue(100);
    }
  
    randomValue(max) {
      return Math.floor(Math.random() * max);
    }
  
    get tiredness() {
      return this._tiredness;
    }
  
    get hunger() {
      return this._hunger;
    }
  
    get loneliness() {
      return this._loneliness;
    }
  
    get happiness() {
      return this._happiness;
    }
  
    set tiredness(value) {
      this._tiredness = value;
    }
  
    set hunger(value) {
      this._hunger = value;
    }
  
    set loneliness(value) {
      this._loneliness = value;
    }
  
    set happiness(value) {
      this._happiness = value;
    }
  
    play() {
      let playBehaviour;
      if (this._tiredness < 33)
        playBehaviour = `${this._name} gets crazy running around the ball you move around with a thread`;
      if (this._tiredness >= 33 && this._tiredness < 66)
        playBehaviour = `You watch ${this._name} running around its tail until it gets exhausted`;
      if (this._tiredness >= 66)
        playBehaviour = `${this._name} looks at you with a blank stare from the couch, but does not move`;
      this._hunger += this.randomValue(15);
      this._tiredness += this.randomValue(10);
      return playBehaviour;
    }
  
    feed() {
      let feedBehaviour;
      if (this._hunger < 33)
        feedBehaviour = `You clap your hands, you make noise with the can of food, but ${this._name} is nowhere to be seen`;
      if (this._hunger >= 33 && this._hunger < 66)
        feedBehaviour = `${this._name} starts by snobbing you, then where you're not looking, sneaks back in and eats everything you left for it`;
      if (this._hunger >= 66)
        feedBehaviour = `${this._name} literally grabs the bowl of food from your hands, and eats everything inside in 5 seconds`;
      this._hunger -= this.randomValue(15);
      this._happiness += this.randomValue(5);
      return feedBehaviour;
    }
  
    pet() {
      let petBehaviour;
      if (this._happiness < 33)
        petBehaviour = `${this._name} growls steadily and bites you as soon as you approach your unsuspecting hands`;
      if (this._happiness >= 33 && this._happiness < 66)
        petBehaviour = `${this._name} lets itself be petted, then suddenly scratches you`;
      if (this._happiness >= 66)
        petBehaviour = `${this._name} purrs into your arms, happy`;
      this._happiness += this.randomValue(15);
      this._hunger += this.randomValue(5);
      return petBehaviour;
    }
  
    holdOntoArms() {
      return {
        tiredness: this._tiredness,
        hunger: this._hunger,
        loneliness: this._loneliness,
        happiness: this._happiness
      };
    }
  }
  
  const rambo = new Cat("Rambo");
  console.log(rambo.tiredness)



//   console.log(rambo.holdOntoArms());
//   console.log(rambo.play());
//   console.log(rambo.feed());
//   console.log(rambo.pet());
//   console.log(rambo.holdOntoArms());
//   rambo.happiness = 100;
//   console.log(rambo.holdOntoArms());
  

 
