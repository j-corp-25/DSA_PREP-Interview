const nemo = ['nemo']
const everyone = ['bruce', 'dory', 'marlin', 'nemo','gill', 'bloat', 'nige', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo')
const findNemo = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo')
        console.log('Found NEMO!');
    }
}

findNemo(large)
