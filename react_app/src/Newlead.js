import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './Newlead.css';
import { Row, Col, Label, Button } from 'reactstrap';

const url1 = 'http://127.0.0.1:8000/';
class Newlead extends Component {
    constructor(state) {
        super(state)
        this.state = {
            title: '',
            description: '',
            source: '',
            url: '',
            domain: '',
            tags: '',
            technology: '',
            assign_to: '',
            estimated_budget: '',
            referred_by: '',
            attachment: '',
            full_name: '',
            email: '',
            company: '',
            designation: '',
            skype_id: '',
            street_address: '',
            city: '',
            state: '',
            country: '',
            phone: '',
            status: 'New',
            secondary_email2: [],
            secondary_phone2: [],
            data: [],
            error_title: '',
            error_description: '',
            error_source: '',
            error_url: '',
            error_domain: '',
            error_tags: '',
            error_technology: '',
            error_assign_to: '',
            error_estimated_budget: '',
            error_referred_by: '',
            error_attachment: '',
            error_full_name: '',
            error_email: '',
            error_company: '',
            error_designation: '',
            error_skype_id: '',
            error_street_address: '',
            error_city: '',
            error_state: '',
            error_country: '',
            error_phone: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getData() {
        fetch("http://localhost:8000", {
            headers: {
                'Authorization': "JWT " + localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'accept': 'application/json'
                }
            })
            .then((Response) =>
                Response.json())
            .then((findresponse) => {
                console.log(findresponse)
                // this.setState({data:findresponse})
            })
    }

    createUI() {
        return this.state.secondary_email2.map((el, i) =>
            <div key={i}>
                <input type="text" value={el || ''} onChange={this.handleChange.bind(this, i)} className="emailplus" />
                <input type='button' value='-' onClick={this.removeClick.bind(this, i)} className="add-icon" />
            </div>
        )
    }
    createUIPhone() {
        return this.state.secondary_phone2.map((q, r) =>
            <div key={r}>
                <input type="text" value={q || ''} onChange={this.handleChangePhone.bind(this, r)} className="phoneplus" />
                <input type='button' value='-' onClick={this.removeClickPhone.bind(this, r)} className="add-icon" />
            </div>
        )
    }
    handleChangePhone(r, event) {
        let secondary_phone2 = [...this.state.secondary_phone2];
        secondary_phone2[r] = event.target.value;
        this.setState({ secondary_phone2 });
    }
    handleChange(i, event) {
        let secondary_email2 = [...this.state.secondary_email2];
        secondary_email2[i] = event.target.value;
        this.setState({ secondary_email2 });
    }
    addClick() {
        this.setState(prevState => ({ secondary_email2: [...prevState.secondary_email2, ''] }))
    }
    addClickPhone() {
        this.setState(prevState => ({ secondary_phone2: [...prevState.secondary_phone2, ''] }))
    }
    removeClick(i) {
        let secondary_email2 = [...this.state.secondary_email2];
        secondary_email2.splice(i, 1);
        this.setState({ secondary_email2 });
    }
    removeClickPhone(r) {
        let secondary_phone2 = [...this.state.secondary_phone2];
        secondary_phone2.splice(r, 1);
        this.setState({ secondary_phone2 });
    }

    fileChangedHandler = (e) => {
        console.log(e.target.files[0])
        this.setState({ attachment: e.target.files[0] });
    }

    handleSubmit() {
        this.setState({
            title: '',
            description: '',
            source: '',
            url: '',
            domain: '',
            tags: '',
            technology: '',
            assign_to: '',
            estimated_budget: '',
            referred_by: '',
            attachment: '',
            full_name: '',
            email: '',
            company: '',
            designation: '',
            skype_id: '',
            street_address: '',
            city: '',
            state: '',
            country: '',
            phone: '',
            secondary_email2: [],
            secondary_phone2: [],
            data: [],
            error_title: '',
            error_description: '',
            error_source: '',
            error_url: '',
            error_domain: '',
            error_tags: '',
            error_technology: '',
            error_assign_to: '',
            error_estimated_budget: '',
            error_referred_by: '',
            error_attachment: '',
            error_full_name: '',
            error_email: '',
            error_company: '',
            error_designation: '',
            error_skype_id: '',
            error_street_address: '',
            error_city: '',
            error_state: '',
            error_country: '',
            error_phone: '',
        })
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    validateForm() {
        let error_title = "";
        let error_description = "";
        let error_source = "";
        let error_url = "";
        let error_domain = "";
        let error_tags = "";
        let error_technology = "";
        let error_assign_to = "";
        let error_estimated_budget = "";
        let error_referred_by = "";
        let error_attachment = "";
        let error_full_name = "";
        let error_email = "";
        let error_company = "";
        let error_designation = "";
        let error_skype_id = "";
        let error_street_address = "";
        let error_city = "";
        let error_state = "";
        let error_country = "";
        let error_phone = "";

        if (!this.state.title) {
            error_title = "*Please enter your title.";
        }

        if (typeof this.state.title !== "undefined") {
            if (!this.state.title.match(/^[a-zA-Z ]*$/)) {
                error_title = "*Please enter alphabet characters only.";
            }
        }

        if (!this.state.source) {
            error_source = "*Please select source.";
        }


        if (!this.state.description) {
            error_description = "*Description required";
        }

        if (!this.state.url) {
            error_url = "*Url required";
        }
        if (!this.state.domain) {
            error_domain = "*Please select domain";
        }

        if (!this.state.tags) {
            error_tags = "*Keywords/Tags required";
        }

        if (!this.state.technology) {
            error_technology = "*Please  select technology";
        }

        if (!this.state.estimated_budget) {
            error_estimated_budget = "*Please enter amount in dollar";
        }

        if (!this.state.referred_by) {
            error_referred_by = "*Please enter your reference";
        }

        if (!this.state.assign_to) {
            error_assign_to = "*Please select Assignee";
        }

        if (!this.state.full_name) {
            error_full_name = "*Please enter your full name";
        }

        if (!this.state.street_address) {
            error_street_address = "*Please enter your address";
        }

        if (!this.state.email) {
            error_email = "*Please enter your email-ID.";
        }

        if (typeof this.state.email !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
                error_email = "*Please enter valid email-ID.";
            }
        }

        if (!this.state.city) {
            error_city = "*Please enter city";
        }

        if (!this.state.company) {
            error_company = "*Please enter company name";
        }

        if (!this.state.state) {
            error_state = "*Please enter your state";
        }

        if (!this.state.designation) {
            error_designation = "*Please enter your designation";
        }

        if (!this.state.country) {
            error_country = "*Please enter your country";
        }

        if (!this.state.skype_id) {
            error_skype_id = "*Please enter your skype-ID";
        }

        if (!this.state.phone) {
            error_phone = "*Please enter your mobile no.";
        }

        if (typeof this.state.phone !== "undefined") {
            if (!this.state.phone.match(/^[0-9]{10}$/)) {
                error_phone = "*Please enter valid mobile no.";
            }
        }

        if (error_title || error_source || error_description || error_url || error_domain || error_tags
            || error_technology || error_estimated_budget || error_assign_to || error_referred_by || error_full_name
            || error_street_address || error_email || error_city || error_company || error_state || error_designation
            || error_country || error_skype_id || error_phone) {
            this.setState({
                error_title, error_source, error_description, error_url, error_domain, error_tags,
                error_technology, error_estimated_budget, error_assign_to, error_referred_by, error_full_name,
                error_street_address, error_email, error_city, error_company, error_state, error_designation,
                error_country, error_skype_id, error_phone
            });
            return false;
        }
        return true;
    }

    submitHandler = e => {
        e.preventDefault();
        const isValid = this.validateForm();
        if (isValid) {
            console.log(this.state)
            axios.post(url1, this.state, {
            headers: {
                'Authorization': "JWT " + localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'accept': 'application/json'
                }
        })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            this.setState(this.handleSubmit);
        }
    }

    refreshPage = e => {
        e.preventDefault();
        const isValid = this.validateForm();
        if (isValid) {
            console.log(this.state)
            axios.post(url1, this.state, {
                headers: {
                    'Authorization': "JWT " + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                    }
            })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
            window.location.reload(false);
        }
    }

    render() {
        const { title, description, source, url, domain, tags, technology, assign_to, estimated_budget, referred_by, attachment, full_name, email, company, designation, skype_id, street_address, city, state, country, phone } = this.state
        return (
            <div>
                {
                    this.state.data.map((dynamicData, key) => {
                        if (dynamicData.email === this.refs.email.value) {
                            return (
                                <div>
                                    {
                                        this.refs.full_name.value = dynamicData.full_name,
                                        this.refs.street_address.value = dynamicData.street_address,
                                        this.refs.email.value = dynamicData.email,
                                        this.refs.city.value = dynamicData.city,
                                        this.refs.company.value = dynamicData.company,
                                        this.refs.state.value = dynamicData.state,
                                        this.refs.designation.value = dynamicData.designation,
                                        this.refs.country.value = dynamicData.country,
                                        this.refs.skype_id.value = dynamicData.skype_id,
                                        this.refs.phone.value = dynamicData.phone
                                    }
                                </div>
                            )
                        }
                    })
                }
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <div>
                            <h4>New Lead</h4>
                        </div>
                    </Col>
                </Row>
                <form action="" method="post" name="form" enctype="multipart/form-data" onSubmit={this.submitHandler} id="create-course-form" required={this.required}>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <Label for="myid">Title*</Label><br></br>
                            <input type="text" name="title" value={title} onChange={this.changeHandler} className="title" autoFocus /><br></br>
                            <div style={{ color: "red", fontSize: "14px" }} className="errorMsgtitle">{this.state.error_title}</div>
                        </Col><br></br>
                        <Col sm={{ size: 'auto', offset: 4 }} >
                            <Label for="source" className="source">Source*</Label><br></br>
                            <select name="source" value={source} onChange={this.changeHandler} id="source" className="source">
                                <option>choose any one</option>
                                <option select>java</option>
                                <option select>php</option>
                            </select>
                            <div style={{ color: "red", fontSize: "14px" }} className="errorMsgsource">{this.state.error_source}</div>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <lable>Description</lable><br></br>
                            <textarea type="text" name="description" value={description} onChange={this.changeHandler} className="description" /><br></br>
                            <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_description}</div>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <Label for="url">URL</Label><br></br>
                            <input type="text" id="url" name="url" value={url} onChange={this.changeHandler} className="URL" /><br></br>
                            <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_url}</div>
                            <Label for="domain">Domain</Label><br></br>
                            <select id="domain" name="domain" value={domain} onChange={this.changeHandler} className="domain">
                                <option >choose any one</option>
                                <option select>yahoo</option>
                                <option select>google</option>
                            </select>
                            <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_domain}</div>
                            <br></br>
                            <Label for="keywords">Keywords/tags</Label><br></br>
                            <input type="text" id="keywords" name="tags" value={tags} onChange={this.changeHandler} className="Keywords" /><br></br>
                            <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_tags}</div>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                                <Label for="attechment">Attachment</Label>
                                <input type="file" id="file" onChange={this.fileChangedHandler} className="attachment" />
                            </div><br></br>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 4 }}>
                            <div className="technology">
                                <Label for="technology" className="technology">Technology</Label><br></br>
                                <select id="technology" name="technology" value={technology} onChange={this.changeHandler} className="technology">
                                    <option >choose any one</option>
                                    <option select>python</option>
                                    <option select>node js</option>
                                </select>
                            </div>
                            <div style={{ color: "red", fontSize: "14px" }} className="errorMsgtechnology">{this.state.error_technology}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                                <Label for="estimated">Estimated Budget ($)</Label>
                                <input type="text" id="estimated" name="estimated_budget" value={estimated_budget} onChange={this.changeHandler} className="Estimatedbudget" />
                                <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_estimated_budget}</div>
                            </div><br></br>
                            <div>
                                <Label for="referred">Referred By</Label>
                                <input type="text" name="referred_by" value={referred_by} onChange={this.changeHandler} id="referred" className="referred_by" />
                                <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_referred_by}</div>
                            </div><br></br>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 3 }} >
                            <Label for="Assigne" className="assignee" >Assignee*</Label><br></br>
                            <input type="radio" id="Assigne" className="assignee" />
                            <Label for="Assignee" >Assign To</Label>
                            <select name="assign_to" value={assign_to} onChange={this.changeHandler} id="Assignee" className="assign_to">
                                <option >choose any one</option>
                                <option select>abc</option>
                                <option select>def</option>
                            </select>
                            <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_assign_to}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 2 }}>
                            <div className="prospectdetails">
                                <p>Prospect Details</p>
                            </div>
                        </Col>
                        <Col className="Existing">
                            <button type="button" class="btn btn-link" onClick={this.getData}>Existing?</button>
                        </Col>
                    </Row>
                    <div className="prospectus"><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="full_name">Full Name</Label>
                                <input type="text" id="full_name" name="full_name" ref="full_name" value={full_name} onChange={this.changeHandler} className="full_name" />
                                <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_full_name}</div>
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="streetaddress">Street Address</Label>
                                <input type="text" id="streetaddress" name="street_address" ref="street_address" value={street_address} onChange={this.changeHandler} className="Sreetaddress" />
                                <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_street_address}</div>
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="email" >Email</Label>
                                <input type="text" name="email" ref="email" value={email} onChange={this.changeHandler} id="email" className="email" />
                                <Button className="add-icon" onClick={this.addClick.bind(this)}><p className="plussign">+</p></Button>
                                {this.createUI()}
                                <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_email}</div>
                            </Col>
                            <Col >
                                <Label for="city" className="city">City</Label>
                                <input type="text" name="city" ref="city" value={city} onChange={this.changeHandler} id="city" className="city1" />
                                <div style={{ color: "red", fontSize: "14px" }} className="city">{this.state.error_city}</div>
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="company">Company</Label>
                                <input type="text" name="company" ref="company" value={company} onChange={this.changeHandler} id="company" className="company" />
                                <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_company}</div>
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="state">State</Label>
                                <input type="text" name="state" ref="state" value={state} onChange={this.changeHandler} id="state" className="state" />
                                <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_state}</div>
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="designation">Designation</Label>
                                <input type="text" name="designation" ref="designation" value={designation} onChange={this.changeHandler} id="designation" className="designation" />
                                <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_designation}</div>
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="country">Country</Label>
                                <input type="text" name="country" ref="country" value={country} onChange={this.changeHandler} id="country" className="country" />
                                <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_country}</div>
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="skypeid">Skype ID</Label>
                                <input type="text" name="skype_id" ref="skype_id" value={skype_id} onChange={this.changeHandler} id="skypeid" className="Skypeid" />
                                <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_skype_id}</div>
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="phone">Phone</Label>
                                <input type="text" name="phone" ref="phone" value={phone} onChange={this.changeHandler} id="phone" className="mobileno" />
                                <Button className="add-icon" onClick={this.addClickPhone.bind(this)}><p className="plussign">+</p></Button>
                                {this.createUIPhone()}
                                <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.error_phone}</div>
                            </Col>
                        </Row>
                    </div><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                                <button type="submit" onClick={this.refreshPage} value="submit" className="btn btn-primary" >Submit and New</button>
                            </div>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 2 }}>
                            <div>
                                <button type="submit" value="submit" className="btn btn-primary" >Submit</button>
                            </div>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 2 }}>
                            <div>
                                <button type="reset" name="cancel" className="btn btn-danger" onClick={this.handleSubmit} value="cancel" >Cancel</button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
}

export default Newlead;