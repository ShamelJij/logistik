

class LKW {
    constructor(name, v, t, k = 0){
        this.name = name;
        this.verbrauch = v;
        this.kilometer = k;
        this.tank = t; //gesamt
        this.restTank = t; //rest
    }
}

let lkw1 = new LKW("LKW1", 30, 1000);
document.getElementById("info").innerHTML = "<b class='text-success'>" + lkw1.name + "</b>" + "<br>" + lkw1.kilometer + " km <br>" + lkw1.restTank + " ℓ/" + lkw1.tank + " ℓ <br> Reichweite: " + (lkw1.restTank/lkw1.verbrauch * 100) + " km"; 
