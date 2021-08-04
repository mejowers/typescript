class Customer {

    id: number;
    name: string;
    sales: number;

    constructor(id: number, name: string, sales: number) {
        this.id = id;
        this.name = name;
        this.sales = sales;
    }

    log(): void {
        console.log(`[${this.id}] [${this.name}] [${this.sales}]`);
    }
}
let customers: Customer[] = []; // this will make it an empty array (give it a value)
let cust = new Customer(1, "Max", 1000);
customers.push(cust);
customers.push(new Customer(2, "GA", 10000));
customers.push(new Customer(3, "TG", 1500));

for(let c of customers) {
    c.log();     
}
