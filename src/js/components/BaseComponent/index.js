export default class BaseComponent{
    constructor(){
        this.component = null
    }

    createComponent(){}

    render(container){
        container.appendChild(this.component)
    }
} 