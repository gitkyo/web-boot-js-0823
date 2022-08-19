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
});





