
let maxExp = 200000000;

let skills = {
    attack: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        // add this at some point
        // effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        levelExp: function() {

        },
        actionGain: 1,
        actionSpeed: 1,
        // nextLvlExp: function() {
        //     xpDiff();
        // },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    hitpoints: {
        tick: function() {

        },
        startLevel: 10,
        currentLevel: 10,
        effectiveLevel: 10,
        maxLevel: 99,
        exp: 0,
        levelExp: function() {
            
        },
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {
            
        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    mining: {
        tick: function() {

            this.levelUp();

        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 630,
        levelExp: function() {
            if(this.currentLevel > 1) {
                return this.exp - Math.round(xpCumul(this.currentLevel));
            } else {
                return this.exp;
            }
        },
        actionGain: 1,
        //to do
        actionSpeed: 1,

        nextLvlExp: function() {
            return Math.round(xpDiff(this.currentLevel + 1));
        },
        levelUp: function() {
            if(this.levelExp() >= this.nextLvlExp()) {
                if(this.currentLevel+1 <= this.maxLevel) {
                    this.currentLevel += 1;
                }
                //fix missing or extra exp on level up. currently does not work
                //TODO: clean this up
                if(this.levelExp < 0) {
                    this.exp += 1;
                } else if(this.levelExp > 0) {
                    this.exp -= 1;
                }
            }
        },
        expToAdd: function() {

        },
        actions: {
            clay: {
                //Action speed, in secs
                speed: 1,
                expGain: 1,
                loot: {
                    itemName: "item",
                    dropChance: 0.2,
                    dropAmount: function() {
                        
                    }
                }
            },
            copper: {

            },
            tin: {

            },
            runeEssence: {

            },
            blurite: {

            },
            limestone: {

            },
            iron: {

            },
            silver: {

            },
            elemental: {

            },
            daeyalt: {

            },
            volcanicAsh: {

            },
            coal: {

            },
            pureEssence: {

            },
            payDirt: {

            },
            sandstone: {

            }
        }
    },
    strength: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    agility: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    smithing: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    defence: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    herblore: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    fishing: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    ranged: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    thieving: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    cooking: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    prayer: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    crafting: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    firemaking: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    magic: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    fletching: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    woodcutting: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    runecrafting: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    slayer: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    farming: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    construction: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    },
    hunter: {
        tick: function() {
            
        },
        startLevel: 1,
        currentLevel: 1,
        effectiveLevel: 1,
        maxLevel: 99,
        exp: 15,
        actionGain: 1,
        actionSpeed: 1,
        nextLvlExp: function() {

        },
        levelUp: function() {

        },
        expToAdd: function() {

        }
    }
}

let prevState = {skills};