/*4. Filtering and Capitalizing: Books Published After 2010 with Author Names. Write a program that takes a list of books, including their authors and publication years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized.*/

const books = [
    { title: 'The Alchemist', author: '	paulo coelho', year: 1988 },
    { title: 'Daring Greatly', author: 'brené Brown', year: 2012 },
    { title: 'The Four Agreements', author: 'don miguel ruiz', year: 1997 },
    { title: 'Born a Crime', author: 'trevor noah', year: 2016 },
    { title: 'Educated', author: 'tara westover', year: 2018 }
];

const filteredBooks = books
    .filter(book => book.year >= 2010)
    .map(book => {
        return {
            ...book,
            author: book.author.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')
        }
    });

console.log(filteredBooks);