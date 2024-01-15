export const List5 = (props) => {
    const { arrayList } = props;
    return (
      <div style={{ marginTop: "40px" }}>
        <h4>Score:</h4>
        {arrayList.map((el) => {
          return <p>{el.score}</p>;
        })}
      </div>
    );
  };
  