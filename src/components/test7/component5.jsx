export const List5 = (props) => {
  const { score } = props;
  return (
    <div style={{ marginTop: "40px" }}>
      <h4>Score:</h4>
      {score.map((el) => {
        return <p>{el.score}</p>;
      })}
    </div>
  );
};
