import React from "react";
import { Link } from "react-router-dom";
import "./Event.css";

const Event = ({ event }) => {
  return (
    // <Link to={`/events/${event.id}`} className="event">
    //   <h2>{event.title}</h2>
    //   <p>{event.description}</p>
    //   <p>{event.timestamp}</p>
    // </Link>
    <Link to={`/event/${event.id}`} className="card d-flex justify-between">
      <div className="evt-title">{event.title}</div>
      {/* <p>{moment(evt.timestamp).fromNow()}</p> */}
      <p>{event.timestamp}</p>
    </Link>
  );
};

export default Event;
