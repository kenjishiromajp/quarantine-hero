import React, { useState } from 'react';
import HelpRequestForm from '../../components/HelpRequestForm';
import { API_URL } from '../../constants';

const HelpRequestFormContainer = (props) => {
  const [loading, setLoading] = useState(false);
  const createHelpRequest = (helpRequest) => {
    return fetch(`${API_URL}/posts`, {
      method: "POST",
      body: JSON.stringify(helpRequest),
    });
  };
  const handleFinish = async ( { helpRequest } ) => {
    setLoading( true );
    try{
      await createHelpRequest( helpRequest );
      setLoading( false );
    }catch(err){
      setLoading( false );
    }
  };
  return <HelpRequestForm loading={loading} onFinish={handleFinish} {...props} />
};

export default HelpRequestFormContainer;
