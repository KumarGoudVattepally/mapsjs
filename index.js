 let=arr=[1,2,3,4,5,6,7]
 let x=arr.map(function(a){return Math.pow(a,2)})
 console.log(x);//[1,4,9,16,25,36,49]

let arr1=["kumar","mahesh","vinay"]
let y=arr1.map(b=>b.toUpperCase())
console.log(y);//[ 'KUMAR', 'MAHESH', 'VINAY' ]


let arr2=["kumar","mahesh","vinay"]
let z=arr2.map((c)=>{
    return c.slice(0,-1)+c.at(-1).toUpperCase()
})
console.log(z);//[ 'kumaR', 'mahesH', 'vinaY' ]