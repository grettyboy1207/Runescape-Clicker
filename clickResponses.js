$(document).ready(function(){


    //////TAB SELECT//////
    //Select Tab on Click
    $("#combat-tab").click(function(){
        $("#combat-tab").css("background", "url('images/Tab Sprites.png') 0 -73px");
        $("#skills-tab").css("background", "url('images/Tab Sprites.png') -38px 0");
        $("#quests-tab").css("background", "url('images/Tab Sprites.png') -71px 0");
        $("#inventory-tab").css("background", "url('images/Tab Sprites.png') -104px 0");
        $("#equipment-tab").css("background", "url('images/Tab Sprites.png') -137px 0");
        $("#prayer-tab").css("background", "url('images/Tab Sprites.png') -170px 0");
        $("#magic-tab").css("background", "url('images/Tab Sprites.png') -203px 0");
        //show Selected Panel
        $("#combat-panel").removeClass("hide");
        $("#combat-panel").addClass("show");
        $("#skills-panel, #quests-panel, #inventory-panel, #equipment-panel, #prayer-panel, #magic-panel").removeClass("show").addClass("hide");
    });
    $("#skills-tab").click(function(){
        $("#combat-tab").css("background", "url('images/Tab Sprites.png') 0 0");
        $("#skills-tab").css("background", "url('images/Tab Sprites.png') -38px -73px");
        $("#quests-tab").css("background", "url('images/Tab Sprites.png') -71px 0");
        $("#inventory-tab").css("background", "url('images/Tab Sprites.png') -104px 0");
        $("#equipment-tab").css("background", "url('images/Tab Sprites.png') -137px 0");
        $("#prayer-tab").css("background", "url('images/Tab Sprites.png') -170px 0");
        $("#magic-tab").css("background", "url('images/Tab Sprites.png') -203px 0");
        //show Selected Panel
        $("#skills-panel").removeClass("hide");
        $("#skills-panel").addClass("show");
        $("#combat-panel, #quests-panel, #inventory-panel, #equipment-panel, #prayer-panel, #magic-panel").removeClass("show").addClass("hide");
    });
    $("#quests-tab").click(function(){
        $("#combat-tab").css("background", "url('images/Tab Sprites.png') 0 0");
        $("#skills-tab").css("background", "url('images/Tab Sprites.png') -38px 0");
        $("#quests-tab").css("background", "url('images/Tab Sprites.png') -71px -73px");
        $("#inventory-tab").css("background", "url('images/Tab Sprites.png') -104px 0");
        $("#equipment-tab").css("background", "url('images/Tab Sprites.png') -137px 0");
        $("#prayer-tab").css("background", "url('images/Tab Sprites.png') -170px 0");
        $("#magic-tab").css("background", "url('images/Tab Sprites.png') -203px 0");
        //show Selected Panel
        $("#quests-panel").removeClass("hide");
        $("#quests-panel").addClass("show");
        $("#combat-panel, #skills-panel, #inventory-panel, #equipment-panel, #prayer-panel, #magic-panel").removeClass("show").addClass("hide");
    });
    $("#inventory-tab").click(function(){
        $("#combat-tab").css("background", "url('images/Tab Sprites.png') 0 0");
        $("#skills-tab").css("background", "url('images/Tab Sprites.png') -38px 0");
        $("#quests-tab").css("background", "url('images/Tab Sprites.png') -71px 0");
        $("#inventory-tab").css("background", "url('images/Tab Sprites.png') -104px -73px");
        $("#equipment-tab").css("background", "url('images/Tab Sprites.png') -137px 0");
        $("#prayer-tab").css("background", "url('images/Tab Sprites.png') -170px 0");
        $("#magic-tab").css("background", "url('images/Tab Sprites.png') -203px 0");
        //show Selected Panel
        $("#inventory-panel").removeClass("hide");
        $("#inventory-panel").addClass("show");
        $("#combat-panel, #skills-panel, #quests-panel, #equipment-panel, #prayer-panel, #magic-panel").removeClass("show").addClass("hide");
    });
    $("#equipment-tab").click(function(){
        $("#combat-tab").css("background", "url('images/Tab Sprites.png') 0 0");
        $("#skills-tab").css("background", "url('images/Tab Sprites.png') -38px 0");
        $("#quests-tab").css("background", "url('images/Tab Sprites.png') -71px 0");
        $("#inventory-tab").css("background", "url('images/Tab Sprites.png') -104px 0");
        $("#equipment-tab").css("background", "url('images/Tab Sprites.png') -137px -73px");
        $("#prayer-tab").css("background", "url('images/Tab Sprites.png') -170px 0");
        $("#magic-tab").css("background", "url('images/Tab Sprites.png') -203px 0");
        //show Selected Panel
        $("#equipment-panel").removeClass("hide");
        $("#equipment-panel").addClass("show");
        $("#combat-panel, #skills-panel, #quests-panel, #inventory-panel, #prayer-panel, #magic-panel").removeClass("show").addClass("hide");
    });
    $("#prayer-tab").click(function(){
        $("#combat-tab").css("background", "url('images/Tab Sprites.png') 0 0");
        $("#skills-tab").css("background", "url('images/Tab Sprites.png') -38px 0");
        $("#quests-tab").css("background", "url('images/Tab Sprites.png') -71px 0");
        $("#inventory-tab").css("background", "url('images/Tab Sprites.png') -104px 0");
        $("#equipment-tab").css("background", "url('images/Tab Sprites.png') -137px 0");
        $("#prayer-tab").css("background", "url('images/Tab Sprites.png') -170px -73px");
        $("#magic-tab").css("background", "url('images/Tab Sprites.png') -203px 0");
        //show Selected Panel
        $("#prayer-panel").removeClass("hide");
        $("#prayer-panel").addClass("show");
        $("#combat-panel, #skills-panel, #quests-panel, #inventory-panel, #equipment-panel, #magic-panel").removeClass("show").addClass("hide");
    });
    $("#magic-tab").click(function(){
        $("#combat-tab").css("background", "url('images/Tab Sprites.png') 0 0");
        $("#skills-tab").css("background", "url('images/Tab Sprites.png') -38px 0");
        $("#quests-tab").css("background", "url('images/Tab Sprites.png') -71px 0");
        $("#inventory-tab").css("background", "url('images/Tab Sprites.png') -104px 0");
        $("#equipment-tab").css("background", "url('images/Tab Sprites.png') -137px 0");
        $("#prayer-tab").css("background", "url('images/Tab Sprites.png') -170px 0");
        $("#magic-tab").css("background", "url('images/Tab Sprites.png') -203px -73px");
        //show Selected Panel
        $("#magic-panel").removeClass("hide");
        $("#magic-panel").addClass("show");
        $("#combat-panel, #skills-panel, #quests-panel, #inventory-panel, #equipment-panel, #prayer-panel").removeClass("show").addClass("hide");
    });


    //////SKILL SCREEN SELECT//////
    $(".skill").click(function(){
        $(".skill .overlay").removeClass("selected").css("opacity", "0");
        $("#" + this.id + " .overlay").addClass("selected").css("opacity", "0.1");
        //Show skill screen
        $("#skill-screen-container").removeClass("hide").addClass("show");
        $(".screen").removeClass("show").addClass("hide");
        $("#" + this.id + ".screen").removeClass("hide").addClass("show");
        $("#exp-points").text(skills[this.id].exp);
        $("#level").text(skills[this.id].currentLevel);

        console.log(this.id);
    }); 
    //Click exit button
    $("#skill-screen-container #exit-button").click(function(){
        //Remove skill button higlight
        $(".skill .overlay").css("opacity", "0");
        $(".skill .overlay").removeClass("selected");
        //Hide skill screen
        $(".screen").removeClass("show").addClass("hide");
        $("#skill-screen-container").removeClass("show").addClass("hide");
    });

    //Click Action Button (Mine, Smelt etc.)
    $(".action-button").click(function(){
        let skill = $(".screen.show").attr("id");
        let action = $(this.id);
        skills[skill].exp += skills[skill].actionGain;

        view.updating.update();
    });
});