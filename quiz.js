$(document).ready(function() { 
    var questions = ["question1","question2","question3","question4"];
    var score = 0;
    var i = 0;
    var total = questions.length;
    // var selection= $("input[type='radio']:checked").val();
    var correct_answer_gifs = ["right1","right2","right3","right4",];
    var wrong_answer_gifs = ["wrong1","wrong2","wrong3","wrong4"];
    var answer 
    // change 
    var questionElements = {
        question1:{
            questionImageSource:"img/trumpexample.png",
            questionImageTarget:"http://www.cnn.com/2016/11/10/politics/trump-quote-facebook-trnd/index.html",  
            questionCopy:"This graphic went viral on social media but was debunked. What should make you doubt it?",
            radioButtonContent:"<input name='question' type='radio' value='incorrect'><strong>A</strong>&nbsp;The font looks too formal<br><input name='question' type='radio' value='correct'><strong>B</strong>&nbsp;No link to an original post<br><input name='question' type='radio' value='incorrect'><strong>C</strong>&nbsp;The date<br><input name='question' type='radio' value='incorrect'><strong>D</strong>&nbsp;The cheesy photo",
            resultGifCorrectSrc:"img/right1.gif",
            resultGifIncorrectSrc:"img/wrong1.gif",
            postQuestionCopy:"Anyone can photoshop words on top of an image! Memes like this can originate from satire sites, hacked accounts, or tabloids that make stuff up so you grab them while paying for toilet paper. Check your sources before you share!",                  
        },
        questionTwo:{
            questionImageSource:"Hillary_Breitbart.png",
            questionImageTarget:,
            questionCopy:"This article questions whether Hillary Clinton really had pneumonia when she ran for president. What makes you think twice about this reporting?",
            radioButtonContent:"<input name='question' type='radio' value='incorrect'> <b>A</b> &nbsp;The source, Breitbart, is a far-right media organization with a track record of targeting Clinton.<br>
                            <input name='question' type='radio' value='incorrect'> <b>B</b> &nbsp;In the picture used, Hillary looks totally healthy.<br>
                            <input name='question' type='radio' value='incorrect'> <b>C</b> &nbsp;Without evidence, the author hints that Clinton has a super-serious degenerative disease instead.<br>
                            <input name='question' type='radio' value='correct'> <b>D</b> &nbsp;A and C",
            resultGifCorrectSrc:"right2gif",
            resultGifIncorrectSrc: "wrong2.gif",
            postQuestionCopy:"Let's say my friend has a pimple, but I tell the whole school she has herpes, and she doesn't get a date to prom. That's like this article, except what's at stake is who leads America. Don't be fooled by alarming, speculative claims.",
        },
        questionThree:{
            questionImageSource:"img/Propublica_news.png",
            questionImageTarget:"https://www.propublica.org/article/common-roadside-drug-test-routinely-produces-false-positives",
            questionCopy:"This article says cops send people to jail on the basis of a drug test known for false positives. Why trust this story?",
            radioButtonContent:'<input name="question" type="radio" value="incorrect"> <b>A</b> &nbsp; Multiple named sources including national crime data and a rep from the company that produced the drug tests in question.<br>
                        <input name="question" type="radio" value="incorrect"> <b>B</b> &nbsp; Reliable hyperlinks.<br>
                        <input name="question" type="radio" value="incorrect"> <b>C</b> &nbsp; Unbiased voice.<br>
                        <input name="question" type="radio" value="correct"> <b>D</b> &nbsp; All of the above.',
            resultGifCorrectSrc:"right3gif",
            resultGifIncorrectSrc:"wrong3.gif",
            postQuestionCopy:"Bring a skeptical eye to everything you read, but when you see a story like this, you get to drop the cynicism and accept the facts. Maybe even share and act on what you learn."
        },
        questionFour:{  
            questionImageSource:"img/NYtimes_draft.png",
            questionImageTarget: "https://www.nytimes.com/2016/06/15/us/politics/congress-women-military-draft.html",
            questionCopy:"Freaked out that her daughter will have to register for the draft, your aunt shares this New York Times story the week Trump takes office. What's wrong with that?",
            radioButtonContent:"<b>A</b> &nbsp; There's no way the US Senate would ever force females to register for the draft.<br>
                        <!-- this copy is wrong -->
                        <input name='question' type='radio' value='correct'> <b>B</b> &nbsp;It's an accurate but outdated story about part of a bill that didn't pass.<br>
                        <input name='question' type='radio' value='incorrect'> <b>C</b> &nbsp; You should only trust coverage of the military written by active duty personnel.<br>
                        <input name='question' type='radio' value='incorrect'> <b>D</b> &nbsp; The photo comes from 'Getty Images' and not the New York Times.",
            resultGifCorrectSrc:"right4gif",
            resultGifIncorrectSrc:"wrong4.gif",
            postQuestionCopy:"This story was perfectly accurate--at the time it was published. But it went viral 10 months later, when people started sharing it like crazy long after the provision was killed. Timing is everything, so check your dates!",
        }
    }
    $(".questionimage").attr("src", imageSource)
// avoid repetition 
// 
// insert images into .image_container
    function goToByScroll(id){
          // Remove "link" from the ID
        id = id.replace("link", "");
          // Scroll
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top},
            'slow');
    }
    $("#retake").click(function(){
        score = 0;
        i=0;
        $("#quiz").removeClass("hidden")
        $("quiz, #question1, #submit").show()
        $("#score_text").empty();
        $(".wrongans, .rightans, .quizresult, .resultdiv").hide()
        $("#retake").remove()
        $("#results").empty()
        $("#resultdiv").hide()
    });
    // create button to go back to question 
    $("#returntocurrentquestion").click(function(){

    }) 
    // this needs to hide the make me smarter button 
    $("#backtoquiz").click(function(){
        score = 0;
        i=0;
        $("#quiz").removeClass("hidden")
        $("quiz, #question1, #submit").show()
        // $("#score_text").empty();
        $(".wrongans, .rightans, .quizresult, .resultdiv, #learn_more, #credits").hide()
        $("#retake").remove()
        $("#results").empty()
        $("#resultdiv").hide()
        $("#quiz").get(0).scrollIntoView();
    })
    $("#smartbutton").click(function(){
        console.log("this is the smart button")
        $("#resultdiv").hide()
        $("#learn_more").show()
        $("#credits").show()
        //hide quiz
        // e.preventDefault(); 
      // Call the scroll function
        goToByScroll("#learn_more");  
    })


