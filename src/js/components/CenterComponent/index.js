import BaseComponent from '../BaseComponent'

export default class CenterComponent extends BaseComponent{
    constructor(child=null){
        super()
        this.child = child
    }

    createComponent(){
        const center = document.createElement('div')
        center.style.textAlign = 'center'
        
        if(this.child.createComponent){
            this.child.createComponent()
            center.appendChild(this.child.component)
        }
        else
            center.appendChild(this.child)
            
        this.component = center
    }
}