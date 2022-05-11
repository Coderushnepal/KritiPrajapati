import React from "react";

function DonarMessage({ detail }) {
  console.log(detail, "detail");
  return (
    <div>
      <div>{/* img */}</div>
      <div>
        <h4>{detail.name}</h4>
        <div>Rs. {detail.amount}</div>
        <div>{detail.message}</div>
      </div>
    </div>
  );
}

export default DonarMessage;