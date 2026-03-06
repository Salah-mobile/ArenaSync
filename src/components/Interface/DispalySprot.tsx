import { useNavigate, useParams } from "react-router-dom";
import { tournamentData } from "../../data/tournamentDB";
import TabLayout from "../layoutes/TabLayout";
function DisplaySport() {
    const navigate=useNavigate()
    const {id}=useParams()
    let index=tournamentData.find(it=>it.id==id)
    if (!index) {
  return <p>Sport not found</p>; 
}
    return(
      <>
      <div className="headpageS">
      <i className="ri-arrow-left-fill" onClick={()=>{navigate(-1)}} ></i>
      <h1>{index.title}</h1>
      </div>
       <div  className="card" onClick={()=>{navigate(`/dispalyS/${index.id}`)}}>
                <div className="headCard">
                  <img src={index.image} alt="" width="100px"  />
                  <div>
                    <h3>{index.title}</h3>
                  <p>{index.status}</p>
                  </div>
                
                </div>
                <div className="cardBody">
                     <p>{index.description}</p>
                </div>
                <div className="informationsCard">
                  <ul>
                    <li><span><i className="ri-group-line"></i><p>{index.participants.length}.{index.type}</p></span></li>
                    <li><span><i className="ri-trophy-fill"></i><p>{index.format}</p></span></li>
                    <li><span><i className="ri-calendar-2-line"></i><p>{index.date}</p></span></li>
                    <li><span><i className="ri-map-pin-fill"></i><p>{index.location}</p></span></li>
                  </ul>
                </div>
               </div>
               <div className="badyPageS">
               <TabLayout/>
               </div>
               
      </>
    );
}
export default DisplaySport;