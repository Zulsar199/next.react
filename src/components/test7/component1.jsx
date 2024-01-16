import { List4 } from "./component4";

export const List1 = ({ names }) => {
  console.log("on comp 1 ", names);

  const last_name_array = names.map((el) => {
    return { last_name: el.last_name };
  });
  return (
    <div>
      <div>
        <h4>First name:</h4>
        {names.map((el, i) => {
          return <p key={i}>{el.first_name}</p>;
        })}
      </div>

      <List4 last_name={last_name_array}></List4>
    </div>
  );
};
