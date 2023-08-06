const glavniVhod = "60 50 5";
const drugiVhodiText = "1 70 5 100 50 20 65 130 90 120";
const drugiVhodi = [];
const neurejeniDrugiVhodi = drugiVhodiText.split(" ");

const arrayGlavnihVhodov = glavniVhod.split(" ");
const razdalja = parseInt(arrayGlavnihVhodov[0]);
const začetna_omejitev = parseInt(arrayGlavnihVhodov[1]);
const št_vhodov = parseInt(arrayGlavnihVhodov[2]);

class Podatek {
    constructor(r, v) {
        this.r = r;
        this.v = v;
    }
}

drugiVhodi.push(new Podatek(0, začetna_omejitev));
for(let i = 0; i < št_vhodov; i++) {
    drugiVhodi.push(new Podatek(neurejeniDrugiVhodi[2*i], neurejeniDrugiVhodi[2*i+1]))  
    // console.log(neurejeniDrugiVhodi, neurejeniDrugiVhodi[2*i], neurejeniDrugiVhodi[2*i+1]);
}

let t = 0;
const časi = [];

for(let i = 0; i < št_vhodov; i++) {
    if(drugiVhodi[i+1].r < razdalja) {
        časi.push((drugiVhodi[i+1].r-drugiVhodi[i].r)/drugiVhodi[i].v);
    } else {
        časi.push((razdalja-drugiVhodi[i].r)/drugiVhodi[i].v);
        break;
    }
}


for(let i = 0; i < časi.length; i++) {
    t += časi[i];
}

console.log((Math.round(t * 100) / 100));

