$(document).ready(function(){

var currentDay = $('#currentDay')
var m = moment();
var momentHour = (moment().format('H'));
currentDay.text(m.format('LLLL'));
//format for finding hour
// var now = (moment().format('H'))
console.log(momentHour)

function assignHours() {
    var nineAM = $('#nineAM');
        var nineAMNum = 9;
    var tenAM = $('#tenAM');
        var tenAMNum = 10;
    var elevenAM = $('#elevenAM');
        var elevenAMNum = 11;
    var twelvePM = $('#twelvePM');
        var twelvePMNum = 12;
    var onePM = $('#onePM');
        var onePMNum = 13;
    var twoPM = $('#twoPM');
        var twoPMNum = 14;
    var threePM = $('#threePM');
        var threePMNum = 15;
    var fourPM = $('#fourPM');
        var fourPMNum = 16;
    var fivePM = $('#fivePM');
        var fivePMNum = 17;

    //nine
    if (momentHour == nineAMNum) {
        nineAM.addClass('present');
    }
    if (momentHour > nineAMNum) {
        nineAM.addClass('past')
    }
    if (momentHour < nineAMNum) {
        nineAM.addClass('future')
    }
    //ten
    if (momentHour == tenAMNum) {
        tenAM.addClass('present');
    }
    if (momentHour > tenAMNum) {
        tenAM.addClass('past')
    }
    if (momentHour < tenAMNum) {
        tenAM.addClass('future')
    }
    //eleven
    if (momentHour == elevenAMNum) {
        elevenAM.addClass('present');
    }
    if (momentHour > elevenAMNum) {
        elevenAM.addClass('past')
    }
    if (momentHour < elevenAMNum) {
        elevenAM.addClass('future')
    }
    //twelve
    if (momentHour == twelvePMNum) {
        twelvePM.addClass('present');
    }
    if (momentHour > twelvePMNum) {
        twelvePM.addClass('past')
    }
    if (momentHour < twelvePMNum) {
        twelvePM.addClass('future')
    }
    //one
    if (momentHour == onePMNum) {
        onePM.addClass('present');
    }
    if (momentHour > onePMNum) {
        onePM.addClass('past')
    }
    if (momentHour < onePMNum) {
        onePM.addClass('future')
    }
    //two
    if (momentHour == twoPMNum) {
        twoPM.addClass('present');
    }
    if (momentHour > twoPMNum) {
        twoPM.addClass('past')
    }
    if (momentHour < twoPMNum) {
        twoPM.addClass('future')
    }
    //three
    if (momentHour == threePMNum) {
        threePM.addClass('present');
    }
    if (momentHour > threePMNum) {
        threePM.addClass('past')
    }
    if (momentHour < threePMNum) {
        threePM.addClass('future')
    }
    //four
    if (momentHour == fourPMNum) {
        fourPM.addClass('present');
    }
    if (momentHour > fourPMNum) {
        fourPM.addClass('past')
    }
    if (momentHour < fourPMNum) {
        fourPM.addClass('future')
    }
    //five
    if (momentHour == fivePMNum) {
        fivePM.addClass('present');
    }
    if (momentHour > fivePMNum) {
        fivePM.addClass('past')
    }
    if (momentHour < fivePMNum) {
        fivePM.addClass('future')
    }
}
assignHours();


$('.saveBtn').on('click', function(event) {
    event.preventDefault();
    alert('Itinerary saved');
    console.log('click successful');
    
    var userText = 
        {
        text0: $("#textNine").val(),
        text1: $("#textTen").val(),
        text2: $("#textEleven").val(),
        text3: $("#textTwelve").val(),
        text4: $("#textOne").val(),
        text5: $("#textTwo").val(),
        text6: $("#textThree").val(),
        text7: $("#textFour").val(),
        text8: $("#textFive").val()
        };


        for (var i = 0; i < 9; i++){
            var storageVal = userText['text' + i];
            $('text' + i).val(storageVal)
        };

    console.log(userText)

    localStorage.setItem('userText', JSON.stringify(userText));
    console.log(localStorage.setItem('userText', JSON.stringify(userText)));

        function init() {

            var renewText = JSON.parse(localStorage.getItem('userText'));
            console.log(JSON.parse(localStorage.getItem('userText')));

            if (renewText !== null) {
                userText = renewText;
            }

            $("#textNine").text = renewText.text0
            $("#textTen").text = renewText.text1
            $("#textEleven").text = renewText.text2
            $("#textTwelve").text = renewText.text3
            $("#textOne").text = renewText.text4
            $("#textTwo").text = renewText.text5
            $("#textThree").text = renewText.text6
            $("#textFour").text = renewText.text7
            $("#textFive").text = renewText.text8
        }
    });

});


    
