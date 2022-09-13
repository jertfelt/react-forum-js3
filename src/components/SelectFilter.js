import { useState } from "react";

const SelectFilter = ({array}) => {

  //lägger in manuellt så länge, på sikt ska jag rendera ut options genom att mappa och filtrera arrayen (arrWithNames) 

let options = [{
  id:1,
  userName: "Hannes Fredriksson"},
  {
    id:2,
    userName: "Fredrika Karlsson"},
    {
      id:3,
      userName: "Örjan Hjalmarsson"},
    {id:4,
    userName: "Teodor Lundell"},
  {id:5,
  userName:"Kajsa-Lisa Marklund"},
{id:6,
userName: "Beatrice Skata"},
{id:7,
userName: "Brandon Malmström"},
{id:8,
userName:"Leonidas Lundell" },
{id: 9,
userName: "Makode Linde"},
{id: 10,
userName: "Alice Fux"},
{id:11,
userName: "Tova Johansson Jertfelt"}];



  return ( 
  <>
              {
                options.map((option, index) => (
                  <option 
                  key= {index + 10}
                  //value={index+1}
                  value={option.userName}>{option.userName}</option>
                ))
              }
         
              
         </>      
   );
}
 
export default SelectFilter;