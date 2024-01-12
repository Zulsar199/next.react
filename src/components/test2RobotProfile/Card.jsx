import Array from "./Data";
import Styles from "./CardCss";

export const ProfileCard = (props) => {
  return (
    <div style={Styles.box}>
      <div style={Styles.avatar}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={props.avatar}
          alt=""
        />
      </div>
      <div style={Styles.screenData}>
        <div>{props.first_name}</div>
        <div style={Styles.someInfo}>
          <div>{props.employmentTitle}</div>
          <div>{props.gender}</div>
        </div>
        <div>{props.email}</div>
      </div>
    </div>
  );
};
