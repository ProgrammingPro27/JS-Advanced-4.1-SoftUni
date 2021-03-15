function solve() {
    let englishAlphabet = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii", "Jj", "Kk", "Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr", "Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz"];
    let arrayOfHolders = document.getElementsByTagName("li");
    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function () {
        let name = document.getElementsByTagName("input");
        if (name[0].value !== "") {
            for (let i = 0; i < englishAlphabet.length; i++) {
                if (name[0].value[0] == englishAlphabet[i][0] || name[0].value[0] == englishAlphabet[i][1]) {
                    let personName = name[0].value.charAt(0).toUpperCase() + name[0].value.slice(1).toLowerCase();
                    if (arrayOfHolders[i].textContent.length > 0) {
                        arrayOfHolders[i].textContent += `, ${personName}`
                    } else {
                        arrayOfHolders[i].textContent = personName
                    }

                }
            }
        }
        name[0].value = "";
    }
    );

}