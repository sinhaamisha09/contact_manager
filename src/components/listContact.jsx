import React from 'react';

  const ContactList = (props) => {
    return (  
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            { 
              props.contacts.length > 0 ? (
                props.contacts.map((contact) => (
                    <tr key={contact.id}>
                      <td>{ contact.id }</td>
                      <td>{ contact.first_name } { contact.last_name }</td>
                      <td>{ contact.email }</td>
                      <td>{ contact.phone }</td>
                      <td>{ contact.status }</td>
                      <td>
                        <button className="btn btn-primary ml-2" onClick={() => props.editContact(contact) }>Edit</button>
                        <button className="btn btn-danger ml-2" onClick={() => props.deleteContact(contact.id) }>Delete</button>
                        <button className="btn btn-info ml-2" onClick={() => props.statusContact(contact) }>
                          { contact.status ? 'active' : 'inactive' }
                        </button>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td colSpan={3}>No Contact Added</td>
                </tr>
              )
            }
        </tbody>
      </table>
    );
  }


export default ContactList;