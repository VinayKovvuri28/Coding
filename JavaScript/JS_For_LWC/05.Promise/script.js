console.log("Welcome To JavaScript Promise");

function checkIsSuccess(data) {
    return new Promise(function(resolve, reject) {
        if(data === "success") {
            return resolve("proccess successfull");
        }
        else {
            return reject("proccess unsuccessfull");
        }
    })
}

checkIsSuccess('unsuccess').then(function(result) {
    console.log(result);
}).catch(function(error){
    console.error(error);
})















// fatch("https://api.github.com/users/VinayKovvuri28").then(function(result){
//     return result.json()
// }).then(funtion(response){
//     console.log(response);
// })