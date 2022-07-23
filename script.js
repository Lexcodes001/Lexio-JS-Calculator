//code for theme toggle 
const span = document.querySelector('#themeToggler');
document.getElementById('themeToggler').addEventListener('click', ()=>{
    span.classList.toggle('dark');
    if(span.classList.contains('dark')){
        document.documentElement.style.setProperty('--bg-color', '#1c1c1c');
        document.documentElement.style.setProperty('--txt-color-one', '#ffab08');
        document.documentElement.style.setProperty('--txt-color-two', '#fff');
        document.documentElement.style.setProperty('--btn-border-color', '#282828');
        document.documentElement.style.setProperty('--grey', 'rgba(255,255,255,.2)');
        document.documentElement.style.setProperty('--theme', '#ecf0f3');
        document.documentElement.style.setProperty('--shadow-color-one', '#282828');
        document.documentElement.style.setProperty('--shadow-color-two', '#080808');
        document.getElementById('themeToggler').innerHTML= 'Light Mode';
    }
    else{
        document.documentElement.style.setProperty('--bg-color', '#ecf0f3');
        document.documentElement.style.setProperty('--txt-color-one', '#4d12f5');
        document.documentElement.style.setProperty('--txt-color-two', '#000');
        document.documentElement.style.setProperty('--btn-border-color', '#ecf0f3');
        document.documentElement.style.setProperty('--grey', 'rgba(0,0,0,.2)');
        document.documentElement.style.setProperty('--theme', '#1c1c1c');
        document.documentElement.style.setProperty('--shadow-color-one', '#f8f9fa');
        document.documentElement.style.setProperty('--shadow-color-two', '#d3dce3');
        document.getElementById('themeToggler').innerHTML= 'Dark Mode';
    }
});

//code for calculator operations 
let firstDisplay = document.getElementById('firstOperand');

let secondDisplay = document.getElementById('secondOperand');

let toDeg = 180/Math.PI;

let toRad = Math.PI/180;

