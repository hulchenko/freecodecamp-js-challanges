//Source: https://jsonplaceholder.typicode.com/

var button = document.querySelector('#load').addEventListener('click', load);

function load(){
    var url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(function(response){ //represents server's message(response) back to our request
            return response.json()
        })
        .then(function(data){ //data is what contains inside of response.json()
            //need to go through response.json() array, to add elements from it to the <li> under ul list:
            var ul = document.querySelector('#list')
            var html = data.map(function(item){ // item is each element within data
                return `<li style='list-style-type: none'>${item.id} ${item.name} (${item.email})</li>`
            })

            ul.insertAdjacentHTML('afterbegin'/*position value, "afterbegin" will be placed in the beginning of the line."afterend" after the element, from the new line."beforebegin" before the element, paragraph above. "beforeend" at the end of line, after the element)*/, html.join(' '))
        })
}