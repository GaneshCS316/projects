const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const Breathetime = (totalTime / 5) * 2
const HoldTime = totalTime / 5


Breathe()

function Breathe(){
    text.innerHTML = 'Breathe In!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out!'
            container.className = 'container shrink'
        }, HoldTime)
    }, Breathetime)
}

setInterval(Breathe, totalTime)