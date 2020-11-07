$(document).ready(function() {
  $(".num").css("pointer-events", "none");
});

let func = function() {
  time_mappings = {
    3: "Ready",
    2: "Set",
    1: "Go!"
  }
  var timeleft = 3;
  var downloadTimer = setInterval(function() {
    if (timeleft <= 0) {
      document.getElementById("countdown").innerHTML = ""
      document.getElementById('myTable').style.filter = "unset";
      clearInterval(downloadTimer);
      $(".num").css("pointer-events", "auto");
      timer();
    } else {
      $("#countdown").html(time_mappings[timeleft]);
      $("#countdown").fadeIn(0);
      $("#countdown").fadeOut(1000);
    }
    timeleft -= 1;
  }, 1000);
}

let elem = $('#MyB');
elem.one('click', func);

function timer() {
  var startTime = Date.now();

  interval = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
  }, 100);
}

count = 1;
p = document.getElementById('myTable').rows[0].cells.length;
$("td").click(function() {
  if ($(this).text() == count) {
    if (count == Math.pow(p, 2)) {
      clearInterval(interval);
      x = 0
      while (x < 3) {
        $('#timer').fadeOut(1000).fadeIn(1000);
        $('#secs').fadeOut(1000).fadeIn(1000);
        x++;
      }
    }
    $(this).addClass("crossed");
    count++;
  }
});

$(".about-bar").click(function() {
  $expandable = $(this);
  $content = $expandable.next();
  $content.slideToggle(500, function() {
    $expandable.text(function() {
      return $content.is(":visible") ? "Close" : "About";
    });
  });
});

function printData() {
  var tab = $("#myTable")[0];

  var style = "<style>";
  style = style + "table {width: 100%; margin-left: auto;border-collapse: collapse;margin-right: auto;table-layout: fixed;}";
  style = style + "td {border: 1px solid #000;text-align: center;height: 100px;}";
  style = style + "</style>";

  var win = window.open('', '', 'height=700,width=700');
  win.document.write(style);
  win.document.write(tab.outerHTML);
  win.document.close();
  win.print();
}

$('#print').on('click', function() {
  printData();
});
