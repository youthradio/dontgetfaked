// remove question one 
$(document).ready(function() { 
    var questions = ["question1","question2","question3","question4",];
    var score = 0;
    var i = 0;
    var total = questions.length;
    var selection= $("input[type='radio']:checked").val();
    var correct_answer_gifs = ["right1","right2","right3","right4",];
    var wrong_answer_gifs = ["wrong1","wrong2","wrong3","wrong4"];
    $("#nextbutton").click(function() {
        $("#quizintro").hide()
        $("#wrongans").hide();
        $("#correctans").hide();
        if (i<questions.length-1){
            $("#" + questions[i]).hide();
            console.log("#"+questions[i]);
            $("#" + questions[i]+"explanation").hide();
            $("#" + questions[i + 1]).show();
            console.log("#" + questions[i + 1])
            $("#nextbutton").hide();
            $("#submit").show();
            i++
        };
    });


    $("#submit").click(function() {
        $("#quizintro").hide()
        if($("input[type='radio']:checked").val() == "correct"){
            score++;
            $("#" + questions[i]).hide();
            $("#" + questions[i]+"explanation").show();
            $("#" + correct_answer_gifs[i] +"gif").show();
            $("#submit").hide(); 
        }

        if($("input[type='radio']:checked").val() == "incorrect"){
            $("#" + questions[i]).hide();
            $("#" + questions[i]+"explanation").show();
            console.log("#"+questions[i]+"explanation")
            $("#" + wrong_answer_gifs[i]+"gif").show();
            $("#submit").hide(); 
        }

        if($("input[type='radio']:checked").val() == undefined){
            alert("Please make a selection")
        }

        if(i<=questions.length-1){
            $("#nextbutton").show();
            $("#submit").hide(); 
            $("#" + questions[i]+"explanation").show();
        }
        if(i==questions.length-1){
            $("#nextbutton").hide();
            // works
            $("#submit").hide();
            // why is this here? CHECK IT
            $("#question1explanation").hide()
            $("#quizintro").hide()
            // what's this do?
        
            $("#wrongans").hide();
            // don't think this is necessary anymore 
            $("#finish").hide();
            $("#correctans").hide();
            // HIDING THIGNS IS HAPPENING
            // THIS IS NOT APPEARING DEPRICATED?
            $("#results").append("<div class='col-sm-2 col-md-2'></div><p text-align='center' id='score' class='col-sm-8 col-md-8' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-2 col-md-2'></div>");
            // also not appearing - DEPRICATED?
            $("#score").show();
            // does this do anything anymore?
            $("#question4explanation").hide()
            // 
            $("#quiz").addClass("hidden")
            $("#quizheading").addClass("hidden")
            // depricated
            // CHECK THAT NEW NAMING CONVENTIONS WORK  
            if(score<1){
                // show alternative facts
                $("#zero_right_result").append("<div class='col-sm-2 col-md-2'></div><p text-align='center' id='score' class='col-sm-8 col-md-8' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-2 col-md-2'></div>");
                $("#zero_right").show()
            }
            else if(score==1){
                // show alternative facts
                $("#one_right_result").append("<div class='col-sm-2 col-md-2'></div><p text-align='center' id='score' class='col-sm-8 col-md-8' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-2 col-md-2'></div>");
                $("#one_right").show()
            }
            else if(score==2){
                //show rumor has it 
                $("#two_right_result").append("<div class='col-sm-2 col-md-2'></div><p text-align='center' id='score' class='col-sm-8 col-md-8' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-2 col-md-2'></div>");
                $("#two_right").show()
            }
            else if(score>2){
                //show truthiness
                $("#over_two_right_result").append("<div class='col-sm-2 col-md-2'></div><p text-align='center' id='score' class='col-sm-8 col-md-8' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-2 col-md-2'></div>");
                $("#over_two_right").show()
            }
        }
    }); 
});







//BELOW IS THE OLD CODE THAT I TRIED TO FIX AND THEN BROKE HTE JS




// // remove question one 
// $(document).ready(function() { 
//     var score = 0;
//     var i = 0;
//     var total = questions.length;
//     var selection= $("input[type='radio']:checked").val();
//     // need to re order these 
//     // index 0 is done
//     // index 1 is done -- remains unchancged
//     // index should be index 3

//     //trump
//     //hillary 
//     //pro publica 
//     //military 

//     var questions = ["question3","question2","question4","question1"];
//     var correct_answer_gifs = ["right3","right2","right4","right1"];
//     var wrong_answer_gifs = ["wrong3","wrong2", "wrong4","wrong1"];
//     //new order
//     //var questions = ["question1","question2","question3","question4"];
//     //var correct_answer_gifs = ["right1", "right2","right3","right4"];
//     //var wrong_answer_gifs = ["wrong1", "wrong2", "wrong3", "wrong4"];  

//     $("#retake").click(function(){
//         //show first question
//         //hide results
//         //
//     })
//     $("#nextbutton").click(function() {
//         $("#quizintro").hide()
//         $("#wrongans").hide();
//         $("#correctans").hide();
//         // if the index 
//         if (i<questions.length-1){
//             $("#" + questions[i]).hide();
//             $("#" + questions[i]+"explanation").hide();
//             $("#" + questions[i + 1]).show();
//             console.log("#" + questions[i + 1])
//             $("#nextbutton").hide();
//             $("#submit").show();
//             i++
//         };
//     });

