// // useful for asynchronous
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 1.20,
//             longitude: 2.30
//         }

//         callback(data);
//     }, 2000);
// }

// geocode('Philadelphia', (data) => {
//     console.log(data);
// });

const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1+num2);
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum)
})
