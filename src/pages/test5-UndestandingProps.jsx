import {List1} from "../components/test5/component1";
import {List2} from "../components/test5/component2";
import {List3} from "../components/test5/component3";


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
  return (
    <div>
      <div>
        <List1 listArray={array}></List1>
        <List2 listArray={array}></List2>
        <List3 listArray={array}></List3>
      </div>
    </div>
  );
}
