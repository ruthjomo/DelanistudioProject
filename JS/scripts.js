 $(document).ready(function(){
    $(".design").click(function(){
        $("#design-p").toggle();
             $("#design").toggle();
    });
     $(".development").click(function(){
         $("#development-p").toggle();
             $("#development").toggle();
    });
     $(".product").click(function(){
         $("#product-p").toggle();
             $("#product").toggle();
    }); 
});
$(document).ready(function(){
    $("#black-studio").hover(function(){
        $(this).children(".studio").fadeToggle("slow");
   });
});

$(document).ready(function(){
    $("form#formValidation").submit(function(event){
      var name=$("input#fill1").val();
      var email=$("input#fill2").val();
      if(name && email){
          alert(name + ",we have received your message." +"Thank you for reaching out to us." );
    }else{
          alert("Please,fill in your name and email!");
    }
    });
}) ;

                       

 

     