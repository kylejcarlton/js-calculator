$(document).ready(function(){
  var calculation = [];
  var operators ={plus:"+", minus:"-", multiply:"*", divide:"/"};

  $("ul.numbers li").click(function(){
    calculation.push($(this).attr("id"));
    console.log(calculation);
  });
  $("ul.operators li").click(function(){
      calculation.push(operators[$(this).attr("id")]);
      console.log(calculation);
  });
  $("ul.actions li").click(function(){
      if($(this).attr("id") == "ce"){
        calculation.pop();
        console.log(calculation);
      }
      if($(this).attr("id") == "c"){
        calculation = [];
      }
      if($(this).attr("id") == "equals"){
      calculation = calculation.join(" ");
      console.log(eval(calculation));
      //https://stackoverflow.com/questions/5834318/are-variable-operators-possible

      }
  });


}); //END DOC READY JS
