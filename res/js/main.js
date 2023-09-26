const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoClicker = document.getElementById("autoClicker")
//promenna const. let. var. let se da menit const se neda
//


let numberOfCookies = 0;
let constOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;
let autoclickIncrease = 0;
let autoclicker;
let autoClickerCost = 100;

autoClicker.onclick= () => {
    if (numberOfCookies >= autoClickerCost) {
        //odecist cookies
        numberOfCookies -= autoClickerCost;
        autoClickerCost *= 2;
        autoClicker.innerText = "Buy autoclicker upgrade" + autoClickerCost

        //numberOfCookies = numberOfCookies -100;
        //aktualizovat odstavec s cookies
        counter.innerHTML = `Cookies: ${numberOfCookies}`;
        autoclickIncrease ++;
        //clear
        clearInterval(autoclicker)
        //spustit interval
        autoclicker = setInterval(() => {
            //za kazdou vterinu zvednout nejake cislo
            numberOfCookies +=autoclickIncrease
            //aktualizovat odstavec
            counter.innerHTML = `Cookies: ${numberOfCookies}`;
        }, 1000);
    }
}
// {} - scope rozsah kam piseme priklady definice funkce
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
//cheatsTwo() spusteni funkce

const cheatsTwo = () => {
    numberOfCookies *= 2
    counter.innerText = "Cookies" + numberOfCookies;
}
cheatsTwo();

