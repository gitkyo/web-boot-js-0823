
// verifier le chargement complet du DOM de la page avant d'éxecuter le code JS
// https://developer.mozilla.org/fr/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener("DOMContentLoaded", (event) => {


    
    //doc : https://fr.javascript.info/fetch
    // objectif : fecth data on https://api.github.com/users/gitkyo

    let user = 'gitkyo';
    let url = `https://api.github.com1/users/${user}`;
    let urlLocal = 'http://127.0.0.1:5500/db/user.json';


    async function getAvatarFromGitUrl(){

        //try pour essayer du code et catch pour attraper les erreurs
        try{
            //await car fetch est un methode qui renvoi une promesse
            let response = await fetch(urlLocal);

            //vérification de la réponse via le code status 200
            if(response.status === 200){
        
                //on récupère le contenu de la réponse
                let data = await response.json();
                
                //affichage
                // console.log(data);
                let imSrc = data.avatar_url;
                return imSrc;

            }
        }
        catch(error){        
            
            //throw pour lancer une erreur
            throw new Error('Cause -> ',  {cause : error});
        }

    }

       


    //exemple de récuperation de données depuis une promess avec then
    getAvatarFromGitUrl().then(function(imSrc){
        // console.log(imSrc);
        let img = document.createElement('img');    
        img.src = imSrc;
        img.classList.add("avatar");
        document.body.appendChild(img);


        testjQuery();
    });


    function testjQuery(){
     
        //detect event
        $('.avatar').on('click', function(){            
            
            //this correspond à l'élément sur lequel on a cliqué (l'élem courant)
            $(this).hide()
        });

        //ecriture jquery
        $('h1').css('color', 'black');


        //test d'appels asynchrone avec jquery 
        //API url : https://tenor.com/gifapi/documentation#quickstart-search
        $.ajax({            
            url: "https://g.tenor.com/v1/search?q=jquery&key=LIVDSRZULELA&limit=1",            
        })
        .done(function( response ) {

            //ici mes instruction pour traiter la réponse
            // console.log(response);

            //on récupere une url dans la réponse
            let media = response.results[0].media[0].gif.url;

            //on créer une element img avec l'url
            let img = document.createElement('img');
            img.src = media;
            img.classList.add("gif");
          
            //ajout dans le dom
            document.body.appendChild(img);

            //ajout du comportement draggable sur l'image avec jquery ui
            $('.gif').draggable();
            
        });


    }

    /*
        test de chart.js
    */

    //ecriture 1 
    //function initChart() {  }

    //ecriture 2 (arrow function)
    let initChart = () => {
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'Juillet',
            'Aout',
        ];

        
        //exemple de parcours avec foreach        
        labels.forEach((mois) =>{

            console.log(mois);
            
        });

        //exemple de parcours avec for of
        for(let mois of labels){
            console.log(mois);
        }

        //ecriture 1 , le switch
        // let a = 2 + 2;
        // switch (a) {
        //     case 3:
        //         alert( 'Too small' );
        //     case 4:
        //         alert( 'Exactly!' );
        //     case 5:
        //         alert( 'Too big' );
        //     default:
        //         alert( "I don't know such values" );
        // }

        //ecriture 2 avec le if else
        // if(a == 3) alert( 'Too small' );
        // else if(a == 4) alert( 'Exactly!' );
        // else if(a == 5) alert( 'Too big' );
        // else alert( "I don't know such values" );


        
        const data = {
            labels: labels,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45, 10],
            }]
        };
    
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
            }
        };
        
        //
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
    
    
    }
    
    //appel de la fonction
    initChart();


    /*
        Test de leaflet.js
    */
    let initMap = () => {
        
        //création de la carte
        var map = L.map('map').setView([-21.34, 55.47], 13);

        //ajout d'un marker
        var marker = L.marker([-21.34, 55.47]).addTo(map);
        //ajout du message lors du clic sur le marker
        marker.bindPopup("<b>Hi, Marker 1 </b><br>I am a popup.").openPopup();

        //ajout d'un 2eme marker
        var marker2 = L.marker([-21.34, 55.48]).addTo(map);
        //ajout du message lors du clic sur le marker
        marker2.bindPopup("<b>Hi Maker 2 !</b><br>I am a popup.").openPopup();

        //ajout d'un cerlce
        var circle = L.circle([-21.34, 55.47], {
            color: 'teal',
            fillColor: '#fff',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);
        //message lors du clicl sur le cercle
        circle.bindPopup("I am a circle.");

        //ajout du fond de carte ici openstreetmap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        //Fonction qui se déclenche lorsqu'on clic sur la carte
        function onMapClick(e) {
            conbsole.log("You clicked the map at " + e.latlng);
        }
        //attaché l'événement click à la carte        
        map.on('click', onMapClick);

    }

    //appel d'initMAp
    initMap();


    //test objets 
    // ici une arrow function avec un parametre
    let testObj = (monObject) => {

        //affichage de l'objet
        console.log(monObject);

        //changement de la valeur de la propriété age
        monObject.age++;

        //set nouvelle propriété
        monObject.nickname = "Pierro";

        // set nouvelle propriété avec crochets pour mettre une clef en multi-mots
        monObject["likes birds"] = true;

        console.log(monObject);

        //suppression de la propriété age
        delete monObject.age;

        //test si une clef existe dans l'objet
        if("age" in monObject == false) console.log("Y'a plus d'age !")

        //exemple de parcours d'un objet
        for(let key in monObject) {
            
            //affichage de la clef (name, age, city...)
            console.log(key);

            //affichage de la valeur de la clef (pierre, 35, ...
            console.log(monObject[key]);
        }
        

        console.log(monObject);
        // console.log(monObject.name);
        // console.log(monObject.age);
        // console.log(monObject.city);
    }

    //création d'un objet
    let obj = {
        name: 'Pierre',
        age: 35,
        city: 'St-Pierre'
    };
  
    //appel de la fonction avec l'objet en parametre
    testObj(obj);



 })

