let cursor = document.getElementById('cursor');

window.onmousemove = function (e) {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
  console.log(cursor.style);
}

