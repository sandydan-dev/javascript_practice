// Exercise 1

const people = [
  { name: "Amit", age: 32, profession: "Doctor" },
  { name: "Ravi", age: 27, profession: "Engineer" },
  { name: "Sneha", age: 29, profession: "Teacher" },
  { name: "Vikram", age: 25, profession: "Engineer" },
];

let peopleName = [];
for (let i = 0; i < people.length; i++) {
  if (people[i].profession === "Engineer") {
    peopleName.push(people[i].name);
  }
}
console.log(peopleName);

// Exercise 2
const cities = [
  { name: "Mumbai", population: 20411000, area: 603 },
  { name: "Delhi", population: 16787941, area: 1484 },
  { name: "Bengaluru", population: 8443675, area: 709 },
  { name: "Chennai", population: 7090000, area: 426 },
];

let sortCitisByPopulation = cities.sort((a, b) => b.population - a.population);
console.log(sortCitisByPopulation);

// Exercise 3
const gadgets = [
  { brand: "Xiaomi", model: "Redmi Note", price: 10000 },
  { brand: "Realme", model: "C Series", price: 8000 },
  { brand: "Lava", model: "Z Series", price: 4500 },
  { brand: "Micromax", model: "In 1", price: 3000 },
];

let moreThanGadgets = gadgets.filter((gadget) => gadget.price < 5000);
console.log(moreThanGadgets);

// Exercise 4
const songs = [
  {
    title: "Mile Sur Mera Tumhara",
    artist: "Various Artists",
    releaseYear: 1988,
  },
  {
    title: "Jumma Chumma De De",
    artist: "Kavita Krishnamurthy",
    releaseYear: 1991,
  },
  { title: "Roop Tera Mastana", artist: "Kishore Kumar", releaseYear: 1972 },
  { title: "Ek Ladki Ko Dekha", artist: "Kumar Sanu", releaseYear: 1994 },
];

for (let i = 0; i < songs.length; i++) {
  if (songs[i].releaseYear === 1988) {
    console.log("Title: ", songs[i].title);
    console.log("Artist: ", songs[i].artist);
    console.log("Year: ", songs[i].releaseYear);
  }
}

// Exercise 5
const devices = [
  { brand: "Apple", model: "MacBook", stock: 50 },
  { brand: "Dell", model: "XPS", stock: 30 },
  { brand: "HP", model: "Pavilion", stock: 40 },
  { brand: "Lenovo", model: "ThinkPad", stock: 20 },
];

function updateDeviceStock(device) {
  for (let i = 0; i < device.length; i++) {
    if (device[i].model === "XPS") {
      device[i].stock = 60;
      console.log(
        `The updated stock for ${device[i].model} is ${device[i].stock}.`,
      );
    }
  }
}
updateDeviceStock(devices);

// Exercise 6
const meals = [
  { name: "Burger", calories: 300, servings: 2 },
  { name: "Pizza", calories: 400, servings: 3 },
  { name: "Salad", calories: 100, servings: 1 },
  { name: "Pasta", calories: 200, servings: 4 },
];

let totalCalories = 0;
for (let i = 0; i < meals.length; i++) {
  totalCalories = totalCalories + meals[i].calories * meals[i].servings;
}
console.log(`Total calories consumed: ${totalCalories}`);

// Exercise 7
const books = [
  { title: "The White Tiger", author: "Aravind Adiga", rating: 4.2 },
  { title: "God of Small Things", author: "Arundhati Roy", rating: 3.9 },
  { title: "Train to Pakistan", author: "Khushwant Singh", rating: 4.3 },
  { title: "Five Point Someone", author: "Chetan Bhagat", rating: 3.6 },
];

// ['The White Tiger', 'Train to Pakistan']
let bookTitle = [];
for (let i = 0; i < books.length; i++) {
  if (books[i].rating > 4) {
    bookTitle.push(books[i].title);
  }
}

