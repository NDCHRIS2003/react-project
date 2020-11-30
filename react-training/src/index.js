// let us create first componet
import React from "react";
import ReactDom from "react-dom";
import {books} from "./books"
import {Book} from "./Book"

//CSS
import "./index.css";

// note that stateless functional component always return JSX
// JSX Rules are
// 1) Return single element
// 2) use div / section / article or Fragment
// 3) use camelCase for htlm attribute
// 4) className instead of class
// 5) close every element
// 6) formatting

// const Greeting = () => {
//   return React.createElement("h1", {}, "hello world");
// };

// Nested Component , React Tools.

// set up variables
// const firstBook = {
//   author: "Amelia Hepworth",
//   title: "I Love You to the Moon and Back",
//   img:
//     "https://www.amazon.com/I-Love-You-Moon-Back/dp/1589255518/ref=zg_bs_books_29?_encoding=UTF8&psc=1&refRID=ZFACGQKM5GBMD93GRNKX",
// };

// const secondBook = {
//   author: "John Grisham",
//   title: "A Time for Mercy (Jake Brigance)",
//   img:
//     "https://www.amazon.com/Time-Mercy-Jake-Brigance/dp/0385545967/ref=zg_bs_books_27?_encoding=UTF8&psc=1&refRID=ZFACGQKM5GBMD93GRNKX",
// };

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       >
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quo!
//           Exercitationem perferendis similique deleniti esse modi, placeat
//           blanditiis natus quae officiis dolor culpa numquam, ea, maxime
//           dolorem. Reprehenderit, expedita maxime.
//         </p>
//       </Book>
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }

// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.img} alt="" />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

// the above code can be refactored to this one below
// const Book = ({ img, title, author, children }) => {
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   );
// };


function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //const { img, title, author } = book;
        return <Book key={book.id} book={...book}></Book>;
      })}
    </section>
  );
}


ReactDom.render(<BookList />, document.getElementById("root"));
