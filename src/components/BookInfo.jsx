export const BookInfo = ({book}) => {
    const {name, price, pages,title} = book || {};
    return book ? (
        <>
        <h3>Name : {name}</h3>
        <p>Price : {price}</p>
        <h3>Title</h3>
        <p>{title}</p>
        <p># of pages : {pages}</p>
        </> 
       ) : (
        <h1>Loading...</h1>
       )
   }