console.log(bookTitle);

// Exercise 8
const players = [
  { name: "Virat Kohli", score: 100, team: "RCB" },
  { name: "MS Dhoni", score: 75, team: "CSK" },
  { name: "Rohit Sharma", score: 90, team: "MI" },
  { name: "KL Rahul", score: 80, team: "LSG" },
];

let sortedPlayersByScore = players.sort((a, b) => b.score - a.score);
console.log(sortedPlayersByScore);

// Exercise 9
const stores = [
  { name: "Big Bazaar", location: "Mumbai", revenue: 500000 },
  { name: "Reliance Fresh", location: "Pune", revenue: 300000 },
  { name: "D-Mart", location: "Mumbai", revenue: 700000 },
  { name: "More Supermarket", location: "Bengaluru", revenue: 800000 },
];

let filterStore = stores.filter((store) => {
  if (store.location !== "Mumbai") {
    return store;
  }
});
console.log(filterStore);

// Exercise 10
const pets = [
  { name: "Buddy", type: "Dog", age: 3 },
  { name: "Mittens", type: "Cat", age: 6 },
  { name: "Charlie", type: "Parrot", age: 2 },
  { name: "Max", type: "Rabbit", age: 8 },
];

// Find the first pet older than 5 years.
let firstPet = pets.find((pet) => {
  if (pet.age > 5) {
    return pet;
  }
});
console.log("Name: ", firstPet.name);
console.log("Type: ", firstPet.type);
console.log("Age: ", firstPet.age);

// Exercise 11: Extract Employee Salaries
let employees = [
  { name: "Rajesh", department: "IT", salary: 60000 },
  { name: "Pooja", department: "HR", salary: 50000 },
  { name: "Alok", department: "Finance", salary: 70000 },
  { name: "Divya", department: "Marketing", salary: 65000 },
];

let salaries = employees.map((employee) => employee.salary);
console.log(salaries);

// Exercise 12: Total Revenue from Events
let events = [
  { name: "Bollywood Night", ticketsSold: 500, ticketPrice: 1000 },
  { name: "Stand-Up Comedy", ticketsSold: 200, ticketPrice: 800 },
  { name: "Music Festival", ticketsSold: 1000, ticketPrice: 1500 },
  { name: "Food Fest", ticketsSold: 700, ticketPrice: 500 },
];

let totalRevenue = events.reduce((total, event) => {
  return total + event.ticketsSold * event.ticketPrice;
}, 0);
console.log(`Total Revenue: ${totalRevenue}`);

// Exercise 13: Generate Full Names
let peoples = [
  { firstName: "Ramesh", lastName: "Gupta" },
  { firstName: "Sonia", lastName: "Sharma" },
  { firstName: "Karan", lastName: "Kapoor" },
  { firstName: "Anjali", lastName: "Verma" },
];
// ['Ramesh Gupta', 'Sonia Sharma', 'Karan Kapoor', 'Anjali Verma']
let fullNames = peoples.map((people) => {
  return `${people.firstName} ${people.lastName}`;
});
console.log(fullNames);

// Exercise 14: Total Age of People
let peopleAge = [
  { name: "Neha", age: 22 },
  { name: "Rahul", age: 28 },
  { name: "Ankita", age: 25 },
  { name: "Varun", age: 30 },
];

let totalAges = peopleAge.reduce((total, person) => {
  return total + person.age;
}, 0);

console.log(`Total Age: ${totalAges}`);

// Exercise 15: Total Cost of Items
let items = [
  { name: "Notebook", quantity: 5, price: 30 },
  { name: "Pen", quantity: 10, price: 10 },
  { name: "Eraser", quantity: 15, price: 5 },
  { name: "Ruler", quantity: 3, price: 20 },
];

let totalitems = items.reduce((item1, item2) => {
  return item1 + item2.quantity * item2.price;
}, 0);
console.log(`Total Cost: ${totalitems}`);
