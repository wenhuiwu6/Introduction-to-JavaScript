// function enter(hasKey, hasMagic, isBanned){
//     if((hasKey == true || hasMagic == true) && !isBanned) {
//         console.log("your princess is in another castle");
//     } else {
//         console.log("cannot enter");
//     }
// }

// function enter(rideHeightOK, withAdult, healthHold) {
//   if ((rideHeightOK == true || withAdult == true) && !healthHold) {
//     console.log("You are allowed");
//   } else {
//     console.log("You are not allowed");
//   }
// }
// enter(true, false, false);

// function enter(doorOpen, windowOpen) {
//   const alarmSilent = !(doorOpen || windowOpen);
// }
// enter(true, false, false);

// function middle (x,y,z) {
//   if ((x >= y && x <= z) || (x <= y && x >= z)) {
//     console.log ("x is in the middle");
//   } else if (y >= x && y>= z)

// }

// function telemarketer(d1, d2, d3, d4) {
//   if ((d1 === 8 || d1 === 9) && (d4 === 8 || d4 === 9) && d2 === d3) {
//     console.log("ignore");
//   }
//   console.log("answer");
// }

// const students = ["Jean", "London", "Damian", "Thomas"];
// function printALL(list) {
//   for (let i = onabort; i < list.length; i++) {
//     console.log(i);
//     console.log(students[i]);
//   }
// }
// printALL(students);

// students.forEach((student) => console.log(student)); // use this only for typing all the students without using the function above

// const found = students.find((student) => student === "London");
// console.log(found);

// const sentence =
//   "The red cat sat on the mat. Why are you so sad cat? Don't ask that.";

// function language(sentence) {
//   let t = 0;
//   let s = 0;
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] === "S" || sentence[i] === "s") {
//       s = s + 1;
//     } else if (sentence[i] === "T" || sentence[i] === "t") {
//       t++;
//     }
//   }
//   if (t > s) {
//     console.log("English");
//   } else {
//     console.log("French");
//   }
// }
// language(sentence);

// if (s && S < t && T) {
//   console.log("Probably English");
// }
// if (s && S === t && T) {
//   console.log("French");
// } else {
//   console.log("Probably French");
// }

// function occupied(y, t) {
//   let occupied = 0;
//   for (let i = 0; i < y.length; i++) {
//     console.log(y[i], t[i]);
//     if (y[i] === "c" && t[i] === "c") {
//       occupied++;
//     }
//   }
//   console.log(occupied);
// }
// occupied("cc..c", ".cc..");

// const london = {
//   firstName: "London",
//   lastName: "Valentine",
//   graduated: false,
//   DOB: 2010,
//   sublings: ["Paris", "Rio"],
//   age: function () {
//     return year - this.DOB;
//   },
// };

// console.log(london.siblings);

const books = [
  {
    title: "The Silent Forest",
    author: "Emily Harper",
    year: 2015,
    genre: "Fiction",
    price: 12.99,
    stock: 8,
  },
  {
    title: "Digital Dreams",
    author: "Michael Chen",
    year: 2019,
    genre: "Science Fiction",
    price: 15.5,
    stock: 12,
  },
  {
    title: "Cooking with Love",
    author: "Sophia Martinez",
    year: 2020,
    genre: "Cooking",
    price: 22.0,
    stock: 5,
  },
  {
    title: "History of Time",
    author: "Dr. Alan Stone",
    year: 2010,
    genre: "History",
    price: 18.75,
    stock: 7,
  },
  {
    title: "Ocean Tales",
    author: "Liam Carter",
    year: 2018,
    genre: "Adventure",
    price: 11.99,
    stock: 14,
  },
  {
    title: "Mind Over Matter",
    author: "Rachel Kim",
    year: 2021,
    genre: "Self-Help",
    price: 14.25,
    stock: 9,
  },
  {
    title: "The Last Kingdom",
    author: "David Johnson",
    year: 2013,
    genre: "Fantasy",
    price: 16.4,
    stock: 10,
  },
  {
    title: "Code Masters",
    author: "Olivia Brown",
    year: 2022,
    genre: "Technology",
    price: 25.0,
    stock: 6,
  },
  {
    title: "Poetry of Stars",
    author: "Noah Wilson",
    year: 2017,
    genre: "Poetry",
    price: 9.99,
    stock: 20,
  },
  {
    title: "Secrets of the Mind",
    author: "Hannah Lee",
    year: 2016,
    genre: "Psychology",
    price: 19.99,
    stock: 11,
  },
  {
    title: "Into the Desert",
    author: "Ethan White",
    year: 2014,
    genre: "Adventure",
    price: 13.5,
    stock: 13,
  },
  {
    title: "World of Wonders",
    author: "Charlotte Green",
    year: 2023,
    genre: "Science",
    price: 27.8,
    stock: 4,
  },
  {
    title: "Legends Untold",
    author: "Daniel Wright",
    year: 2011,
    genre: "Fantasy",
    price: 15.2,
    stock: 8,
  },
  {
    title: "Journey to Space",
    author: "Amelia Young",
    year: 2020,
    genre: "Science Fiction",
    price: 21.0,
    stock: 7,
  },
  {
    title: "Life Lessons",
    author: "Benjamin Scott",
    year: 2019,
    genre: "Non-Fiction",
    price: 17.25,
    stock: 15,
  },
  {
    title: "Garden Magic",
    author: "Isabella Adams",
    year: 2012,
    genre: "Lifestyle",
    price: 12.0,
    stock: 9,
  },
  {
    title: "Haunted Nights",
    author: "Lucas King",
    year: 2021,
    genre: "Horror",
    price: 14.99,
    stock: 8,
  },
  {
    title: "Music of the Soul",
    author: "Grace Baker",
    year: 2017,
    genre: "Music",
    price: 23.5,
    stock: 6,
  },
  {
    title: "Ancient Civilizations",
    author: "Christopher Hall",
    year: 2010,
    genre: "History",
    price: 20.75,
    stock: 10,
  },
  {
    title: "Bright Futures",
    author: "Natalie Moore",
    year: 2022,
    genre: "Education",
    price: 18.0,
    stock: 12,
  },
];
// printing the books title
// books.forEach((book) => console.log(book.title));

// printing book that are less than 10
// books
//   .filter((book) => book.price < 10)
//   .forEach((book) = > console.log(book.title));
