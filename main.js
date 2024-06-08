// 1.Տրված է իրական թվերի հաջորդականություն (Մասիվ): Արտածել այդ հաջորդականության  
// ա) այն տարրերի քանակը, որոնք փոքր են իրենց կարգահամարի քառակուսուց, 
//  բ) բոլոր տարրերի միջին թվաբանականի և տարրերի տարբերությունները,  
// գ) այն տարրերի քանակը, որոնք փոքր են իրենց ձախ և աջ հարևանների կիսագումարից,  
// դ) մեծագույն տարրը և նրա կարգահամարը,  
// ե) մեծագույն և փոքրագույն տարրերի տարբերությունը,  
// զ) առաջին մեծագույն և վերջին փոքրագույն տարրերի միջև գտնվող անդամների գումարը,  
// է) մեծագույն և մեծությամբ երկրորդ տարրերը,  
// ը) դրական տարրերից փոքրագույնի արժեքը (եթե դրական տարր չկա, արտածել համապատասխան հաղորդագրություն):

// ա) այն տարրերի քանակը, որոնք փոքր են իրենց կարգահամարի քառակուսուց, 

// function SquareOfRank(arr){
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < i * i) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(SquareOfRank([-2, 5, 6, 1, 7]))

//  բ) բոլոր տարրերի միջին թվաբանականի և տարրերի տարբերությունները,  

// function Mijin(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum / arr.length
// }
// console.log(Mijin([2, 1, 4, 3]))

// գ) այն տարրերի քանակը, որոնք փոքր են իրենց ձախ և աջ հարևանների կիսագումարից,  

// function kisagumar(arr){
// let count = 0;
// for(let i = 1; i < arr.length-1; i++){
//     if(arr[i] < (arr[i + 1] + arr[i - 1]) / 2){
//         count++
//     }
//     return count
// }
// }
// console.log(kisagumar([2, 1, 6, 4]))

// դ) մեծագույն տարրը և նրա կարգահամարը,  
// function biggest(arr){
//     let max = arr[0];
//     let index = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//             index = i
//         }
       
//     }
//     return `max is ${max} index is ${index}` 
// }
// console.log(biggest([2,8,9,5,3]))

// ե) մեծագույն և փոքրագույն տարրերի տարբերությունը,  

// function tarb(arr){
//     let max = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     let min = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }
//     let tarberutyun = max - min
//     return tarberutyun
// }
// console.log(tarb([2, 7, 1, 8, 3]))

// զ) առաջին մեծագույն և վերջին փոքրագույն տարրերի միջև գտնվող անդամների գումարը,  
// է) մեծագույն և մեծությամբ երկրորդ տարրերը,  
// ը) դրական տարրերից փոքրագույնի արժեքը (եթե դրական տարր չկա, արտածել համապատասխան հաղորդագրություն):

// զ) առաջին մեծագույն և վերջին փոքրագույն տարրերի միջև գտնվող անդամների գումարը,  

let arr = [2,5,8,3,9,4]
let indexMax = 0;
let max = arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
        indexMax = i

    }

}
console.log(max)
console.log(indexMax)

let indexMin = arr.length-1
let min = arr[arr.length-1]
for(let i = arr.length-1; i >= 0; i--){
    if(arr[i] < min){
        min = arr[i]
        indexMin = i
    }
}
console.log(min)
console.log(indexMin)

if(indexMin < indexMax){
    let sum = 0;
    for(let i = indexMin + 1; i <= indexMax-1; i++){
        sum = sum + arr[i]
    }
    console.log(sum)
    
}
else {
    let sum = 0;
 for(let i = indexMax+1; i <= indexMin-1; i++){
    sum = sum + arr[i]
 }
 console.log(sum)
}