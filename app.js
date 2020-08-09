function checkQuestion(){
    var score = 0;
    var answerQ1 = document.getElementById('q1-opt2');
    var answerQ2 = document.getElementById('q2-opt3');
    var answerQ3 = document.getElementById('q3-opt1');
    var answerQ4 = document.getElementById('q4-opt4');
    if (answerQ1.checked == true){
     score++
     alert("Correct Answer")
    }
    else{
        alert("Wrong Answer")
    }


    if (answerQ2.checked == true){
        score++
        alert("Correct Answer")
       }
       else{
           alert("Wrong Answer")
       }


       if (answerQ3.checked == true){
        score++
        alert("Correct Answer")
       }
       else{
           alert("Wrong Answer")
       }



       if (answerQ4.checked == true){
        score++
        alert("Correct Answer")
       }
       else{
           alert("Wrong Answer")
       }
    
alert("Score is " + score++)
   
}
