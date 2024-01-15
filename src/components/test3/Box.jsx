export const Box = (props) => {
  return (
    <div
      style={{
        width: "250px",
        height: "350px",
        border: "1px solid lightgray",
        borderRadius: "8px",
      }}
    >
      <div style={{ width: "100%", height: "60%" }}>
        <img
          src={props.imgUrl}
          style={{ width: "100%", height: "100%", borderTopRightRadius: "8px", borderTopLeftRadius: "8px", }}
          alt=""
        />
      </div>
      <div
        style={{
          height: "35%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h3>{props.title}</h3>
        <div style={{ display: "flex", gap: "20px" }}>
          <div>share: {props.share}</div>
          <div>comment: {props.comment}</div>
        </div>
      </div>
    </div>
  );
};
