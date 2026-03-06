import { useParams } from "react-router-dom";

function InfoPlace() {
    const {id} = useParams()
    return(
        <h1>Info Place {id}</h1>
    )
}
export default InfoPlace;