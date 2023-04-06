//getReg : all including duplicates
//totReg : all without duplicates
//Reg : final value

var options = [
    { value: 10, text: "O" },
    { value: 9, text: "A+" },
    { value: 8, text: "A" },
    { value: 7, text: "B+" },
    { value: 6, text: "B" },
    { value: 5, text: "C" },
    { value: 0, text: "RA" }
  ];
  
  var Clg, Reg, Sem, Dept, getCredit, totSem, sumCredit = 0, sumGPA = 0, totCredits = 0;
  var indsem = new Array(8).fill(0);
  document.getElementById("calculate-button").style.display = "none";
  document.getElementById("gpadiv").style.display = "none";
  
  function removeID(_id) {
    var e = document.getElementById(_id);
    if (e !== null) e.remove();
  }
  
  function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for (i = L; i > 0; i--) {
      selectElement.remove(i);
    }
  }
  
  
  //College
  var getClg = list
    .map(function (i) {
      return i.college;
    });
  
  var totClg = Array.from(new Set(getClg));
  
  // console.log(totClg);
  
  
  //Option for college
  var college = document.getElementById("college");
  var regulation = document.getElementById("regulation");
  var semester = document.getElementById("semester");
  var department = document.getElementById("department");
  
  var colleged = document.getElementById("colleged");
  var regulationd = document.getElementById("regulationd");
  var semesterd = document.getElementById("semesterd");
  var departmentd = document.getElementById("departmentd");
  regulationd.style.display = "none";
  semesterd.style.display = "none";
  departmentd.style.display = "none";
  
  for (var j = 0; j < totClg.length; j++) {
    var option = document.createElement("option");
    option.value = totClg[j];
    if (totClg[j] === "sjit") {
      option.text = "St. Joseph's Institute of Technology";
    }
    else {
      option.text = "St. Joseph's College of Engineering";
    }
    college.appendChild(option);
  }
  
  
  //Regulation
  function Regulation() {
    removeID("subjects");
    removeID("table");
    document.getElementById("gpa").innerHTML = "";
    document.getElementById("gpadiv").style.display = "none";
    removeOptions(regulation);
    semesterd.style.display = "none";
    departmentd.style.display = "none";
    document.getElementById("calculate-button").style.display = "none";
    Clg = college.value;
    // console.log(Clg);
    var getReg = list
      .filter(function (i) {
        return i.college === Clg;
      })
      .map(function (i) {
        return i.reg;
      });
  
    var totReg = Array.from(new Set(getReg));
  
    // console.log(totReg);
    // regulationd.style.display = "block";
    $("#regulationd").show(500);
    for (var j = 0; j < totReg.length; j++) {
      var option = document.createElement("option");
      option.value = totReg[j];
      option.text = totReg[j];
      regulation.appendChild(option);
    }
  }
  
  
  //Semester
  function Semester() {
    removeID("subjects");
    removeID("table");
    document.getElementById("gpa").innerHTML = "";
    document.getElementById("gpadiv").style.display = "none";
    removeOptions(semester);
    departmentd.style.display = "none";
    document.getElementById("calculate-button").style.display = "none";
    // Reg = parseInt(regulation.value);
    Reg = regulation.value;
    // console.log(Clg);
    // console.log(Reg);
    var getSem = list
      .filter(function (i) {
        return i.college === Clg && i.reg === Reg;
      })
      .map(function (i) {
        return i.sem;
      });
  
    totSem = Array.from(new Set(getSem));
    totSem.sort();
  
    // console.log(totSem);
    // semesterd.style.display = "block";
    $("#semesterd").show(500);
    for (var j = 0; j < totSem.length; j++) {
      var option = document.createElement("option");
      option.value = totSem[j];
      option.text = totSem[j];
      semester.appendChild(option);
    }
  }
  
  
  //Department
  function Department() {
    removeID("subjects");
    removeID("table");
    document.getElementById("gpa").innerHTML = "";
    document.getElementById("gpadiv").style.display = "none";
    removeOptions(department);
    document.getElementById("calculate-button").style.display = "none";
    Sem = parseInt(semester.value);
    // console.log(Sem);
    var getDept = list
      .filter(function (i) {
        return i.college === Clg && i.reg === Reg && i.sem === Sem;
      })
      .map(function (i) {
        return i.dept;
      });
  
    var totDept = Array.from(new Set(getDept));
  
    // console.log(totDept);
    // departmentd.style.display = "block";
    $("#departmentd").show(500);
    for (var j = 0; j < totDept.length; j++) {
      var option = document.createElement("option");
      option.value = totDept[j];
      option.text = totDept[j];
      department.appendChild(option);
    }
  }
  
  
  
  //Subjects
  function Subject() {
    removeID("subjects");
    removeID("table");
    document.getElementById("gpa").innerHTML = "";
    document.getElementById("gpadiv").style.display = "none";
    Dept = department.value;
    indsem.fill(0);
  
    //Sem 1 Credits
    getCredit = list
      .filter(function (i) {
        return i.college === Clg && i.reg === Reg && i.sem === 1;
      })
      .map(function (i) {
        return i.credit;
      });
      
      for (var i = 0; i < getCredit.length; i++) {
        indsem[0] += getCredit[i];
      }

    //others
    for(var k=2; k<=Sem; k++)
    {
        getCredit = list
         .filter(function (i) {
          return i.college === Clg && i.reg === Reg && i.sem === k && i.dept === Dept;
        })
        .map(function (i) {
         return i.credit;
        });
        for (var j = 0; j < getCredit.length; j++) {
            indsem[k-1] += getCredit[j];
          }
    }
    console.log(indsem);
    totCredits = 0
    for (var i = 0; indsem[i]!=0; i++) {
        totCredits += indsem[i];
      }
      console.log(totCredits);
  
    //Create subjects
    var selects = document.getElementById("selects");
    var container1 = document.createElement("div");
    container1.id = "subjects";
    container1.className = "form-group";
    for (var i = 0; i < Sem; i++) {
      var container = document.createElement("div");
      var label = document.createElement("label");
      label.innerHTML = "Semester " + totSem[i]  + " :";
      var input = document.createElement("input");
      input.className = "form-control";
      container.appendChild(label);
      container.appendChild(input);
      container1.appendChild(container);
      $("#selects").hide();
      $("#selects").show(1000);
      // $("html, body").animate({ scrollTop: $(document).height() });
    }
    selects.appendChild(container1);
    // document.getElementById("calculate-button").style.display = "block";
    $("#calculate-button").show(1000);
  }
  
  
  
  var results = [];
  var grade = [];
  function CGPA() {
    removeID("table");
    document.getElementById("gpa").innerHTML = "";
    document.getElementById("gpadiv").style.display = "none";
    sumCredit = 0, sumGPA = 0;
    var selects = document.getElementsByTagName("input");
    for (var i = 0; i < selects.length; i++) {
      var selectedValue = selects[i].value;
      if (selectedValue) {
        results.push(Math.round(Number(selectedValue) * indsem[i]));
        grade.push(selectedValue);
      }
    }
    for (var i = 0; i < selects.length; i++) {
      sumGPA += results[i];
    }
    console.log(results);
    console.log(sumGPA);
    // console.log(sumGPA / sumCredit);
    document.getElementById("gpa").innerHTML = "CGPA : " + (sumGPA / totCredits).toFixed(2);
    // document.getElementById("gpadiv").style.display = "block";
    $("#gpadiv").fadeIn(3000);
  
  
  
    // Create the table element
    var tablediv = document.getElementById("tablediv");
    var table = document.createElement("table");
    table.id = "table";
  
    // Create the table header
    var thead = document.createElement("thead");
    var headRow = document.createElement("tr");
  
    // Create the header cells
    var headCell1 = document.createElement("th");
    var headCell2 = document.createElement("th");
    var headCell3 = document.createElement("th");
    var headCell4 = document.createElement("th");
  
    // Set the text for the header cells
    headCell1.innerHTML = "SEMESTER";
    headCell2.innerHTML = "GRADE POINTS EARNED";
    headCell3.innerHTML = "CREDITS";
    headCell4.innerHTML = "GPA";
  
    // Append the cells to the header row
    headRow.appendChild(headCell1);
    headRow.appendChild(headCell2);
    headRow.appendChild(headCell3);
    headRow.appendChild(headCell4);
  
    // Append the header row to the header
    thead.appendChild(headRow);
  
    // Create the table body
    var tbody = document.createElement("tbody");
  
    // Loop through each array
    for (var i = 0; i < Sem; i++) {
      // Create a new row
      var row = document.createElement("tr");
  
      // Create a cell for each array's element
      var cell1 = document.createElement("td");
      var cell2 = document.createElement("td");
      var cell3 = document.createElement("td");
      var cell4 = document.createElement("td");
  
      // Set the cell's text to the corresponding array's element
      cell1.innerHTML = i+1;
      cell2.innerHTML = results[i];
      cell3.innerHTML = indsem[i];
      cell4.innerHTML = grade[i];
  
      // Append the cells to the row
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      row.appendChild(cell4);
  
      // Append the row to the table body
      tbody.appendChild(row);
    }
  
    // Append the table body and header to the table
    table.appendChild(thead);
    table.appendChild(tbody);
  
    // Add the new element to the 2nd column
    // Add the new element to the 5th column
    var newRow2 = document.createElement("tr");
    var newCell2 = document.createElement("th");
    newCell2.innerHTML = sumGPA;
    var newCell3 = document.createElement("th");
    newCell3.innerHTML = totCredits;
    var newCell4 = document.createElement("th");
    newCell4.innerHTML = (sumGPA / totCredits).toFixed(2);
    newRow2.appendChild(document.createElement("td"));
    newRow2.appendChild(newCell2);
    newRow2.appendChild(newCell3);
    newRow2.appendChild(newCell4);
  
    // Append the new rows to the table body
    tbody.appendChild(newRow2);
  
    // Append the table to the document
    tablediv.appendChild(table);
    $("#tablediv").hide();
    $("#tablediv").show(500);
    $("html, body").animate({ scrollTop: $(document).height() });
  }
  
  // disable right click
  document.addEventListener('contextmenu', event => event.preventDefault());
   
  document.onkeydown = function (e) {
  
      // disable F12 key
      if(e.keyCode == 123) {
          return false;
      }
  
      // disable I key
      if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
          return false;
      }
  
      // disable J key
      if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
          return false;
      }
  
      // disable U key
      if(e.ctrlKey && e.keyCode == 85) {
          return false;
      }
  }