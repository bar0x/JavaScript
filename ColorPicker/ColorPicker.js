var Red
var green
var blue
//incremendo e decremento parametri
function RossoSu() {
    Red++
    document.getElementById("OutData").innerHTML = "rgb("+"Red"+"Green"+"Blue"+")";
}
function RossoGiu() {
    Red--
}
function VerdeSu() {
    Green++
}
function VerdeGiu() {
    Green--
}
function BluSu() {
    blue++
}
function BluGiu() {
    blue--
}

document.getElementById("OutData").innerHTML = "RGB ()";