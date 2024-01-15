

import { List5 } from "./component5";

export const List3 = (props) => {
  const { job, score } = props;
  return (
    <div>
      <div>
        <h4>Job: </h4>
        <p>{job}</p>
       
      </div>

      <List5 arrayList={score}></List5>
    </div>
  );
};


