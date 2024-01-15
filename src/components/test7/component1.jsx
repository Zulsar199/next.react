import { List4 } from "./component4";

export const List1 = ({ listArray }) => {
  return (
    <div>
      <div>
        <h4>First name:</h4>
        {listArray.map((el) => {
          return <p>{el.newFname}</p>;
        })}
      </div>

      {/* <List4 arrayList={listArray}></List4> */}
    </div>
  );
};
