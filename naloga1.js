// vhodni podatki
let n = 10;
const št_rastlin = 25;
const zaporedje = "||||//RM|||/||RMMR||||||/";


const arrayRast = zaporedje.split("");
console.log(arrayRast);

let travaCounter = 0;
let i = 0;
while(i < št_rastlin) {
    if(n > 0) {
        if(arrayRast[i] === "/") i++
        else if(arrayRast[i] === "M" && arrayRast[i-1] === "R") i++
        else if(arrayRast[i] === "|") {
            if(travaCounter === 2) {travaCounter = 0; i++;}
            else {travaCounter++; n--; i++;}
        }
        else { n--; i++ };
    } else {
        console.log(i);
        break;
    }
}







