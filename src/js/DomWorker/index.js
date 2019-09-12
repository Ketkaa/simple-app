export default class DomWorker{
    static mount(component, container){
        component.createComponent()
        component.render(container)
    }
}