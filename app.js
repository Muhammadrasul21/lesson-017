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
//     // 54 masala 

//     const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

//     const count = animals.reduce((acc, animal) => {
//         acc[animal] = (acc[animal] || 0) + 1;
//         return acc;
//     }, {});

//     console.log(count);

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




// {
//     // 57 masala 

//     const obj = { a: 2, b: 5, c: 7 };

//     let result = [];
//     for (let key in obj) {
//         result.push(key + obj[key]);
//     }
//     console.log(result);
// }




// {
//     // 58 masala

//     const oquvchilar = [
//         { name: "Elbek", protcent: 95 },
//         { name: "Zafar", protcent: 78 },
//         { name: "Aziz", protcent: 83 },
//         { name: "Jasur", protcent: 88 },
//         { name: "Bobur", protcent: 66 },
//         { name: "Kamron", protcent: 75 }
//     ];

//     const result = oquvchilar.reduce(
//         (acc, pupil) => {
//             if (pupil.protcent >= 80) {
//                 acc.otgan += 1;
//             } else {
//                 acc.yiqilgan += 1;
//             }
//             return acc;
//         },
//         { otgan: 0, yiqilgan: 0 }
//     );

//     console.log(result)
// }




// {
//     // 59 masala

//     var foo = function (nums1, nums2) {
//         let arr = nums1.concat(nums2);

//         arr.sort((a, b) => a - b);

//         let len = arr.length;
//         let ortaIndex = Math.floor(len / 2);

//         if (len % 2 === 1) {
//             return arr[ortaIndex];
//         } else {
//             return (arr[ortaIndex - 1] + arr[ortaIndex]) / 2;
//         }
//     };
//     console.log(foo([1, 2], [3, 4]))
// }