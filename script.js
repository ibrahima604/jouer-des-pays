$(document).ready(function() {
    // Bonnes réponses : les indices correspondent à chaque sélecteur
    const correctAnswers = {
        q1: "r2",
        q2:"r12",
        q3:"r21",
        q4:"r22",
        q5:"r31",
        q6:"r41",
        q7:"r46"

    }
   
// Quand on clique sur le bouton valider
    $("#validate").on("click",function(event){
        event.preventDefault()
       
      if($("select[name='q1'] option:selected").attr("id")===correctAnswers.q1){
        $("select[name='q1']").css("color","green")
        $("#bonne1").css({
            "color":"green",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"

        }).show()
      }
      else{
        $("select[name='q1']").css("color","red")
        $("#mauvaise1").css({
            "color":"red",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"

        }).show()
        $("#reponse1").css({
            "color":"red",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"
        }).show()

      }
      if($("select[name='q2'] option:selected").attr("id")===correctAnswers.q2){
        $("select[name='q2']").css("color","green")
        $("#bonne2").css({
            "color":"green",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"

        }).show()
      }
      else{
        $("select[name='q2']").css("color","red")
        $("#mauvaise2").css({
            "color":"red",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"

        }).show()
        $("#reponse2").css({
            "color":"red",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"
        }).show()

      }

      if($("select[name='q3'] option:selected").attr("id")===correctAnswers.q3){
        $("select[name='q3']").css("color","green")
        $("#bonne3").css({
            "color":"green",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"

        }).show()
      }
      else{
        $("select[name='q3']").css("color","red")
        $("#mauvaise3").css({
            "color":"red",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"

        }).show()
        $("#reponse3").css({
            "color":"red",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"
        }).show()

      }

      if($("select[name='q4'] option:selected").attr("id")===correctAnswers.q4){
        $("select[name='q4']").css("color","green")
        $("#bonne4").css({
            "color":"green",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"

        }).show()
      }
      else{
        $("select[name='q4']").css("color","red")
        $("#mauvaise4").css({
            "color":"red",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"

        }).show()
        $("#reponse4").css({
            "color":"red",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"
        }).show()

      }


      if($("select[name='q5'] option:selected").attr("id")===correctAnswers.q5){
        $("select[name='q5']").css("color","green")
        $("#bonne5").css({
            "color":"green",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"

        }).show()
      }
      else{
        $("select[name='q5']").css("color","red")
        $("#mauvaise5").css({
            "color":"red",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"

        }).show()
        $("#reponse5").css({
            "color":"red",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"
        }).show()

      }


      if($("select[name='q6'] option:selected").attr("id")===correctAnswers.q6){
        $("select[name='q6']").css("color","green")
        $("#bonne6").css({
            "color":"green",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"

        }).show()
      }
      else{
        $("select[name='q6']").css("color","red")
        $("#mauvaise6").css({
            "color":"red",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"

        }).show()
        $("#reponse6").css({
            "color":"red",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"
        }).show()

      }
      if($("select[name='q7'] option:selected").attr("id")===correctAnswers.q7){
        $("select[name='q7']").css("color","green")
        $("#bonne7").css({
            "color":"green",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"

        }).show()
      }
      else{
        $("select[name='q7']").css("color","red")
        $("#mauvaise7").css({
            "color":"red",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"

        }).show()
        $("#reponse7").css({
            "color":"red",
            "font-style":"italic",
            "font-weight":"100",
            "text-align":"center"
        }).show()

      }
        
    })
   
//Le Bouton RESET
    $("#reset").on("click",function() {
        // Réinitialiser la sélection
        $("select[name='q1']").val(""); // Réinitialise le select à sa valeur par défaut

        // Masquer le texte de réponse
        $("#reponse1").hide(); // Masque le texte de la réponse
        $(".bonne1").hide(),
        $(".mauvaise1").hide(),

        // Réinitialiser la couleur des options
        $("select[name='q1']").css("color", "black"); // Ou la couleur par défaut que tu veux
    //Pour la deuxieme option
        $("select[name='q2']").val(""); // Réinitialise le select à sa valeur par défaut

        // Masquer le texte de réponse
        $("#reponse2").hide(); // Masque le texte de la réponse
        $(".bonne").hide(),
        $(".mauvaise").hide(),

        // Réinitialiser la couleur des options
        $("select[name='q2']").css("color", "black")

        //L'option 3

        $("select[name='q3']").val(""); // Réinitialise le select à sa valeur par défaut

        // Masquer le texte de réponse
        $("#reponse3").hide(); // Masque le texte de la réponse
        $(".bonne3").hide(),
        $(".mauvaise3").hide(),

        // Réinitialiser la couleur des options
        $("select[name='q3']").css("color", "black")

        //L'OPTION 4

        $("select[name='q4']").val(""); // Réinitialise le select à sa valeur par défaut

        // Masquer le texte de réponse
        $("#reponse4").hide(); // Masque le texte de la réponse
        $(".bonne4").hide(),
        $(".mauvaise4").hide(),

        // Réinitialiser la couleur des options
        $("select[name='q4']").css("color", "black")

       // L'OPTION 5
       $("select[name='q5']").val(""); // Réinitialise le select à sa valeur par défaut

       // Masquer le texte de réponse
       $("#reponse5").hide(); // Masque le texte de la réponse
       $(".bonne5").hide(),
       $(".mauvaise5").hide(),

       // Réinitialiser la couleur des options
       $("select[name='q5']").css("color", "black")

       //L'OPTION 6

       $("select[name='q6']").val(""); // Réinitialise le select à sa valeur par défaut

       // Masquer le texte de réponse
       $("#reponse6").hide(); // Masque le texte de la réponse
       $(".bonne6").hide(),
       $(".mauvaise6").hide(),

       // Réinitialiser la couleur des options
       $("select[name='q6']").css("color", "black")
       //L'OPTION 7

       $("select[name='q7']").val(""); // Réinitialise le select à sa valeur par défaut

       // Masquer le texte de réponse
       $("#reponse7").hide(); // Masque le texte de la réponse
       $(".bonne7").hide(),
       $(".mauvaise7").hide(),

       // Réinitialiser la couleur des options
       $("select[name='q7']").css("color", "black")

        
    
    
    });

})
    // Validation des sélections
   /* $('#validate').on('click', function() {
        // Réinitialiser les résultats précédents
        $('.result').text('').removeClass('correct incorrect');

        let isAllCorrect = true;

        // Vérifier chaque sélection
        for (let i = 1; i <= 7; i++) {
            const selectedValue = $(`#select${i}`).val();
            if (selectedValue === correctAnswers[i - 1]) {
                $(`#result${i}`).text('Correct!').addClass('correct');
            } else if (selectedValue !== "") {
                $(`#result${i}`).text('Incorrect!').addClass('incorrect');
                isAllCorrect = false; // Si une réponse est incorrecte
            }
        }

        if (isAllCorrect) {
            alert("Bravo! Toutes les réponses sont correctes!");
        }
    });

    // Réinitialisation des sélections
    $('#reset').on('click', function() {
        $('select').val(''); // Réinitialiser tous les sélecteurs
        $('.result').text('').removeClass('correct incorrect'); // Effacer les résultats
    });
});*/
