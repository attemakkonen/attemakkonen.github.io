var current = 0;
var laskuri = 2;

function asetaCurrent() {
  if ((localStorage.getItem('index') === undefined) || (localStorage.getItem('index') === null) || (localStorage.getItem('index') > laskuri)) {
    localStorage.setItem('index', 0);
    current = 0;
  } else {
    current = parseInt(localStorage.getItem('index'));
  }
}

window.onload = function() {
    
  console.log(current);
  setcurrent();
  console.log(current);  $.getJSON("https://makkona4.firebaseio.com/uutiset.json", function(data) {
    console.log(data);
    $('#otsikko').html(data[current].otsikko);
    $('#päivämäärä').html(data[current].päivämäärä);
    $('#teksti').html(data[current].sisältö);
    return data;
});
};

function animaatio() {
  $('.efekti').fadeOut('normal', function(){
    jiison();
  }).fadeIn("normal");
}

function jiison() {
        $.getJSON("https://makkona4.firebaseio.com/uutiset.json", function (data) {

          $('#otsikko').html(data[current].otsikko);
          $('#päivämäärä').html(data[current].sisältö);
          $('#teksti').html(data[current].päivämäärä);

      //
      return data;
    });
}

function display() {
    'use strict';
    $.getJSON("https://makkona4.firebaseio.com/uutiset.json", function (data) {
        $('#otsikko').hide().html(data.uutiset[index].otsikko).fadeIn(3000);
        $('#paivamaara').hide().html(data.uutiset[index].paivamaara).fadeIn(3000);
        $('#teksti').hide().html(data.uutiset[index].sisalto).fadeIn(3000);
        
        localStorage.setItem("current", index);
    });
}

function seuraavaSlide() {
    'use strict';
    if(current < 2) {
        current += 1;
        display();
    } else {
        current = 0;
        display();
        console.log(current);
       
    }
}

function edellinenSlide() {
    'use strict'
    if(current < 2) {
        current += 1;
        display();
    } else {
        index = 0;
        display();
    }

}

var pysäytetty = false;

var aika = setInterval(function () { seuraavaSlide(); }, 5000);

function playpause() {
    'use strict';
    if (!pysäytetty) {    
        window.clearInterval(myVar);
        pysäytetty = true;
    } else {
        valinta = setInterval(function () { seuraavaSlide(); }, 5000);
        pysäytetty = false;
    }
}

function toggleText(painike) {
    'use strict';
    if (pysäytetty) {
        document.getElementById(painike).textContent = "play";
    } else {
        document.getElementById(painike).textContent = "pause";
    }
}