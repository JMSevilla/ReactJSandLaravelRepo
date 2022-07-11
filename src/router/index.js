import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { externalURI } from './route'
import Home from '../pages/Home'


const RouteWithLoad = ({component : Component, ...rest}) => {
    return(
        <>
            <Route
                {...rest}
                render={
                    props => (
                        <>
                            <Component {...props} />
                        </>
                    )
                }
            />
        </>
    )
}

//Dynamic Routing Management

export default () => (
    <Switch>
        <RouteWithLoad 
        exact path={externalURI.Homepage.path}
        component={Home}
        />
    </Switch>
)
