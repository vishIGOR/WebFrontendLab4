import { Card, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import "./../../App.css";
function TodoItem(props) {
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
    if (props.isDone === false) {
        return (
            <Col className="card w-100" xs={12}>
                <Row className="no-gutters">
                    <Col className={priorityClassName}
                        style={{ maxWidth: 10 + 'px', padding: "0 0 0 0 ", margin: "0 0 0 0" }}>{" "}</Col>
                    <Col className="ps-0">
                        <div className="card-body container ps-0">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="container ">
                                        <div className="row align-items-center">
                                            <div className="col-md-auto ">
                                                <h4 className="text-uppercase element-title">{props.name}</h4>
                                            </div>
                                            <div className="col-md">
                                                <h4 className="text text-muted">
                                                    {props.createDateTime.substr(0, 10)}
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

    return (
        <Col className="card w-100 ended-task" xs={12} >
            <Row className="no-gutters">
                <Col className={priorityClassName}
                    style={{ maxWidth: 10 + 'px', padding: "0 0 0 0 ", margin: "0 0 0 0" }}>{" "}</Col>
                <Col className="ps-0 ended-task">
                    <div className="card-body container ps-0">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="container ">
                                    <div className="row align-items-center">
                                        <div className="col-md-auto ">
                                            <h4 className="text-uppercase element-title">{props.name}</h4>
                                        </div>
                                        <div className="col-md">
                                            <h4 className="text text-muted">
                                                {props.createDateTime.substr(0, 10)}
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

                                <Button variant=""><i
                                    className="ended-task fas fa-check fa-3x">
                                </i></Button>

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

export default TodoItem;