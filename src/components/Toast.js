import React, { useRef } from "react";

import {
  Toast,
  Button,
  InputGroup,
  FormControl,
  Overlay,
  Tooltip,
} from "react-bootstrap";

function ToastPop(props) {
  const target = useRef(null);

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
          <div
            className={
              props.shareNsave !== "" && !props.saveToast
                ? "help-font ml-auto text-right pointer"
                : "help-font ml-auto text-right pointer hideMe"
            }
            onClick={props.toggleSave}
          >
            <div id="help" className="text-center"><span className="toastText">Save Your Nominations</span></div>
          </div>
        </div>
        {props.saveToast && props.shareNsave === undefined ? (
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
                <Button
                  ref={target}
                  onClick={props.saveNoms}
                  variant="outline-secondary"
                >
                  Save
                </Button>
                <Overlay
                  target={target.current}
                  show={props.showTip}
                  placement="right"
                  id="tip"
                >
                  {(props) => (
                    <Tooltip
                      id="overlay-example"
                      className="my-tool-tip"
                      {...props}
                    >
                      Please Enter Your Name
                    </Tooltip>
                  )}
                </Overlay>
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
