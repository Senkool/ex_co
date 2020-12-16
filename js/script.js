/* var anchors = [];
var currentAnchor = -1;
var isAnimating  = false;
$(function(){
    function updateAnchors() {
        anchors = [];
        $('.anchor').each(function(i, element){
            anchors.push( $(element).offset().top );
        });
    }
    $('body').on('mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        if( isAnimating ) {
            return false;
        }
        isAnimating  = true;
        if( e.originalEvent.wheelDelta >= 0 ) {
            currentAnchor--;
        }else{
            currentAnchor++;
        }
        if( currentAnchor > (anchors.length - 1) 
           || currentAnchor < 0 ) {
            currentAnchor = 0;
        }
        isAnimating  = true;
        $('html, body').animate({
            scrollTop: parseInt( anchors[currentAnchor] )
        }, 500, 'swing', function(){
            isAnimating  = false;
        });
    });
    updateAnchors();   
});  */

function scrollNav() {
    $('.nav a').click(function(){
      $(".active").removeClass("active");     
      $(this).addClass("active");
      
      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 0
      }, 500);
      return false;
    });
  }
  scrollNav();


  function filter() {
	var selectBox = document.getElementById("material");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  if(selectedValue=="gravel") {
  	document.getElementById("grain").style.visibility = "hidden";
    document.getElementById("fraction").style.visibility = "visible";
    document.getElementById("fraction_scr").style.visibility = "hidden";
    document.getElementById("type_s").style.visibility = "hidden";
    document.getElementById("type_p").style.visibility = "hidden";
    
    document.getElementById("grain").style.display = "none";
    document.getElementById("fraction").style.display = "block";
    document.getElementById("fraction_scr").style.display = "none";
    document.getElementById("type_s").style.display = "none";
    document.getElementById("type_p").style.display = "none";
  } else if (selectedValue=="soil"){
  	document.getElementById("grain").style.visibility = "hidden";
    document.getElementById("fraction").style.visibility = "hidden";
    document.getElementById("fraction_scr").style.visibility = "hidden";
    document.getElementById("type_p").style.visibility = "hidden";
    document.getElementById("type_s").style.visibility = "visible";
    
    document.getElementById("grain").style.display = "none";
    document.getElementById("fraction").style.display = "none";
    document.getElementById("fraction_scr").style.display = "none";
    document.getElementById("type_p").style.display = "none";
    document.getElementById("type_s").style.display = "block";
  }  else if (selectedValue=="screening"){
  	document.getElementById("grain").style.visibility = "hidden";
    document.getElementById("fraction").style.visibility = "hidden";
    document.getElementById("fraction_scr").style.visibility = "visible";
    document.getElementById("type_s").style.visibility = "hidden";
    document.getElementById("type_p").style.visibility = "hidden";
    
    document.getElementById("grain").style.display = "none";
    document.getElementById("fraction").style.display = "none";
    document.getElementById("fraction_scr").style.display = "block";
    document.getElementById("type_s").style.display = "none";
    document.getElementById("type_p").style.display = "none";
  } else if (selectedValue=="sand"){
  	document.getElementById("grain").style.visibility = "visible";
    document.getElementById("fraction").style.visibility = "hidden";
    document.getElementById("fraction_scr").style.visibility = "hidden";
    document.getElementById("type_s").style.visibility = "hidden";
    document.getElementById("type_p").style.visibility = "hidden";
    
    document.getElementById("grain").style.display = "block";
    document.getElementById("fraction").style.display = "none";
    document.getElementById("fraction_scr").style.display = "none";
    document.getElementById("type_s").style.display = "none";
    document.getElementById("type_p").style.display = "none";
  } else if (selectedValue=="peat"){
  	document.getElementById("grain").style.visibility = "hidden";
    document.getElementById("fraction").style.visibility = "hidden";
    document.getElementById("fraction_scr").style.visibility = "hidden";
    document.getElementById("type_s").style.visibility = "hidden";
    document.getElementById("type_p").style.visibility = "visible";
    
    document.getElementById("grain").style.display = "none";
    document.getElementById("fraction").style.display = "none";
    document.getElementById("fraction_scr").style.display = "none";
    document.getElementById("type_s").style.display = "none";
    document.getElementById("type_p").style.display = "block";
  } else {
  	document.getElementById("grain").style.visibility = "hidden";
    document.getElementById("fraction").style.visibility = "visible";
    document.getElementById("fraction_scr").style.visibility = "hidden";
    document.getElementById("type_s").style.visibility = "hidden";
    document.getElementById("type_p").style.visibility = "hidden";
    
    document.getElementById("grain").style.display = "none";
    document.getElementById("fraction").style.display = "block";
    document.getElementById("fraction_scr").style.display = "none";
    document.getElementById("type_s").style.display = "none";
    document.getElementById("type_p").style.display = "none";
  }
}

