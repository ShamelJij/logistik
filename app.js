

class LKW {
    constructor(name, v, vB, t, k = 0){
        this.name = name;
        this.verbrauch = v;
        this.verbrauchBeladen = vB;
        this.kilometer = k;
        this.tank = t; //gesamt
        this.restTank = t; //rest
    }
    fahren (k){
        k = Math.min(k, (this.reichweite(b) - 0.05).toFixed(1));
        this.kilometer += k;
        this.restTank -= (k/100) * this.verbrauch ;
    }
    tanken(l){
        l = Math.min(l, (this.tank - this.restTank)); 
        this.restTank += l;
    }
    reichweite(b){
        if(b){
            return (this.restTank/this.verbrauchBeladen*100);
        }else{
            return (this.restTank/this.verbrauch*100)
        }
    }
}

function fahren(){
    lkw1.fahren(document.getElementById("strecke").value);
    info();
}
function tanken(){
    lkw1.tanken(document.getElementById("liter").value);
    info();
}

let lkw1 = new LKW("LKW1", 30, 50, 1000);
lkw1.fahren(2000);
lkw1.tanken(400);
lkw1.fahren(2000);
info();
function info(){
    document.getElementById("info1").innerHTML = "<b class='text-success'>" + lkw1.name + "</b><hr class='hrauto'>" 
+ "<br>Kilometerstand: " + lkw1.kilometer.toFixed(1) + 
" km <br>Tankinhalt: " + lkw1.restTank.toFixed(1) + " ℓ/" + lkw1.tank + 
" ℓ <br> Reichweite: " + (lkw1.reichweite(false).toFixed(1)) + " km"; 
}

