class Queue {
    constructor() {
      this.item = []; 
    }
  
    
    enqueue(elem) {
      this.item .push(elem);
    }
  
    
    dequeue() {
      if (this.isEmpty()) {
        return "la cola esta vacia";
      }
      return this.item.shift();
    }
  
    
    peek() {
      if (this.isEmpty()) {
        return "la cola esta vacia";
      }
      return this.item[0];
    }
  
    
    isEmpty() {
      return this.item.length === 0;
    }
  
 
    size() {
      return this.item.length;
    }
  
}
  
export default Queue;