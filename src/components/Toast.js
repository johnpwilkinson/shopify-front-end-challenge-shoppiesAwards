import React from "react";

import { Toast, Button, InputGroup, FormControl } from "react-bootstrap";

function ToastPop(props) {
  return (
    <Toast
      aria-live="polite"
      aria-atomic="true"
      show={props.show}
      onClose={props.closeToast}
      style={{
        position: "absolute",
        zIndex: 1,
        right: 0,
        minHeight: "200px",
        minWidth: "500px",
        left: "50%",
        top: "30%",
        transform: "translateX(-50%)",
      }}
      role="alert"
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto toastTop">{props.top}</strong>
      </Toast.Header>
      <Toast.Body className="mx-auto toastText">
        <div className="text-center">
          <span className="toastText">{props.message}</span>
        </div>
        {props.saveToast ? (
          <div>
            <InputGroup className="mb-3">
              <FormControl
                id="saveNoms"
                placeholder="What's Your Name?"
                aria-label="What's Your Name?"
                aria-describedby="basic-addon2"
                onChange={props.handleInputChange}
              />
              <InputGroup.Append>
                <Button onClick={props.saveNoms} variant="outline-secondary">
                  Save
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        ) : (
          <div></div>
        )}
      </Toast.Body>
    </Toast>
    // </div>
  );
}

export default ToastPop;
