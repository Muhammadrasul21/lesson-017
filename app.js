// {
//     // 51 masala

//     function myFunc(arr) {
//         let len = arr.length;
//         let ortaIndex = Math.floor(len / 2);

//         return len % 2 === 1 ? arr[ortaIndex]
//             : (arr[ortaIndex - 1] + arr[ortaIndex]) / 2;
//     }
//     console.log(myFunc([1, 2, 3, 4, 5]))

// }




// {
//     // 53 masala
//     function harfMi(str) {
//         for (let i = 0; i < str.length; i++) {
//             let char = str[i];
//             if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z')) {
//                 return `Harfdan boshqa narsa ham qatnashgan`;
//             }
//         }
//         return `Faqat harf qtnashgan`
//     }

//     console.log(harfMi("Hello"))
// }




// {
//     // 55 masala

//     function sozLength(str) {
//         return str.split(' ').map(word => word.length);
//     }

//     console.log(sozLength("Hello world"))
// }




// {
//     // 56 masala

//     function boshJoy(str) {
//         return str.split('').some(char => char === ' ');
//     }

//     console.log(boshJoy("Hello world"))
// }