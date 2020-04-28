import React, { Component } from 'react';
import { Row,Col} from 'react-bootstrap';

class ResponseGenerated extends React.Component{
    constructor(){
        super();
        this.state={
            data:[],
             
        }

    }

    componentDidMount() {
         fetch("http://127.0.0.1:8000/comment", {
            headers: {
                    'Authorization': "JWT " + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                    }})
          .then((Response) =>
            Response.json())
          .then((findresponse) => {
            console.log(findresponse)
            this.setState({
              data: findresponse,
            })})
        
    }

    render(){
        return(
             
             
                <div>
                {
                this.state.data.map((dynamicData,key)=>
                {
                   if (dynamicData.accounts == this.props.id){
                return(
                <div>
                <Row>
                    <Col>{dynamicData.comment} </Col>
                    <Col>{dynamicData.created_date}</Col>
                </Row>
                </div>)}
               }
               )
               }</div>)
    
}
}
export default ResponseGenerated;