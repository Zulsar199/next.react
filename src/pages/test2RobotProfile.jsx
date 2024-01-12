import { ProfileCard } from "../components/test2RobotProfile/Card";
import Array from "@/components/test2RobotProfile/Data";
import styles from "@/styles/Test2.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.mainContainer}>
        {Array.map((el) => (
          <ProfileCard
            avatar={el.avatar}
            first_name={el.first_name}
            gender={el.gender}
            email={el.email}
            employmentTitle={el.employment.title}
          />
        ))}
      </div>
    </div>
  );
}


