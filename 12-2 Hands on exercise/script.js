/*
    Book Name: Javascript
    Chapter Number: 12
    Project Number: 2
    Name: Thomas Eichinger
    Date: 4/9/19
    Filename: script.js

*/
function convert() {
    var lb = $("#pValue").val();
    var kg = Math.round(lb / 2.2);
    
    $("#kValue").html(kg);
}

$("#convertButton").click(convert);

$("#pValue").val("");
$("#kValue").html("");