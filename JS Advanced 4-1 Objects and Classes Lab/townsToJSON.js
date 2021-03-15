function townsInfoCast(input) {

    let conversion = input.map(el => {

        let currentElement = el.split(" | ").toString();
        let splittedV2 = currentElement.split(" |").toString()
        let second =splittedV2.split("| ").toString().split(",")
        let filter = second.filter(x=>{return x !==""})

        return filter
    })
    let key = conversion.shift()

    let townsStorage = [];
    conversion.forEach(x => {
        let object = {
            [key[0]]: x[0].toString(),
            [key[1]]: Number(Number(x[1]).toFixed(2)),
            [key[2]]: Number(Number(x[2]).toFixed(2)),
        }
        townsStorage.push(JSON.stringify(object))
    })

   console.log("["+townsStorage.toString()+"]")


}
townsInfoCast(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])
