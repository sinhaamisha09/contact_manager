import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
      super(props);
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit,bind(this);
          
          this.state = {
          id: null,
          name: {first_name: "", last_name: ""},
          email: "",
          phone: "",
          status: "inactive",
          editing: false
          }
   }
   handleChange(e){
    this.setState({ 
        [e.target.name]: e.target.value })
    }

   addContactItem(e){
      e.preventDefault();
      const newContact = {
          id,
          name: {first_name, last_name},
          email,
          phone,
          status
      }
      this.setState = {
          name: {first_name: "", last_name: ""},
          email: "",
          phone: "",
          status: ""
       } 
      this.props.createContact(newContact) 
  }

  deleteContact(e, index){
      e.preventDefault();
      this.props.deleteContact(index);
  }    


  render() { 
   const { name:{first_name, last_name}, email, phone, status } = this.state;
      return (
        <div className="App">
          <div className="row App-main">
            <ContactList 
              contacts= {contacts} 
              deleteContact={this.deleteContact}
              statusContact={this.statusContact}
              editContact={this.editContact}
            />
          </div>
          <div className="row App-main">
          { 
            editing  ? (
            <EditConatact 
             first_name={this.state.first_name}
             last_name={this.state.last_name}
             email={this.state.email}
             phone={this.state.phone} 
             handleInputChange={this.handleInputChange}
             setEditing={this.setEditing}
             updateContact={this.updateContact}
            />
            ) : (
            <AddContact 
              first_name={this.state.first_name}
              last_name={this.state.last_name}
              email={this.state.email}
              phone={this.state.phone} 
              handleInputChange={this.handleInputChange} 
              addContact={this.addContact}
            />
            )
          }
          </div>
        </div>
      );
  }
}

export default App;
