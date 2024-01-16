import { List1 } from "../components/test7/component1";
import { List2 } from "../components/test7/component2";
import { List3 } from "../components/test7/component3";
import styles from "@/styles/Test5.module.css";

export default function Home() {
  const array = [
    {
      first_name: "Zulsar",
      last_name: "Khas",
      score: " 70",
      age: "35",
      job: "student",
    },
    {
      first_name: "Duluu",
      last_name: "Bill",
      score: "100",
      age: "30",
      job: "Pinecone",
    },
    {
      first_name: "Dashka",
      last_name: "Dash",
      score: " 100",
      age: "30",
      job: "Pinecone",
    },
  ];
  const names = array.map((e) => {
    return { first_name: e.first_name, last_name: e.last_name };
  });

  console.log(names);

  const age = () => {
    array.map((el) => {
      return { age: el.age };
    });
  };

  const jobScore = () => {
    array.map((el) => {
      return { job: el.job, score: el.score };
    });
  };

  return (
    <div className={styles.body}>
      <div className={styles.mainContainer}>
        <List1 names={names}></List1>
        {/* <List2 listArray={age}></List2>
        <List3 listArray={jobScore}></List3> */}
      </div>
    </div>
  );
}
