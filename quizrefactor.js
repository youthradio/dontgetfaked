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
            postQuestionCopy:"The font, date, and photo aren't the problem--it's the lack of a source! Anyone can photoshop words on top of an image. Memes like this can originate from satire sites, hacked accounts, or tabloids that make stuff up so you grab them while paying for toilet paper. Beware!",                  
        },
        question2:{
            questionImageSource:"img/Hillary_Breitbart.png",
            // questionImageTarget:,
            questionImageTarget:"http://www.breitbart.com/big-government/2016/09/15/doctors-see-inconsistencies-hillary-clintons-bacterial-pneumonia-diagnosis/",
            questionCopy:"This article questions whether Hillary Clinton really had pneumonia when she ran for president. What makes you think twice about this reporting?",
            radioButtonContent:"<input name='question' type='radio' value='incorrect'><strong>A</strong>&nbsp;Everything you read about Hillary Clinton in the media is false.<br><input name='question' type='radio' value='incorrect'><strong>B</strong>&nbsp;In the picture used, Hillary looks totally healthy.<br><input name='question' type='radio' value='incorrect'><strong>C</strong>&nbsp;The article only includes an excerpt from the official report from Clinton's doctor.<br><input name='question' type='radio' value='correct'><strong>D</strong>&nbsp;Without evidence, the author hints that Clinton has a super-serious degenerative disease.",
            resultGifCorrectSrc:"img/right2.gif",
            resultGifIncorrectSrc: "img/wrong2.gif",
            postQuestionCopy:"There are lots of issues with this article, but the biggest one is the author's use of alarming, speculative claims. Let's say my friend has a pimple, but I tell the whole school she has herpes, and she doesn't get a date to prom. That's like this article, except what was at stake was who leads America.",
        },

        question3:{
            questionImageSource:"img/Propublica_news.png",
            questionImageTarget:"https://www.propublica.org/article/common-roadside-drug-test-routinely-produces-false-positives",
            questionCopy:"This article says cops send people to jail on the basis of a drug test known for false positives. Why trust this story?",
            radioButtonContent:'<input name="question" type="radio" value="incorrect"><strong>A</strong>&nbsp;The article cites technical scientific terms a person wouldn\'t know unless they\'d done their research.<br><input name="question" type="radio" value="incorrect"><strong>B</strong>&nbsp;The publication is non-profit and therefore does not pander to special interests.<br><input name="question" type="radio" value="incorrect"><strong>C</strong>&nbsp;The author is well known.<br><input name="question" type="radio" value="correct"><strong>D</strong>&nbsp;The reporter uses an unbiased voice, cites multiple named sources, and includes reliable hyperlinks.',
            resultGifCorrectSrc:"img/right3.gif",
            resultGifIncorrectSrc:"img/wrong3.gif",
            postQuestionCopy:"Even well-known, tech-savvy reporters at non-profits can get the story wrong. But you know you can trust this one because the sources are right there, offered in an unbiased way.",
        },

        question4:{  
            questionImageSource:"img/NYtimes_draft.png",
            questionImageTarget: "https://www.nytimes.com/2016/06/15/us/politics/congress-women-military-draft.html",
            questionCopy:"Freaked out that her daughter will have to register for the draft, your aunt shares this <em>New York Times</em> story the week Trump takes office. What's wrong with that?",
            radioButtonContent:"<input name='question' type='radio' value='incorrect'><strong>A</strong>&nbsp;There's no way the US Senate would ever force females to register for the draft.<br><!-- this copy is wrong --><input name='question' type='radio' value='correct'><strong>B</strong>&nbsp;It's an accurate but outdated story about part of a bill that didn't pass.<br><input name='question' type='radio' value='incorrect'><strong>C</strong>&nbsp;You should only trust coverage of the military written by active duty personnel.<br><input name='question' type='radio' value='incorrect'><strong>D</strong>&nbsp;The photo comes from 'Getty Images' and not the New York Times.",
            resultGifCorrectSrc:"img/right4.gif",
            resultGifIncorrectSrc:"img/wrong4.gif",
            postQuestionCopy:"This story was perfectly accurate--at the time it was published. But it went viral 10 months later, when people started sharing it like crazy long after the provision was killed. Timing is everything, so check your dates!",
        },

        question5:{
            questionImageSource:"img/Charlottesvillequestion.png",
            questionImageTarget:"http://newsuptoday.com/bombshell-internet-sleuths-just-found-smoking-gun-dems-planning-violence-charlottesville/",
            questionCopy:"This article claims that there's proof that Democrats hired actors to play white supremacists in order to stage the protests in Charlottesville. How can you tell if this story is true or false?",
            radioButtonContent:"<input name='question' type='radio' value='incorrect'><strong>A</strong>&nbsp;It's true because there are screenshots that corroborate the claims made in the article.<br><input name='question' type='radio' value='incorrect'><strong>B</strong>&nbsp;It's true because the story sounds plausible and doesn't contradict any known facts.<br><input name='question' type='radio' value='correct'><strong>C</strong>&nbsp;It's false because the proof cited in the article is not conclusive.<br><input name='question' type='radio' value='incorrect'><strong>D</strong>&nbsp;It's false because the tone of the article is biased.",
            resultGifCorrectSrc:"img/right1.gif",
            resultGifIncorrectSrc:"img/wrong1.gif",
            postQuestionCopy:"There's nothing that connects the Craigslist ad referenced in the article to the Charlottesville protests. While it's not 100% impossible that this claim is true, the screenshots are not proof of a hoax.",
        },

        question6:{
            questionImageSource:"img/eclipsequestion.png",
            questionImageTarget:"http://reflectionofmind.org/nasa-confirms-earth-will-experience-15-days-darkness-november-2017/",
            questionCopy:"This story was widely circulated in the wake of the eclipse on August 21, 2017. What might indicate that this article is unreliable?",
            radioButtonContent:'<input name="question" type="radio" value="incorrect"><strong>A</strong>&nbsp;The grammar and spelling errors<br><input name="question" type="radio" value="incorrect"><strong>B</strong>&nbsp;The questionable source listed<br><input name="question" type="radio" value="incorrect"><strong>C</strong>&nbsp;The shaky explanation of the science<br><input name="question" type="radio" value="correct"><strong>D</strong>&nbsp;All of the above',
            resultGifCorrectSrc:"img/right2.gif",
            resultGifIncorrectSrc:"img/wrong2.gif",
            postQuestionCopy:"There's a lot of questionable things going on here. This writing was clearly not held to high editorial standards based on the spelling, grammar, and punctuation errors. The breakdown of the science behind the phenomenon is confusing and inaccurate. And the source is simply an exact copy of this same article on another website, which uses this version of the article as its source. So yes-- many signs point to the fact this story is completely made up.",
        },

        question7:{  
            questionImageSource:"img/rosaparksquestion.png",
            questionImageTarget: "http://forfreedomworld.com/2017/08/20/breaking-rosa-parks-daughter-praises-trumps-response-to-charlottesville/",
            questionCopy:"Someone shares this post on your social media feed. What's the best way to figure out whether you should trust this story?",
            radioButtonContent:"<input name='question' type='radio' value='incorrect'><strong>A</strong>&nbsp;See if you agree with the author's opinion <br><input name='question' type='radio' value='correct'><strong>B</strong>&nbsp;Research the facts to verify the author's claims<br><input name='question' type='radio' value='incorrect'><strong>C</strong>&nbsp;Ask your friends if they think it's true<br><input name='question' type='radio' value='incorrect'><strong>D</strong>&nbsp;Check who else in your feeds has shared it",
            resultGifCorrectSrc:"img/right3.gif",
            resultGifIncorrectSrc:"img/wrong4.gif",
            postQuestionCopy:"All three of these choices are useful ways to process the things you read and hear. But if you don't know whether the cold hard facts behind a story are solid, you shouldn't trust that it's true. In this case, a simple Google serach would reveal that several news websites have already debunked this article thanks to a small factual inconsistency: Rosa Parks never had any children.",
        }

    } 
    var scoreResult= {
        score0:{
            scoreImage:"img/alternativefacts.png",
            scoreText: "OK, friend, you need to check yourself and check your sources. Look up your links, find some new news outlets and think before you hit that share button!",
        },
        score1:{
            scoreImage:"img/rumorhasit.png",
            scoreText:"You're not completely clueless, but you've got to try harder to keep it real. Look up your links, find some new news sources and think before you hit that share button!",
        },
        score2:{
            scoreImage:"img/truthiness.png",
            scoreText:"Not too bad -- but if you want to better your odds, consider giving those links a second look before you share. Otherwise, you'll get caught up in the online rumor mill.",
        },
        score3:{
            scoreImage:"img/legitnews.png",
            scoreText:"Well done -- more often than not, you can tell the truth from the BS.",
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
        var curr_question =  "questionElements.question" + counter;
        var currentExplanationString = curr_question + ".postQuestionCopy";
        var currentExplanation = eval(currentExplanationString);
        var gifCorrectAnswerString =  curr_question + ".resultGifCorrectSrc";
        var gifIncorrectAnswerString = curr_question +".resultGifIncorrectSrc";
        var gifCorrectAnswer =  eval(gifCorrectAnswerString);
        var gifIncorrectAnswer = eval(gifIncorrectAnswerString);
        var expText;
        var currGif; 
        var resultText; 
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
        var answerExplanationCopy;
        var resultImgPng;
        var percentage = s/totalQuestions * 100;
        console.log(percentage)
        if(percentage < 26){
            console.log("26")
            resultImgPng = scoreResult.score0.scoreImage
            answerExplanationCopy = scoreResult.score0.scoreText
            $("#resultImg").attr("src", resultImgPng)
            $("#answerExplanationScore").text(answerExplanationCopy)
        }
        else if(percentage < 51){
            console.log("51")
            resultImgPng = scoreResult.score1.scoreImage
            answerExplanationCopy = scoreResult.score1.scoreText
            $("#resultImg").attr("src", resultImgPng)
            $("#answerExplanationScore").text(answerExplanationCopy)
        }
        else if(percentage < 76){
            console.log("75")
            resultImgPng = scoreResult.score2.scoreImage
            answerExplanationCopy = scoreResult.score2.scoreText
            $("#resultImg").attr("src", resultImgPng)
            $("#answerExplanationScore").text(answerExplanationCopy)
        }
        else if(percentage < 101){
            console.log("101")
            resultImgPng = scoreResult.score3.scoreImage
            answerExplanationCopy = scoreResult.score3.scoreText
            $("#resultImg").attr("src", resultImgPng)
            $("#answerExplanationScore").text(answerExplanationCopy)
        } 
    }

    $("#resultButton").click(function(){
        $("#nextbutton, #resultDiv, #questionContainer, #submit").hide();
        $("#scoreDiv").show();
        populateScore(score)
        $("#resultButton").hide()
        $("#score").append("You got " + score + " correct out of&nbsp"+ totalQuestions +"&nbspquestions.</span>");
        $("#scoreDiv").get(0).scrollIntoView();
        $("#learn_more").show(); 
        $("#credits").show();

    });

    $("#retakeButton").click(function(){
        score = 0;
        i=0;
        resetCount()
        $("#score").empty();
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
    $("#backtoquiz").click(function(){
        score = 0;
        i=0;
        resetCount()
        populateQuestion()
        $("#questionContainer").show().get(0).scrollIntoView();
        $("#score").empty();
        $("#scoreDiv").hide()
        $("#learn_more, #credits").hide()
        $("#retake").remove()
        $("#submit").show()
        $("#score_text").empty();
        // old
        // $("#results").empty()
        // $("#resultdiv").hide()
    })
// smart button reqs more materials 
    $("#smartbutton").click(function(){
        $("#resultdiv").hide()
        $("#learn_more").show()
        $("#credits").show()
        goToByScroll("#learn_more");  
    })
});