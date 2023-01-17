import React from "react";
import {HashRouter,Route, Switch} from 'react-router-dom';

class RouterConfig extends React.Component {
  render(): React.ReactNode {
    return (
      <HashRouter>
        {/* 注册路由 */}
        <Switch>
          <Route exact path="/" render={()=> {return (<div> home </div>)}} />
          <Route path="/about" render={()=> {return (<div> about </div>)}} />
          <Route path="/topics" render={()=> {return (<div> topics </div>)}} />
        </Switch>
      </HashRouter>
    );
  }
}

export default RouterConfig;
