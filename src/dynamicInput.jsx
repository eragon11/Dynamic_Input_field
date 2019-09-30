import React from 'react';
// import { FormGroup, Label, Input, Container, Form, FormText, Badge, Row, Alert, Col, Table, Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap';
import { Row, Col } from 'antd';
class DynamicInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dynamics: [{ dynamicName: "", dynamicDescription: "" }],
        }
    }


    AddDynamicField() {
        this.setState({
            dynamics: [...this.state.dynamics, { dynamicName: "", dynamicDescription: "" }]
        })
    }

    handleDynamicFieldChange(e, index) {
        this.state.dynamics[index][e.target.id] = e.target.value;
        this.setState({
            dynamics: this.state.dynamics
        })
    }

    handleDynamicFieldRemove(index) {
        this.state.dynamics.splice(index, 1);
        this.setState({
            dynamics: this.state.dynamics
        })
    }

    render() {
        return (

            <Row>
                <Col span={4}>Name:</Col>
                <Col span={4}>Field:</Col>
                <Col span={4}>Description:</Col>
            </Row>

            // <Container>
            //     {
            //         this.state.dynamics.map((data, index) => {
            //             return (
            //                 <div style={{ "margin-bottom": "-12px;" }} key={index}>
            //                     <Row>
            //                         <Col lg="12">
            //                             <FormGroup row className="form-group-new">
            //                                 <Col md="4">
            //                                     <Label>Name</Label>
            //                                 </Col>
            //                                 <Col xs="12" md="8">
            //                                     <Input type="text" size="sm" id="dynamicName" onChange={(e) => this.handleDynamicFieldChange(e, index)} value={data.dynamicName} />
            //                                 </Col>
            //                             </FormGroup>
            //                         </Col>

            //                         <Col xs={12} md={4}>
            //                             <FormGroup row className="form-group-new">
            //                                 <Col md="4">
            //                                     <Label>Description</Label>
            //                                 </Col>
            //                                 <Col xs="12" md="8">
            //                                     <Input type="text" size="sm" id="dynamicDescription" onChange={(e) => this.handleDynamicFieldChange(e, index)} value={data.dynamicDescription} />
            //                                 </Col>
            //                             </FormGroup>
            //                         </Col>

            //                         <Col xs="12" md="4">
            //                             <Button color="dark" size="sm" className="mr-1" outline onClick={(e) => this.AddDynamicField(e)}><i className="fa fa-plus">Add</i></Button>
            //                             <Button color="dark" size="sm" outline onClick={() => this.handleDynamicFieldRemove(index)}><i className="fa fa-trash">Delete</i></Button>
            //                         </Col>
            //                     </Row>
            //                     <br />
            //                 </div>
            //             )
            //         })
            //     }
            // </Container >
        )

    }

}

export default DynamicInput;