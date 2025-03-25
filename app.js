let timer;
        let startTime;
        let elapsedTime = 0;
        let running = false;

        function startTimer() {
            if (!running) {
                running = true;
                startTime = Date.now() - elapsedTime;
                timer = setInterval(updateTime, 1000);
            }
        }

        function stopTimer() {
            running = false;
            clearInterval(timer);
        }

        function resetTimer() {
            running = false;
            clearInterval(timer);
            elapsedTime = 0;
            document.getElementById("display").innerText = "00:00:00";
        }

        function updateTime() {
            elapsedTime = Date.now() - startTime;
            let totalSeconds = Math.floor(elapsedTime / 1000);
            let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
            let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
            let seconds = String(totalSeconds % 60).padStart(2, '0');
            document.getElementById("display").innerText = `${hours}:${minutes}:${seconds}`;
        }