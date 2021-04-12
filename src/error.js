import React, {useState} from 'react';
import {Alert, Button} from 'react-bootstrap';

function Error({cityErrMsg, weatherErrMsg}) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Error!</Alert.Heading>
        <p>{cityErrMsg}</p>
        <p>{weatherErrMsg}</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Display Error Message</Button>;
}

export default Error;