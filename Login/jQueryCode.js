$(function(){
    $("#registerbutton").click(function(){
        $("#registerdiv").show();
        $("#logindiv").hide();
    });
    $("#loginbutton").click(function(){
        $("#registerdiv").hide();
        $("#logindiv").show();
    });
});