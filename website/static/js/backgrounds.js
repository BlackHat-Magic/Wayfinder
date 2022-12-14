document.addEventListener ("alpine:init", () => {
    Alpine.data ("main", () => ({
        query: "",
        bgROM: [],
        truncateEquipment(){
            for (let i = 0; i < this.bgROM.length; i++) {
                if(this.bgROM[i].equipment.length > 40) {
                    this.bgROM[i].equipment = this.bgROM[i].equipment.substring(0, 33) + "..."
            
                }
            }
        },
        filterQuery() {
            namematch = [];
            for(let i = 0; i < this.bgROM.length; i++) {
                if (this.bgROM[i].name.includes(this.query)) {
                    namematch.push(this.bgROM[i]);
                }
            }

            nameskillmatch = [];
            return(namematch);
        },

        skillshow: false,
        toggleSkills () {
            this.skillshow = !this.skillshow;
        },
        skilltoggles: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ],
        skills: [
            "Acrobatics",
            "Animal Handling",
            "Arcana",
            "Athletics",
            "Deception",
            "History",
            "Insight",
            "Intimidation",
            "Investigation",
            "Medicine",
            "Nature",
            "Perception",
            "Performance",
            "Persuasion",
            "Religion",
            "Sleight of Hand",
            "Stealth",
            "Survival"
        ],
        capitalize (string) {
            words = string.split(" ");
            for (let i = 0; i < words.length; i++) {
                words[i] += words[i][0].toUpperCase() + words[i].substr(1) + " ";
            }
            return(words.join(" "));
        },

        filtertype: true,
    }))
})
