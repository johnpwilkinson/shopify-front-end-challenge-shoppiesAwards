import React from "react";
import DribbleButton from "react-dribble-button";

function AwesomeButton(props) {
  return (
    <div>
      {props.content ==="Nominate" ? (
        <DribbleButton
          color={props.color}
          disabled={props.isDisabled}
          className="button-1-14"
          animationDuration={1000}
          onClick={() => {
            props.action(props.title, props.year, props.imdb);
          }}
        >
          {props.content}
        </DribbleButton>
      ) : (
        <DribbleButton
          color="green"
          className="button-1-14"
          animationDuration={1000}
          onClick={() => {
            props.action(props.movie);
          }}
        >
          {props.content}
        </DribbleButton>
      )}
    </div>
  );
}

export default AwesomeButton;
