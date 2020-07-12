// const doWorkCallback = (callback) => {
//     setTimeout(() => {
//         callback(undefined, {test: 'test'})
//     }, 2000);
// }

// doWorkCallback((error, result) => {
//     if (error) {
//         return console.log(error)
//     }

//     return console.log(result)
// });

/* ================ VS ================ */

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({status: 'success!'});
        reject({ status: 'Error'})
    }, 2000);
});

doWorkPromise.then((result) => {
    console.log(result)
}).catch(error => {
    console.log(error)
})