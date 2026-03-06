import { useParams } from "react-router-dom";
import { tournamentData } from "../../data/tournamentDB";
import RowPlayers from "./RowPlayers";

function ParticipantsPlace() {
     const {id} = useParams()
     let index =tournamentData.find(it=>it.id==id)
    if(index==undefined){
        return <h1>Not found</h1>
    }
    return(
        <>
        <h1>Participants List ({index.participants.length})</h1>
        <div className="rowsPL">
              {

                index.participants.map((it)=>(
                    <RowPlayers name={it.name} status={it.status} avatar={it.avatar} />
                ))
              }
        </div>
        </>
    )
}
export default ParticipantsPlace;