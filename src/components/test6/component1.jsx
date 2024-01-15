import { List4 } from "./component4";

export const List1 = (props) => {
  const { firstName, lastName  } = props;
  return (
    <div>
      <div>
        <h4>First name:</h4>
        <p>{firstName}</p>
      </div>

      <List4 arrayList={lastName}></List4>
    </div>
  );
};
