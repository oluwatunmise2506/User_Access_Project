// $(document).ready(function(){
//     alert("yemialadeeeeeeeeeeeeeeeeee");
// });
let array = ["#firstName", "#lastName" ]


$(array[0]).on( "focusin", function inputName() {
    let theFirstName = $("#firstname_alert");
    theFirstName .text("First name required");
    theFirstName .css("color", "red");
    $("#name_lock") .css("display", "inline")

});