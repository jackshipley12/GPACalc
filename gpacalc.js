var fs = require('fs');
let grade = fs.readFileSync('/home/user/GPACalc/major.gpa.txt').toString().split("\n");
function getArraySum(a){
  var total=0;
  for(var i in a) { 
      total += a[i];
  }
  return total;
}

  var gpaTotal = []
  var i;
  for (i in grade)
    if ([i] = 'CP A'){
      gpaTotal.push(4);
    } else if ([i] = 'CP B'){
      gpaTotal.push(3);
    } else if ([i] = 'CP C'){
      gpaTotal.push(2);
    } else if ([i] = 'CP D'){
      gpaTotal.push(1);
    } else if ([i] = 'Honors A'){
      gpaTotal.push(4.5);
    } else if ([i] = 'Honors B'){
      gpaTotal.push(3.5);
    } else if ([i] = 'Honors C'){
      gpaTotal.push(2.5);
    } else if ([i] = 'Honors D'){
      gpaTotal.push(1.5);
    } else if ([i] = 'AP A'){
      gpaTotal.push(5);
    } else if ([i] = 'AP B'){
      gpaTotal.push(4);
    } else if ([i] = 'AP C'){
      gpaTotal.push(3);
    } else if ([i] = 'AP D'){
      gpaTotal.push(2);
    } else if ([i] = 'AP+ A'){
      gpaTotal.push(5.5);
    } else if ([i] = 'AP+ B'){
      gpaTotal.push(4.4);
    } else if ([i] = 'AP+ C'){
      gpaTotal.push(3.5);
    } else if ([i] = 'AP+ D'){
      gpaTotal.push(2.5);
  }


console.log(gpaTotal)
var arraySum = (getArraySum(gpaTotal))
console.log(arraySum / grade.length)



