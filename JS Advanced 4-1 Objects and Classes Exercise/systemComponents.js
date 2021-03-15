function systemComponents(input) {
    let system = {};
    for (let i in input) {
        let componentCast = input[i].split(" | ");
        let systemHold = componentCast[0];
        let systemName = componentCast[1];
        let component = componentCast[2];
        if (!system.hasOwnProperty(systemHold)) {
            system[systemHold] = { [systemName]: [component] };
        } else {
            if (system[systemHold].hasOwnProperty(systemName)) {
                system[systemHold][systemName].push(component)
            } else {

                Object.assign(system[systemHold], { [systemName]: [component] });
            }
        }
    }
    for (let i in system) {
        system[i] = Object.fromEntries(Object.entries(system[i]).sort((a, b) => { return b[1].length - a[1].length }))
    }

    let sorted = Object.fromEntries(Object.entries(system).sort((a, b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]);
    }))

    for (let i in sorted) {
        console.log(i)
        for (let j in sorted[i]) {
            console.log(`|||${j}`)
            for (let k in sorted[i][j]) {
                console.log(`||||||${sorted[i][j][k]}`)
            }
        }
    }
}
systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreB | B25',
    'Lambda | CoreB | B26',
    'Lambda | CoreB | B27',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'])