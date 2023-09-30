
let arr = ["MA", "SA", "I", "SCH", "OOL"]

let Convertor = (ch) => {
    let lowerChar = ch.toLowerCase()
    return lowerChar
}

let stringConvertor = (ar) => {
    let newArr = []
    for (let ele of ar){
        newArr.push(Convertor(ele))
    }
    console.log(newArr)
}

stringConvertor(arr)
    

