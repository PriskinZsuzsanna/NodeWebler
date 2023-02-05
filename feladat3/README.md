A feladat 3 módon dolgozza fel az url modul és a querystring modul használatát.

- main.js: string -> object -> string
    - adott egy string
    - a querstring.parse() segítségével objektummá alakítom
    - műveletet végzek az objektum értékein
    - a végeredményt objektumba mentem
    - a querystring.stringyfy() segítségével az eredményt újra string-é alakítom.

- main2.js: url -> string -> object -> string
    - adott egy url cím, query paraméterekkel
    - (url.parse(req.url)).query segítségével stringként kapom vissza az url query paramétereit
    - innentől a fenti lépéseket ismétlem:
        - a querstring.parse() segítségével objektummá alakítom
        - műveletet végzek az objektum értékein
        - a végeredményt objektumba mentem
        - a querystring.stringyfy() segítségével az eredményt újra string-é alakítom.
    - extra:: hozzunk létre az így kapott érték segítségével új url-t: ezen a módon json objektumként mentett adatból is elő tudok állítani új url-t

- main3.js: url -> object -> string
    - adott egy url cím, query paraméterekkel
    - (url.parse(req.url, true)). query segítségével objektummá alakítom az url query paramétereit
    - innentől a main.js lépéseit ismétlem:
        - műveletet végzek az objektum értékein
        - a végeredményt objektumba mentem
        - a querystring.stringyfy() segítségével az eredményt újra string-é alakítom.


