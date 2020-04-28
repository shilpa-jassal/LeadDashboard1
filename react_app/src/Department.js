import {Button,ButtonToolbar} from 'react-bootstrap';
import AddDepModal from './AddDepModel';
 
import React from 'react';
class Department extends React.Component{
    constructor(props){
        super(props);
        this.state={
             toggle1 : false
             
        };
        this.toggle=this.toggle.bind(this);
        }
    toggle(e) {
        
        this.setState({ toggle1:!this.toggle1  });
    }
    render()
    {
        let addModalClose=()=>this.setState({toggle1:false})

        return(
            <div> 
            <ButtonToolbar>
               <Button onClick={this.toggle}> 
                   AddDept
               </Button>
                <AddDepModal show={this.state.toggle1} onHide={addModalClose} />
            </ButtonToolbar>
             
            </div>
        )
    }
}
export default Department;