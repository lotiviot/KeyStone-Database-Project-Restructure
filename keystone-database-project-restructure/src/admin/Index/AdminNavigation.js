import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';


//simple routing template that uses routes established in constants/routes to build simple backend navbar
export default class AdminNavigation extends Component {
    render() {
        return (
            <div style={{padding: "10px"}}>
                <Link to={ROUTES.DEV_TEMPLATE} style={{padding:"10px"}}>Template</Link>
                {/* <Link to={ROUTES.DEV_LOCATIONS} style={{padding:"10px"}}>Locations</Link>
                <Link to={ROUTES.DEV_PERSONNEL} style={{padding:"10px"}}>Personnel</Link>
                <Link to={ROUTES.DEV_ANNOUNCEMENTS} style={{padding:"10px"}}>Announcements</Link>
                <Link to={ROUTES.DEV_CALENDAR} style={{padding:"10px"}}>Calendar</Link> */}
            </div>
        )
    }
}
