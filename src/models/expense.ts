class Expense {
  id: string;
  title: string 
  amount: string;

  constructor(expenseTitle:string,expenseAmount: string) {
    this.title = expenseTitle;
    this.amount = expenseAmount;
    this.id = new Date().toISOString(); 
  
  }
}

export default Expense;