// Start quiz and then insert into divs 
    $("#startquiz").click(function(){
        $("#quiz").show();
        $("#quizintro, #pinkintro, #violetbackground").hide();
        $("#quiz").get(0).scrollIntoView();
        // hide other stuff

    });

    $("#nextbutton, #nextbutton1, #nextbutton2, #nextbutton3").click(function(){
        $("#quizintro").hide();
        $("#wrongans").hide();
        $("#correctans").hide();
        // if (i<questions.length){
            // add buttons here 
            $("#" + questions[i]).hide();
            console.log("#"+questions[i]);
            $("#" + questions[i]+"explanation").hide();
            $("#" + questions[i + 1]).show();
            console.log("#" + questions[i + 1])
            $("#nextbutton").hide();
            $("#submit").show();
            i++
        // }    
    });

    // $("#submit, #submit1, #submit2, #submit3").click(function(){
    $(".submitbutton").click(function(){
        answer = false
        // console.log($(".questiondiv:visible input[name='question']:checked").val())
        if($(".questiondiv:visible input[name='question']:checked").val() == "correct"){
            answer = true  
            score++;
            $("#" + questions[i]).hide();
            $("#" + questions[i]+"explanation").show();
            $("#" + correct_answer_gifs[i] +"gif").show();
            $("#submit").hide();
        }
        else if($(".questiondiv:visible input[name='question']:checked").val() == "incorrect"){
            answer = true 
            console.log("true")
            $("#" + questions[i]).hide();
            $("#" + questions[i]+"explanation").show();
            $("#" + wrong_answer_gifs[i]+"gif").show();
            $("#submit").hide(); 
        }
        else if($(".questiondiv:visible > .question > input[name='quesiton']:checked").length<=0){
            alert("nope")
            // answer = false
        }
        if (answer){
            if(i<=questions.length-1){
                $("#nextbutton").show();
                $("#submit").hide(); 
                $("#" + questions[i]+"explanation").show();
            }
        }
    });
    $("#resultsbutton").click(function(){
            // if(i==questions.length){
                $("#nextbutton").hide();
                $("#submit").hide();
                // why is this here? CHECK IT
                $("#question1explanation").hide()
                $("#quizintro").hide()
                // what's this do?
            
                $("#wrongans").hide();
                // don't think this is necessary anymore 
                $("#finish").hide();
                $("#correctans").hide();
                $("#resultdiv").show();
                $("#resultdiv").get(0).scrollIntoView();
                // THIS IS NOT APPEARING DEPRICATED?
                $("#results").append("<div class='col-sm-1 col-md-1'></div><p text-align='center' id='score' class='col-sm-10 col-md-10' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%; white-space:nowrap;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-1 col-md-1'></div>");
                // score is the id in results
                $("#score").show();
                // does this do anything anymore?
                $("#question4explanation").hide()
                // 
                $("#quiz").addClass("hidden")
                $("#quizheading").addClass("hidden")
                // depricated
                // CHECK THAT NEW NAMING CONVENTIONS WORK  
                //learn more show()
                // $("#learn_more").show()
                // this needs to be refactored with retake quiz button 
                // change this one to the phone image with alternative facts
                if(score<1){
                    // show alternative facts
                    $("#zero_right_result").append("<div class='col-sm-1 col-md-1'></div><p text-align='center' id='score' class='col-sm-10 col-md-10' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%; white-space:nowrap;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-1 col-md-1'></div>");
                    $("#zero_right").show()
                }
                else if(score==1){
                    // show alternative facts
                    $("#one_right_result").append("<div class='col-sm-1 col-md-1'></div><p text-align='center' id='score' class='col-sm-10 col-md-10' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%; white-space:nowrap;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-1 col-md-1'></div>");
                    $("#one_right").show()
                }
                else if(score==2){
                    //show rumor has it 
                    $("#two_right_result").append("<div class='col-sm-1 col-md-1'></div><p text-align='center' id='score' class='col-sm-10 col-md-10' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%;white-space:nowrap;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-1 col-md-1'></div>");
                    $("#two_right").show()
                }
                else if(score>2){
                    //show truthiness
                    $("#over_two_right_result").append("<div class='col-sm-1 col-md-1'></div><p text-align='center' id='score' class='col-sm-10 col-md-10' style='padding-top:20px; font:2em sans-serif; position:relative; right:10%; white-space:nowrap;'>You got&nbsp" + score + "&nbspcorrect out of&nbsp"+total+"&nbspquestions.</p><div class='col-sm-1 col-md-1'></div>");
                    $("#over_two_right").show()
                }
            // }
    });
});