import { Score } from "./component5"
export const Job = (props) =>{
    const array = [
        {
          first_name: "Zulsar",
          last_name: "Khas",
          score: " 10",
          age: "100",
          job: "student",
        },
        {
          first_name: "Duluu",
          last_name: "Bill",
          score: "100",
          age: "100",
          job: "Pinecone",
        },
        {
          first_name: "Dashka",
          last_name: "Dash",
          score: " 100",
          age: "100",
          job: "Pinecone",
        },
      ];
    return(
        <>
        {arr.map((el) => (
            <>
        <div>{props.job}</div>
        <Score score = {el.score}/>
        </>
          ))}
        </>
        
    )
}