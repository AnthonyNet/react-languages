import React, { useState, useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Data from "./DataCard";

import getLocalStorage from '../../Functions'

const CarouselX = () => {
  const [totalScore, setTotalScore] = useState(getLocalStorage());
  const [score, setScore] = useState(0);

  useEffect(()=>{
    localStorage.setItem('totalScore', JSON.stringify(totalScore))
  }, [totalScore])

 /* const [inputs, setInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  });*/


  const handleChange = (e) => {
  
    const name = e.target.name;
    const value = e.target.value;
    /*setInputs({
      ...inputs,
      [name]: value,
    });*/
   
    const data = e.target.attributes.data.value;
    const inputElement = e.target;

    if (value == "") {
      inputElement.style.color = "gray";
    } else if (data === value) {
      e.target.parentElement.style.backgroundColor = "green";
      e.target.readOnly = true;
      setTotalScore((count) => +count + 1);
      setScore((count) => count + 1);
    } else if (data.startsWith(value)) {
      inputElement.style.color = "green";
      inputElement.style.fontWeight = "bold";
    } else {
      inputElement.style.color = "red";
      inputElement.style.fontWeight = "bold";
    }
  };

  const [rand, setRand] = React.useState(0);

  function randomWord(e) {
    setRand(Math.floor(Math.random() * Data.length));
  /*  setInputs({
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    });*/
    const inputs = document.querySelectorAll(".list-group-item input");
    inputs.forEach((input) => {
      input.parentElement.style.backgroundColor = "transparent";
      input.style.color = "gray";
      input.style.fontWeight = "normal";
      input.readOnly = false;
      input.value="";
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
                name="input1"
                onChange={handleChange}
                data={Data[rand].infinitive}
                placeholder="Infinitiv"
               
              ></input>
            </ListGroup.Item>
            <ListGroup.Item>
              <input
                name="input2"
                onChange={handleChange}
                data={Data[rand].pastTense}
                placeholder="Past Tense"
              ></input>
            </ListGroup.Item>
            {Data[rand].pastTense2 ? (
              <ListGroup.Item>
                <input
                  name="input3"
                  onChange={handleChange}
                  data={Data[rand].pastTense2}
                  placeholder="Past Tense 2"
                ></input>
              </ListGroup.Item>
            ) : null}

            <ListGroup.Item>
              <input
                name="input4"
                data={Data[rand].presentPerfect}
                placeholder="Present Perfect"
                onChange={handleChange}
              ></input>
            </ListGroup.Item>
            {Data[rand].presentPerfect2 ? (
              <ListGroup.Item>
                <input
                  name="input5"
                  onChange={handleChange}
                  data={Data[rand].presentPerfect2}
                  placeholder="Present Perfect 2"
                ></input>
              </ListGroup.Item>
            ) : null}

            <ListGroup.Item>
              <span className="hiddenSpan">
                {`${Data[rand].infinitive} `}
                {`${Data[rand].pastTense} `}
                {Data[rand].pastTense2 ? Data[rand].pastTense2 : null}
                {` ${Data[rand].presentPerfect} `}
                {Data[rand].presentPerfect2 ? Data[rand].presentPerfect2 : null}
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CarouselX;
