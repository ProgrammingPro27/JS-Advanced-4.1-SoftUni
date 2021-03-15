function processList(input) {
    let array = [];
    let commands = {
        add(el) {
            array.push(el)
        },
        remove(el) {
            array = array.filter(x => x !== el)
        },
        print() {
            console.log(array.join(","))
        }
    }
    for (let i of input) {
        let [command, el] = i.split(" ");
        if (i == "print") {
            commands[command]();
        } else {
            commands[command](el)

        }
    }
}
processList(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);