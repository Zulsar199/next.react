import { List1 } from "../components/test6/component1";
import { List2 } from "../components/test6/component2";
import { List3 } from "../components/test6/component3";
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
    // const namesAges = {array.map((el) => {
    //   return [el.first_name, el.last_name];
    // })}

    // const ages = (array) => {array.map((el) => {
    //   return el.age;
    // })}
  //   const jobsScore = (array) => {array.map((el) => {
  //     return [el.job, el.score];
  //   })}

  return (
    <div className={styles.body}> 
      <div className={styles.mainContainer}>
        {array.map((el) => (
          <>
            <List1 firstName={el.first_name} lastName={el.last_name}></List1>
            <List2 age={el.age}></List2>
            <List3 job={el.job} score={el.score}></List3>
          </>
        ))}
      </div>
    </div>
  );
}
