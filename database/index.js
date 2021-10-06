let books = [
    {
      ISBN: "123456Book",
      title: "Getting started with MERN",
      pubDate: "2021-07-07",
      language: "en",
      numPage: 250,
      authors: [1, 2],
      publication: 1,
      category: ["tech", "programming", "education", "thriller"],
    },

    {
      ISBN: "12345Two",
      title: "Getting started with Python",
      pubDate: "2021-07-07",
      language: "en",
      numPage: 255,
      authors: [1, 2],
      publication: 1,
      category: ["tech", "fiction", "web dev"],
    },
  
  ];
  
  const authors = [
    {
      id: 1,
      name: "Pavan",
      books: ["12345Book", "1234566789Secret"],
    },
    { id: 2, name: "Elon Musk", books: ["12345Book"] },
  ];
  
  const publications = [
    {
      id: 1,
      name: "writex",
      books: ["12345Book"],
    },

    {
      id: 2,
      name: "Vickey",
      books: [],
    },
  ];


  
  module.exports = { books, authors, publications };
