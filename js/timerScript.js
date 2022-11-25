document.addEventListener('DOMContentLoaded', () => {
    const minutesVal = document.querySelector('.timer_minutes .timer_val');
    const secondsVal = document.querySelector('.timer_seconds .timer_val');

    const minutesText = document.querySelector('.timer_minutes .timer_text');
    const secondsText = document.querySelector('.timer_seconds .timer_text');

    function declOfNum(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }

    let time = 1800;
    setInterval(updateTime, 1000);

    function updateTime() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds: seconds;

        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;

        minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

        time--;
        if (time == -1) {
            time = 1800;
        }
    };
});