const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");


let numberOfCookies = 0;
let constOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;

// {} - scope
cookie.onclick = () => {
    numberOfCookies += clickUpgradeIncrease;
    //counter.innerHTML = "Cookies: " + numberOfCookies;
    //numberOfCookies += 1;
    // ++ inkrement
    counter.innerHTML = `Cookies: ${numberOfCookies}`;
}

const clickUpgradeFunction = () => {
    if (numberOfCookies >= constOfClickUpgrade) {
        //odecteme cenu upgrade
        //pocet cookies a odectu 20
        numberOfCookies -= constOfClickUpgrade
        //aktualizace odstavce
        counter.innerText = "Cookies; " + numberOfCookies;


        //zvedneme pocet cookies na kliknuti
        clickUpgradeIncrease++;
    }
};

clickUpgrade.onclick = clickUpgradeFunction;



//Vytvoreni funkce
//function nazev() {}
function cheats(){
    console.log("Cheats on!")
    numberOfCookies += 1000000
    counter.innerHTML = `Cookies: ${numberOfCookies}`;
}

//Spusteni funkce
cheats();

cookie.cheatsTwo = () => {
    numberOfCookies *= 2
    counter.innerText = "Cookies" + numberOfCookies;
}