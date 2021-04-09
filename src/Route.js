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
import Apple from './pages/Other';
import Tab from './pages/Tab/index';

import One from './pages/Content/One/index';
import Two from './pages/Content/Two/index';


class Routes extends Component {
   render() {
      return (
         <Router>
            <Switch>
               {/* <Route path="/" component={App}>
                  {/* <Redirect to='app' component={App} />
               </Route>   */}
               <Route path="/tab"   component={Tab} />
               <Route path="/apple"   component={Apple} />
               <Route path="/"  exact component={App} />
               <Route path="/one"  component={One} />
               <Route path="/two"   component={Two} />
            </Switch>
         </Router>
      )
   }
}
export default Routes