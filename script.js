//code for theme toggle 
const span = document.querySelector('#themeToggler');
document.getElementById('themeToggler').addEventListener('click', ()=>{
    span.classList.toggle('dark');
    if(span.classList.contains('dark')){
        document.documentElement.style.setProperty('--bg-color', '#1c1c1c');
        document.documentElement.style.setProperty('--opacity-bg-color', 'rgba(28, 28, 28, .5)');
        document.documentElement.style.setProperty('--opacity-bg-color1', 'rgba(28, 28, 28, 0)');
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
        document.documentElement.style.setProperty('--opacity-bg-color', 'rgba(236, 240, 243, .5)');
        document.documentElement.style.setProperty('--opacity-bg-color1', 'rgba(236, 240, 243, 0)');
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
let firstDisplay = document.querySelector('.display .first-operand'),
  secondDisplay = document.querySelector('.display .second-operand'),
  displayBox = document.querySelector('.display');

let toDeg = 180/Math.PI;

let toRad = Math.PI/180;

const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
           case 'sin':
              firstDisplay.value = Math.sin(firstDisplay.value * toRad);
              
              if (firstDisplay.value.length < 4) {
                  firstDisplay.value = firstDisplay.value;
                  secondDisplay.value = firstDisplay.value;
                }
                else {
                  firstDisplay.value = Number(firstDisplay.value).toFixed(4);
                  secondDisplay.value = firstDisplay.value;
                }
              break;
           
           case 'cos':
           firstDisplay.value = Math.cos(firstDisplay.value * toRad);
           
           if (firstDisplay.value.length < 4) {
               firstDisplay.value = firstDisplay.value;
               secondDisplay.value = firstDisplay.value;
             }
             else {
               firstDisplay.value = Number(firstDisplay.value).toFixed(4);
               secondDisplay.value = firstDisplay.value;
             }
           break;
           
           case 'tan':
           firstDisplay.value = Math.tan(firstDisplay.value * toRad);
           
           if (firstDisplay.value.length < 4) {
               firstDisplay.value = firstDisplay.value;
               secondDisplay.value = firstDisplay.value;
             }
             else {
               firstDisplay.value = Number(firstDisplay.value).toFixed(4);
               secondDisplay.value = firstDisplay.value;
             }
           break;
           
           case 'asin':
           firstDisplay.value = Math.asin(firstDisplay.value) * toDeg;
           
           if (firstDisplay.value.length < 4) {
               firstDisplay.value = firstDisplay.value;
               secondDisplay.value = firstDisplay.value;
             }
             else {
               firstDisplay.value = Number(firstDisplay.value).toFixed(4);
               secondDisplay.value = firstDisplay.value;
             }
           break;
           
           case 'acos':
           firstDisplay.value = Math.acos(firstDisplay.value) * toDeg;
           
           if (firstDisplay.value.length < 4) {
               firstDisplay.value = firstDisplay.value;
               secondDisplay.value = firstDisplay.value;
             }
             else {
               firstDisplay.value = Number(firstDisplay.value).toFixed(4);
               secondDisplay.value = firstDisplay.value;
             }
           break;
           
           case 'atan':
           firstDisplay.value = Math.atan(firstDisplay.value) * toDeg;
           
           if (firstDisplay.value.length < 4) {
               firstDisplay.value = firstDisplay.value;
               secondDisplay.value = firstDisplay.value;
             }
             else {
               firstDisplay.value = Number(firstDisplay.value).toFixed(4);
               secondDisplay.value = firstDisplay.value;
             }
           break;
           
           case 'sinh':
           firstDisplay.value = Math.sinh(firstDisplay.value);
           
           if (firstDisplay.value.length < 4) {
               firstDisplay.value = firstDisplay.value;
               secondDisplay.value = firstDisplay.value;
             }
             else {
               firstDisplay.value = Number(firstDisplay.value).toFixed(4);
               secondDisplay.value = firstDisplay.value;
             }
           break;
           
           case 'cosh':
           firstDisplay.value = Math.cosh(firstDisplay.value);
           
           if (firstDisplay.value.length < 4) {
               firstDisplay.value = firstDisplay.value;
               secondDisplay.value = firstDisplay.value;
             }
             else {
               firstDisplay.value = Number(firstDisplay.value).toFixed(4);
               secondDisplay.value = firstDisplay.value;
             }
           break;
           
           case 'tanh':
           firstDisplay.value = Math.tanh(firstDisplay.value);
           
           if (firstDisplay.value.length < 4) {
               firstDisplay.value = firstDisplay.value;
               secondDisplay.value = firstDisplay.value;
             }
             else {
               firstDisplay.value = Number(firstDisplay.value).toFixed(4);
               secondDisplay.value = firstDisplay.value;
             }
           break;
           
           case 'log':
           firstDisplay.value = Math.log(firstDisplay.value);
           
           if (firstDisplay.value.length < 4) {
               firstDisplay.value = firstDisplay.value;
               secondDisplay.value = firstDisplay.value;
             }
             else {
               firstDisplay.value = Number(firstDisplay.value).toFixed(4);
               secondDisplay.value = firstDisplay.value;
             }
           break;
           
           case 'log2':
           firstDisplay.value = Math.log2(firstDisplay.value);
           
           if (firstDisplay.value.length < 4) {
               firstDisplay.value = firstDisplay.value;
               secondDisplay.value = firstDisplay.value;
             }
             else {
               firstDisplay.value = Number(firstDisplay.value).toFixed(4);
               secondDisplay.value = firstDisplay.value;
             }
           break;
           
           case 'log10':
           firstDisplay.value = Math.log10(firstDisplay.value);
           
            if (firstDisplay.value.length < 4) {
               firstDisplay.value = firstDisplay.value;
               secondDisplay.value = firstDisplay.value;
             }
             else {
               firstDisplay.value = Number(firstDisplay.value).toFixed(4);
               secondDisplay.value = firstDisplay.value;
             }
           break;
           
           case 'abs':
           firstDisplay.value = Math.abs(firstDisplay.value);
           
             if (firstDisplay.value.length < 10) {
                firstDisplay.value = firstDisplay.value;
                secondDisplay.value = firstDisplay.value;
             }
             else {
                firstDisplay.value = Number(firstDisplay.value).toFixed(9);
                secondDisplay.value = firstDisplay.value;
             }
           break;
           
           case '³√':
           firstDisplay.value = Math.cbrt(firstDisplay.value);
           
             if (firstDisplay.value.length < 10) {
                firstDisplay.value = firstDisplay.value;
                secondDisplay.value = firstDisplay.value;
             }
             else {
                firstDisplay.value = Number(firstDisplay.value).toFixed(4);
                secondDisplay.value = firstDisplay.value;
             }
           break;
           
           case 'E':
           firstDisplay.value = Math.exp(firstDisplay.value);
           
             if (firstDisplay.value.length < 10) {
                firstDisplay.value = firstDisplay.value;
                secondDisplay.value = firstDisplay.value;
             }
             else {
                firstDisplay.value = Number(firstDisplay.value).toFixed(9);
                secondDisplay.value = firstDisplay.value;
             }
           break;
           
           case 'Ran#':
           firstDisplay.value = Math.random(firstDisplay.value);
           firstDisplay.value = Number(firstDisplay.value).toFixed(3);
           secondDisplay.value = firstDisplay.value;
           break;
           
            case '×':
              firstDisplay.value += '*';
              break;
              
            case '√':
               firstDisplay.value = Math.sqrt(firstDisplay.value);
               firstDisplay.value = Number(firstDisplay.value).toFixed(4);
               secondDisplay.value = firstDisplay.value;
               break;
            
            case '^':
               firstDisplay.value += '**';
               break;
            
            case 'AC':
                firstDisplay.value = '0';
                secondDisplay.value = '0';
                PosEnd(firstDisplay);
                checkOverflow();
                break;
                
            case '=':
                try{
                   if (firstDisplay.value == '') throw 'is empty!';
                    firstDisplay.value = eval(firstDisplay.value);
                    secondDisplay.value = '0';
                    displayBox.classList.remove('show-elp');
                    displayBox.classList.remove('show-fading');
                      if (firstDisplay.value.length < 10) {
                         firstDisplay.value = firstDisplay.value;
                      }
                      else {
                         firstDisplay.value = Number(firstDisplay.value).toFixed(4);
                      }
                } catch(err) {
                    secondDisplay.value = "Input " + err;
                }
                break;
                
            case 'DEL':
              if (firstDisplay.value == 0) {
                firstDisplay.value = firstDisplay.value.slice(0, -1);
                firstDisplay.value = '0';
                secondDisplay.value = '0';
              } else {
                firstDisplay.value = firstDisplay.value.slice(0, -1);
                secondDisplay.value = firstDisplay.value;
              }
              
              PosEnd(firstDisplay);
              checkOverflow();
              break;
                
            default:
                if (firstDisplay.value == '.') {
               firstDisplay.value = '0.';
            }
                if (firstDisplay.value == '0') {
                   firstDisplay.value = '';
                }
                firstDisplay.value += e.target.innerText;
                secondDisplay.value = eval(firstDisplay.value);
                PosEnd(firstDisplay);
                checkOverflow();
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


function PosEnd(end) {

  var len = end.value.length;

  // Mostly for Web Browsers 
  if (end.setSelectionRange) {

    end.focus();

    end.setSelectionRange(len, len);

  } else if (end.createTextRange) {

    var t = end.createTextRange();

    t.collapse(true);

    t.moveEnd('character', len);

    t.moveStart('character', len);

    t.select();

  }

}


function check(el) { 
  var curOverf = el.style.overflow; 
  if ( !curOverf || curOverf === "visible" ) 
          el.style.overflow = "hidden"; 
                  

                var isOverflowing = el.clientWidth < el.scrollWidth

                    || el.clientHeight < el.scrollHeight; 

                  

                el.style.overflow = curOverf; 

                  

                return isOverflowing; 

            } 

              

function checkOverflow() {
  if (check(firstDisplay)) {
    displayBox.classList.add('show-elp');
    displayBox.classList.add('show-fading');
  } else{
    displayBox.classList.remove('show-elp');
    displayBox.classList.remove('show-fading');
  }
}

//firstDisplay.value = 'SUCCESS';

//firstDisplay.value += 'SUCCESS';