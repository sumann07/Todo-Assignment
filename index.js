var x = 0;
var array = Array();

function addElement()
{
 array[x] = document.getElementById("text1").value;

 x++;
 document.getElementById("text1").value = "";

 var e = "<hr/>";   
    
 for (var y=0; y<array.length; y++)
 {
   e += array[y] + "<br/>";
 }
 document.getElementById("Result").innerHTML = e;
}

