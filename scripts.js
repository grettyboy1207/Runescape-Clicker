$(document).ready(function(){

    //Load Skill Icons
    var spriteWidth = 62;
    var spriteHeight = 32;
    var skillRows = $("#skills-panel > div").length;
    for(i=0; i<skillRows; i++){
    var skillColumns = $("#skills-panel div:nth-child("+(i+1)+") div").length;
        for(j=0; j<skillColumns; j++){
        $("#skills-panel > div:nth-child(" + (i+1) + ") > div:nth-child(" + (j+1) + ")").css("background", "url('images/Skills No Levels.png') " + j*-spriteWidth + "px " + i*-spriteHeight + "px");
        }   
    }



    //Select Inventory on Page load
    $("#skills-tab").ready().click();
    $("#mining.skill").ready().click();
    







    //Skill highlight on hover/select
    $(".skill .overlay").hover(function(){
        $(this).css("opacity", "0.1");
    }, function(){
        if($(this).hasClass("selected")){
            $(this).css("opacity", "0.1");
        } else {
            $(this).css("opacity", "0");
        }
    });

    
});