//admin parent component that runs contains the router for all the tabs once login is completed
import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';

import fire from 'constants/Fire';
import * as ROUTES from 'constants/routes'
import 'admin/Admin.scss'
import {load_collections} from 'admin/LoadFunctions/LoadTemplate'
import AdminNavigation from './AdminNavigation';

import AdminComponent from 'admin/components/TemplateAdminStuff/AdminComponent'
// import LocationComponent from 'admin/components/Locations/LocationComponent'
// import PersonnelComponent from 'admin/components/Personnel/PersonnelComponent'
// import CalendarComponent from 'admin/components/Calendar/CalendarComponent'
// import AnnouncementComponent from 'admin/components/Announcement/AnnouncementComponent'


class AdminPage extends Component {
    constructor(props) {
        super();
        this.logout = this.logout.bind(this);
        // this.state ={
        //     template: [],
        //     about_arr: [],
        //     services_arr: [],
        //     primaryContent_arr: [],
        //     testimonials_arr: [],

        //     template_image: null
        // }      
    }
    
    
    //logs user out of admin component suite
    logout() {
        fire.auth().signOut();
    }
    
    //basic router rendering that loads the collectionNames per components as props to the respective sub pages
    render() {
        return (
            <Router>
                <div className="App">
                    <h1>Admin Page Component Suite</h1>
                    <h2>Click on one of the links below!</h2>
                    <AdminNavigation/>
                        <Route exact path={ROUTES.DEV_TEMPLATE} 
                        render = {props =>
                            <AdminComponent collectionName={load_collections[4]}/>
                            }
                        />
                        {/* <Route exact path={ROUTES.DEV_LOCATIONS} 
                        render = {props =>
                            <LocationComponent collectionName={load_collections[0]}/>
                            }
                        />
                        <Route exact path={ROUTES.DEV_PERSONNEL} 
                        render = {props =>
                            <PersonnelComponent collectionName={load_collections[1]}/>
                            }
                        />
                        <Route exact path={ROUTES.DEV_ANNOUNCEMENTS} 
                        render = {props =>
                            <AnnouncementComponent collectionName={load_collections[3]}/>
                            }
                        />
                        <Route exact path={ROUTES.DEV_CALENDAR} 
                        render = {props =>
                            <CalendarComponent collectionName={load_collections[2]}/>
                            }
                        /> */}
                    
                    
                    <button className="backend-field" onClick={this.logout}>log out</button>
                </div>
                
            </Router>
            
        );
    }
}
export default AdminPage;