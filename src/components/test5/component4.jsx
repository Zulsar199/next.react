export const List4 = ({ arrayList }) => {
  return (
    <div style={{ marginTop: "40px" }}>
      <h4>Last name:</h4>
      {arrayList.map((el) => {
        return <p>{el.last_name}</p>;
      })}
    </div>
  );
};
