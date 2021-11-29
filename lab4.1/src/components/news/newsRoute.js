import NewsContainer from './newsContainer';
import NewsCarousel from './newsCarousel';
import NewsHeading from './newsHeading';
import authorize from '../../api/todoApi';

function NewsRoute() {
    authorize();
    return (
        <div className="d-flex flex-column">
            <div className="news-content">
                <div className="container-lg">
                    <NewsCarousel />
                    <NewsHeading />
                    <NewsContainer />
                </div>
            </div>
            <div className="footer">
                <div>Footer</div>
            </div>
        </div>
    )
}

export default NewsRoute;