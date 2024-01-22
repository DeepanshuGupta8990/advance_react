import { useUser } from "./user-hook";

export const UserInfo2 = ({userId})=>{
    const user = useUser(userId);
    const {name,age,country,books} = user || {};
    return user ? (
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
    ) : (
        <h1>Loading...</h1>
    )
}