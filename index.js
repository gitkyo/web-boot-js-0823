
// verifier le chargement complet du DOM de la page avant d'éxecuter le code JS
// https://developer.mozilla.org/fr/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener("DOMContentLoaded", (event) => {


    
    //doc : https://fr.javascript.info/fetch
    // objectif : fecth data on https://api.github.com/users/gitkyo

    let user = 'gitkyo';
    let url = `https://api.github.com/users/${user}`;


    async function getAvatarFromGitUrl(){

        //await car fetch est un methode qui renvoi une promesse
        let response = await fetch(url);

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
            console.log(response);

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



 })

