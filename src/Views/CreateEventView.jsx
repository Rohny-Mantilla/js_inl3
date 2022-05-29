import React from "react";

const CreateEventView = () => {
  return (
    <div className="create-post">
      <h1>Create new event</h1>
      <form className="pe-5 ps-5 d-flex justify-content-center">
        <div className="row">
          <div className="col-lg-12 mb-4 pe-lg-2">
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" className="form-control" />
            {/* <p className="error text-danger">{formErrors.title}</p> */}
          </div>

          <div className="col-lg-6 col-sm-12 mb-4 ps-lg-2">
            <label htmlFor="date">Date&Time: </label>
            <input type="datetime-local" id="date" name="date" className="form-control" />
            {/* <p className="error text-danger">{formErrors.date}</p> */}
          </div>

          <div className="col-lg-12  mb-4 pe-lg-2">
            <label htmlFor="eventDesc">Event description: </label>
            <textarea type="text" id="description" name="description" className="form-control" />
            {/* <p className="error text-danger">{formErrors.description}</p> */}
          </div>
          <div>
            <button className="mb-4 btn btn-block text-dark gradient-color">Add Event</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEventView;
