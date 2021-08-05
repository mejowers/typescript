import { Friend } from "./Friend";

let friend1:Friend = new Friend( "DaNel Wolf", 54, "danel@info.com", true);
let friend2:Friend = new Friend( "Linda Crook", 32, "linda@info.com", true);
let friend3:Friend = new Friend( "Dylan Motley", 24, "dylan@info.com", true);
let friend4:Friend = new Friend( "Matt Childers", 24, "matt@info.com", false);
let friend5:Friend = new Friend( "Nick Patel", 28, "nick@info.com", false);
let friend6:Friend = new Friend( "Seth Race", 32, "seth@info.com", false);

let friends: Friend[] = [friend1, friend2, friend3, friend4, friend5, friend6];

console.log("List of friends....");
console.log("Name", "Age", "Email", "BFF?");

friends.forEach(f => {
    console.log(f.name, f.age, f.email, f.bff);
});