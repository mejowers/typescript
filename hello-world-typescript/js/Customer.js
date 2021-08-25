"use strict";
var Customer = /** @class */ (function () {
    function Customer(id, name, sales) {
        this.id = id;
        this.name = name;
        this.sales = sales;
    }
    Customer.prototype.log = function () {
        console.log("[" + this.id + "] [" + this.name + "] [" + this.sales + "]");
    };
    return Customer;
}());
var customers = []; // this will make it an empty array (give it a value)
var cust = new Customer(1, "Max", 1000);
customers.push(cust);
customers.push(new Customer(2, "GA", 10000));
customers.push(new Customer(3, "TG", 1500));
for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
    var c = customers_1[_i];
    c.log();
}
