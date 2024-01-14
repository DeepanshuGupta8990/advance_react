export const LargeAuthorListItem = ({author})=>{
    const {name,age,country,books} = author
    return(
        <>
          <h3>{name}</h3>
          <p>Age: {age}</p>
          <p>country: {country}</p>
          <p>Books</p>
          <ul>
            {
                books.map((book)=>{
                    return(
                        <li key={book}>{book}</li>
                    )
                })
            }
          </ul>
        </>
    )
}