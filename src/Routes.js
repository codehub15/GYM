import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Membership from './pages/Membership'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/membership" component={Membership} />
            <Route path="/contact" component={Contact} />
            <Route path="/sign-up" component={SignUp} />
        </Switch>
    )
}
