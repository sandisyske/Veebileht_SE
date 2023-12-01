// click handler ikoonide vajutamiseks
// Toggle menu click handler võetud https://stackoverflow.com/questions/35579569/hide-show-menu-onclick-javascript
// see skript muudab vastavalt funtksioonile, kui kaugel äärest asub menüü külg
var navLinks = document.getElementById("navLinks")
// võetakse nuppude id mille vajutamisel aktiveerib vastav funktsioon. listi-ikooni vajutamisel aktiveeritakse funktsioon showMenu ja risti-ikooni vajutamisel aktiveeritakse funktsioon hideMenu
    function showMenu(){
        navLinks.style.right = "0"
        // menüü äär on 0 px ehk parem serv tuuakse vasaku servaga kohakuti ning menüü on nähtaval
    }
    function hideMenu(){
        navLinks.style.right = "-200px"
        // menüü parem serv viiakse 200px paremale, mis viib menüü erkaanist välja ning see ei ole nähtav
    } 
