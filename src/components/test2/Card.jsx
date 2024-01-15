import Array from "./Data";
import Styles from "./CardCss";

export const ProfileCard = (props) => {
  const { avatar, firstName, lastName, employmentTitle, gender, email  } = props;
  return (
    <div style={Styles.box}>
      <div style={Styles.avatar}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={avatar}
          alt=""
        />
      </div>
      <div style={Styles.screenData}>
        <div>{firstName} {lastName}</div>
        <div style={Styles.someInfo}>
          <div>{employmentTitle}</div>
          <div>{gender}</div>
        </div>
        <div>{email}</div>
      </div>
    </div>
  );
};

