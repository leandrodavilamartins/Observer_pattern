export default class Observable {

    constructor() {
        this.observers = [];
    }

    subscribe(f) {
        this.observers.push(f);
    }

    unsubscribe(f) {
        this.observers = this.observers.filter( obs => obs != f);
    }

     notify(data) {
         this.observers.forEach( observer => observer(data));
     }


}