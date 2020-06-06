import React from "react"

class AddContact extends React.Component {

    render() {
        return(
            <div>
                <h2>ADD CONTACT</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/><br />
                    <input type="submit" className="btn btn-success" value="ADD"/>
                </form>
               
                ///
                <form onSubmit={ props.addContactItem } className="col-sm-4">
                <div>
                    <div>
                        <label className="text-white">First Name</label>
                        <input  className="form-control" type="text" name="first_name" value={props.first_name} onChange={ props.handleInputChange}/>
                    </div>
                    <div>
                        <label className="text-white">Last Name</label>
                        <input className="form-control" type="text" name="last_name" value={props.last_name} onChange={ props.handleInputChange}/>
                    </div>
                    <div>
                        <label className="text-white">Email</label>
                        <input className="form-control" type="email" name="email" value={props.email} onChange={ props.handleInputChange}/>
                    </div>
                    <div>
                        <label className="text-white">Phone</label>
                        <input className="form-control" type="number" name="phone" value={props.phone} onChange={ props.handleInputChange} />
                    </div>
                    <button className="btn btn-success" > Add Contact </button>
                </div>
                </form>
            </div>
        )
    }
}
// const mapStateToProps = (state, ownProps) => {
//     return {
//       contacts: state.contacts
//     }
// };

// const mapDispatchToProps = (dispatch) => {
// return {
//     createContact: contact => dispatch(contactAction.createContact(newContact)),
//     deleteContact: index =>dispatch(contactAction.deleteContact(index))
// }
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
  