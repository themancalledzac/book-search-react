export default function bookData(item) {
  return {
    authors: item.volumeInfo.authors,
    image: item.volumeInfo.imageLinks
      ? item.volumeInfo.imageLinks.thumbnail
      : "./images/book.png",
    title: item.volumeInfo.title,
    subtitle: item.volumeInfo.subtitle,
    description: item.volumeInfo.description,
    link: item.volumeInfo.infoLink,
  };
}
