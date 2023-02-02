
document.addEventListener("DOMContentLoaded", function () {

  // animation ecriture au clavier sur codepen
  var string = "Portrait chinois :)";
  var str = string.split("");
  var el = document.getElementById('str');
  (function animate() {
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
    var running = setTimeout(animate, 90);
  })();

  // selection de l'élément "analogies" pour y injecter du code
  var liste = document.getElementById("liste");

  // Parcours de toute les cases de la base de donnée
  for (var i = 0; i < thematique.length; i++) {
    // Insertion de toute les valeurs sur le modèle prédéfinis et rajout des animations AOS
    liste.innerHTML +=
    '<section><div class="thematique" style="background-color:' + thematique[i].color + '" id="' + thematique.id + ',">' +
    '<div class="wrapper"><img id="img-desc" src="' + thematique[i].img + '" alt="' + thematique[i].alt + '"><div class="text">' +
    '<div class="wrap">' +
    '<h2 class="titre">Si j\'étais <span class="element" style="color:' + thematique[i].color + '">' + thematique[i].theme + ',</span><br>je serais <span class="element" style="color:' + thematique[i].color + '">' + thematique[i].valeur + '</span></h2><div><p class="description" style="background-color:' + thematique[i].color + '">' + thematique[i].description + '</p></div></div></div>' +
    '</div></section>'
  }



  //création d'une section clique sur ENVOYER 
  document.querySelector('#submit').addEventListener('click', function (e) {

    
    e.preventDefault();
    document.querySelector('#new-analogie').innerHTML +=
      '<section><div class="thematique">' +
      '<div class="wrapper"><div class="text">' +
      '<div class="wrap">' +
      '<h2 class="titre">Si j\'étais <span class="element" style="color:#ff90e8">' + document.querySelector("#analogie").value + ',</span><br>je serais <span class="element" style="color:#ff90e8">' + document.querySelector("#valeur").value + '</span></h2><div><p class="description" style="background-color:#ff90e8">' + document.querySelector("#justify").value + '</p></div></div></div>' +
      '</div></section>'

    //API= pour envoyer les données entrées dans le formulaire dans la base données de philippe gambette
    fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=diyana.balit&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeur").value + "Parce que " + document.querySelector("#justify").value).then(function (response) {
      //génération du message d'erreur ou de succès
      response.json().then(function (data) {
        if (data.status == "success") {
          document.querySelector("#message").innerHTML = "Bien reçu chef  :)";
          console.log('bien recu')
        } else {
          document.querySelector("#message").innerHTML = "Oops, erreur :(";
          console.log('erreur')
        }
      })
    })
  });








})
