import { useParams } from "react-router-dom";

function BraketsPlace() {
     const {id} = useParams()
    return(
        <h1>BraketsPlace</h1>
    )
}
export default BraketsPlace;