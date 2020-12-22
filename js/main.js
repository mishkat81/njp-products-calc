

function calc(){

//select input of products 01-11 products and value TP
let num1 = document.getElementById("d1").value * 449.78;
let num2 = document.getElementById("d2").value * 562.22;
let num3 = document.getElementById("d3").value * 374.81;
let num4 = document.getElementById("d4").value * 337.33;
let num5 = document.getElementById("d5").value * 314.84;
let num6 = document.getElementById("d6").value * 225.64;
let num7 = document.getElementById("d7").value * 135.38;
let num8 = document.getElementById("d8").value * 494.75;
let num9 = document.getElementById("d9").value * 539.73;
let num10 = document.getElementById("d10").value * 335.83;
let num11 = document.getElementById("d11").value * 187.41;

//select input of products 12-23 products and value TP
let num12 = document.getElementById("d12").value * 269.87;
let num13 = document.getElementById("d13").value * 337.33;
let num14 = document.getElementById("d14").value * 90.22;
let num15 = document.getElementById("d15").value * 165.41;
let num16 = document.getElementById("d16").value * 224.89;
let num17 = document.getElementById("d17").value * 187.41;
let num18 = document.getElementById("d18").value * 314.84;
let num19 = document.getElementById("d19").value * 299.85;
let num20 = document.getElementById("d20").value * 150.30;
let num21 = document.getElementById("d21").value * 269.87;
let num22 = document.getElementById("d22").value * 299.85;
let num23 = document.getElementById("d23").value * 188.09;



let nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11,num12,num13,num14,num15,num16,num17,num18,num19,num20,num21,num22,num23];
let sum = 0;

for(let i = 0; i < nums.length; i++){
    sum = sum + nums[i];
}


//select for output 01-10 products  (TP)
document.getElementById("outp1").innerHTML = (sum).toFixed(2);

//select for output 01-10 products (TP+Vat)
document.getElementById("outp2").innerHTML = (sum * 0.174 + sum).toFixed(2);

//select for output 01-10 products (MRP)
document.getElementById("outp3").innerHTML = ((sum * 0.174 + sum) * 0.1363 + (sum * 0.174 + sum)).toFixed(2);

























}