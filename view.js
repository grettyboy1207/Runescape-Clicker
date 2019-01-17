let view = {
    initialize: function() {

    },
    updating: {
        update: function() {
            if($("#skill-screen-container").hasClass("show")) {
                view.updating.updateSkillExp();
                view.updating.updateSkillLevels();
            }
            view.updating.saveCurrenState();
        },
        saveCurrenState: function() {
            for(let skill in skills) {
                // prevState[skill] = copyArray(skills[skill]);
                // console.log(prevState);
            }
        },
        updateSkillExp: function() {
            let skill = skills[$(".screen.show").attr("id")];
            // if(prevState[skills][skill].exp != skills[skill].exp) {
                $("#exp-points").text(skill.levelExp());
                //TODO: dont let exp bar fill up more than 100% while updating
                let barPercent = [skill.levelExp()/xpDiff(skill.currentLevel + 1)]*100;
                if(barPercent > 100) {
                    barPercent = 100;
                }
                $("#current-exp").css("width", barPercent + "%");
            // };
            //TODO: only execute if state has changed
            $("#nextLvlExp").text(skill.nextLvlExp());
            $("#level").text(skill.currentLevel);
        },
        updateSkillLevels: function() {
            //TODO: if state has changed, do
            $(".skill").each(function() {
                console.log(this);
                $("#" + this.id + " > .effLevel").text(this.currentLevel);
            })
        }
    }
};