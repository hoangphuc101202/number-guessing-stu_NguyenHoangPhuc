var start = document.getElementById("start");
var end = document.getElementById("end");
var number = document.getElementById("number");
var count = document.getElementById("count");
var btnGuess = document.getElementById("btn-guess");
var btnReset = document.getElementById("btn-reset");
var result = document.getElementById("result");
var min = 1;
var max = 100;
start.innerText = "".concat(min);
end.innerText = "".concat(max);
var random = Math.floor(Math.random() * (max - min + 1) + min);
reset();
function check() {
    var inputNumber = Number(number.value);
    var luotchoi = Number(count.innerText);
    if (luotchoi > 0) {
        if (inputNumber == random) {
            if (luotchoi == 3) {
                result.textContent = "Chính xác bạn đã được 100 điểm";
            }
            else if (luotchoi == 2) {
                result.textContent = "Chính Xác bạn đã được 50 điểm";
            }
            else {
                result.textContent = "Chính xác bạn đã được 30 điểm";
            }
            btnGuess.style.display = "none";
            btnReset.style.display = "block";
            return;
        }
        else {
            if (inputNumber < random) {
                result.textContent = "Số bạn đoán nhỏ quá";
            }
            else {
                result.textContent = "Số bạn đoán lớn quá";
            }
        }
        count.innerText = "".concat(--luotchoi);
        number.value = "";
    }
    if (luotchoi <= 0) {
        result.textContent = "Game Over s\u1ED1 b\u00ED m\u1EADt l\u00E0: ".concat(random);
        btnGuess.style.display = "none";
        btnReset.style.display = "block";
    }
}
function reset() {
    number.value = "";
    count.innerText = "3";
    btnGuess.style.display = "block";
    btnReset.style.display = "none";
    result.textContent = "";
    random = Math.floor(Math.random() * (max - min + 1) + min);
}
