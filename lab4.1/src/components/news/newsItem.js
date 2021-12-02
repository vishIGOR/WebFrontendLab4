import { Card, Row, Col } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { setLikeThunkCreator } from "../../reducers/news-reducer";

function NewsItem(props) {

    const dispatch = useDispatch();
    const  setLikeListener = () =>{
        dispatch(setLikeThunkCreator(props.id));
    }

    return (
        <Card className="mb-4">
            <Card.Header >
                <div className="container-fluid">
                    <Row className="align-items-center">
                        <Col xs={9} >
                            <h3>{props.title}</h3>
                        </Col>
                        <Col className="text-muted" style={{ textAlign: "right" }} xs={3}>
                            {props.tags}
                        </Col>
                    </Row>
                </div>
            </Card.Header>
            <Card.Body>
                <div>{props.content}</div>
            </Card.Body>
            <Card.Footer>
                <div className="container-fluid">
                    <Row>
                        <div className="col-xs-12 col-sm d-flex flex-row">
                            <div className="fw-bold">Date:&ensp;</div>
                            <div className="text-muted">{props.date.substr(0, 10)}</div>
                        </div>
                        <div className="col-xs-12 col-sm d-flex flex-row-reverse">
                            <em>{props.likes} <i className="text-danger fas fa-heart ml-2 news-like-symbol" onClick={setLikeListener}></i></em>
                        </div>
                    </Row>
                </div>
            </Card.Footer>
        </Card>
    );
}

export default NewsItem;