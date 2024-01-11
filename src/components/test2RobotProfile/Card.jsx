import Array from "./Data";
import Styles from "./CardCss";


export const ProfileCard = () => {
  return (
    <div style={Styles.box}>
      <div style={Styles.avatar}>
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://robohash.org/numquameiuspariatur.png?size=300x300&set=set1"
          alt=""
        />
      </div>
      <div style={Styles.screenData}>
        <div>Name</div>
        <div>Employment Gender</div>
        <div>Email</div>
      </div>
    </div>
  );
};
