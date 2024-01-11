import Array
 from "./Data"
import Styles
 from "./ProfileCardCss"

export const ProfileCard = ()=>{
     return <div style={Styles.box}>
          <div style={Styles.avatar}>
               <img style={{width: "100%", height: "100%"}} src="https://robohash.org/numquameiuspariatur.png?size=300x300&set=set1" alt="" />
          </div>
          <div style={Styles.screenData}>
               <div>`${el.first_name} ${el.first_name}`</div>
               <div>Employment Gender</div>
               <div>Email</div>
          </div>
     </div>
    
     
}

