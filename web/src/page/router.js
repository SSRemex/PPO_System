import React from "react";
import {HashRouter,Route, Switch} from 'react-router-dom';
import AdminIndex from "./admin/index";
import ProjectSource from "./admin/source";
import ProjectProgress from "./admin/progress";
import MemberManager from "./admin/member";

class RouterConfig extends React.Component {
  render() {
    return (
      <HashRouter>
        {/* 注册路由 */}
        <Switch>
          <Route exact path="/" render={()=> {return <AdminIndex />}} />
          <Route path="/index" render={()=> {return <AdminIndex />}} />
          <Route path="/projectSource" render={()=> {return <ProjectSource />}} />
          <Route path="/projectProgress" render={()=> {return <ProjectProgress />}} />
          <Route path="/memberManager" render={()=> {return <MemberManager />}} />
        </Switch>
      </HashRouter>
    );
  }
}

export default RouterConfig;
