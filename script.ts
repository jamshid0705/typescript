// const firstname:string ='jamshid'
// let num:number =2005
// num=7898
// let a=num+firstname
// console.log(a)

// // array
// const colors:string[]=['red','blue','2','yellow']
// // let car:number='shevrolet'
// console.log(colors)

// // any
// let fruits:any='apple'
// console.log(fruits)
// fruits=2345
// console.log(fruits)
// fruits={
//     name:'jamshid',
//     age:45
// }
// console.log(fruits)

// // functions
// void type li function hech qanday qiymat qaytarmaydi    
// string | number | boolean shunday bir qancha type lar kiritsak ham boladi
type a=number|string
function plus(a:a):number|string{
    let b:string|number
    if(typeof a=='number'){
        b= a*2
    }else if(typeof a=='string'){
        b= `${a}`
    }
    return a
}

type carType={
    name:string,
    year?:number
}

type carBMW= carType &{
    color:string,
    age:number
}

// interface carType{
//     name:string,
//     year?:number
// }

// interface carBMW extends carType{
//     color:string,
//     age:number
// }

const cars=(a:carType):string=>{
    return `this car's name is ${a.name}, year ${a.year}`
}
console.log(cars({name:'BMW',year:2000}))

const carBmw=(b:carBMW)=>{
    console.log(b)
}