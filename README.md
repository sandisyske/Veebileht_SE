# Veebilehe projekt

Meeskond öthLo ehk Kassib

Veebilehe arendajad on Siim Muutra, Sandra Erik ning Mona Eliise Mumm. 

Veebilehe eesmärk on tutvustada tehisintellekti, selle rakendusi ning kuidas meie tudengitena saame kasutada tehisintellekti kui abivahendit enda ülikoolielus.

Veebileht on valminud õppeaine Sissejuhatus erialasse raames.

### Repository ülesehitus (KAUST -> Mis seal on?)

* ASSETS -> Veebilehtedel kasutatud pildid
* CSS FAILID -> Kõik veebilehel kasutatud stiilifailid
* JS FAILID -> Kõik veebilehel kasutatud javascript failid
* JUHENDID ALGAJALE -> Veebilehe koostajate enda tehtud fail tähtsamatest Githubi käskude loend (Pole otseselt seotud veebilehega, ei ole hindamise osa)
* Veebilehe .html koodi failid ei ole kaustas ning nimetused on vastavalt veebilehele (ala pealeht on pealeht.html, alamleht1 on alamleht1.html ja alamleht2 on alamleht2.html) 
* Repositooriumis on ka README.md fail, mida praegu loete.


### Veebileht on üles ehitatud selliselt:
* Pealehel ja alamlehel on ühine .css fail, millega määratakse ühine fondistiil teatud classidel (KÕIK STIILIFAILID ON KAUSTAS "CSS FAILID"!)
* Igal lehel on veel eraldi oma .css fail, millega disainitakse sellele kindlal veebilehel erisused teistest veebilehtedest
* Kõigil veebilehtdel on kasutatud .js faili, mis tekitab kõigile ühise navigatsioonirea/menüü, millega lehtede vahel liigelda. (JAVASCRIPTI FAILID ON KAUSTAS "JS FAILID")
* Kõik veebilehel kasutatud pildid on kaustas "Assets" ja kasutatud ikoonid on kaustas "Ikoonid"

### Lehtede ülesehitus
* Pealeht - tehisintellekti tutvustus(pealeht.html + pealeht.css)
* Alamleht 1 - Viis tehisintellekti tehnoloogiat(alamleht1.html + alamleht1.css)
* Alamleht 2  + tehisintellekti rakendused(alamleht2.html + alamleht2.css)
* Ühine css fail nimega veebileht.css
* Ühine javascript fail nimega veebileht.jv
* Javascripti koodi autor on stackoverflow kasutaja Thomas Orlita ning selle koodi kirjeldus (mida, mingi koodi osa teeb) on kirjeldatud veebileht.js failis kommentaaridena
   - https://stackoverflow.com/questions/35579569/hide-show-menu-onclick-javascript
