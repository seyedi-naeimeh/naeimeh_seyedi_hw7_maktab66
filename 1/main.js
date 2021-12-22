function Class(className,classUnit,classCapacity) {
    this.className = className;
    this.classUnit = classUnit;
    this.classCapacity = classCapacity;
}

let a = new Class('softEngineering' , 3 ,50)
let  b = new Class('networkClass' , 5 ,70)

let softEngineeringClass = Object.assign({},a)
let networkClass = Object.assign({},b)

console.log(softEngineeringClass)
console.log(networkClass)


networkClass = {
    ...networkClass,
    project:'true',
  

};
console.log(networkClass)


softEngineeringClass = {
    ...softEngineeringClass,
    book:"true",

};
console.log(softEngineeringClass)




