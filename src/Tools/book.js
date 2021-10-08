
export function getListBook(size, books) {
    let readingToday = [];

    for (let i = 0, l = size; i < l; i++) {
        readingToday.push(books[i])
    }
    return readingToday;
}

export function randomBook(books) {
    return Math.floor(Math.random() * books.length)
}