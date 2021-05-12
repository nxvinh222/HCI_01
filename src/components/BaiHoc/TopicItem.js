import { Link } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";

function TopicItem(props) {
    const { index, title, lessions, numberOfCompletedLessions } = props.topic;
    const progress = parseInt(
        (numberOfCompletedLessions / lessions.length) * 100
    );
    console.log(props.key)

    return (
        <li className="topic-item">
            <Link to="/baihoc/1">
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
                </div>
            </Link>
        </li>
    );
}

export default TopicItem;
