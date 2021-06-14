import "./racing_game.css";
import Street from "../racing-game/Street";
import Player from "../racing-game/Player";
import GameStartWating from "../racing-game/GameStartWaiting";

function RacingGame(props) {
    const { gameStarted, gameEnded } = props;
    return (
        <div className="racing-game-container shadow">
            {!gameStarted && <GameStartWating />}
            <Street />
            <div className="players-wrapper">
                <Player playerName={"Xuan Vinh"} gameEnded={gameEnded} />
                <Player playerName={"Long"} gameEnded={gameEnded} />
                <Player
                    isMainPlayer={true}
                    playerName={"You"}
                    gameEnded={gameEnded}
                />
                <Player playerName={"Huy"} gameEnded={gameEnded} />
                <Player
                    playerName={"Cong Vinh"}
                    gameEnded={gameEnded}
                />
            </div>
        </div>
    );
}

export default RacingGame;
