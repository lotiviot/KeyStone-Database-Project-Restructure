
//imports to handle basic functionality of the program component suite
import React, { Component } from 'react'
import {db , storage} from 'constants/Fire';
import uuid from "uuid";
import CheckboxContainer from './CheckboxContainer';
import GrabUrl from 'admin/LoadFunctions/GrabUrl';

//this import will need to be able to be flexible as necessary with whatever new backend component is introduced prefixed, Load
import load_notes from 'admin/LoadFunctions/LoadTemplate';

export default class AdminComponent extends Component {

    //base constructor that grabs collectionName from Props handle from the parent `Admin` component
    constructor(props){
        super(props);
        this.state = {
            //necessary for file and state variable handling
            dp_DocName: '',
            dp_TextArea: '',
            dp_Title: '',
            dp_key: uuid.v4(),

            //optional depending on the required functionality of the component
            dp_image: null,
            dp_PhotoPath: '',
            dp_PhotoURL: '',

            item: '',
            collectionName: this.props.collectionName
            }

        //necessary for file and state variable handling
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        //optional depending on the required functionality of the component 
        this.fileChange = this.fileChange.bind(this)
    }

    //implementation of required and optional state changes
    handleChange(e) {this.setState({[e.target.name]: e.target.value })}
    handleSubmit(e){e.preventDefault();this.AddDoc(e);}
    fileChange(e) {this.setState({dp_image: e.target.files[0]})}

    //sets the state of checkbox container.
    //maybe we can adjust this to load early so admin component loads with the rest of component? 
    //componentWillMount() maybe?
    componentDidMount(){
        load_notes().then(i => {this.setState({item: i})})
    }

    //basic implementation of pushing a document to firebase
    AddDoc = async(e) => {

        //photo specific file creation and push that also fetches URL for simpler data request
        const dp_PhotoPath = this.state.collectionName+'/'+this.state.dp_image.name
        await storage.ref(dp_PhotoPath).put(this.state.dp_image)
        var dp_PhotoURL = await GrabUrl(dp_PhotoPath)
        console.log(dp_PhotoURL)
         
        //object creation
        const doc = {
            DocName: this.state.dp_DocName,
            TextArea: this.state.dp_TextArea,
            Title: this.state.dp_Title,
            key: this.state.dp_key,
            PhotoPath: dp_PhotoPath,
            PhotoURL: dp_PhotoURL
        }

        //firestore object creation with error checking
        await db.collection(this.state.collectionName)
            .doc(doc.DocName)
            .set(doc)
            .then(
                function() { 
                    console.log("check it");
                })
                .catch(function(error){
                    console.error("wrong",error);
                })
        
        //data reset. 
        //maybe once this is complete we could have the page refresh immediately?
        this.setState({
            dp_DocName: '',
            dp_TextArea: '',
            dp_Title: '',
            dp_key: uuid.v4(),
        }) 
        alert("Refresh the page to see changes!")
    }
    

    render() { 
        return (
            //whole return for form and checkbox
            <div>
                {/*form html */}
                <form onSubmit={this.handleSubmit}>
                    <h3 className="h4 text-center mb-4">Template Component: {this.state.dp_name}</h3>
                        <input 
                            value={this.state.dp_DocName} 
                            onChange={this.handleChange} 
                            type="text" 
                            name="dp_DocName" 
                            id="dp_DocName" 
                            placeholder="Document Name" 
                        />
                        <input 
                            value={this.state.dp_Title} 
                            onChange={this.handleChange} 
                            type="text" 
                            name="dp_Title" 
                            id="dp_Title" 
                            placeholder="Title" 
                        />
                        <textarea 
                            value={this.state.dp_TextArea} 
                            onChange={this.handleChange} 
                            type="text" 
                            name="dp_TextArea" 
                            id="dp_TextArea" 
                            placeholder="Text Area" 
                        />
                        <input 
                            type="file"
                            onChange={this.fileChange}
                        />
                        <input type="submit" value="Submit"/>
                </form>
        {/*implementation and loading of checkbox container system */}
        {this.state.item.length > 0 && <CheckboxContainer item={this.state.item} collectionName={this.state.collectionName}/>}
        </div>
        )
    }
}

