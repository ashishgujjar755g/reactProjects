import React from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children,authentication=true}) {
const navigate = useNavigate();
const [loader,setLoader] = React.useState(true);
const authStatus = useSelector((state) => state.auth.status);

React.useEffect(() => {
      //TODO: make it more easy

//    if(authStatus === true){
//       navigate("/")
//    }
//    else if(authStatus === false){
//       navigate("/login")
//    }


    if(authentication && authStatus !== authentication){
            navigate("/login");
    }
    else if(!authentication &&authStatus !== authentication){
            navigate("/");
    }
    setLoader(false);
}, [authStatus],navigate,authentication);

  return(
     loading ? (
        <div className="flex items-center justify-center w-full h-screen">
          <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        </div>
      ) : (
        <div className="w-full h-full">
          {children}
        </div>    
  )
)
}

export default Protected