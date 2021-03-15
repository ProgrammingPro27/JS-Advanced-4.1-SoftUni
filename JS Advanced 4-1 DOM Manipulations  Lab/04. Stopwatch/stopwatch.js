function stopwatch() {
    let counter = document.getElementById("time");
    let buttonStop = document.getElementById("stopBtn");
    let buttonStart = document.getElementById("startBtn");

    let time
    buttonStart.addEventListener("click", function () {
        counter.innerHTML = "00:00";
        let countSeconds = 0;
        let countMinutes = 0;

        time = setInterval(function () {
            let output = [countMinutes, countSeconds];

            if (countSeconds < 10) {
                output[1] = `0${countSeconds}`;

            }
            if (countMinutes < 10) {
                output[0] = `0${countMinutes}`;
            }
            if (countSeconds < 60) {

                countSeconds++
                if (countSeconds == 59) {
                    countMinutes++
                    countSeconds = 0;
                }
                counter.innerHTML = output.join(":");
            }

        }, 1000)
        buttonStart.disabled = true
        buttonStop.disabled = false


    })
    buttonStop.addEventListener("click", function () {
        clearInterval(time)
        buttonStart.disabled = false
        buttonStop.disabled = true
    })
}