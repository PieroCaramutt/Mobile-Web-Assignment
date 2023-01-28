var id = 0;
var select = document.getElementById("op").innerHTML =JSON.parse(localStorage.getItem(id))['Customer name'];

for(var i = 0; i<localStorage.length; i++){
    document.getElementById("op").innerHTML += '<option value='+JSON.parse(localStorage.getItem(i))['Customer name']+'>'+'</option>';
    var se = document.getElementById("op").innerHTML =JSON.parse(localStorage.getItem(i))['Customer name'];
    if(select ==  se){
        id = i;
    }
    else{id++;}
};




function update(){
    //var select = document.getElementById("select").value;
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

    localStorage.setItem(id, JSON.stringify({'Transaction Date' : transactionDate,
                                                    'Customer name' : customerName,
                                                    'Customer Email':customerEmail,
                                                    'Room' : room,
                                                    'wall one' : sqf1,
                                                    'wall two' : sqf2,
                                                    'wall three' : sqf3,
                                                    'Color' : color,
                                                    'Paint' : paint,
                                                    'Comments' : comment}));
                                                
    alert("Values updated");
};