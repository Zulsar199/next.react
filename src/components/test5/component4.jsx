export const List4 = (props) =>{
    const {arrayList} = props;
    return(
        <div>
      {arrayList.map((el) => {
       return <p>{el.last_name}</p>;
      })}
    </div>
        
    )
}