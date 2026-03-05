import { useNavigate } from "react-router-dom";
import { tournamentData } from "../../data/tournamentDB";
function CardsDisplay(){
     const navigate=useNavigate()
    return(
        <div className="CardPlace" >
            {
              tournamentData.map((it)=>(
               <div className="card" onClick={()=>{navigate(`/dispalyS/${it.id}`)}}>
                <div className="headCard">
                  <img src={it.image} alt="" width="100px"  />
                  <div>
                    <h3>{it.title}</h3>
                  <p>{it.status}</p>
                  </div>
                
                </div>
                <div className="cardBody">
                     <p>{it.description}</p>
                </div>
                <div className="informationsCard">
                  <ul>
                    <li><span><i className="ri-group-line"></i><p>{it.participants.length}.{it.type}</p></span></li>
                    <li><span><i className="ri-trophy-fill"></i><p>{it.format}</p></span></li>
                    <li><span><i className="ri-calendar-2-line"></i><p>{it.date}</p></span></li>
                    <li><span><i className="ri-map-pin-fill"></i><p>{it.location}</p></span></li>
                  </ul>
                </div>
               </div>
              ))
            }
        </div>
    )
 }
export default CardsDisplay;