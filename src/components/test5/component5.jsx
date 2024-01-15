export const List5 = (props) =>{
    const {arrayList} = props;
    return(
        <div>
      {arrayList.map((el) => {
       return <p>{el.score}</p>;
      })}
    </div>
        
    )
}