function getGrade(marks){
    if (marks >79){
        return 'A'
    }else if (marks <79 && marks>=60){
        return 'B'
    }else if (marks>=59 && marks<=49){
        return 'C'
    }else if (marks>=48 && marks<=40){
        return 'D'
    }else if (marks<=39) {
        return 'E'
    }
  }
  const userMarks = prompt("Enter student marks (0-100):");
const marks = parseInt(userMarks, 10);
const grade = getGrade(marks);
console.log(`The grade is: ${grade}`);
