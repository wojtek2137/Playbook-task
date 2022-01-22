class Expense {
  id: string;
  title: string 
  amountPLN: string;
  amountEUR: string;

  constructor(expenseTitle:string,expenseAmount: string) {
    this.title = expenseTitle;
    this.amountPLN = expenseAmount;
    this.amountEUR= "" 
    this.id = new Date().toISOString(); 
   
  }
}

export default Expense;