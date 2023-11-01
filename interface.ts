interface productTypes{
   // name:string,
   // colour:string,
   // weight:number,
   // country:string,
   summary():string
}
const product={
   name:'apple',
   colour:'red',
   weight:5,
   country:'Canada',
   summary():string{
      return `
         Name:${this.name}
         Colour:${this.colour}
         weight:${this.weight}
         country:${this.country}`
   }
}

const drink={
   name:'juice',
   tropic:true,
   sugar:59,
   summary():string{
      return `This juice has got ${this.sugar} sugar`
   }
}

const a=(b:productTypes):void=>{
  console.log(b.summary())
}
a(product)
a(drink)