import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import {HashRouter} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import Mobile from './Mobile'
import Electricity from './Electricity'
import Recharge from './Recharge'

ReactDOM.render(<HashRouter>
<Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/PaytmRedux' component={App} />
    <Route exact path='/mobile' component={Mobile} />
    <Route exact path='/electricity' component={Electricity} />
    <Route exact path='/recharge' component={Recharge} />
</Switch>
</HashRouter>,document.getElementById('root'));