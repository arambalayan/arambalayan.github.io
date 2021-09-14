$(document).ready(function(){
    $("#opencameras").click(function(){
      $("#panel").slideToggle("slow");
      $("#show_camera_icon").toggleClass("show_camera_rotate");

    });
  });

  

$(document).ready(function(){
    $(".lang-flag").click(function(){
        $(".language-dropdown").toggleClass("open");
        $(".language-dropdown").css({
            "filter": "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.07))"
    });
    });
    $("ul.lang-list li").click(function(){
        $("ul.lang-list li").removeClass("selected");
        $(this).addClass("selected");
        if($(this).hasClass('lang-en')){
            $(".language-dropdown").find(".lang-flag").addClass("lang-en").removeClass("lang-es").removeClass("lang-pt");
            $("#rus").css("display", "flex")
            $("#fran").css("display", "none")
            $("#chin").css("display", "none")
            $("#lang_selected").html("<p>EN</p>")
        }else if($(this).hasClass('lang-pt')){
            $(".language-dropdown").find(".lang-flag").addClass("lang-pt").removeClass("lang-es").removeClass("lang-en");
            $("#rus").css("display", "none")
            $("#fran").css("display", "flex")
            $("#chin").css("display", "none")
            $("#lang_selected").html("<p>PT</p>")
        }else{
            $(".language-dropdown").find(".lang-flag").addClass("lang-es").removeClass("lang-en").removeClass("lang-pt");
            $("#rus").css("display", "none")
            $("#fran").css("display", "none")
            $("#chin").css("display", "flex")
            $("#lang_selected").html("<p>ES</p>")
        }
        $(".language-dropdown").removeClass("open");
        $(".language-dropdown").css({
            "filter": "none"

        });
    });
})

