//normal loop

const array = ['larry','nemo']

const findNemo = (array) => {
    for(let i = 0; i < array.length; i++){
        if (array[i] === 'nemo') {
            console.log("Found Nemo 1")
        }
    }
}

const findNemo2 = (array) => {
    array.forEach(fish => {
        if(fish === 'nemo'){
            console.log('found Nemo2');
        }
    });
}

const findNemo3 = (array) => {
    for (let fish of array) {
        if(fish === 'nemo') {
            console.log('found Nemo3');
        }
    }
}

findNemo(array)
findNemo2(array)
findNemo3(array)
