import { List5 } from "./component5";

export const List3 = (props) => {
  const { jobsScores } = props;
  const scoreArray = jobsScores.map((el) => {
    return { score: el.score };
  });
  return (
    <div>
      <div>
        <h4>Job: </h4>
        {jobsScores.map((el) => {
          return <p>{el.job}</p>;
        })}
      </div>

      <List5 score={scoreArray}></List5>
    </div>
  );
};
