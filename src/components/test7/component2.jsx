export const List2 = (props) => {
    const { ages } = props;
    return (
      <div>
        <h4>Age:</h4>
        {ages.map((el) => {
          return <p>{el.age}</p>;
        })}
      </div>
    );
  };