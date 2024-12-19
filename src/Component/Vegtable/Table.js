import React from 'react';

const Table = (props) => {
    console.log(props.colle);
  
  return (
    <div>
      {props.colle.map((u,v)=>{
        return(
            <div key={v}>
            <h1>{u.name}</h1>
            <h5>{u.price}</h5>
            <h6>{u.weight}{u.unit}</h6>
            <button onClick={()=>{props.del(u,v)}}>Delete</button>
            <button onClick={()=>{props.fi(u,v)}}>Filter</button>
           </div>
        )
      })}
      <button onClick={()=>{props.click("AN")}}>Ascending Name</button>
      <button onClick={()=>{props.click("AP")}}>Ascending prize</button>
    </div>
  );
}

export default Table;
