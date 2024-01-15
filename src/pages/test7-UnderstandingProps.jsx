import { List1 } from "../components/test5/component1";
import { List2 } from "../components/test5/component2";
import { List3 } from "../components/test5/component3";
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
  const name = () => {
    let newArr = array.map((e) => {
      return [(newFname = e.first_name), (newLname = e.last_name)];
    });
    return newArr;
  };
  const age = () => {
    array.map((el) => {
      return [el.age];
    });
  };
  const jobScore = () => {
    array.map((el) => {
      return [el.job, el.score];
    });
  };
  return (
    <div className={styles.body}>
      <div className={styles.mainContainer}>
        <List1 listArray={name}></List1>
        {/* <List2 listArray={age}></List2>
        <List3 listArray={jobScore}></List3> */}
      </div>
    </div>
  );
}
