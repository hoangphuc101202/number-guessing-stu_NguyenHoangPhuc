let start : HTMLSpanElement = <HTMLSpanElement> document.getElementById("start");
let end : HTMLSpanElement = <HTMLSpanElement>document.getElementById("end");
let number : HTMLInputElement = <HTMLInputElement> document.getElementById("number");
let count : HTMLSpanElement = <HTMLSpanElement> document.getElementById("count");
let btnGuess : HTMLButtonElement = <HTMLButtonElement>document.getElementById("btn-guess");
let btnReset : HTMLButtonElement = <HTMLButtonElement> document.getElementById("btn-reset");
let result : HTMLParagraphElement = <HTMLParagraphElement> document.getElementById ("result");


const min : number = 1;
const max : number = 100;
start.innerText = `${min}`;
end.innerText = `${max}`;
let random : number =Math.floor(Math.random() * (max - min + 1) + min);
    reset();
function check():void{
    let inputNumber : number = Number(number.value);
    let luotchoi : number = Number(count.innerText);
    if(luotchoi > 0){
        if(inputNumber == random){
            if(luotchoi == 3){
                result.textContent="Chính xác bạn đã được 100 điểm";
    
            }
            else if(luotchoi == 2){
                result.textContent="Chính Xác bạn đã được 50 điểm";
    
            }
            else{
                result.textContent="Chính xác bạn đã được 30 điểm";
    
            }
            btnGuess.style.display = "none";
            btnReset.style.display = "block";

            return;
        }
        else{
            if(inputNumber < random){
                result.textContent="Số bạn đoán nhỏ quá";  
            }
            else{
                result.textContent="Số bạn đoán lớn quá";    
            }
           
        }
        count.innerText = `${--luotchoi}`;
        number.value ="";
    }
    if(luotchoi <= 0){
        result.textContent=`Game Over số bí mật là: ${random}`;
        btnGuess.style.display = "none";
        btnReset.style.display ="block";
    }
    
}
function reset():void{
    number.value="";
    count.innerText="3";
    btnGuess.style.display="block";
    btnReset.style.display="none";
    result.textContent="";
    random = Math.floor(Math.random() * (max - min + 1) + min);
}