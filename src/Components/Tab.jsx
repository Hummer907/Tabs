import React from 'react'

const Tab = ({title ,active ,id,setTabID}) => {

    function handleSwitchTab(){
        console.log(id)
            setTabID(id);
    }


  return (
    <div className={active} onClick={handleSwitchTab}>
        {title}
    </div>
  )
}

export default Tab