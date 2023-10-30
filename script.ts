// // const firstname:string ='jamshid'
// // let num:number =2005
// // num=7898
// // let a=num+firstname
// // console.log(a)

// // // array
// // const colors:string[]=['red','blue','2','yellow']
// // // let car:number='shevrolet'
// // console.log(colors)

// // // any
// // let fruits:any='apple'
// // console.log(fruits)
// // fruits=2345
// // console.log(fruits)
// // fruits={
// //     name:'jamshid',
// //     age:45
// // }
// // console.log(fruits)

// // // functions
// // void type li function hech qanday qiymat qaytarmaydi    
// // string | number | boolean shunday bir qancha type lar kiritsak ham boladi
// type a=number|string
// function plus(a:a):number|string{
//     let b:string|number
//     if(typeof a=='number'){
//         b= a*2
//     }else if(typeof a=='string'){
//         b= `${a}`
//     }
//     return a
// }

// type carType={
//     name:string,
//     year?:number
// }

// type carBMW= carType &{
//     color:string,
//     age:number
// }

// // interface carType{
// //     name:string,
// //     year?:number
// // }

// // interface carBMW extends carType{
// //     color:string,
// //     age:number
// // }

// const cars=(a:carType):string=>{
//     return `this car's name is ${a.name}, year ${a.year}`
// }
// console.log(cars({name:'BMW',year:2000}))

// const carBmw=(b:carBMW)=>{
//     console.log(b)
// }
// interface carPrice{
//     max:string,
//     min:string,
//     variant:string
// }
// interface carType{
//     name:string,
//     price: carPrice,
//     oil:string,
//     colour:string
// }

// //////////// literal type 
// let fruits:'apple'='apple'
// // bu qiymatga boshqa o'zgaruvchi berib bo'lmaydi
// // fruits="pear"

// /////////// enum
// enum Dictionry{
//     Rus=4,
//     Uzb,
//     Eng
// }

// // enumdan qiymatlarni olish

// console.log(Dictionry.Rus)
// console.log(Dictionry[Dictionry.Rus])

// enum weekDays{
//     Dushanba,
//     Seshanba,
//     Chorshanba,
//     Payshanba,
//     Juma,
//     Shanba,
//     Yakshanba
// }

// function week(a:weekDays){
//    switch(a){
//     case weekDays.Dushanba:
//         return 1
//     case weekDays.Seshanba:
//         return 2
//    }
// }

// console.log(week(weekDays.Chorshanba))

///////// generic
// interface car{
//     name:string,
//     colour:string
// }
// const merc={
//     name:'merc',
//     colour:'red'
// }
// function logger<T>(a:T):T{
//     return a
// }
// console.log(logger<number>(3))
// console.log(logger<string>('jamshid'))
// console.log(logger<boolean>(true))
// console.log(logger<car>(merc))


// const m=(a:number,b:number):number=>{
//   return a+b
// }

// function a(a:number,b:number){
//     a-b
// }

// const c=function(a:number,b:number):number{
//     return a+b
// }

// const todayWeather={
//     date:new Date(),
//     today:"Monday"
// }

// const weather =(a:{date:Date,today:string}):void=>{
//    console.log(`${a.date} on ${a.today}`)
// }

// weather(todayWeather)

// //// objects

// const obj={
//     name:"jamshid",
//     age:23,
//     coords:{
//         lat:5456,
//         lang:4563
//     },
//     getAge(age:number):void{
//        console.log(this.age)
//     }
// }
// const {name,age}:{name:string,age:number}=obj

// const {coords:{lat,lang}}:{coords:{lat:number,lang:number}}=obj

///////// array
const arr=['apple','pear','banana']