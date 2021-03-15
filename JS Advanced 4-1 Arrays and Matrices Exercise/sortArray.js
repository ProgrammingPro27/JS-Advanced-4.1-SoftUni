function sortAnArrayBy2Criteria(input) {
    let sorted = input.sort((a, b) => sortByLength(a, b) || sortByName(a, b));
    for (let i in sorted) {
        console.log(sorted[i])
    }
    function sortByLength(a, b) {
        return a.length - b.length;
    }

    function sortByName(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }

}