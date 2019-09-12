import BaseComponent from '../BaseComponent'

export default class ListComponent extends BaseComponent{
    constructor(items=null){
        super()
        this.items = items
    }

    createComponent(){
        const list = document.createElement('ul')

        if(this.items){
            this.items.map((item) => {
                const li = document.createElement('li')
                li.innerText = item
                list.appendChild(li)
            })
        }

        this.component = list
    }
}