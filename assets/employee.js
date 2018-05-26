//Firebase
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD9-mz9CuePPIYeaEEAdvLjJDRPi2hcXpU",
    authDomain: "firstproject-cbe35.firebaseapp.com",
    databaseURL: "https://firstproject-cbe35.firebaseio.com",
    projectId: "firstproject-cbe35",
    storageBucket: "firstproject-cbe35.appspot.com",
    messagingSenderId: "43107698058"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  

  display();

function display(){
  $(".add_new").empty();

  database.ref("/users").on("child_added", function(snapshot){
    
    var newRow = $("<tr>");
    var newTd = "<th>"+ snapshot.val().name + "</th>" + "<td>"+ snapshot.val().role + "</td>" + "<td>"+ snapshot.val().startDate + "</td>" + "<td>"+ "Months worked" + "</td>" + "<td>"+ snapshot.val().monthlyRate + "</td>" + "<td>"+ "totalBilled" + "</td>";
    newRow.append(newTd);
    $(".add_new").append(newRow);

  });

  }

  
$("#submit").on("click", function(){
  
  event.preventDefault();

  var name = $("#employee_name").val().trim();
  var role = $("#role").val().trim();
  var startDate = $("#start_date").val().trim();
  var monthlyRate = $("#monthly_rate").val().trim();

  database.ref("/users").push( {

    name: name,
    role:role,
    startDate: startDate,
    monthlyRate : monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP


  });

display();

});




