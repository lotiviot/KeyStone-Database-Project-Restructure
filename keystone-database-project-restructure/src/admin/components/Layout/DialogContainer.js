import React, { Component } from 'react'
//import { button } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import DialogWrapper from 'admin/components/Dialog/DialogWrapper.js'
import './DialogContainer.scss'


//simple routing template that uses routes established in constants/routes to build simple backend navbar
export default function DialogContainer(props) {
    
        return (
            

            <nav id = "top_menu">
                <ul>
                <li className ="li"><DialogWrapper label ="Upload"/></li>
                <li className ="li"><DialogWrapper label ="Delete" selectedData={props.selectedData}/></li>
                 <li className ="li"><DialogWrapper label ="Filter"/></li>
                {/*<li className ="li"><DialogWrapper label ="Email"/></li>
                <li className ="li"><DialogWrapper label ="Group"/></li>
                <li className ="li"><DialogWrapper label ="Sum"/></li>
                <li className ="li"><DialogWrapper label ="Export"/></li>
                <li className ="li"><DialogWrapper label ="Import"/></li> */}
                </ul>
            </nav>
            
        )
}
