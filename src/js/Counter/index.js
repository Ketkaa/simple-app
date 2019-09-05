
export default class Counter{
    constructor(container){
        this.count = 0
        this.timer = null
        this.buildView(container)
    }

    buildView(container){
        const display = document.createElement('h3')
        display.classList.add('counter__display')

        const row = document.createElement('div')
        row.classList.add('counter__row')

        const btnStart = document.createElement('button')
        btnStart.classList.add('counter__btn')
        btnStart.innerText = 'Start'
        btnStart.addEventListener('click', () => { this.timerStart(display) })

        const btnStop = document.createElement('button')
        btnStop.classList.add('counter__btn')
        btnStop.innerText = 'Stop'
        btnStop.addEventListener('click', () => { this.timerStop(display) })

        const btnDischarge = document.createElement('button')
        btnDischarge.classList.add('counter__btn')
        btnDischarge.innerText = 'Discharge'
        btnDischarge.addEventListener('click', () => { this.timerDischarge(display) })

        row.appendChild(btnStart)
        row.appendChild(btnStop)
        row.appendChild(btnDischarge)

        container.appendChild(display)
        container.appendChild(row)

        return display
    }

    timerStart(display){
        this.timer = setInterval(() => {
            this.count++
            display.innerText = this.count
        }, 1000)
    }

    timerStop(){
        clearInterval(this.timer)
    }

    timerDischarge(display){
        this.count = 0
        display.innerText = this.count
    }
}
