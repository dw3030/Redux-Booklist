const books = [
  {
    id: 1,
    title: "The Way of Zen",
    slug: "the-way-of-zen",
    authorId: 1,
    category: "Zen Buddhism",
  },
  {
    id: 2,
    title: "The Book: On the Taboo Against Knowing Who You Are",
    slug: "the-book-taboo-who-you-are",
    authorId: 1,
    category: "Spirituality",
  },
  {
    id: 3,
    title: "Tao: The Watercourse Way",
    slug: "tao-watercourse-way",
    authorId: 1,
    category: "Taoism",
  },
  {
    id: 4,
    title: "Feeling is the Secret",
    slug: "feeling-is-the-secret",
    authorId: 2,
    category: "Christian Mysticism",
  },
  {
    id: 5,
    title: "The Law and the Promise",
    slug: "law-and-the-promise",
    authorId: 2,
    category: "Christian Mysticism",
  },
  {
    id: 6,
    title: "The Power of Now",
    slug: "power-of-now",
    authorId: 3,
    category: "Mindfulness",
  },
  {
    id: 7,
    title: "A New Earth",
    slug: "new-earth",
    authorId: 3,
    category: "Mindfulness",
  },
];

const authors = [
  { id: 1, name: "Alan Watts" },
  { id: 2, name: "Neville Goddard" },
  { id: 3, name: "Eckhart Tolle" },
];

const newBook = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newBook,
  books,
  authors,
};
