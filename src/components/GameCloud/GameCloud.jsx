import { useState, useEffect } from "react";
import { FaUmbrella } from "react-icons/fa6";
import { Element } from "react-scroll";
const width = 700;
const height = 400;
const items = [
  { type: "⛅", isGood: true },
  { type: "⚡", isGood: false },
  { type: "🌨", isGood: false },
  { type: "🌪", isGood: false },
  { type: "⛅", isGood: true },
];
const getRandomItem = () => {
  const item = items[Math.floor(Math.random() * items.length)];
  return {
    id: Math.random().toString(36).substr(2, 9),
    type: item.type,
    isGood: item.isGood,
    x: Math.random() * (width - 30),
    y: 0,
  };
};
export const GameCloud = () => {
  const [umbrellaX, setUmbrellaX] = useState(width / 2 - 40);
  const [fallingItems, setFallingItems] = useState([]);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lives, setLives] = useState(3);
  const umbrellaWidth = 90;
  const umbrellaHeight = 50;
  const itemSize = 30;
  useEffect(() => {
    if (!isRunning) return;
    if (lives <= 0) {
      setIsRunning(false);
      return;
    }
    const handleKeyDown = (e) => {
      setUmbrellaX((x) => {
        if (e.key === "ArrowLeft") return Math.max(0, x - 20);
        if (e.key === "ArrowRight")
          return Math.min(width - umbrellaWidth, x + 20);
        return x;
      });
    };
    window.addEventListener("keydown", handleKeyDown);
    const spawnInterval = setInterval(() => {
      setFallingItems((prev) => [...prev, getRandomItem()]);
    }, 1200);
    const fallInterval = setInterval(() => {
      setFallingItems((prev) =>
        prev.reduce((acc, item) => {
          const newY = item.y + 3;
          const umbrellaTopY = height - umbrellaHeight;
          const touched =
            newY + itemSize >= umbrellaTopY - 10 &&
            newY <= height &&
            item.x + itemSize >= umbrellaX &&
            item.x <= umbrellaX + umbrellaWidth;
          if (touched) {
            if (item.isGood) setScore((s) => s + 1);
            else setLives((l) => l - 1);
            return acc;
          }

          if (newY <= height) {
            acc.push({ ...item, y: newY });
          }
          return acc;
        }, [])
      );
    }, 30);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(spawnInterval);
      clearInterval(fallInterval);
    };
  }, [lives, isRunning]);
  return (
    <Element name="Game">
      <div style={{ maxWidth: width, height }} className="game-container">
        <div
          className="umbrella"
          style={{
            left: umbrellaX,
            width: umbrellaWidth,
            height: umbrellaHeight,
          }}
        >
          <FaUmbrella style={{ width: 40, height: 40 }} />
        </div>
        {fallingItems.map((item) => (
          <div
            key={item.id}
            className="falling-item"
            style={{ top: item.y, left: item.x }}
          >
            {item.type}
          </div>
        ))}

        <div className="scoreboard">Score : {score}</div>
        <div className="lives">Lives: {lives}</div>
        {!isRunning && lives > 0 && (
          <button
            className="start-btn"
            onClick={() => {
              setScore(0);
              setLives(3);
              setFallingItems([]);
              setIsRunning(true);
            }}
          >
            Start
          </button>
        )}
        {lives <= 0 && (
          <button
            className="restart-btn"
            onClick={() => {
              setScore(0);
              setLives(3);
              setFallingItems([]);
              setIsRunning(true);
            }}
          >
            Restart
          </button>
        )}
      </div>
    </Element>
  );
};
