

function verifica(){
   var a = document.getElementById("in1").value
   var b = document.getElementById("in2").value
   var c = document.getElementById("in3").value

   if (  (a < b) && (b < c)  ){
        out1.innerHTML = a;
        out2.innerHTML = b;
        out3.innerHTML = c;

        out1.style.background = "rgb(0,255,0)";
        out2.style.background = "rgb(0,255,0)";
        out3.style.background = "rgb(0,255,0)";
   }




   
   else{
        var min = a;
        var max = a;
        if(b < min) min = b;
        if(c < min) min = c;
    
        if(b > max) max = b;
        if(c > max) max = c;


        out1.innerHTML = min;
        out3.innerHTML = max;
        out2.innerHTML = "< >"
        
        out1.style.background = "rgb(255,0,0)"
        out2.style.background = "rgb(255,255,255)"
        out3.style.background = "rgb (0,255,0)"
    

    
   }
}