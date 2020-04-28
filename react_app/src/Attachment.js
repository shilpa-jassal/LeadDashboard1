import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './Attechments.css';
import { Row, Col, Modal, Button } from 'reactstrap';
class Attachment extends Component {

    render() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <h3>Attechments</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <p>Computer</p>
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <p>Google Drive</p>
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <div className="externallinks">
                                    <p>External Links</p>
                                </div>
                            </Col>
                        </Row>
                        <Row  >
                            <Col sm={{ size: 'auto', offset: 1 }} className="lnk">
                                <br></br>
                                <br></br>
                                <br></br>
                                <label for="http">http://</label>
                                <input type="text" id="http" className="http" /><br></br>
                                <br></br>
                                <button type="submit" className="add">Add</button>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}
export default Attachment;