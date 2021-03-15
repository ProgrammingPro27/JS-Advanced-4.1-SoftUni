function sort(array, direction) {
    return array.sort((a, b) => {
        if (direction == "asc") {
            return a - b
        } else if (direction == "desc") {
            return b - a
        }
    });
}
sort([14, 7, 17, 6, 8], 'asc');