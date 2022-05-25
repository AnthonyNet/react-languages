import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Data from "./DataCard";

const CarouselX = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [score, setScore] = useState(0);
  //Function checks values in inputs and change styles

  const handleChange = (e) => {
    
    const value = e.target.value;

    const data = e.target.attributes.data.value;
    const inputElement = e.nativeEvent.explicitOriginalTarget;
    if (value == "") {
      inputElement.style.color = "gray";
    } else if (data === value) {
      inputElement.parentElement.style.backgroundColor = "green";
      e.target.readOnly = true;
      setTotalScore((count) => count + 1);
      setScore((count) => count + 1);
    } else if (data.startsWith(value)) {
      inputElement.style.color = "green";
      inputElement.style.fontWeight = "bold";
    } else {
      inputElement.style.color = "red";
      inputElement.style.fontWeight = "bold";
    }
  };

  const [rand, setRand] = useState(0);

  function randomWord(e) {
    setRand(Math.floor(Math.random() * Data.length));

    const inputs = document.querySelectorAll(".list-group-item input");
    inputs.forEach((input) => {
      input.parentElement.style.backgroundColor = "transparent";
      input.style.color = "gray";
      input.style.fontWeight = "normal";
      input.readOnly = false;
    });
    setScore(0);
  }

  const runMe = (score) => {
    switch (score) {
      case 1:
        return (
          <span>
            <BsFillStarFill />
          </span>
        );
        break;
      case 2:
        return (
          <span>
            <BsFillStarFill />
            <BsFillStarFill />
          </span>
        );
        break;
      case 3:
        return (
          <span>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </span>
        );
        break;
      case 4:
        return (
          <span>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </span>
        );
        break;
      case 5:
        return (
          <span>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </span>
        );

      default:
        return <span></span>;
    }
  };

  return (
    <div>
      <Card className="position-absolute top-50 start-50 translate-middle">
        <Button onClick={randomWord} variant="primary">
          Next Card
        </Button>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item className="icons">{runMe(score)}</ListGroup.Item>

            <ListGroup.Item className="d-flex flex-row justify-content-between">
              <div>
                Celkové skóre: <span className="totalScore">{totalScore} </span>
              </div>

              <div>
                Skóre: <span className="score">{score}</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>{Data[rand].cz}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <input
                onChange={handleChange}
                data={Data[rand].base}
                placeholder="Base Form"
              ></input>
            </ListGroup.Item>
            <ListGroup.Item>
              <input
                onChange={handleChange}
                data={Data[rand].pastSimple}
                placeholder="Past Simple"
              ></input>
            </ListGroup.Item>

            {Data[rand].pastSimple2 ? (
              <ListGroup.Item>
                <input
                  onChange={handleChange}
                  data={Data[rand].pastSimple2}
                  placeholder="Past Simple2"
                ></input>
              </ListGroup.Item>
            ) : null}

            <ListGroup.Item>
              <input
                onChange={handleChange}
                data={Data[rand].pastParticiple}
                placeholder="Past Perfect"
              ></input>
            </ListGroup.Item>

            {Data[rand].pastSimple2 ? (
              <ListGroup.Item>
                <input
                  onChange={handleChange}
                  data={Data[rand].pastParticiple2}
                  placeholder="Past Participle2"
                ></input>
              </ListGroup.Item>
            ) : null}

            <ListGroup.Item>
              <span className="hiddenSpan">
                {`${Data[rand].base} `}
                {`${Data[rand].pastSimple} `}
                {Data[rand].pastSimple2 ? Data[rand].pastSimple2 : null}
                {` ${Data[rand].pastParticiple} `}
                {Data[rand].pastParticiple2 ? Data[rand].pastParticiple2 : null}
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CarouselX;
