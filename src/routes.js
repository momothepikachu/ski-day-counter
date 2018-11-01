import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import { App, Whoops404 } from './components'
import SkiDayCount from './components/containers/SkiDayCount'
import AddDayForm from './components/containers/AddDayForm'
import SkiDayList from './components/containers/SkiDayList'


class Routes extends Component {
    render() {
      return (
        <div>
            <Route component={App}/>
            <Switch>
                <Route exact path="/" component={SkiDayCount}/>               
                <Route path="/add-day" component={AddDayForm}/>
                <Route exact path="/list-days" component={SkiDayList}/>
                <Route path="/list-days/:filter" component={SkiDayList}/>
                <Route component={Whoops404}/>
            </Switch>
        </div>

      );
    }
  }
    
export default Routes;

