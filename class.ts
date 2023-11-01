class Cars{
    constructor(public colour:string){}
    // price():void{
    //     console.log('120$')
    // }
    protected description():void{
        console.log('The best car')
    }
    summary():void{
        this.description()
    }
}

const colour=new Cars('red')
console.log(colour.colour)
// const ab=new Cars()
// // ab.description()
// class Cars2 extends Cars{
//     private price():void{
//         console.log('200$')
//     }
//     summary():void{
//         console.log(`${this.description()} the best price`)
//     }
// }
// const captiva=new Cars2()
// captiva.summary()