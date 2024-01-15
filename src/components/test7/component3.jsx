import { List5 } from "./component5";

export const List3 = (props) => {
  const { listArray } = props;
  return (
    <div>
      <div>
        <h4>Job: </h4>
        {listArray.map((el) => {
          return <p>{el.job}</p>;
        })}
      </div>

      <List5 arrayList={listArray}></List5>
    </div>
  );
};
