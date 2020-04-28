import React from 'react';
 
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Row,Col ,ListGroup, ListGroupItem} from 'reactstrap';
 
import './LeadDashboard.css';
import AddDepModal from './AddDepModel';
class Test extends React.Component{
  constructor(props){
    super(props);
    this.state={
        data:[],
        toggle:false,
        value:"",
        id:""
        

    }
    this.toggleButton=this.toggleButton.bind(this);
  
    }
    toggleButton(event){
        this.setState({toggle:!this.state.toggle,
            value: event.target.value  ,
            id:event.target.id
            

        })
    }
    componentDidMount(){
        fetch("http://localhost:8000/api/lead/")
        .then((Response)=>
                Response.json())
                .then((findresponse)=>
                {
                    console.log(findresponse)
                    this.setState({
                        data:findresponse,
                    })
                })
    }
    render(){
        let depModalClose=()=>this.setState({toggle:false})
        
        return(
            <div>
                 <Container className="themed-container" fluid="md">
                    <div className="block-example border border-dark">
                            <h1 className="text-center">Lead Dashboard</h1>
                                <br></br>
                                <Row>
                                    <Col> 
                                            <ListGroup>
                                            <ListGroupItem color='success'>New</ListGroupItem>
                                                {
                                                this.state.data.map((dynamicData,key)=>
                                            
                                                {
                                                if (dynamicData.Status === "New") {
                                                    return (
                                                    <div> 
                                                 
                                                 <ListGroupItem tag="button" onClick={this.toggleButton}  value={dynamicData.Title} id={dynamicData.Status} action>{dynamicData.Title}</ListGroupItem>
                                                 <AddDepModal show={this.state.toggle} onHide={depModalClose} value1={this.state.value} id1={this.state.id} />
                                                    </div>
                                                    )
                                                }})
                                            }
                                           

                                            
                                            </ListGroup>
                                    </Col>
                                    <Col> 
        
                                    <ListGroup>
                                            <ListGroupItem color='success'>Accepted</ListGroupItem>
                                            {
                                                this.state.data.map((dynamicData,key)=>
                                            
                                                {
                                                if (dynamicData.Status === "Accepted") {
                                                    return (
                                                    <div> 
                                                 
                                                 <ListGroupItem tag="button" onClick={this.toggleButton}  value={dynamicData.Title} id={dynamicData.Status}   action>{dynamicData.Title}</ListGroupItem>
                                                 <AddDepModal show={this.state.toggle} onHide={depModalClose} value1={this.state.value} id1={this.state.id}/>
                                                    </div>
                                                    )
                                                }})
                                            }
                                    </ListGroup>
                                    </Col>
                                    <Col>
                                    <ListGroupItem color='success'>Pitched</ListGroupItem>

                                    </Col>
                                    <Col>
                                    <ListGroupItem color='success'>Response Generated</ListGroupItem>

                                    </Col>
                                </Row>
                        </div>
                        </Container>

                </div>

        )
    }
}
export default Test;