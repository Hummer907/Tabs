import React, { useState } from 'react'
import Tab from './Tab'

const ListTabs = ({cities}) => {

   const[tabID,setTabID] = useState(1);

   function getTabContent(){
       const activeTabs =  cities.filter((city) =>{
            return city.id === tabID;
        })
        return (
            activeTabs[0].information
        )

   }
   

  return (
    <div>
        
        <div className='tabs'>
            {
                cities.map((city)=>{

                    if(tabID === city.id)  return <Tab key={city.id} title={city.name} active={"tab active"} setTabID={setTabID}  id={city.id}/>
                    return <Tab key={city.id} title={city.name} active={"tab"} setTabID={setTabID}  id={city.id}/>
                })
            }


        </div>
        
        <div className='panel'>
            <p>{

                getTabContent()
                
                }</p>
        </div>


    </div>
  )
}

export default ListTabs