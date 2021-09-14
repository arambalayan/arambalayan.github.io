$(function(){
    $('.archive option:selected').hide(); //initialise

    $('.archive').change(function(){

        $('.archive option').show(200, function(){

            $('.archive option:selected').hide();

        });

    });
})
$(document).ready(function(){
    $(document).on('click','.signup-tab',function(e){
        e.preventDefault();
        $('#signup-taba').tab('show');
        $('#loginModalLabel').hide();
        $('#SignupModalLabel').show();
    });

    $(document).on('click','.signin-tab',function(e){
        e.preventDefault();
        $('#signin-taba').tab('show');
        $('#loginModalLabel').show();
        $('#SignupModalLabel').hide();
    });

    $(document).on('click','.forgetpass-tab',function(e){
        e.preventDefault();
        $('#forgetpass-taba').tab('show');
        $('#SignupModalLabel').hide();
        $('#loginModalLabel').hide();
        $('#Forgetpassword').show();


    });
});

$(document).ready(function(){
    $(".lang-flag").click(function(){
        $(".language-dropdown").toggleClass("open");
        $(".language-dropdown").css({
            "filter": "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"

        });
    });
    $("ul.lang-list li").click(function(){
        $("ul.lang-list li").removeClass("selected");
        $(this).addClass("selected");
        if($(this).hasClass('lang-en')){
            $(".language-dropdown").find(".lang-flag").addClass("lang-en").removeClass("lang-es").removeClass("lang-pt");
            $("#lang_selected").html("<p>EN</p>")
        }else if($(this).hasClass('lang-pt')){
            $(".language-dropdown").find(".lang-flag").addClass("lang-pt").removeClass("lang-es").removeClass("lang-en");
            $("#lang_selected").html("<p>PT</p>")
        }else{
            $(".language-dropdown").find(".lang-flag").addClass("lang-es").removeClass("lang-en").removeClass("lang-pt");
            $("#lang_selected").html("<p>ES</p>")
        }
        $(".language-dropdown").removeClass("open");
        $(".language-dropdown").css({
            "filter": "none"

        });
    });
})