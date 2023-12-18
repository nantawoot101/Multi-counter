const root = document.querySelector('#root')
const btnAdd = document.querySelector('.btn-add')
const sumInfo = document.querySelector('.show-sum')

let total = 0

function Counter() {
  let countNum = 0
  
function makeElement(tag, attr_n, attr_v, content) {
    let output = document.createElement(tag)
    output.setAttribute(attr_n, attr_v)
    output.textContent = content
    return output
}


function updateCounter(n) {
    if(countNum + n < 0) {
        return
    }
    countNum += n
    total += n
    number.textContent = countNum
    sumInfo.textContent = `Sum = ${total}`
}

const delCoutent = (e) => {
  updateCounter(-countNum)
     e.target.closest('.counter').remove()
}

const counter = makeElement('div', 'class', 'counter', '');
const number = makeElement('h3', 'class', 'number', 'step:','0');
const btnInc = makeElement('button', 'class', 'btn-inc', '+');
const btnDec = makeElement('button', 'class', 'btn-dec', '-');
const btnClr = makeElement('button', 'class', 'btn-clr', '0');
const btnDel = makeElement('button', 'class', 'btn-del', 'x');

btnInc.addEventListener('click', () => updateCounter(1))
btnDec.addEventListener('click', () => updateCounter(-1))
btnClr.addEventListener('click', () => updateCounter(-countNum))
btnDel.addEventListener('click', delCoutent)

counter.append(number,btnInc,btnDec, btnClr, btnDel)


return counter
}



const hdlAddCounter = () => {
    root.append(Counter())
}

btnAdd.addEventListener('click', hdlAddCounter)

