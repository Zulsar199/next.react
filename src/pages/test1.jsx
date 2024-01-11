
import { TextBox } from "../components/test1/Paragraph";
import { Image } from "@/components/test1/Image";
// import styles from '@/styles/Test1.css'

export default function Home() {
  return (
    <div >
      <div style={styles.flexContainer}>
        <Image />
        <Image />
        <Image />
      </div>
      <div style={styles.flexContainer}>
        <TextBox />
        <TextBox />
      </div>
    </div>
  );
}

const styles = {
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  
};
