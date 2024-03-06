import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const loginDetails =[
  {
    title : 'Username'
  },
  {
    title : 'Password'
  }
];

function LoginModal() {
  return (
    <div
      className="modal show modal-lg modal-dialog"
      style={{ display: 'flex', justifyContent: 'center'}}
    >
      <Modal.Dialog style={{width: '75%'}}>
        <Modal.Header style={{backgroundColor: 'teal'}} closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form style={{height: '250px'}}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" style={{width: '90%'}}>
              {loginDetails.map((val, key) => {
                return <Form>
                    <Form.Label key={key} column sm="2">
                      {val.title}
                    </Form.Label>
                    <Col sm="10" >
                      <Form.Control key={key} type={val.title} placeholder={val.title} />
                    </Col>
                  </Form>
              })}
            <Form.Check 
              type='checkbox'
              label="Remember Me"
            />
            <Button variant="link">Forget Password</Button>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer style={{backgroundColor: 'teal'}}>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Login</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default LoginModal;