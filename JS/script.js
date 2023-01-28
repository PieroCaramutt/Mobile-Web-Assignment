var counter = 0;

function increment(){
    var customerName = document.getElementById("name").value;
    var transactionDate = document.getElementById("date").value;
    var customerEmail = document.getElementById("email").value;
    var room = document.getElementById("room").value;
    var sqf1 = document.getElementById("sqw1").value;
    var sqf2 = document.getElementById("sqw2").value;
    var sqf3 = document.getElementById("sqw3").value;
    var color = document.getElementById("color").value;
    var paint = document.getElementById("paint").value;
    var comment = document.getElementById("txt").value;
    localStorage.setItem(counter, JSON.stringify({'Transaction Date' : transactionDate,
                                                    'Customer name' : customerName,
                                                    'Customer Email':customerEmail,
                                                    'Room' : room,
                                                    'wall one' : sqf1,
                                                    'wall two' : sqf2,
                                                    'wall three' : sqf3,
                                                    'Color' : color,
                                                    'Paint' : paint,
                                                    'Comments' : comment}));
                                                
    counter++;
    alert("Values added");
}



 