import React, { Suspense, lazy, Component } from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   NavLink,
   Redirect,
   Link,
   withRouter,
} from "react-router-dom"
import { Divider } from 'antd';

import App from './App';
import Apple from './page/Other';
import Tab from './page/Tab/index';

import One from './page/Content/One/index';
import Two from './page/Content/Two/index';


class Routes extends Component {
   render() {
      return (
         <Router>
               {/* <Route path="/" component={App}>
                  {/* <Redirect to='app' component={App} />
               </Route>   */}
                 <Route path="/tab" component={Tab} />
               <Route path="/apple" component={Apple} />
               <Route path="/app" component={App} />
               <Route path="/" component={One} />
               <Route path="/two" component={Two} />
            </Router>
      )
   }
}
export default Routes