//     $("#submit").click(function() {
//         $("#quizintro").hide()
//         if($("input[type='radio']:checked").val() == "correct"){
//             score++;
//             $("#correctans").fadeIn("fast");
//             $("#correctans").delay(900).fadeOut('fast');
//             $("#" + questions[i]).hide();
//             $("#" + questions[i]+"explanation").show();
//             $("#" + correct_answer_gifs[i] +"gif").show();
//             $("#submit").hide(); 
 
//         }

//         if($("input[type='radio']:checked").val() == "incorrect"){
//             $("#wrongans").fadeIn("fast"); 
//             $("#wrongans").delay(900).fadeOut('fast');
//             $("#" + questions[i]).hide();
//             $("#" + questions[i]+"explanation").show();
//             $("#" + wrong_answer_gifs[i]+"gif").show();
//             $("#submit").hide(); 
//         }

//         if($("input[type='radio']:checked").val() == undefined){
//             alert("Please make a selection")
//         }

//         if(i<=questions.length-1){
//             $("#nextbutton").show();
//             $("#submit").hide(); 
//             $("#" + questions[i]+"explanation").show();
//         }
//         if(i==questions.length-1){
//             console.log(score)
//             $("#turquoisebg").hide();
//             $("#nextbutton").hide();
//             $("#submit").hide();
//             $("#question1explanation").hide()
//             $("#quizintro").hide()
//             $("#wrongans").hide();
//             $("#finish").hide();
//             $("#correctans").hide();
//             $("#results").append("<div class='col-sm-2 col-md-2'></div><p text-align='center' id='score' class='col-sm-8 col-md-8' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-2 col-md-2'></div>");
//             $("#score").show();
//             $("#question4explanation").hide()
//             $("#quiz").addClass("hidden")
//             $("#quizheading").addClass("hidden")
//             $("#finalsection").show()
//             if(score<1){
//                 // show alternative facts
//                 $("#alternative_facts_zero_right_result").append("<div class='col-sm-2 col-md-2'></div><p text-align='center' id='score' class='col-sm-8 col-md-8' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-2 col-md-2'></div>");
//                 $("#alternative_facts_zero_right").show()
//             }
//             else if(score==1){
//                 // show alternative facts
//                 $("#alternativefacts_one_right_result").append("<div class='col-sm-2 col-md-2'></div><p text-align='center' id='score' class='col-sm-8 col-md-8' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-2 col-md-2'></div>");
//                 $("#alternative_facts_one_right").show()
//             }
//             else if(score==2){
//                 //show rumor has it 
//                 $("#rumorhasitresult").append("<div class='col-sm-2 col-md-2'></div><p text-align='center' id='score' class='col-sm-8 col-md-8' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-2 col-md-2'></div>");
//                 $("#rumor_has_it").show()
//             }
//             else if(score>2){
//                 //show truthiness
//                 $("#truthinessresult").append("<div class='col-sm-2 col-md-2'></div><p text-align='center' id='score' class='col-sm-8 col-md-8' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-2 col-md-2'></div>");
//                 $("#truthiness").show()
//             }
//         }
//     });    
    
//     // $("#submit").click(function() {
//     //     // toggle visibility
//     //     $("#quizintro").hide()
//     //     $("#" + questions[i]).hide();
//     //     $("#" + questions[i]+"explanation").show();
//     //     $("#submit").hide(); 
//     //     if($("input[type='radio']:checked").val() == "correct"){
//     //         score++;
//     //         $("#" + correct_answer_gifs[i] +"gif").show();
//     //     }
//     //     else if($("input[type='radio']:checked").val() == "incorrect"){
//     //         $("#" + wrong_answer_gifs[i]+"gif").show();
//     //     }

//     //     else if($("input[type='radio']:checked").val() == undefined){
//     //         alert("Please make a selection")
//     //     }

//     //     if(i<=questions.length-1){
//     //         $("#nextbutton").show();
//     //         $("#" + questions[i]+"explanation").show();
//     //     }
//     //     if(i==questions.length-1){
//     //         var results = "<div class='col-sm-2 col-md-2'></div><p text-align='center' id='score' class='col-sm-8 col-md-8' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-2 col-md-2'></div>";
//     //         $("#turquoisebg").hide();
//     //         $("#nextbutton").hide();
//     //         $("#quizintro").hide()
//     //         $("#wrongans").hide();
//     //         $("#finish").hide();
//     //         $("#correctans").hide();
//     //         $("#score").show();
//     //         $("#question1explanation").hide()
//     //         $("#question4explanation").hide()
//     //         $("#quizheading").addClass("hidden")
//     //         $("#quiz").addClass("hidden")
//     //         $("#finalsection").show()
//     //         $("#retake").show()
//     //         if(score==0){
//     //             $("#alternativefactsresultzero").append(results);
//     //             $("#alternativefactszero").show()
//     //         }
//     //         else if(score==1){
//     //             $("#alternativefactsresultone").append(results);
//     //             $("#alternativefactsresultone").show()
//     //         }
//     //         else if(score==2){
//     //             $("#rumorhasitresult").append(results);
//     //             $("#rumor_has_it").show()
//     //         }
//     //         else if(score>2){
//     //             $("#truthinessresult").append(results);
//     //             $("#truthiness").show()
//     //         }
//     //     }
//     // }); 
// });