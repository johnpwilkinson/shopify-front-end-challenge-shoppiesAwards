import React from "react";
import { Navbar, ListGroup, Row, Col, Button, Table } from "react-bootstrap";

function DetailRow(props) {
  return (
    <tr className="ml-1">
      <td sm={6} className="shopifyFont detCat">
        {props.category}
      </td>
      <td sm={6} className="detCat">
        {props.value}
      </td>
    </tr>
  );
}
export default DetailRow;
