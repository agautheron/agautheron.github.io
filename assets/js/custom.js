$(document).ready(function(){
    fetch("https://api.archives-ouvertes.fr/search/?q=authIdHal_s:timothee-schmoderer&wt=json&fl=title_s,authFullName_s")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Do something with the data, for example:
            const publications = data.response.docs;
            for (const publication of publications) {
                console.log(publication.title_s);
                console.log(publication.authFullName_s);
            }
        })
        .catch(error => console.error(error));
});
