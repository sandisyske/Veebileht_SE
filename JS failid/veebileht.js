// click handler ikoonide vajutamiseks
// Toggle menu click handler võetud https://stackoverflow.com/questions/35579569/hide-show-menu-onclick-javascript
// see skript muudab vastavalt funtksioonile, kui kaugel äärest asub menüü külg
// kui on aktiivne showMenu, siis on menüü riba tõmmatud telefoni ekraani peale
// kui on aktiivne hideMenu siis lükkatakse menüü serv peidetuks parema ääre taha
var navLinks = document.getElementById("navLinks")
    function showMenu(){
        navLinks.style.right = "0"
    }
    function hideMenu(){
        navLinks.style.right = "-200px"
    } 