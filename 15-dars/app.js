// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];

// const animalsobj = animals.reduce(
//   (acc, cur) => {
//     acc[cur] += 1;
//     return acc;
//   },
//   {
//     dog: 0,
//     chicken: 0,
//     cat: 0,
//     rabbit: 0,
//   }
// );

// console.log(animalsobj);

// const results = votes.reduce((tally, val) => {
//     tally[val] = (tally[val] || 0) + 1;
//     return tally;
//   }, {});

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "A Truly Horrible Book",
    authors: ["Xavier Time"],
    rating: 2.18,
    genres: ["fiction", "garbage"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

const groupedByratings = books.reduce((gropedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!gropedBooks[key]) {
    gropedBooks[key] = [];
  }
  gropedBooks[key].push(book);
  return gropedBooks;
}, {});

console.log(groupedByratings);
