export const List2 = (props) => {
    const { listArray } = props;
    return (
      <div>
        <h4>Age:</h4>
        {listArray.map((el) => {
          return <p>{el.age}</p>;
        })}
      </div>
    );
  };