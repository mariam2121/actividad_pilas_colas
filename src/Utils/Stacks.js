class Stack {
    constructor() {
      this.item = []; 
    }
  
   
    push(elem) {
      this.item.push(elem);
    }
  
    
    pop() {
      if (this.isEmpty()) {
        return "la pila esta vacia";
      }
      return this.item.pop();
    }
  
   
    peek() {
      if (this.isEmpty()) {
        return "la pila esta vacia";
      }
      return this.item[this.item.length - 1];
    }
  
   
    isEmpty() {
      return this.item.length === 0;
    }
  
  
    size() {
      return this.item.length;
    }
  
  }
  
  
export default Stack;