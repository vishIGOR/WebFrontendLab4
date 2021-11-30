import { Card, Row, Col, Button, ButtonGroup } from "react-bootstrap";

function TodoElement(props) {

    if (props.isDone === false) {
        let priorityClassName;
        switch (props.priority) {
            case 0:
                priorityClassName = "bg-light pl-0 pr-0";
                break;
            case 1:
                priorityClassName = "bg-warning pl-0 pr-0";
                break;
            case 2:
                priorityClassName = "bg-danger pl-0 pr-0";
                break;

        }
        return (
            <Col className="card w-100" xs={12}>
                <Row className="no-gutters">
                    <Col className={priorityClassName}
                        style={{ maxWidth: 10 + 'px', padding: "0 0 0 0 " }}></Col>
                    <Col>
                        <div className="card-body container">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="container ">
                                        <div className="row align-items-center">
                                            <div className="col-md-auto ">
                                                <h4 className="text-uppercase element-title">{props.name}</h4>
                                            </div>
                                            <div className="col-md">
                                                <h4 className="text text-muted">
                                                    {props.date.substr(0, 10)}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col text element-text">
                                                {props.description}
                                            </div>
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

}

export default TodoElement;