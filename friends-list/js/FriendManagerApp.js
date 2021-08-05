"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend_1 = require("./Friend");
var friend1 = new Friend_1.Friend("DaNel Wolf", 54, "danel@info.com", true);
var friend2 = new Friend_1.Friend("Linda Crook", 32, "linda@info.com", true);
var friend3 = new Friend_1.Friend("Dylan Motley", 24, "dylan@info.com", true);
var friend4 = new Friend_1.Friend("Matt Childers", 24, "matt@info.com", false);
var friend5 = new Friend_1.Friend("Nick Patel", 28, "nick@info.com", false);
var friend6 = new Friend_1.Friend("Seth Race", 32, "seth@info.com", false);
var friends = [friend1, friend2, friend3, friend4, friend5, friend6];
console.log("List of friends....");
console.log("Name", "Age", "Email", "BFF?");
friends.forEach(function (f) {
    console.log(f.name, f.age, f.email, f.bff);
});
