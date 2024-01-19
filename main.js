// $(document).ready(function(){
//     alert("yemialadeeeeeeeeeeeeeeeeee");
// });


function displayText( alertMessage  , textContainer ) {
    $(`#${alertMessage}`) .show();
    $(`#${alertMessage}`) .css("color", "red");
    $(`#${textContainer}`) .css("display" , "inline");


};

function removeText(inputClicked , alertMessage , textContainer) {
    $(`#${inputClicked}`) . focusout($(`#${alertMessage}`) .remove())
    $(`#${textContainer}`) .css("display" , "none");

}


