import {List4} from "./component4"

export const List1 = (props) => {
  const {listArray} = props;
  return(
    <div>
      {listArray.map((el) => {
        return <p>{el.first_name}</p>;
      })}
      <List4 arrayList={listArray}></List4>
    </div>
  )
}