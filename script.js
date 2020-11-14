// javasript change box 1

var redBox = document.querySelector(".redBox");

var changeBtn1 = document.querySelector(".changeBtn1");

var colorCheckRed = true

changeBtn1.addEventListener("click", function(){

    if(colorCheckRed){colorCheckRed=false; redBox.setAttribute("class", "purpleBox")}

    else{colorCheckRed=true; redBox.setAttribute("class", "redBox")}

    
})

//jQuery change boxes


  $(document).ready(function(){
    $(".changeBtn2").click(function(){
      $(".blueBox").css("background-color", "yellow");
      $(".blueBox").css("border-style", "dotted");
      $(".blueBox").css("border-color", "black");
    });
  });

  $(document).ready(function(){
    $(".changeBtn3").click(function(){
      $(".greenBox").css("background-color", "orange");
      $(".greenBox").css("border-style", "solid");
      $(".greenBox").css("border-color", "purple");
    });
  });

  $(document).ready(function(){
    $(".changeBtnAll").click(function(){
      $(".redBox, .purpleBox, .blueBox, .greenBox").css("background-color", "grey");
      $(".redBox, .purpleBox, .blueBox, .greenBox").css("border-style", "double");
      $(".redBox, .purpleBox, .blueBox, .greenBox").css("border-color", "pink");
    });
  });




// jQuery hide boxes
$(document).ready(function(){
    $(".hideBtn1").click(function(){
      $(".redBox, .purpleBox").hide();
    });
  });

  $(document).ready(function(){
    $(".hideBtn2").click(function(){
      $(".blueBox").hide();
    });
  });

  $(document).ready(function(){
    $(".hideBtn3").click(function(){
      $(".greenBox").hide();
    });
  });

  $(document).ready(function(){
    $(".hideBtnAll").click(function(){
      $(".redBox, .purpleBox, .blueBox, .greenBox").hide();
    });
  });

 
// jQuery reset/show buttons
  $(document).ready(function(){
    $(".resetBtn").click(function(){
      $(".redBox, .purpleBox, .blueBox, .greenBox");location.reload();
    });
  });

  $(document).ready(function(){
    $(".showBtn").click(function(){
      $(".redBox, .purpleBox, .blueBox, .greenBox").show();
    });
  });