const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
           case 'sin':
              firstDisplay.innerText = Math.sin(firstDisplay.innerText * toRad);
              secondDisplay.innerText = firstDisplay.innerText;
                if (firstDisplay.innerText.length < 10) {
                   firstDisplay.innerText = firstDisplay.innerText;
                }
                else {
                   firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
                }
              break;
           
           case 'cos':
           firstDisplay.innerText = Math.cos(firstDisplay.innerText * toRad);
           secondDisplay.innerText = firstDisplay.innerText;
             if (firstDisplay.innerText.length < 10) {
                firstDisplay.innerText = firstDisplay.innerText;
             }
             else {
                firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
             }
           break;
           
           case 'tan':
           firstDisplay.innerText = Math.tan(firstDisplay.innerText * toRad);
           secondDisplay.innerText = firstDisplay.innerText;
             if (firstDisplay.innerText.length < 10) {
                firstDisplay.innerText = firstDisplay.innerText;
             }
             else {
                firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
             }
           break;
           
           case 'asin':
           firstDisplay.innerText = Math.asin(firstDisplay.innerText) * toDeg;
           secondDisplay.innerText = firstDisplay.innerText;
             if (firstDisplay.innerText.length < 10) {
                firstDisplay.innerText = firstDisplay.innerText;
             }
             else {
                firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
             }
           break;
           
           case 'acos':
           firstDisplay.innerText = Math.acos(firstDisplay.innerText) * toDeg;
           secondDisplay.innerText = firstDisplay.innerText;
             if (firstDisplay.innerText.length < 10) {
                firstDisplay.innerText = firstDisplay.innerText;
             }
             else {
                firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
             }
           break;
           
           case 'atan':
           firstDisplay.innerText = Math.atan(firstDisplay.innerText) * toDeg;
           secondDisplay.innerText = firstDisplay.innerText;
             if (firstDisplay.innerText.length < 10) {
                firstDisplay.innerText = firstDisplay.innerText;
             }
             else {
                firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
             }
           break;
           
           case 'sinh':
           firstDisplay.innerText = Math.sinh(firstDisplay.innerText);
           secondDisplay.innerText = firstDisplay.innerText;
             if (firstDisplay.innerText.length < 10) {
                firstDisplay.innerText = firstDisplay.innerText;
             }
             else {
                firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
             }
           break;
           
           case 'cosh':
           firstDisplay.innerText = Math.cosh(firstDisplay.innerText);
           secondDisplay.innerText = firstDisplay.innerText;
             if (firstDisplay.innerText.length < 10) {
                firstDisplay.innerText = firstDisplay.innerText;
             }
             else {
                firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
             }
           break;
           
           case 'tanh':
           firstDisplay.innerText = Math.tanh(firstDisplay.innerText);
           secondDisplay.innerText = firstDisplay.innerText;
             if (firstDisplay.innerText.length < 10) {
                firstDisplay.innerText = firstDisplay.innerText;
             }
             else {
                firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
             }
           break;
           
           case 'log':
           firstDisplay.innerText = Math.log(firstDisplay.innerText);
           secondDisplay.innerText = firstDisplay.innerText;
             if (firstDisplay.innerText.length < 10) {
                firstDisplay.innerText = firstDisplay.innerText;
             }
             else {
                firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
             }
           break;
           
           case 'log2':
           firstDisplay.innerText = Math.log2(firstDisplay.innerText);
           secondDisplay.innerText = firstDisplay.innerText;
             if (firstDisplay.innerText.length < 10) {
                firstDisplay.innerText = firstDisplay.innerText;
             }
             else {
                firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
             }
           break;
           
           case 'log10':
           firstDisplay.innerText = Math.log10(firstDisplay.innerText);
           secondDisplay.innerText = firstDisplay.innerText;
             if (firstDisplay.innerText.length < 10) {
                firstDisplay.innerText = firstDisplay.innerText;
             }
             else {
                firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
             }
           break;
           
           case 'abs':
           firstDisplay.innerText = Math.abs(firstDisplay.innerText);
           secondDisplay.innerText = firstDisplay.innerText;
             if (firstDisplay.innerText.length < 10) {
                firstDisplay.innerText = firstDisplay.innerText;
             }
             else {
                firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
             }
           break;
           
           case '³√':
           firstDisplay.innerText = Math.cbrt(firstDisplay.innerText);
           secondDisplay.innerText = firstDisplay.innerText;
             if (firstDisplay.innerText.length < 10) {
                firstDisplay.innerText = firstDisplay.innerText;
             }
             else {
                firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
             }
           break;
           
           case 'E':
           firstDisplay.innerText = Math.exp(firstDisplay.innerText);
           secondDisplay.innerText = firstDisplay.innerText;
             if (firstDisplay.innerText.length < 10) {
                firstDisplay.innerText = firstDisplay.innerText;
             }
             else {
                firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
             }
           break;
           
           case 'Ran#':
           firstDisplay.innerText = Math.random(firstDisplay.innerText);
           firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(3);
           secondDisplay.innerText = firstDisplay.innerText;
           break;
           
            case '×':
              firstDisplay.innerText += '*';
              break;
              
            case '√':
               firstDisplay.innerText = Math.sqrt(firstDisplay.innerText);
               secondDisplay.innerText = firstDisplay.innerText;
               firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(4);
               break;
            
            case '^':
               firstDisplay.innerText += '**';
               break;
            
            case 'AC':
                firstDisplay.innerText = '0';
                secondDisplay.innerText = '0';
                break;
                
            case '=':
                try{
                   if (firstDisplay.innerText == '') throw 'is empty!';
                    firstDisplay.innerText = eval(firstDisplay.innerText);
                    secondDisplay.innerText = '0';
                      if (firstDisplay.innerText.length < 10) {
                         firstDisplay.innerText = firstDisplay.innerText;
                      }
                      else {
                         firstDisplay.innerText = Number(firstDisplay.innerText).toFixed(9);
                      }
                } catch(err) {
                    secondDisplay.innerText = "Input " + err;
                }
                break;
                
            case 'DEL':
               // if (display.innerText){
                   firstDisplay.innerText = firstDisplay.innerText.slice(0, -1);
                secondDisplay.innerText = firstDisplay.innerText;
                break;
                
            default:
                if (firstDisplay.innerText == '.') {
               firstDisplay.innerText = '0.';
            }
                if (firstDisplay.innerText == '0') {
                   firstDisplay.innerText = '';
                }
                firstDisplay.innerText += e.target.innerText;
                secondDisplay.innerText = eval(firstDisplay.innerText);
                
        }
    });
});

//code for hidden buttons
function openBtn() {
   document.getElementById('otherBtns').style.width = '100%';
}

function closeBtn() {
   document.getElementById('otherBtns').style.width = '0';
}

