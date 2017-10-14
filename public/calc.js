var displayValue = [];
var number1;
var number2;
var op;
var result;

$('.number').click(function(e){
  var number = $(this).text();
    displayValue.push(number);
    var val = '';
    for(var number in displayValue){
      val += displayValue[number];
    }
    $('#display').text(val);
});

$('.operator').click(function(e){
  var operator = $(this).text();


    if(operator === 'C'){
     $('#display').text('');
     displayValue = [];
   }

    if(operator === '+' || operator === '-' || operator === 'X' || operator === '/') {
      number1 = displayValue.join("");
      displayValue = [];
      op = operator;
    }

    if(operator === '=') {
      number2 = displayValue.join("");
      displayValue = [];
      if(op === '+'){
        result = parseFloat(number1) + parseFloat(number2);
        $('#display').text(result);
      }

      if (op === '-'){
        result = parseFloat(number1) - parseFloat(number2);
        $('#display').text(result);
      }

      if (op === 'X'){
        result = parseFloat(number1) * parseFloat(number2);
        $('#display').text(result);
      }

      if (op === '/'){
        result = parseFloat(number1) / parseFloat(number2);
        $('#display').text(result);
      }
      else {
        result = 0;
      }
    }
 });
