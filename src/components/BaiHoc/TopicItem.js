import { Link } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";

function TopicItem(props) {
    const { index, title, lessions, numberOfCompletedLessions } = props.topic;
    const progress = parseInt(
        (numberOfCompletedLessions / lessions.length) * 100
    );
    console.log(props.key)

    return (
        <div className="topic-item">
            <Link to="#">
                <h3 className="course-index main-text-color fw-bold">Bài {index}:</h3>
                <h3 className="title">{title}</h3>
                <div className="topic-content">
                    <ul className="topic-content__lessions">
                        {lessions.map((lessionTitle, index) => (
                            <li className="topic-content__lession" key={index}>
                                {lessionTitle}
                            </li>
                        ))}
                    </ul>
                    <div className="progress-wrapper">
                        <p>
                            <span className="mr-1">
                                Hoàn thành: {numberOfCompletedLessions}/{lessions.length} 
                            </span>
                            <span>
                                {(numberOfCompletedLessions/lessions.length) == 1 && <i className="fas fa-check-circle"></i>}
                            </span>
                            
                        </p>
                        <p></p>
                        <ProgressBar now={progress} />
                    </div>
                    <br/>
                    
                </div>
            </Link>
            <a className="my-2"  href="/baihoc/1">
                {(numberOfCompletedLessions) != 0 ? (
                    <div>
                        <button type="button"className="btn btn-primary p-2 my-2">Học từ đầu</button>
                        <div class="divider"/>
                        <button type="button" className="btn btn-primary p-2 my-2">Học tiếp bài {numberOfCompletedLessions}</button>
                    </div>
                ) : (
                    <button type="button" className="btn btn-primary p-2 my-2">Bắt đầu học</button>
                )}
            </a>
        </div>
    );
}

export default TopicItem;
