class Trupmena {
    constructor(sveikojiDalis, skaitiklis, daliklis) {
        this.sveikojiDalis = sveikojiDalis;
        this.skaitiklis = skaitiklis;
        this.daliklis = daliklis;
    }

    setSveikojiDalis(sveikojiDalis) {
        this.sveikojiDalis = sveikojiDalis;
    }

    setSkaitiklis(skaitiklis) {
        this.skaitiklis = skaitiklis;
    }

    setDaliklis(daliklis) {
        this.daliklis = daliklis;
    }

    getSveikojiDalis() {
        return this.sveikojiDalis;
    }

    getSkaitiklis() {
        return this.skaitiklis;
    }

    getDaliklis() {
        return this.daliklis;
    }

    pridetiInt(sveikasisSkaicius) {
        this.sveikojiDalis += sveikasisSkaicius;
    }

    prideti(sveikasisSkaicius, skaitiklis, vardiklis) {
        this.skaitiklis = this.skaitiklis * vardiklis + skaitiklis;
        this.daliklis *= vardiklis;
        this.sveikojiDalis += sveikasisSkaicius;
        this.sutrumpinti();
    }

    pridetiTrupmena(kitaTrupmena) {
        const naujasSkaitiklis = this.skaitiklis * kitaTrupmena.daliklis + this.daliklis * kitaTrupmena.skaitiklis;
        const naujasDaliklis = this.daliklis * kitaTrupmena.daliklis;
        this.sveikojiDalis += kitaTrupmena.sveikojiDalis;
        this.skaitiklis = naujasSkaitiklis;
        this.daliklis = naujasDaliklis;
        this.sutrumpinti();
    }

    toDouble() {
        return (this.sveikojiDalis * this.daliklis + this.skaitiklis) / this.daliklis;
    }

    toString() {
        if (this.sveikojiDalis === 0) {
            return `${this.skaitiklis}/${this.daliklis}`;
        } else {
            return `${this.sveikojiDalis} ${this.skaitiklis}/${this.daliklis}`;
        }
    }

    sutrumpinti() {
        const bendrasDalmuo = this.sveikojiDalis ? gcd(this.skaitiklis, this.daliklis) : gcd(this.skaitiklis, this.daliklis);
        this.skaitiklis /= bendrasDalmuo;
        this.daliklis /= bendrasDalmuo;
    }
}

// Funkcija skirta rasti didžiausią bendrą daliklį (GCD)
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

// Testavimas
let trupmena1 = new Trupmena(1, 2, 5);
console.log("Pradinė trupmena:", trupmena1.toString());
trupmena1.pridetiInt(2);
console.log("Trupmena po sveikojo skaičiaus pridėjimo:", trupmena1.toString());
trupmena1.prideti(1, 1, 5);
console.log("Trupmena po papildomo pridėjimo:", trupmena1.toString());
let trupmena2 = new Trupmena(1, 1, 4);
trupmena1.pridetiTrupmena(trupmena2);
console.log("Trupmena po kitos trupmenos pridėjimo:", trupmena1.toString());
console.log("Trupmenos reikšmė realiuoju skaičiumi:", trupmena1.toDouble());
