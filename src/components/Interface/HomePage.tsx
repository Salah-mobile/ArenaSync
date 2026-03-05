import CardsDisplay from "../layoutes/CardsDispalay";
import HeadPageH from "../layoutes/headPageHome";
import Barescherch from "../layoutes/SearchBar";
function HomePage(){
    return(
        <>
         <HeadPageH/>
         <Barescherch/>
         <CardsDisplay/>  
        </>
    );
}
export default HomePage;