function argumentInformation(...args) {
    let types = {};
    let count = 0;
    for (let i of args) {
        if (!types.hasOwnProperty(typeof i)) {
            count++
            types[typeof i] = count
            console.log(`${typeof i}: ${i}`)
        } else {
            types[typeof i]++
            console.log(`${typeof i}: ${i}`)
        }
        count = 0;

    }

    Object.entries(types).sort((a, b) => {
        return b[1] - a[1]
    }).forEach(x => {
        console.log(`${x[0]} = ${x[1]}`)
    });


}
argumentInformation(42, 'cat', 15, 'kitten', 'tomcat')