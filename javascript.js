var firebaseConfig = {
    apiKey: "AIzaSyDkHlIRIqylw8CQdhAY4jmuI0V57XVQe3c",
    authDomain: "test-c4fa9.firebaseapp.com",
    databaseURL: "https://test-c4fa9.firebaseio.com",
    projectId: "test-c4fa9",
    storageBucket: "",
    messagingSenderId: "66952404627",
    appId: "1:66952404627:web:41c1a4e8f6a6f31a9df766"
  };
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $(".btn").on("click", function(event) {
      event.preventDefault();
    //   console.log("hello");
     //grabs values from text boxes
  var name = $("#inputName").val().trim();
  var role = $("#inputRole").val().trim();
  var startDate = $("#inputStartDate").val();
  var monthlyRate = $("#inputMonthlyRate").val();

  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  })
  });

  //this will add to the table
  database.ref().on("child_added", function(childSnapshot){
      var sv = childSnapshot.val()
    console.log(sv.name);
    console.log(sv.role);
    console.log(sv.startDate);
    console.log(sv.monthlyRate);
    
    var newRow = $("<tr>");
    var newData = $("<td>");
    newData.addClass("employeeName");
    newData.text(sv.name);
    $(".table").append(newRow);
    newRow.append(newData);
  });

 