function calculate() {
    try {
        var value1 = parseInt(validate(document.getElementById("value1").value.trim()));
        var value2 = parseInt(validate(document.getElementById("value2").value.trim()));
        var operator = document.getElementById('operator').value;
        document.getElementById("result").value = operate(value1, value2, operator);

    } catch (err) {
        alert("There was a problem: " + err.messaqge);
    }
}

function changeFunc() {
	var selectBox = document.getElementById("operator");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  alert(selectedValue);
}


function operate(value1, value2, operator) {
    if (operator == 'addition') {
        return value1 + value2;
    } else if (operator == 'subtraction') {
        return value1 - value2;
    } else if (operator == 'division') {
        return value1 / value2;
    } else if (operator == 'multiplication') {
        return value1 * value2;
    }
}

function validate(value) {
    if (value == null || value == "") {
        alert("Required Field");
        return 0;
    } else if (isNaN(value)) {
        alert("Must be a Number Field");
        return 0;
    } else return value;
}

function totalPrice(){
	// cena za 1 tonnu
  var gravel = 1450;
  var frac1 = 0.5;
  var frac2 = 0.3;
  var frac3 = 0.2;
  var frac4 = 0.1;
  
  var sand = 1000;
  var grain1 = 0.5;
  var grain2 = 0.4;
  var grain3 = 0.2;
  var grain4 = 0.1;
  
  var macadam = 1600;
  var mac1 = 0.5;
  var mac2 = 0.3;
  var mac3 = 0.2;
  var mac4 = 0.1;
  
  var screening = 2000;
  var fraco1 = 0.4;
  
  var soil = 3000;
  var gru1 = 0.6;
  var gru2 = 0.5;
  var gru3 = 0.4;
  var gru4 = 0.3;
  var gru5 = 0.1;
  
  var peat = 3100;
  var tor1 = 0.5;
  var tor2 = 0.4;
  var tor3 = 0.2;

	var selectBox = document.getElementById("material");
  var material = selectBox.options[selectBox.selectedIndex].value;
  
  var quantity = parseInt(validate(document.getElementById("quantity").value.trim()));
  
  var kuda = parseInt(validate(document.getElementById("city").value.trim()))
  
  var x = 0;
  var y = 0;

  if(material=="gravel"){
  	x = gravel;
    
    var selectBox = document.getElementById("fractionx");
    var value = selectBox.options[selectBox.selectedIndex].value;
    
    if(value=="frac1"){
    	y = frac1;
    } else if(value=="frac2"){
    	y = frac2;
    } else if(value=="frac3"){
    	y = frac3;
    } else {
    	y = frac4;
    }
    
  } else if (material=="soil"){
  	x = soil;
    
    var selectBox = document.getElementById("type_sx");
    var value = selectBox.options[selectBox.selectedIndex].value;
    
    if(value=="type_s1"){
    	y = gru1;
    } else if(value=="type_s2"){
    	y = gru2;
    } else if(value=="type_s3"){
    	y = gru3;
    } else if(value=="type_s4"){
    	y = gru4;
    } else if(value=="type_s5") {
    	y = gru5;
    }
    
  } else if (material=="screening"){
  	x = screening;    
    y = fraco1;
    
  } else if (material=="sand"){
  	x = sand;
    
    var selectBox = document.getElementById("grainx");
    var value = selectBox.options[selectBox.selectedIndex].value;
    
    if(value=="grain1"){
    	y = grain1;
    } else if(value=="grain2"){
    	y = grain2;
    } else if(value=="grain3"){
    	y = grain3;
    } else {
    	y = grain4;
    }
  } else if (material=="peat"){
  	x = peat;
    
    var selectBox = document.getElementById("type_px");
    var value = selectBox.options[selectBox.selectedIndex].value;
    
    if(value=="vidt1"){
    	y = tor1;
    } else if(value=="vidt2"){
    	y = tor2
    } else {
    	y = tor3
    }
  } else {
  	x = macadam;
    
    var selectBox = document.getElementById("fractionx");
    var value = selectBox.options[selectBox.selectedIndex].value;
    
    if(value=="frac1"){
    	y = mac1;
    } else if(value=="frac2"){
    	y = mac2
    } else if(value=="frac3"){
    	y = mac3
    } else {
    	y = mac4;
    }
  }
  
  document.getElementById("result").value = (quantity * x * y)+kuda;
  
  
}