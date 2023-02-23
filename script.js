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

var toDeg = 180/Math.PI, toRad = Math.PI/180, ans, ans2str, decPos, decNumLen;

const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'sin':
            ans = Math.sin(Number(firstDisplay.value) * toRad);
              
            checkAns(ans);
            break;
           
            case 'cos':
            ans = Math.cos(firstDisplay.value * toRad);
           
            checkAns(ans);
            break;
           
            case 'tan':
            ans = Math.tan(firstDisplay.value * toRad);
           
            checkAns(ans);
            break;
           
            case 'asin':
            ans = Math.asin(firstDisplay.value) * toDeg;
           
            checkAns(ans);
            break;
           
            case 'acos':
            firstDisplay.value = Math.acos(firstDisplay.value) * toDeg;
           
            checkAns(ans);
            break;
           
            case 'atan':
            ans = Math.atan(firstDisplay.value) * toDeg;
           
            checkAns(ans);
            break;
           
            case 'sinh':
            ans = Math.sinh(firstDisplay.value);
           
            checkAns(ans);
            break;
           
            case 'cosh':
            ans = Math.cosh(firstDisplay.value);
           
            checkAns(ans);
            break;
           
            case 'tanh':
            ans = Math.tanh(firstDisplay.value);
           
            checkAns(ans);
            break;
           
            case 'log':
            ans = Math.log(firstDisplay.value);
           
            checkAns(ans);
            break;
           
            case 'log2':
            ans = Math.log2(firstDisplay.value);
           
            checkAns(ans);
            break;
           
            case 'log10':
            ans = Math.log10(firstDisplay.value);
           
            checkAns(ans);
            break;
           
            case 'abs':
            ans = Math.abs(firstDisplay.value);
           
            checkAns(ans);
            break;
           
            case '³√':
            ans = Math.cbrt(firstDisplay.value);
            checkAns(ans);
            break;
           
            case 'E':
            ans = Math.exp(firstDisplay.value);
           
            checkAns(ans);
            break;
           
            case 'Ran#':
            firstDisplay.value = Math.random(firstDisplay.value);
            firstDisplay.value = Number(firstDisplay.value).toFixed(3);
            secondDisplay.value = firstDisplay.value;
            break;
           
            case '+':
              firstDisplay.value += '+';
              PosEnd(firstDisplay);
            break;
            
            case '-':
              firstDisplay.value += '-';
              PosEnd(firstDisplay);
            break;
            
            case '÷':
              firstDisplay.value += '/';
              PosEnd(firstDisplay);
            break;
            
            case '%':
              firstDisplay.value += '%';
              PosEnd(firstDisplay);
            break;
           
            case '×':
              firstDisplay.value += '*';
              PosEnd(firstDisplay);
              break;
              
            case '√':
                ans = Math.sqrt(firstDisplay.value);
                checkAns(ans);
                break;
            
            case '^':
                firstDisplay.value += '**';
                PosEnd(firstDisplay);
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
                    ans = eval(firstDisplay.value);
                    secondDisplay.value = '0';
                    displayBox.classList.remove('show-elp-left');
                    displayBox.classList.remove('show-fading-left');
                      checkOverflow();
                } catch(err) {
                    secondDisplay.value = "Input " + err;
                }
                checkAns(ans);
                checkOverflow();
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
  if (check(firstDisplay) && firstDisplay.scrollLeft != 0) {
    displayBox.classList.add('show-elp-left');
    displayBox.classList.add('show-fading-left');
  } else if (check(firstDisplay)) {
    displayBox.classList.add('show-elp-right');
    displayBox.classList.add('show-fading-right');
  } else{
    displayBox.classList.remove('show-elp-left');
    displayBox.classList.remove('show-fading-left');
  }
}

firstDisplay.addEventListener('scroll', function() {
  
  if (firstDisplay.scrollLeft == 0) {
      displayBox.classList.remove('show-elp-left');
      displayBox.classList.remove('show-fading-left');
    } else {
      displayBox.classList.add('show-elp-left');
      displayBox.classList.add('show-fading-left');
      displayBox.classList.remove('show-elp-right');
      displayBox.classList.remove('show-fading-right');
    }
  });
  
  function checkAns(ans) {
    ans2str = ans.toString();
    decPos = ans2str.indexOf(".", 0);
    decNumLen = ans2str.slice(decPos + 1).length;
    
    if ((Number(ans) - Math.floor(ans)) == 0) {
      firstDisplay.value = ans;
      secondDisplay.value = 0;
    } else {
      if (decNumLen <= 4) {
        firstDisplay.value = Number(ans);
      } else {
        firstDisplay.value = Number(ans).toFixed(4);
      }
      secondDisplay.value = 0;
    }
  }