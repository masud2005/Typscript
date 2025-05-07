{
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        // Setter
        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }

        // addDeposit(amount: number) {
        //     return this._balance = this._balance + amount;
        // }

        // Getter
        get balance() {
            return this._balance;
        }

        // getBalance() {
        //     return this._balance;
        // }
    }

    const riceManAccount = new BankAccount(222, 'Rana', 1000);
    // const myBalance = riceManAccount.getBalance();
    // riceManAccount.addDeposit(500);
    riceManAccount.deposit = 500;
    const myBalance = riceManAccount.balance;

    console.log(myBalance);
}