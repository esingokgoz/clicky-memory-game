import React from "react";

const Constainer = props =>
    <div className = { `container${props.fluid ? "-fluid" : ""}`} {...props} />;

export default Constainer;