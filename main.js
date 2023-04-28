class Calculator {
    constructor() {
      this.display = document.getElementById('display');
      this.buttons = document.querySelectorAll('button');
      this.operator = '';
      this.operand1 = null;
      this.operand2 = null;
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
          this.handleButtonClick(event.target.innerText);
        });
      });
    }
  
    handleButtonClick(value) {
      if (value === 'C') {
        this.clear();
      } else if (value === '=') {
        this.calculate();
      } else if (this.isOperator(value)) {
        this.setOperator(value);
      } else {
        this.appendDigit(value);
      }
    }
  
    clear() {
      this.display.value = '';
      this.operator = '';
      this.operand1 = null;
      this.operand2 = null;
    }
  
    calculate() {
      this.operand2 = parseFloat(this.display.value);
      const result = this.operate(this.operator, this.operand1, this.operand2);
      this.display.value = result;
      this.operator = '';
      this.operand1 = null;
      this.operand2 = null;
    }
  
    setOperator(value) {
      this.operator = value;
      this.operand1 = parseFloat(this.display.value);
      this.display.value = '';
    }
  
    appendDigit(value) {
      this.display.value += value;
    }
  
    isOperator(value) {
      return value === '+' || value === '-' || value === '*' || value === '/';
    }
  
    operate(operator, operand1, operand2) {
      switch (operator) {
        case '+':
          return operand1 + operand2;
        case '-':
          return operand1 - operand2;
        case '*':
          return operand1 * operand2;
        case '/':
          return operand1 / operand2;
      }
    }
  }
  
  const calculator = new Calculator();