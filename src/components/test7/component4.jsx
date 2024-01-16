export const List4 = (props) => {
  const { lastName } = props;
  return (
    <div style={{ marginTop: "40px" }}>
      <h4>Last name:</h4>
      {lastName.map((el) => {
        return <p>{el.lastName}</p>;
      })}
    </div>
  );
};


