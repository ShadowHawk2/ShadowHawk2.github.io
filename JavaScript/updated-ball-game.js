var poeng = Poeng();

var ball = Ball();
ball.onclick = poeng.øk;
setInterval(function(){
var x = Math.random() * 80 + '%';
var y = Math.random() * 80 + '%';
ball.posisjon(x, y);
}, 2000);

setInterval(function(){
    var s = Math.random() * 100 + 'px';
    var e = parseInt(s) / 2 + 'px';
    ball.size(s, e);
    }, 2000);

var knapp = Knapp('Prøv en gang til!');
knapp.onclick = start;

var nedtelling = Nedtelling(stopp);
nedtelling.tellNed(10);

function start() {
  poeng.nullstill();
  nedtelling.tellNed(10);
  ball.vis();
  knapp.skjul();
}

function stopp() {
  ball.skjul();
  knapp.vis();
}

/* Ballen du klikker på i spillet */

function Ball() {
  var el = document.createElement('div');
  el.style.backgroundColor = 'purple';
  el.size = function (s, e){
    el.style.width = s;
    el.style.height = s;
    el.style.borderRadius = e;
  }
  el.style.position = 'fixed';
  
  document.body.appendChild(el);
  
  el.posisjon = function (x, y) {
    el.style.left = x;
    el.style.top = y;
  };
  
    el.skjul = function () {
    el.style.display = 'none';
  };
  el.vis = function () {
    el.style.display = '';
  };
  
  return el;
}

/* Poeng system til å knuse vennene dine med */

function Poeng() {
  var el = document.createElement('div');

  el.style.position = 'fixed';
  el.style.bottom = '50px';
  el.style.left = '8px';
  el.style.padding = '5px';
  el.style.backgroundColor = 'black';
  el.style.color = 'white';

  var _poeng = 0;
  el.innerHTML = _poeng + ' poeng';
  document.body.appendChild(el);

  el.øk = function () {
    _poeng += 1000;
    el.innerHTML = _poeng + ' poeng';
  };
  el.nullstill = function () {
    _poeng = 0;
    el.innerHTML = _poeng + ' poeng';
  };

  return el;
}

/* Tiden du har før du før du må starte på nytt */

function Nedtelling (ferdig) {
  var el = document.createElement('div');

  el.style.position = 'fixed';
  el.style.left = '0';
  el.style.bottom = '0';
  el.style.height = '100%';
  el.style.width = '3px';
  el.style.backgroundColor = 'red';
  document.body.appendChild(el);

  function prosent (slutt, tid) {
    return (slutt - Date.now()) / tid / 20;
  }

  el.tellNed = function (tid) {
    var slutt = Date.now() + tid * 2000;
    var intervall = setInterval(tegn, 20);

    function tegn () {
      var p = prosent(slutt, tid);
      if (p < 0) {
        el.style.height = '0%';
        clearInterval(intervall);
        ferdig();
      }
      el.style.height = p + '%';
    }
  };

  return el;
}

/* Knapp til å starte gamet på nytt. */

function Knapp(tekst) {
  var el = document.createElement('button');
  el.style.display = 'none';
  el.innerText = tekst;
  el.style.position = 'fixed';
  el.style.top = '50%';
  el.style.left = '50%';
  el.style.padding = '20px';
  el.style.border = 'solid 1px';
  document.body.appendChild(el);

  el.skjul = function () {
    el.style.display = 'none';
  };
  el.vis = function () {
    el.style.display = '';
    var w = el.offsetWidth / 2;
    var h = el.offsetHeight / 2;
    el.style.marginLeft = '-' + w + 'px';
    el.style.marginTop = '-' + h + 'px';
  };

  return el;
}