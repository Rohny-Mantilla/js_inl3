import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateEventView from "./CreateEventView";
import EventDetailsView from "./EventDetailsView";
import EventTrackerView from "./EventTrackerView";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<EventTrackerView />} />
      <Route path="/event/:id" element={<EventDetailsView />} />
      <Route path="/create" element={<CreateEventView />} />
    </Routes>
  );
};

export default Views;
