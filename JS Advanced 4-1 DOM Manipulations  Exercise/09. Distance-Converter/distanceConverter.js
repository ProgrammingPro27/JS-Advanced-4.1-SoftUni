function attachEventsListeners() {
    let convertButton = document.getElementById("convert");
    let ratios = {
        km: 1,
        m: 1000,
        cm: 100000,
        mm: 1000000,
        mi: 0.621371192,
        yrd: 1093.6133,
        ft: 3280.839895,
        in: 39370.0787
    }

    convertButton.addEventListener("click", function () {

        if (document.getElementById("inputDistance").value !== "") {
            let inputPoint = document.getElementById("inputUnits");
            let outputPoint = document.getElementById("outputUnits");
            let inputFieldValue = document.getElementById("inputDistance");
            let outputFieldValue = document.getElementById("outputDistance");
            outputFieldValue.disabled = false;

            outputFieldValue.value = convert(Number(inputFieldValue.value), inputPoint.value)[outputPoint.value]

        }

    })

    function convert(value, from) {
        let inKilometers = value / ratios[from];
        return {
            km: inKilometers * ratios.km,
            m: inKilometers * ratios.m,
            cm: inKilometers * ratios.cm,
            mm: inKilometers * ratios.mm,
            mi: inKilometers * ratios.mi,
            yrd: inKilometers * ratios.yrd,
            ft: inKilometers * ratios.ft,
            in: inKilometers * ratios.in
        };
    }
}