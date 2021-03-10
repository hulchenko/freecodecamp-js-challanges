////Global methods are WINDOW methods:
/* window.setTimeout(function(){
     window.alert("Hello Timeout!")
 }, 2000) */

//  var counter = 1;
//  var interval = setInterval(function(){
//      console.log(counter++);
//  }, 1000)

//  setTimeout(function(){
//     clearInterval(interval)
//  }, 5000);
 

 ////Callbacks:
/*
 Client (index.html & JS) -> Server (backend code written in JS, Python, Java, PHP, C-Sharp) -> DataBase -> Server -> Client
 */

//Callbacks: Old look:
 /* console.log('Client: need to receive list of users')
 console.log('...')

 setTimeout(function(){
     console.log('Server: requesting list of users from DataBase')
     console.log('...')

     setTimeout(function(){
         console.log('DataBase: compiling users list.Send back to the Server')
         console.log('...')

         setTimeout(function(){
             console.log('Server: transform received data back to the Client')
             console.log('...')

             setTimeout(function(){
                 console.log('Client: received users list. Showing it now')
             },1000)
         },500)
     },500)
 }, 1000)
 */

//Callback: Promises(New look):

console.log('Client: need to receive list of users')
console.log('...')

var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Server: requesting list of users from DataBase')
        console.log('...')
        resolve() //successful task
    }, 1000)
})

promise.then(function(){
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            var users = [ //added users to pass through "then" Promises
                {uid: 'id1', name: 'Maxim'},
                {uid: 'id2', name: 'Elena'}
            ]
            // reject('DataBase could not receive list of users') //example of reject()
            console.log('DataBase: compiling users list.Send back to the Server', users) //original users list
            console.log('...')
            resolve(users) //paste created users into resolve
        }, 500)
    })
   
})
.then(function(dbUsers){ //create new variable that is containing data/users from the promise above
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Server: transform received data back to the Client')
            console.log('...')
            var users = dbUsers.map(function(user){ //map through them and modify(if needed)
                return {
                    id: user.uid,
                    firstName: user.name,
                    timestamp: Date.now()
                }
            })
            resolve(users)
        }, 500)
    })
})
.then(function(users){
    setTimeout(function(){
        console.log('Client: received users list. Showing it now', users)
    },1000)
   })
.catch(function(error){
    console.error(error)
})
.finally(function(){
    setTimeout(function(){
        console.log('Complete')
    }, 1050) //add timeout to finally, since last "then" function has timeout of 1000ms
})