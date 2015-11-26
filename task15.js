
$(window).scroll(function(){
    var scrollTop = 600;
    var s = $(window).scrollTop();
    console.log($(window).scrollTop());

    if(scrollTop > s){
          $("#font").text("Page 1").css("color","blue");
          $("#quote").text("Create Quote");
          console.log("pages 1 of 3");
        }

    else if((scrollTop*2) >= s && s >= scrollTop){
           $("#font").text("Page 2 ").css("color","blue");
           $("#quote").text("Quote Details").css("font-size","25");
             console.log("pages 2 of 3");
         }

     else if((scrollTop*2) <= s && s < (scrollTop*3)){
          $("#font").html("Page 3").css("color","blue");
             $("#quote").text("Additional Information");
            console.log("pages 3 of 3");
        }
        else{
              $("#font").html("Page 4").css("color","blue");
              $("#quote").text("Quote Note .....");
        }
  });
