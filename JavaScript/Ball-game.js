function Ball() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'black';
    el.style.width = '60px';
    el.style.height = '60px';
    document.body.appendChild(el);
    el.style.borderRadius = '30px';
    el.style.position = 'fixed';
    el.style.top = '80%';
    el.style.left = '30%';

    el.posisjon = function (x,y) {
        el.style.left = x;
        el.style.top = y;
      }
  }
  
  Ball()