



    var Mark = Number(prompt("Enter a Marks : "));

    var result = Mark > 100  || Mark < 0 ? "invalid Number " : Mark >= 80 && Mark <= 100? "A+" : Mark >= 70 && Mark <= 79? "A" : Mark >= 60 && Mark <= 69 ? "B" : Mark >= 50 && Mark <= 59? "C" : Mark >= 40 && Mark <= 49? "D" : Mark >= 33 && Mark <= 39? "E" : "Faild!";

    document.write(result);