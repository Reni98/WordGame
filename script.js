let szavak = ["alma","korte","barack","szilva","dinnye"]

let kitalalando = ""
let megjelenites = []

let probalkozas = 0



function mentNev(){

    let nev = document.getElementById("nev").value

    localStorage.setItem("jatekosNev", nev)

    document.getElementById("jatekos").innerText =
        "Játékos: " + localStorage.getItem("jatekosNev")

    ujJatek()
}



function ujJatek(){

    let index = Math.floor(Math.random() * szavak.length)

    kitalalando = szavak[index]

    console.log("Kitalálandó szó:", kitalalando)

    megjelenites = []
    probalkozas = 0

    for(let i=0; i<kitalalando.length; i++){

        megjelenites.push("_")

    }

    frissit()

    document.getElementById("uzenet").innerText = ""

    document.getElementById("uj").style.display="none"
    document.getElementById("kilep").style.display="none"
}



function frissit(){

    document.getElementById("szo").innerText =
        megjelenites.join(" ")

}



function tipp(){

    let betu = document.getElementById("betu").value

    probalkozas++

    let talalat = false

    for(let i=0;i<kitalalando.length;i++){

        if(kitalalando[i] === betu){

            megjelenites[i] = betu

            talalat = true
        }
    }

    if(talalat){

        document.getElementById("uzenet").innerText =
            "Van ilyen betű!"

    }else{

        document.getElementById("uzenet").innerText =
            "Nincs ilyen betű!"

    }

    frissit()

    ellenorzes()
}



function ellenorzes(){

    if(!megjelenites.includes("_")){

        document.getElementById("uzenet").innerText =
            "Kitaláltad!"

        pontSzamitas()

    }

}



function pontSzamitas(){

    let pont = 0

    if(probalkozas <= 5){
        pont = 10
    }
    else if(probalkozas <= 8){
        pont = 5
    }
    else{
        pont = 2
    }

    let eredmeny = {

        nev: localStorage.getItem("jatekosNev"),
        probalkozas: probalkozas,
        pont: pont

    }

    localStorage.setItem("eredmeny", JSON.stringify(eredmeny))

    document.getElementById("eredmeny").innerText =
        "Próbálkozások: " + probalkozas + " Pont: " + pont

    document.getElementById("uj").style.display="inline"
    document.getElementById("kilep").style.display="inline"
}



function kilepes(){

    localStorage.removeItem("eredmeny")

    document.getElementById("uzenet").innerText =
        "Kiléptél a játékból."

}