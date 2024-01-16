export const List4 = (props) => {
  const { last_name } = props;

  console.log(last_name);
  return (
    <div style={{ marginTop: "40px" }}>
      <h4>Last name:</h4>
      {last_name.map((el, i) => {
        return <p key={i}>{el.last_name}</p>;
      })}
    </div>
  );
};
