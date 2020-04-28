import React from 'react';
import './CSS/form.css';
// import Modal1 from './Modal1';


import {Modal,Container,Row,Col,ButtonGroup,Button,ListGroup, ListGroupItem, Badge,Form,ButtonToolbar} from 'reactstrap';

class ApiGet extends React.Component{
        constructor(props){
            super(props);
            this.state={
                data:[]
                };



            }
        componentDidMount(){
                fetch("http://127.0.0.1:8000/", {
                    headers: {
                        'Authorization': "JWT " + localStorage.getItem('token'),
                        'Content-Type': 'application/json',
                        'accept': 'application/json'
                    }
                }).
                then((Response)=>
                Response.json()).
                then((findresponse)=>
                {
                console.log(findresponse)
                this.setState({
                data:findresponse
                })
                })

            }
            render(){
              
            return(
              
            
            <div class="form">
            {
            this.state.data.map((dynamicData,key)=>
             
                   <Container className="themed-container" fluid="md">
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <span>
                                {dynamicData.Title}
                            </span>

                        </Col>

                    <Col sm={{ size: 'auto', offset: 2 }}>
                       <span>
                      {dynamicData.Url}
                      </span>
                          </Col>
                  </Row>


                  <Row>

                           <Col sm={{ size: 'auto', offset: 1 }}>
                         <span>
                        {dynamicData.Description}
                        </span>
                        </Col>
                  </Row>


                   <br></br>
                   <br></br>
                   <br></br>
                  <div className=" border border-dark">
                  <Form>
                      <span>
                      Prospect Details
                     </span>

                     <Row>
                          <Col sm={{ size: 'auto', offset: 1 }}>
                               <span>
                             {dynamicData.FullName}
                              </span>
                          </Col>
                    </Row>
                    <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                         <span>
                        {dynamicData.Email}
                        </span>
                        </Col>
                    </Row>
                     <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                        <span>
                        {dynamicData.Company}
                        </span>
                        </Col>
                         <Col sm={{ size: 'auto', offset: 5}}>
                        {dynamicData.Phone}
                        </Col>
                    </Row>
                    <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                        {dynamicData.SkypeID}
                        </Col>

                    </Row>
                    </Form>
           </div>
           <Row>
                   <Col xs="6" sm="4">
               <span>Attachment</span>
               </Col>
                   <Col xs="6" sm="4">
               <span>{dynamicData.Attachment} </span>
               </Col>
           </Row>
          </Container>
            )}
            </div>
             
            )
             

            }
}
export default ApiGet;
 