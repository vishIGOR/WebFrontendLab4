import { Card, Row, Col, Button, ButtonGroup } from "react-bootstrap";

function TodoElement(props) {


    return (
        // <Card className="w-100">
        //     <Row className="row no-gutters">
        //         <Col className="badge-warning" style="max-width:10px;"></Col>
        //         <Col>
        //             <Card.Body className="container">
        //                 <Row className="align-items-center">
        //                     <div className="col-md-cen"></div>
        //                 </Row>
        //             </Card.Body>
        //         </Col>
        //     </Row>

        // </Card>
        <Col className="card w-100" xs={12}>
            <Row className="no-gutters">
                <Col className="bg-warning pl-0 pr-0" style={{ maxWidth: 10 + 'px', padding: "0 0 0 0 "}}>
                </Col>
                <Col>
                    <div className="card-body container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="container ">
                                    <div className="row align-items-center">
                                        <div className="col-md-auto ">
                                            <h4 className="text-uppercase element-title">Написать доклад</h4>
                                        </div>
                                        <div className="col-md">
                                            <h4 className="text text-muted">
                                                12.02.2022</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col text element-text">Lorem
                                            ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Quisque ut urna at nunc
                                            tempus ultrices. In pretium
                                            fringilla interdum.</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-md-3 d-flex justify-content-end align-items-center">
                                <ButtonGroup>
                                    <Button variant="outline-success"><i
                                        className="fas fa-check"></i></Button>
                                    <Button variant="outline-warning"><i
                                        className="fas fa-pen"></i></Button>
                                    <Button variant="outline-danger"><i
                                        className="fas fa-trash-alt"></i></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

export default TodoElement;