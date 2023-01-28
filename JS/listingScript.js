

function show(key){
         var storage = localStorage.getItem(key);
         id = key;
         document.getElementById('data').innerHTML = '<p>'+storage+'</p>';
};

for(var i = 0; i <localStorage.length; i++){

    var num = localStorage.key(i);
    //document.getElementById('change').innerHTML +='<p>'+ num+'</p>';
    document.getElementById('change').innerHTML +='<p onclick=show('+num+')>'+ num+'</p>';
};

