var button = document.getElementById('counter');

button.onclick = function(){
//create request
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (requst.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                var counter = request.respondText;
               var span = document.getElementById('count');
             span.innerHTML = counter.toString();
            }
        }
    };

request.open('GET', 'http://prashantjadhav415.imad.hasura-app.io', true);
request.send(null);

};