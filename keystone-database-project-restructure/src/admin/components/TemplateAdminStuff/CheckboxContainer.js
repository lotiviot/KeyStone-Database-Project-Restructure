import React from 'react';
import Checkbox from '../../LoadFunctions/Checkbox';
import { db , storage } from 'constants/Fire';

//checkbox container component which presents the information that is given from props as well as handles the deletion of any information in the container
class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map(),
      item: this.props.item,
      collectionName: this.props.collectionName
    }
    this.handleChange = this.handleChange.bind(this);
    this.DeleteDocument = this.DeleteDocument.bind(this);

  }

  //only possible change is an item being checked or not so checks the item so that the item can be added to checkedItems
  handleChange(e) {
    const item = e.target.value;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked)}));
}
//based off of index, finds the related doc name and references the doc Name in the firestore to delete that item, for every item in checkedItems
  DeleteDocument(e) {  
    this.state.checkedItems.forEach((currElement, index) => 
         {
          console.log(index)
          this.state.item.forEach(e => {
            if(e.DocName === index) {
              db.collection(this.state.collectionName).doc(index).delete()
              var ref = storage.ref(e.PhotoPath)
              console.log(ref)
              ref.delete()
            }
          })
          
         })
       alert("Refresh the page to see the changes!")
  }

  //this is a simple render component that consider the usage of photos can be adjust for non photos as well
  render() {
    return (
      <div>
        {
          this.state.item.map(i => {
            return (
            <label name={i.DocName} key={i.key}>
              <Checkbox 
                name={i.DocName}
                value={i.DocName}
                checked={this.state.checkedItems.get(i.name)} 
                onChange={this.handleChange}
              />
              {i.DocName}
              <img src={i.PhotoURL} alt={'Photo of'+ i.Title}/>
              <h3>{i.Title}</h3>
              <h5>{i.TextArea}</h5>
            </label>
          )})
        }
        <button onClick={this.DeleteDocument}>Delete Selected</button>    
      </div>
    );
  }
}

export default CheckboxContainer;
