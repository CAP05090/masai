// Array Constructor
function ArrConstructor(...ele){
    this.arr = ele
    this.length = this.arr.length
}

// Add Custom Method
ArrConstructor.prototype.AddElement = function(...element){
    this.arr = element
    console.log("Array: ", this.arr)
}

// Push Element in JS Array Object
ArrConstructor.prototype.PushElement = function(ele){
    this.arr.push(ele)
    console.log("New Array: ", this.arr)
}

// Pop Element in JS Array Object
ArrConstructor.prototype.PopElement = function(){
    let Ele = this.arr.pop()
    console.log("Pop Element is: ", Ele, "Array: ", this.arr)
}

// Top Element in JS Array Object
ArrConstructor.prototype.TopElement = function(){
    let TopEle = this.arr[this.arr.length - 1]
    console.log("Top Element of Array: ", TopEle)
}

// Print Array Object Elements
ArrConstructor.prototype.PrintArr = function(){
    console.log("Print Array: ", this.arr)
}

// Print Reverse Array Object Elements
ArrConstructor.prototype.ReverseArr = function(){
    let revarr = this.arr.reverse()
    console.log("Reverse Array: ", revarr)
}

// Print Array Object size
ArrConstructor.prototype.Size = function(){
    let Size = this.arr.length
    console.log("Size of Array: ", Size)
}
let obj = new ArrConstructor()

obj.AddElement(1,2,3,4,5,6,78,8)
obj.PushElement(33)
obj.PopElement()
obj.TopElement()
obj.PrintArr()
obj.ReverseArr()
obj.Size()

