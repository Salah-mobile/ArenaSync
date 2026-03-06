type getProps={
    name:string;
    status:string;
    avatar:string
}
function RowPlayers(props:getProps) {
    return (
        <div className="rowP">
            <img src={props.avatar} alt="" />
             <div className="rowPI">
                 <h1>{props.name}</h1>
                <h3 className={props.status}>{props.status}</h3>
             </div>
        </div>
    )
}
export default RowPlayers;