{
    // access modifiers
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number) {
            return this._balance = this._balance + amount;
        }

        private getBalance() {
            return this._balance;
        }
        getHiddenMethod() {
            return this.getBalance
        }
    }

    class Student extends BankAccount {
        test() {
            this._balance;
        }
    }

    const poorManAccount = new BankAccount(111, "Masud rana", 500);
    poorManAccount.addDeposit(1000)
    // const myBalance = poorManAccount.balance = 25;
    // const myBalance = poorManAccount.getBalance();
    // console.log(myBalance);

    poorManAccount.getHiddenMethod();
}