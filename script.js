$(document).ready(function(){
  var calculation = [];
  var operators ={plus:"+", minus:"-", multiply:"*", divide:"/"};

  $("ul.numbers li").click(function(){
    calculation.push($(this).attr("id"));
    $("#small").html(calculation.join(""));
  });
  $("ul.operators li").click(function(){
      calculation.push(operators[$(this).attr("id")]);
      $("#small").html(calculation.join(""));
  });
  $("ul.actions li").click(function(){
      if($(this).attr("id") == "ce"){
        calculation.pop();
        $("#small").html(calculation.join(""));
      }
      if($(this).attr("id") == "c"){
        calculation = [];
        $("#large").html("0");
        $("#small").html("");
      }
      if($(this).attr("id") == "equals"){
      $("#large").html(Math.round(eval(calculation.join(""))), 2);
      $("#small").html(calculation.join("")+" =");
      calculation = [];
      //https://stackoverflow.com/questions/5834318/are-variable-operators-possible

      }
  });


}); //END DOC READY JS
