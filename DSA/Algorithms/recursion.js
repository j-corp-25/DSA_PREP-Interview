let counter = 0;
const inception = () => {
    console.log(counter)
    if (counter > 13) {
        return 'done!';
    }
    counter++
    return inception();
}

console.log(inception())
