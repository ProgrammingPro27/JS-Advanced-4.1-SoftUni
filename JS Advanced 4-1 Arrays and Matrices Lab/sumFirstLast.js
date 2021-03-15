function sumFristLast(input) {
    let hui = input.map(x => Number(x));
    let firstEl = hui[0];
    let lastEl = hui[hui.length - 1];
    console.log(firstEl + lastEl);
}