import React from 'react'

const EditContact = props => {
  return (
    <form className="col-sm-4">
      <div>
        <div>
          <label className="text-white">First Name</label>
          <input type="text" name="first_name" value={props.first_name} onChange={ props.handleInputChange}/>
        </div>
        <div>
          <label className="text-white">Last Name</label>
          <input type="text" name="last_name" value={props.last_name} onChange={ props.handleInputChange}/>
        </div>
        <div>
          <label className="text-white">Email</label>
          <input type="email" name="email" value={props.email} onChange={ props.handleInputChange}/>
        </div>
        <div>
          <label className="text-white">Phone</label>
          <input type="number" name="pone" value={props.phone} onChange={ props.handleInputChange} />
        </div>
        <div>
          <label className="text-white">Status</label>
          <input type="text" name="status" value={props.status} onChange={ props.handleInputChange} />
        </div>
        <button onClick={ props.contact }> Update </button>
        <button onClick={() => props.setEditing(false)}>Cancel</button>
      </div>
    </form>
  )
}

export default EditContact;