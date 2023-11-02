// BRIGHTNESS IPO CALC BY MR. V

// Button Click listener
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  //input
  let a = +document.getElementById("Side-A").value;
  let b = +document.getElementById("Side-B").value;
  

  //PROCESS
 let sideC = Math.sqrt(a** 2 + b** 2 );
  //output
  document.getElementById("output").innerHTML = sideC;
}
