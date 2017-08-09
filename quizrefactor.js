$(document).ready(function() { 
    var score = 0;
    var count = 0;
    var answer 
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
        question2:{
            questionImageSource:"img/Hillary_Breitbart.png",
            // questionImageTarget:,
            questionImageTarget:"http://www.breitbart.com/big-government/2016/09/15/doctors-see-inconsistencies-hillary-clintons-bacterial-pneumonia-diagnosis/",
            questionCopy:"This article questions whether Hillary Clinton really had pneumonia when she ran for president. What makes you think twice about this reporting?",
            radioButtonContent:"<input name='question' type='radio' value='incorrect'><strong>A</strong>&nbsp;The source, Breitbart, is a far-right media organization with a track record of targeting Clinton.<br><input name='question' type='radio' value='incorrect'><strong>B</strong>&nbsp;In the picture used, Hillary looks totally healthy.<br><input name='question' type='radio' value='incorrect'><strong>C</strong>&nbsp;Without evidence, the author hints that Clinton has a super-serious degenerative disease instead.<br><input name='question' type='radio' value='correct'><strong>D</strong>&nbsp;A and C",
            resultGifCorrectSrc:"img/right2.gif",
            resultGifIncorrectSrc: "img/wrong2.gif",
            postQuestionCopy:"Let's say my friend has a pimple, but I tell the whole school she has herpes, and she doesn't get a date to prom. That's like this article, except what's at stake is who leads America. Don't be fooled by alarming, speculative claims.",
        },


        question3:{
            questionImageSource:"img/Propublica_news.png",
            questionImageTarget:"https://www.propublica.org/article/common-roadside-drug-test-routinely-produces-false-positives",
            questionCopy:"This article says cops send people to jail on the basis of a drug test known for false positives. Why trust this story?",
            radioButtonContent:'<input name="question" type="radio" value="incorrect"><strong>A</strong>&nbsp;The article cites technical scientific terms a person wouldn\'t know unless they\'d done their research.<br><input name="question" type="radio" value="incorrect"><strong>B</strong>&nbsp;The publication is non-profit and therefore does not pander to special interests.<br><input name="question" type="radio" value="incorrect"><strong>C</strong>&nbsp;The author is well known.<br><input name="question" type="radio" value="correct"><strong>D</strong>&nbsp;The reporter uses an unbiased voice, cites multiple named sources, and includes reliable hyperlinks.',
            resultGifCorrectSrc:"img/right3.gif",
            resultGifIncorrectSrc:"img/wrong3.gif",
            postQuestionCopy:"Bring a skeptical eye to everything you read, but when you see a story like this, you get to drop the cynicism and accept the facts. Maybe even share and act on what you learn.",
        },


        question4:{  
            questionImageSource:"img/NYtimes_draft.png",
            questionImageTarget: "https://www.nytimes.com/2016/06/15/us/politics/congress-women-military-draft.html",
            questionCopy:"Freaked out that her daughter will have to register for the draft, your aunt shares this New York Times story the week Trump takes office. What's wrong with that?",
            radioButtonContent:"<input name='question' type='radio' value='incorrect'><strong>A</strong>&nbsp;There's no way the US Senate would ever force females to register for the draft.<br><!-- this copy is wrong --><input name='question' type='radio' value='correct'><strong>B</strong>&nbsp;It's an accurate but outdated story about part of a bill that didn't pass.<br><input name='question' type='radio' value='incorrect'><strong>C</strong>&nbsp;You should only trust coverage of the military written by active duty personnel.<br><input name='question' type='radio' value='incorrect'><strong>D</strong>&nbsp;The photo comes from 'Getty Images' and not the New York Times.",
            resultGifCorrectSrc:"img/right4.gif",
            resultGifIncorrectSrc:"img/wrong4.gif",
            postQuestionCopy:"This story was perfectly accurate--at the time it was published. But it went viral 10 months later, when people started sharing it like crazy long after the provision was killed. Timing is everything, so check your dates!",
        }
    }
    var scoreResult= {
        score0:{
            scoreImage:"img/alternativefacts.png",
            scoreText: "OK, friend, you need to get your Google on. Look up your links, find some new news sources and think before you hit that share button!",
        },
        score1:{
            scoreImage:"img/rumorhasit.png",
            scoreText:"You're not completely clueless, but you've got to try harder to keep it real. Look up your links, find some new news sources and think before you hit that share button!",
        },
        score2:{
            scoreImage:"img/rumorhasit.png",
            scoreText:"You're not completely clueless, but you've to try harder to keep it real. Look up your links, find some new news sources and think before you hit that share button!",
        },
        score3:{
            scoreImage:"img/legitnews.png",
            scoreText:"You're not completely clueless, but you've got to try harder to keep it real. Look up your links, find some new news sources and think before you hit that share button!",
        },   
        score4:{
            scoreImage:"img/legitnews.png",
            scoreText:"Well done -- more often than not, you can tell the truth from the BS."
        }
    }
    var resultFeedback = {
        correctAns: "Good job! ",
        incorrectAns: "Nope. "
    }
    var totalQuestions = Object.keys(questionElements).length
    var incrementCount = function(){
        count++
    }
    var resetCount = function(){
        count = 0;
    }
    var addScore = function(){
        score++
        console.log(score)
    }
    function populateQuestion(){
        incrementCount()
        console.log(count)
        var curr_question =  "questionElements.question" + count
        var currentQuestionImageString = "" + curr_question + ".questionImageSource"
        var currentQuestionImage = eval(currentQuestionImageString)
        var currentQuestionString = curr_question + ".questionCopy"
        var currentQuestion = eval(currentQuestionString)
        var currentradioButtonContentString = curr_question + ".radioButtonContent"
        var currentradioButtonContent = eval(currentradioButtonContentString)
        var currentImageTargetString = "" + curr_question + ".questionImageTarget"
        var currentImageTarget =  eval(currentImageTargetString)
        $("#submitButton").hide();
        $(".quizQuestionContent").empty();
        console.log("curr image target" + currentQuestion.questionImageTarget)
        if (typeof currentImageTarget !== undefined &&  currentImageTarget !==null) {            
            // $("#imageTarget").attr("href", currentQuestion.questionImageTarget)
            $("#imageContainer").append('<a href=' + currentImageTarget + ' target="_blank"><img class="center-block img-responsive" src=' + currentQuestionImage + ' align="left"></a>')
        }
        else if (typeof currentImageTarget == "undefined"){
            $("#imageContainer").append("<img class='center-block img-responsive' src='" + currentQuestionImage + "' align='left' style=''>")
        }    
        $("#quizQuestionCopy").append("<div>" + currentQuestion + "</div>")
        $("#quizRadioButtons").append("<div>" + currentradioButtonContent + "</div>")
        $("#submitButton").show();
        if(count<totalQuestions){
            $("#nextButton").show();
            $("#resultDiv").hide();
        }
    }
    function populateResult(counter, result){
        var curr_question =  "questionElements.question" + counter
        var currentExplanationString = curr_question + ".postQuestionCopy"
        var currentExplanation = eval(currentExplanationString)
        var gifCorrectAnswerString =  curr_question + ".resultGifCorrectSrc"
        var gifIncorrectAnswerString = curr_question +".resultGifIncorrectSrc"
        var gifCorrectAnswer =  eval(gifCorrectAnswerString)
        var gifIncorrectAnswer = eval(gifIncorrectAnswerString)
        var expText  
        var currGif 
        var resultText 
        if(result == "correct"){
            currGif = gifCorrectAnswer
            expText =  resultFeedback.correctAns + currentExplanation
            addScore()
        }
        if(result == "incorrect"){
            currGif = gifIncorrectAnswer
            expText =  resultFeedback.incorrectAns + currentExplanation
        }
        $("#answerExplanation").text(expText)
        $("#resultGif").attr("src", "" + currGif)
        // v2
        // $('html, body').animate({
        //     scrollTop: $("#resultDiv").offset().top +150
        // }, 100)
        // goToByScroll("resultDiv")
    }


    // for v2 - refactor show/hide
    function goToByScroll(id, px){
    //         var heightOffset = $(document).height()
    //         console.log(currId)
        $('html, body').animate({
            // scrollTop: $("#resultDiv").offset().top +150 this works for the resultDiv
            // scrollTop: $(currId).offset().top - 50 this qorks for the questionContainer
            // scrollTop: $(currId).offset().top 
        }, 100)
    }
    $("#startQuiz").click(function(){
        // replace with classes 
        $("#startQuiz, #quizintro, #pinkintro, #violetbackground").hide();
        populateQuestion(count, questionElements)
        $("#questionContainer").show().get(0).scrollIntoView();
    });
    // after user makes a selection
    $("#submitButton").click(function(){
        console.log("submit")
        var currQuizValue = $("#quizRadioButtons input[name='question']:checked").val()
        console.log(currQuizValue)
        if(currQuizValue){
            populateResult(count, currQuizValue)
            $("#questionContainer").hide()
            $("#resultDiv").show()
            $("#resultDiv").show().get(0).scrollIntoView();
            if(count == totalQuestions){
                $("#resultButton").show()
                $("#nextButton").hide()
            console.log(count +" "+ totalQuestions + "yes")
            }
            else if (totalQuestions > count){
                $("#nextButton").show()
            }
        }
        else{
            alert("Please make a selection")
        }
    });
    // shows with question result  
    $("#nextButton").click(function(){
        $("#resultGif").removeAttr('src');
        $("#answerExplanation").empty();
        $("#resultDiv").hide()
        if (count<totalQuestions){
            // goToByScroll("questionContainer")
            $("#questionContainer").show()
            populateQuestion()
        }
        else if(count == totalQuestions){
            console.log("all out of questions")
        }    
    });
    function populateScore(s){
        console.log("populating score")
        var answerExplanationCopy
        var resultImgPng
        if(s==0){
            console.log("zero")
            resultImgPng = scoreResult.score0.scoreImage
            answerExplanationCopy = scoreResult.score0.scoreText
            $("#resultImg").attr("src", ""+resultImgPng)
            $("#answerExplanationScore").text(answerExplanationCopy)
            console.log(scoreResult.score0.scoreText)
        }
        if(s==1){
            console.log("one")
            resultImgPng = scoreResult.score1.scoreImage
            answerExplanationCopy = scoreResult.score1.scoreText
            $("#resultImg").attr("src", ""+resultImgPng)
            $("#answerExplanationScore").text(answerExplanationCopy)
        }
        if(s==2){
            console.log("two")
            resultImgPng = scoreResult.score2.scoreImage
            answerExplanationCopy = scoreResult.score2.scoreText
            $("#resultImg").attr("src", ""+resultImgPng)
            $("#answerExplanationScore").text(answerExplanationCopy)
        }
        if(s>2){
            resultImgPng = scoreResult.score3.scoreImage
            answerExplanationCopy = scoreResult.score2.scoreText
            $("#resultImg").attr("src", ""+resultImgPng)
            $("#answerExplanationScore").text(answerExplanationCopy)
        } 
    }

    $("#resultButton").click(function(){
        console.log("result button!")
        $("#nextbutton, #resultDiv, #questionContainer, #submit").hide();
        $("#scoreDiv").show();
        populateScore(score)
        $("#resultButton").hide()
        $("#score").append("You got " + score + " correct out of&nbsp"+ totalQuestions +"&nbspquestions.</span>");
        $("#scoreDiv").get(0).scrollIntoView();
        $("#learn_more").show() 
        $("#credits").show()
    });

    $("#retakeButton").click(function(){
        console.log("RETAKE BUTTON")
        score = 0;
        i=0;
        resetCount()
        $("#scoreDiv").hide()
        $("#learn_more, #credits").hide()
        // $("#questionContainer").empty()
        $("#questionContainer").show()
        populateQuestion()
        $("#submit").show()
        $("#score_text").empty();
        $("#retake").remove()
    });
 
    // this needs to hide the make me smarter button 
    // back to quiz in v2
    // $("#backtoquiz").click(function(){
    //     score = 0;
    //     count =0;
    //     $("#quiz").removeClass("hidden")
    //     $("quiz, #question1, #submit").show()
    //     $(".wrongans, .rightans, .quizresult, .resultdiv, #learn_more, #credits").hide()
    //     $("#retake").remove()
    //     $("#results").empty()
    //     $("#resultdiv").hide()
    //     $("#quiz").get(0).scrollIntoView();
    // })
// smart button reqs more materials 
    // $("#smartbutton").click(function(){
    //     $("#resultdiv").hide()
    //     $("#learn_more").show()
    //     $("#credits").show()
    //     goToByScroll("#learn_more");  
    // })
});