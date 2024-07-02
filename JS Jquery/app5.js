$(document).ready(function () {
    $("#btn1").click(function () {
        $("#test1").text("This is the new text!");
    })
    $("#btn2").click(function () {
        $("#test2").html("<i>This is the new text</i>");
    })
    $("#btn3").click(function () {
        $("#test3").val("New input data!");
    })    
})