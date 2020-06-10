// import
// import React from 'react'

import { BrowserRouter } from "react-router-dom"

// import Home from './Home'
// import Dashboard from './Dashboard2'

// import Signin from './Signin'

// export default function Routerpage(props){

//     return(
//         <div>
//             <Router> 
//             {/* <Redirect to="/adminhome"/>*/ }
//             <div>
           
//                 <Route path="/" component={Home} />
//                  <Route path="/dashboard" component={Dashboard} />
        
               
//                 <Route path="/signup" component={Signin} />
                
//             </div>
//             </Router>
//         </div>
    
//     )
    
    
//     }

import React from 'react'
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Home from './Userinterface'
import Dashboard from './Dashboard2'

import Signin from './Signin'

export default function Routerpage(){
    return(
        <div>
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/signin' component={Signin}/>
            </Router>
        </div>
    )
}
