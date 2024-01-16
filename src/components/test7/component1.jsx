import { List4 } from "./component4";

export const List1 = ({ names }) => {
  const lastNameArray = names.map((el) => {
    return { lastName: el.last_name };
  });
  return (
    <div>
      <div>
        <h4>First name:</h4>
        {names.map((el, i) => {
          return <p key={i}>{el.first_name}</p>;
        })}
      </div>

      <List4 lastName={lastNameArray}></List4>
    </div>
  );
};
