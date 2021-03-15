function attachEventsListeners() {
    let elementDivContentHolders = document.getElementsByTagName("main")[0];
    elementDivContentHolders.addEventListener("click", displayConversion)
    function displayConversion(e) {
        if (e.target.tagName === "INPUT") {
            if (e.target.type == "button") {
                let conversionType = e.target.parentElement.children[0];
                let upperInputElement = e.target.parentElement.children[1];

                if (upperInputElement.value !== "") {
                    let valueToConvert = Number(upperInputElement.value)

                    let everyDivElement = document.getElementsByTagName("div");
                    let exactConversions;
                    switch (conversionType.textContent) {
                        case "Days: ":
                            let days = valueToConvert
                            exactConversions = [days, days * 24, days * 1440, days * 86400]
                                ; break;
                        case "Hours: ":
                            let hours = valueToConvert
                            exactConversions = [hours / 24, hours, hours * 60, hours * 3600]
                                ; break;
                        case "Minutes: ":
                            let minutes = valueToConvert
                            exactConversions = [minutes / 1440, minutes / 60, minutes, minutes * 60]
                                ; break;
                        case "Seconds: ":
                            let seconds = valueToConvert
                            exactConversions = [seconds / 86400, seconds / 3600, seconds / 60, seconds]
                                ; break;
                    }

                    for (let i = 0; i < everyDivElement.length; i++) {
                        everyDivElement[i].children[1].value = exactConversions[i]
                    }

                }
            }

        }
    }

}