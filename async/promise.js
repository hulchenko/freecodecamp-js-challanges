function sleep(ms) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve()
        }, ms)
    })
}

var p1 = sleep(1500).then(function(){
    return {
        name: 'Promise 1500'
    }
})

var p2 = sleep(3000).then(function(){
    return {
        name: 'Promise 3000'
    }
})

//Promise Syntax:
// Promise.all([p1, p2]).then(function(data){
//     console.log('All',data) //reflects all results and after the longest promise kicks in
// })

// Promise.race([p1,p2]).then(function(data){
//     console.log('Race',data) //reflects fastest result and after the quickest promise kicks in
// })

//Async/await Syntax:
async function start(){
    var dataAll = await Promise.all([p1, p2])
    
    var dataRace = await Promise.race([p1, p2])

    console.log('DataAll: ', dataAll)
    console.log('DataRace: ', dataRace)
}

start()

