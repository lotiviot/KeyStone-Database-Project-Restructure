//admin parent component that runs contains the router for all the tabs once login is completed
import React, { Component } from 'react';
import fire from 'constants/Fire';
import 'admin/Admin.scss'
import {load_collections} from 'admin/LoadFunctions/LoadTemplate'
import AdminComponent from 'admin/components/AdminComponent'



class AdminPage extends Component {
    constructor(props) {
        super();
        this.logout = this.logout.bind(this);
            
    }
    

    logout() {
        fire.auth().signOut();
    }
    

    render() {
        return (
                <div className="App">
                    <h1>Admin Page Component Suite</h1>
                    <AdminComponent collectionName={load_collections[4]}/>
                    <button className="backend-field" onClick={this.logout}>log out</button>
                </div> 
        );
    }
}
export default AdminPage;