import { TextBox } from "../components/test1/Paragraph";
import { Image } from "@/components/test1/Image";
import style from "@/styles/Test1.module.css";

export default function Home() {
  return (
    <div>
      <div className={`${style.flexContainer}`}>
        <Image />
        <Image />
        <Image />
      </div>
      <div className={`${style.flexContainer}`}>
        <TextBox />
        <TextBox />
      </div>
    </div>
  );
}

// const styles = {
//   flexContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     gap: "10px",
//   },

// };

// <div style={styles.flexContainer}>
//         <Image />
//         <Image />
//         <Image />
//       </div>
