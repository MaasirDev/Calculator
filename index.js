let getText = "";
let symbolText = "";
let summationVal = "";
const keys = document.getElementsByClassName('numberClass');
const operators = document.getElementsByClassName('operations');
const summation = document.getElementById('summation');
const upperTop = document.getElementById('upper_top_container');
const upperDown = document.getElementById('lower_top_container');
let displayText = "";
for (let i = 0; i < keys.length; i++) {
    let numBtn = keys[i];
    numBtn.addEventListener('click', grabValue)
}
function grabValue(event) {
    let buttonClicked = event.target;
    getText = buttonClicked.textContent   
    displayTheText(getText)
}
// operations
for (let i = 0; i < operators.length; i++) {
    let operatorBtn = operators[i];
    operatorBtn.addEventListener('click', grabsymbol)
}
function check() {   
    let displayTextLength = displayText.length
    if ((displayText[(displayTextLength)-1] === '/') || (displayText[(displayTextLength)-1] == '*') || (displayText[(displayTextLength)-1] === '-') || (displayText[(displayTextLength)-1] == '+') || (displayText[(displayTextLength)-1] == '.') ){
        displayText=(displayText.slice(0,(displayText.length)-1))
    }
}
function grabsymbol(event) {
    check()
    getText = "";
    let buttonClicked = event.target;
    symbolText = buttonClicked.textContent;
    displayTheText(symbolText)
}
// SUMMATION
summation.addEventListener('click', getTheSummation)
function getTheSummation() {
    //operator checking wheather present or not 
    if ((upperDown.textContent[0]=='/')||(upperDown.textContent[0]=='*')||(upperDown.textContent[0]=='-')||(upperDown.textContent[0]=='+')) {
        summationVal =eval(summationVal+ (upperDown.textContent))
    }else{
        summationVal =eval(upperDown.textContent)
    }
    // console.log(summationVal)
    if (String(summationVal).length>20){
        upperTop.style.fontSize = '1.5rem'
    }
    else if (String(summationVal).length>=10) {
        upperTop.style.fontSize = '1.8rem'
    }
    else{
        upperTop.style.fontSize = '3rem'
    }
    upperTop.textContent =summationVal
    upperDown.textContent= ""
    displayText = ""
}
function displayTheText(string) {
    displayText += `${string}`;
    if ((displayText).length>15) {
        upperDown.style.fontSize = '1rem'
    }else{
        upperDown.style.fontSize = '2rem'
    }
    upperDown.textContent = displayText;
}
const backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click',()=>{
    if (upperDown.textContent) {
        let avar =String(upperDown.textContent);
        upperDown.textContent = avar.slice(0,avar.length-1);
        displayText = upperDown.textContent;
    }
})
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click',()=>{
    upperDown.textContent ="";
    upperTop.textContent ="";
    displayText ="";
    summationVal ="";
})
let time = new Date()
document.getElementById('mobTime').textContent = `${time.getHours()}:${time.getMinutes()}`