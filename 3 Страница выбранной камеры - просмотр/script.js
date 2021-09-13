$(document).ready(function(){
    $("#opencameras").click(function(){
      $("#panel").slideToggle("slow");
      $("#show_camera_icon").toggleClass("show_camera_rotate");

    });
  });
