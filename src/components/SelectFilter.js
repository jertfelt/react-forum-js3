import { useState } from "react";

const SelectFilter = ({array}) => {

  
let options = [1,2,3,4,5,6,7,8,9,10];

// console.log("options:", options)
// let filterList = listItems.filter(item => {
// return item.userId === chosenValue;
// })

// let optionsList = array.filter(item => {
//   return item.userId; 
// })

  return ( 
  <>
              {
                options.map((option, index) => (
                  <option 
                  key= {index + 10}
                  value={index +1}>{index +1}</option>
                ))
              }
         
              
         </>      
   );
}
 
export default SelectFilter;