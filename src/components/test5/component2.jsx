// export const Age = (props) =>{
//     return(
//         <div>{props.age}</div>
//     )
// }

export const List2 = (props) => {
    const {listArray} = props;
    return(
      <div>
        {listArray.map((el) => {
         return <p>{el.age}</p>;
        })}
      </div>
    )
  }