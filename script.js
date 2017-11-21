$(document).ready(function(){
  var calculation = [];
  var operators ={plus:"+", minus:"-", multiply:"*", divide:"/", decimal:"."};

  $("ul.numbers li").click(function(){
    //console.log(typeof($(this).attr("id")));
    //console.log(operators[$(this).attr("id")]);
    if($(this).attr("id") == 'decimal'){
      calculation.push(operators[$(this).attr("id")]);
    }
    else{
      calculation.push($(this).attr("id"));
    }
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
      console.log(typeof(eval(calculation.join(""))));
      $("#large").html(eval(calculation.join("")).toPrecision(3));
      $("#small").html(calculation.join("")+" =");
      calculation = [];
      //https://stackoverflow.com/questions/5834318/are-variable-operators-possible

      }
  });


}); //END DOC READY JS
