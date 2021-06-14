import player1 from "../../static/images/player1.svg";
import player2 from "../../static/images/player2.svg";
import player3 from "../../static/images/player3.svg";
import player4 from "../../static/images/player4.svg";
import avatar from "../../static/images/Avatar.svg";
import { MdCheckCircle } from "react-icons/md";
import { Spinner } from "react-bootstrap";

function FindingPlayers(props) {
    const { setFindingPlayers } = props;
    return (
        <>
            <div className="finding-players-overlay" />
            <div className="finding-players-container">
                <h3>Đang tìm kiếm người chơi</h3>
                <ul className="pending-players">
                    <li className="pending-player">
                        <img
                            src="https://store.playstation.com/store/api/chihiro/00_09_000/container/TW/en/99/HP0700-CUSA08526_00-PREMIUMAVATAR007/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"
                            alt=""
                        />
                        <MdCheckCircle color="#28A745" size="1.5em" />
                    </li>
                    <li className="pending-player">
                        <img
                            src="https://store.playstation.com/store/api/chihiro/00_09_000/container/TW/en/99/HP0700-CUSA08526_00-PREMIUMAVATAR007/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"
                            alt=""
                        />
                        <MdCheckCircle color="#28A745" size="1.5em" />
                    </li>
                    <li id="main-player" className="pending-player">
                        <img
                            src="https://store.playstation.com/store/api/chihiro/00_09_000/container/TW/en/99/HP0700-CUSA08526_00-PREMIUMAVATAR007/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"
                            alt=""
                        />
                        <Spinner animation="border" variant="success" />
                        <button
                            className="button-primary"
                            onClick={() => {
                                setFindingPlayers(false);
                            }}
                        >
                            Sẵn sàng
                        </button>
                    </li>
                    <li className="pending-player">
                        <img
                            src="https://store.playstation.com/store/api/chihiro/00_09_000/container/TW/en/99/HP0700-CUSA08526_00-PREMIUMAVATAR007/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"
                            alt=""
                        />
                        <MdCheckCircle color="#28A745" size="1.5em" />
                    </li>
                    <li className="pending-player">
                        <img
                            src="https://store.playstation.com/store/api/chihiro/00_09_000/container/TW/en/99/HP0700-CUSA08526_00-PREMIUMAVATAR007/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"
                            alt=""
                        />
                        <Spinner animation="border" variant="success" />
                    </li>
                </ul>
            </div>
        </>
    );
}

export default FindingPlayers;
