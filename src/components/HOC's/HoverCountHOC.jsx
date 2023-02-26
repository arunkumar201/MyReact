import React, { Component } from 'react'
import newUpdatedComponent from "./HigherOrderFun";
 class HoverCountHOC extends Component {
   render(props) {
     let { count, incrementCount ,name} =this.props;
     return (
       <>
         <div>
           <h1 onMouseOver={incrementCount}>Total Hovered Count {count}</h1>
           <p>My Name is {name}</p>
         </div>
       </>
     );
   }
 }
export default newUpdatedComponent(HoverCountHOC,20);
