import React, { useState } from 'react';
import AddForm from './AddForm';
import ShowForm from './ShowForm';
import '../Styles/form.css';

function MainForm() {
  const [formField, setFormField] = useState([]);
  const [formData, setFormData] = useState({});
  return (
    <div className="mainWrapper">
      <div className="AddForm">
        <AddForm
          formField={formField}
          setFormField={setFormField}
          setFormData={setFormData}
          formData={formData}
        />
      </div>
      <div className="ShowForm">
        <ShowForm formField={formField} formData={formData} setFormData={setFormData} />
      </div>
    </div>
  )
}

export default MainForm;