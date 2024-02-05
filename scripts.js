var a;
function runaway(id) {
    if(a==2){
    id.style.top = Math.round(Math.random() * 250) - 100 + 'px';
    id.style.left = Math.round(Math.random() * 250) - 200 + 'px';
    }
}


$('#move').click(function() {
    $( "#yes").css( "font-size", "+=15" );
 });

function show() {
  if(a!=1){
    alert("Wrong answer! Try again.");
    return a=1;
    }
  
  if(a==1){
    alert("Come on... I told you this was the wrong answer...");
    return a=2;
    }

}

function hurray() {
  var x = document.getElementById("happy_cat");
  var y = document.getElementById("yes");
  var z = document.getElementById("move");
  var w = document.getElementById("question");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "block";
    w.style.display = "block";

  } else {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    w.style.display = "none";
  }
}

