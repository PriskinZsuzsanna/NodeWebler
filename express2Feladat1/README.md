Express static fájlkezelés:

 - HTML oldalak:

    - app.use(express.static('public'))
    - html oldalak elhelyezése a public folderben
    - automatikusan nyitja meg az url-hez tartozó oldalt

- CSS:

    - app.use(express.static('public'))
    - css fájl elhelyezése a public/assets folderben 
    - link: assets/style.css

- Background

     - app.use(express.static('images'))
     - images folder elhelyezése a gyökérkönyvtárban
     - hivatkozás: url('valami.jpg') - csak file név
     - (amennyiben az images folder a public mappába kerül nem kell külön használni rá az app.use(exp.staticot, -> hivatkozás: images/valami.jpg))