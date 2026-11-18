function salom() {
  alert("Salom, Maxsudov Shoxruz 8D!");
}

function tekshir() {
  var son = document.getElementById("son").value;
  son = Number(son);

  if (son % 2 === 0) {
    document.getElementById("natija").innerText = "JUFT";
  } else {
    document.getElementById("natija").innerText = "TOQ";
  }
}

function tekshir2() {
  var son2 = document.getElementById("son2").value;
  son2 = Number(son2);

  if (son2 > 5) {
    document.getElementById("natija2").innerText = "KATTA";
  } else {
    document.getElementById("natija2").innerText = "KICHIK";
  }
}

function takrorla() {
  var natija = "";

  for (var i = 1; i <= 5; i++) {
    natija += i + " ";
  }

  document.getElementById("natija3").innerText = natija;
}
