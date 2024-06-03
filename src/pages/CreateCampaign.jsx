import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import Money from '../assets/Money';
import { CustomButton, FormField } from '../components';
import { checkIfImage } from '../utils';
import "../styles/Home.css";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className='create-campaign-container'>
      {isLoading && 'Loader...'}
      <div className='header-container'>
        <h1 className='header-title'>Start a Campaign</h1>
      </div>

      <form onSubmit={handleSubmit} className='form-container'>
        <div className='form-row'>
          <FormField
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField
            labelName="Campaign title *"
            placeholder="Title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>

        <FormField
          labelName="Story *"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange('description', e)}
        />

        <div className='highlight-container'>
          <div className='highlight-icon'>
            <Money />
          </div>
          <h4 className='highlight-text'>YOU WILL GET 100% OF THE RAISED AMOUNT</h4>
        </div>

        <div className='form-row'>
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
        </div>

        <FormField
          labelName="Campaign image"
          placeholder="Image URL"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange('image', e)}
        />

        <div className='submit-button-container'>
          <CustomButton
            btnType="submit"
            title="Submit new Campaign"
            styles="submit-button"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
