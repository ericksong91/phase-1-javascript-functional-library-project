//Test variables

const uTestArr = [1, 2, 3, 4]
const uTestObj = {one: 1, two: 2, three: 3, four: 4}

//Functions below

//My Each 

function myEach (collection, callback) {
    //Parameters, either object or an array
    //callback function
    //return the original collection
    //passes each element in the array/object to the function

    let Arr = []

    if(Array.isArray(collection) === false){
        console.log("I'm an Object!")
        Arr = [...Object.values(collection)]
        console.log(Arr)
    } else {
        console.log("I'm an Array!")
        Arr = [...collection]
        console.log(Arr)
    }

    for (let i = 0; i < Arr.length; i++){
        callback(Arr[i])
    }

    return collection
    
}

const exampleCallBack = function (e){

    console.log("I'm in the callback function!!")

    console.log(e)

    return e
}

//My Map

function myMap(collection, callback){
    //parameters: collection
    //callback func
    //return new array

    let Arr = []
    let newArr = []

    if(Array.isArray(collection) === false){
        console.log("I'm an Object!")
        Arr = [...Object.values(collection)]
        console.log(Arr)
    } else {
        console.log("I'm an Array!")
        Arr = [...collection]
        console.log(Arr)
    }

    for (let i = 0; i < Arr.length; i++){
        newArr.push(callback(Arr[i]))
    }

    console.log(`The New Array is ${JSON.stringify(newArr)}`)

    return newArr

}

const transformFunc = function (e){
    console.log("I'm in the callback!!")

    return e * 3
}

//My Reduce

function myReduce(collection, callback, init){
    //parameters: collection
    //callback func
    //return new array

    let Arr = []

    if(Array.isArray(collection) === false){
        console.log("I'm an Object!")
        Arr = [...Object.values(collection)]
        console.log(Arr)
        debugger
    } else {
        console.log("I'm an Array!")
        Arr = [...collection]
        console.log(Arr)
    }

    if(init === undefined){
        init = Arr[0]
    }

    let accum = init

    //After determining if array/object, pass to the reducer
    //I want the loop to add, every number in the array to the init
    //if there is no init, skip the first number but still add the init to the accum
    
    //the two cases below account for it being passed an initial value or not
    if(init === Arr[0]){
        for(let i = 1; i < Arr.length; i++){
            accum = callback(accum, Arr[i])
        }
    }else {
        for(let i = 0; i < Arr.length; i++){
            accum = callback(accum, Arr[i])
        }

    }

    console.log(accum)

    return accum;
}

//basic reducer just to test the function

const reducer = function (accum, e){
    return accum + e
    // return accu + init
}


//Test Functions

// myEach(uTestArr, exampleCallBack)

// console.log(" ")

// myEach(uTestObj, exampleCallBack)

// myMap(uTestArr, transformFunc)

// console.log(" ")

// myMap(uTestObj, transformFunc)

myReduce(uTestArr, reducer, 10)

console.log(" ")

myReduce(uTestObj, reducer)

// const callbackNew = (acc, val, collection) => (acc + (val * 3))

// const reduceSansAcc = myReduce(uTestArr, callbackNew)

// console.log(reduceSansAcc)