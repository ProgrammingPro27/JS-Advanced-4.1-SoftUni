function tableJson(input) {
    let hold = ""

    for (let i in input) {
let castedInfo = JSON.parse(input[i])
let string =`	
	<tr>
	     <td>${castedInfo.name}</td>
	     <td>${castedInfo.position}</td>
	     <td>${castedInfo.salary}</td>
        </tr>`

    hold+=string;
    }
    let htmlTable = `<table>${hold}\n</table>`;
    console.log(htmlTable)
}
tableJson(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);