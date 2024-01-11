import { ProfileCard } from "../components/test2RobotProfile/Card"
import Array from "@/components/test2RobotProfile/Data"

export default function Home() {
     return (<div style={styles.body}>
          
          <div style={styles.mainContainer}>
          {Array.map((el)=>(<ProfileCard key={el.id} robot={el}/>))}

          </div>
          
     </div>)

}

const styles ={
     body: {
          display: "flex",
          justifyContent: "center",
     },
     mainContainer: {
          width: "900px",
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "",
     },
}