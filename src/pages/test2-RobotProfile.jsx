import { ProfileCard } from "../components/test2/Card";
import Array from "@/components/test2/Data";
import styles from "@/styles/Test2.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.mainContainer}>
        {Array.map((el) => (
          <ProfileCard
            avatar={el.avatar}
            firstName={el.first_name}
            lastName={el.last_name}
            gender={el.gender}
            email={el.email}
            employmentTitle={el.employment.title}
          />
        ))}
      </div>
    </div>
  );
}


