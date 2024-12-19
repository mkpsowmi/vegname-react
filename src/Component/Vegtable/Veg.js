import React, { useState } from 'react';
import Table from './Table'
const Veg = () => {

   var color=[{
       id:1,
        name:"potato",
        price: 1000,
        weight:5,
        unit:"kg"
        },

        {
          id:2,
        name:"tomoto",
        price: 30000,
        weight:10,
        unit:"kg"
        },
         {
          id:3,
        name:"onine",
        price: 600,
        weight:6,
        unit:"kg"
        },
         {
          id:4,
        name:"Broccoli",
        price: 2000,
        weight:4,
        unit:"kg"
        },
      
        {
          id:5,
         name:"carrot",
         price: 300,
          weight:2,
          unit:"kg"
            },


]

const[name,setName]=useState(color);
const[detail,setDetail]=useState([]);


     ///delete button
  var y=(z,i)=>{
  var fun=name.filter((g,h)=>{
     return i===h ? "":g
  })
    setName(fun);
     function fil(n,m){
            
    } 
    
  }

    //filter button
    var r=(a,k)=>{
       console.log(a);
       var we=color.filter((t,r)=>{
          return a.weight < t.weight ?  t:""
       })
       console.log(we);
       setDetail(we);
  }
       //ascending button descending button

  var asc=(x)=>{ 
        //  console.log(c);
     if(x==="AN")
     {
        var u=[...name].sort((b,f)=>{
            var q=b.name.toLowerCase();
            var h=f.name.toLowerCase();
            return q.localeCompare(h)
        })
        console.log(u);
        setName(u);
     }
    
     else 
     {
          var v=[...name].sort((o,p)=>{
              return o.price-p.price
          })
          console.log(v);
          setName(v);
      }


  }
 
  return (
    <div>
      <Table  colle={name} del={y} click={asc} fi={r}/>
      

      {detail.map((m,s)=>{
         return (
           <div key={s}>
            <h1>{m.name}</h1>
            <h5>{m.price}</h5>
            <h6>{m.weight}{m.unit}</h6>
            </div>
         )
      })}
    </div>
  );
}

export default Veg;
