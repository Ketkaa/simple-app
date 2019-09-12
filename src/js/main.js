import DomWorker from './DomWorker'

import TitleComponent from './components/TitleComponent'
import ListComponent from './components/ListComponent'
import CenterComponent from './components/CenterComponent'

const names = ['Harry', 'Rohn', 'Jiny', 'Germiona']

DomWorker.mount(
    new TitleComponent('Pro'), 
    document.getElementById('title')
)

DomWorker.mount(
    new ListComponent(names),
    document.getElementById('list')
)

DomWorker.mount(
    new CenterComponent(
        new ListComponent(names)
    ),
    document.getElementById('center')
)

const btn = document.createElement('button')
btn.innerText = 'Click'

DomWorker.mount(
    new CenterComponent(btn),
    document.getElementById('center_second')
)

const brush = {
    color:'',

    createComponent: function(){
        console.log('Я создатель!')
    },

    render: function(canvas){
        canvas.style.width = '250px'
        canvas.style.height = '250px'
        canvas.style.backgroundColor = this.color
    },

    setColor: function(color){ 
        this.color = color
        return this
    }
}

DomWorker.mount(
    brush.setColor('red'),
    document.getElementById('other')
)