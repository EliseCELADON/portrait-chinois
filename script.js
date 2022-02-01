document.addEventListener("DOMContentLoaded", function () {

  fetch('data.json').then(function (response) {
    response.json().then(function (data) {
      function ajouteanal(script) {
        script.forEach(function (script) {
          var listeanalogies = document.createElement("section");
          listeanalogies.innerHTML =
            '<section><div class="box"><h2> Si j’étais ' + script.analogie + ',  je serais' + script.valeuranalogies +
            '</h2><div class=\"container\">' + script.images + '<div class=\"texte\"><p>' + script.justify + '</p></div></div></div></section>'

          document.querySelector("#listeanalogies").append(listeanalogies);
        });
      }
      ajouteanal(data)
    })
  });

document.querySelector('#sub').addEventListener('click', function(event) {
  event.preventDefault()
  document.querySelector('#you').innerHTML += "<section><div class=\"box\"><h2> Si j’étais "+document.querySelector('#analogie').value+",  je serais "+document.querySelector('#valeuranalogie').value+"</h2><div class=\"container\"><img src="+document.querySelector('#imageanalogie').value+" class=\"img\"><div class=\"texte\"><p>"+document.querySelector('#justifyanalogie').value+"</p></div></div></div></section>";
});

/*mentions légales*/
document.querySelector('.volet-invisible').addEventListener('click',function(click){
    console.log("clik")

    document.querySelector('.volet-invisible').animate([{height:'12em'}],{duration:800})
    setTimeout(function(){
      window.scrollTo(0,document.body.clientHeight);
    },2);

    setTimeout(function(){
        document.querySelector('.volet-invisible').classList.replace('volet-invisible','volet-visible')
        ;}, 800);

    })
});


  //var numCase = 0;
  /*analogies.forEach(function affichaAnalogies(analogies) {
      console.log(analogies)
  })*/

  /*
  fetch("data.json").then(function(response){
      response.json().then(function(data){ 
      data.forEach(function afficheAnalogie(resultat){
          document.querySelector('#list-analogies').innerHTML +="<section><div class=\"box\"><h2> Si j’étais " + resultat.analogie +",  je serais " + resultat.valeuranalogies +" </h2><div class='container'><div class=\"photo-aquarelle\"><img src=" + resultat.images +"></div><div class=\"texte\"><p>" + resultat.justify +"</p></div>  </div></div>";
  
          numCase=numCase +1;
          })
      })*/

//document.querySelector("footer").addEventListener('click', function (event) {
     //   if (document.querySelector("footer").firstElementChild.classList.contains("volet-invisible")) {
      //      document.querySelector('.volet-invisible').classList.replace('volet-invisible', 'volet-visible')
       // }
        //else {
       //     document.querySelector('.volet-visible').classList.replace('volet-visible', 'volet-invisible')
      //  }

