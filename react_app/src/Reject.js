import React from 'react';
import {Modal,Form,Row,Button} from 'react-bootstrap';
import axios from 'axios';
import './Comment.css';

class Reject extends React.Component{
    constructor(props) {
        super(props)
            this.state = {
            reject_reason:"",
            account_id: "",
            status:"Rejected"
            }
         }

         changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
		this.setState({account_id:this.props.id})
		}

		submitHandler = e => {
		e.preventDefault()
		console.log('reject',this.state);
        axios.post('http://127.0.0.1:8000/reject', this.state, {
            headers: {
                'Authorization': "JWT " + localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'accept': 'application/json'
                }
        })
        axios.put('http://127.0.0.1:8000/accounts/'+ this.props.id+'/', {status: "Rejected",}, {
            headers: {
                'Authorization': "JWT " + localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'accept': 'application/json'
                }
        })
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			})
        }

      render(){
            const {reject_reason} = this.state
       return(

                <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Reason for Rejection</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={this.submitHandler}>
           <Row>
                <textarea type='text' name='reject_reason' value={reject_reason} onChange={this.changeHandler} className="reject" placeHolder="Type Here....."/>
            </Row>
          <div>
          <Button type="submit"  className="rejectsubmit" value="submit" onClick={this.props.onHide} >Submit</Button>
           </div>
        </Form>
      </Modal.Body>
    </Modal>

            
        )
    }
}
export default Reject;