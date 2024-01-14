export const SmallAuthorListItem = ({author})=>{
    const {name,age,country,books} = author
    return(
        <p>name - {name}, age - {age}</p>
    )
}