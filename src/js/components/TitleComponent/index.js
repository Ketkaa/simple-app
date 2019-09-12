import BaseComponent from '../BaseComponent'

export default class TitleComponent extends BaseComponent{
    constructor(text=null){
        super()
        this.text = text
    }

    createComponent(){
        const title = document.createElement('h1')
        title.innerText = this.text
        this.component = title
    }
}