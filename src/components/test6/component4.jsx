export const List4 = (props) => {
  const { arrayList } = props;
  return (
    <div style={{ marginTop: "40px" }}>
      <h4>Last name:</h4>
      <p>{arrayList}</p>
      
    </div>
  );
};
