$(document).ready(function(){
    let currentQuiz = null;
    let score = 0;
    $("#startButton").click(function(){
        if(currentQuiz==null){
            //顯示第一個題目
            currentQuiz=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(let x=0;x<questions[0].answers.length;x++){
                $("#options").append(
                    "<input name='options' type='radio' value="+
                    x+">"+
                    "<label>"+questions[0].answers[x][0]+
                    "</label><br><br>"
                );
            }
            $("#startButton").attr("value","Next");
        }else{
            //尋訪選項是否有被選取
            $.each(
                $(":radio"),function(i,val){
                    if(val.checked){
                        let ans = $("input[name='options']:checked").val();
                        if(questions[currentQuiz].answers[ans][1]==1){score++;}
                        if(currentQuiz==questions.length-1){
                             $("#question").text("你的分數是"+score+"/10分");
                                $("#options").empty();
                            if(score==10){
                                $("#options").append(finalAnswers[0]+"<br><br>");
                            }
                            else if(score>8){
                                $("#options").append(finalAnswers[1]+"<br><br>");
                            }
                            else if(score>6){
                                $("#options").append(finalAnswers[2]+"<br><br>");
                            }
                            else{
                                $("#options").append(finalAnswers[3]+"<br><br>");
                            }
                            currentQuiz=null;
                            $("#startButton").attr("value","Restart");
                        }
                        else{
                            currentQuiz++;
                            $("#question").text(questions[currentQuiz].question);
                            $("#options").empty();
                            for(let x=0;x<questions[currentQuiz].answers.length;x++){
                                $("#options").append(
                                    "<input name='options' type='radio' value="+
                                    x+">"+
                                    "<label>"+questions[currentQuiz].answers[x][0]+
                                    "</label><br><br>"
                                );
                            }
                        }
                    }
                }
            );
        }
    });
});