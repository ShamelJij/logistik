class LKW {
    constructor(name, v, vB, t, k = 0){
        this.name = name;
        this.verbrauch = v;
        this.verbrauchBeladen = vB;
        this.kilometer = k;
        this.tank = t; //gesamt
        this.restTank = t; //rest
    }
    fahren(k, b){
        k = Math.min(k, (this.reichweite(b) - 0.05).toFixed(1));
        this.kilometer += k;
        if(b){
            this.restTank -= (k/100) * this.verbrauchBeladen;
        } else {
            this.restTank -= (k/100)*this.verbrauch;
        }
        
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
    let id = document.getElementById("lkw").value;
    lkw[id].fahren(document.getElementById("strecke").value);
    document.getElementById("beladen").checked;
    info();
}
function tanken(){
    let id = document.getElementById("lkw").value;
    lkw[id].tanken(document.getElementById("liter").value);
    info();
}

lkw = [];
lkw.push(new LKW("LKW1", 30, 50, 1000));
lkw.push(new LKW("LKW2", 25, 40, 2500));
lkw.push(new LKW("LKW3", 35, 65, 1200));
lkw.push(new LKW("LKW4", 45, 75, 1600));
info();
function info(){
    document.getElementById("info").innerHTML = "";
    for(let i = 0; i < lkw.length; i++){
        document.getElementById("info").innerHTML += "<div class='col-md'><b class='text-warning'>" + lkw[i].name + "</b><hr class='hrauto'>" 
        + "<br>Kilometerstand: " + lkw[i].kilometer.toFixed(1) + 
        " km <br>Tankinhalt: " + lkw[i].restTank.toFixed(1) + " ℓ/" + lkw[i].tank + 
        " ℓ <br> Reichweite: " + (lkw[i].reichweite(document.getElementById("beladen").checked).toFixed(1)) + " km </div><br>"; 
    }

}
lkwAuflisten();
function lkwAuflisten(){
    let select = document.getElementById("lkw");
    for(let i = 0; i<lkw.length; i++){
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = lkw[i].name;
        select.appendChild(opt);
    }
}

