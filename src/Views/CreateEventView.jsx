import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateEventView = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    timestamp: 0,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [time, setTime] = useState("");

  const onChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit2 = async (e) => {
    // e.preventDefault();

    const event = { ...formData, timestamp: Date.parse(time) };
    const res = await axios.post("http://localhost:8081/events", event);
    navigate("/");
  };

  return (
    <div className="create-post">
      <h1>Create new event</h1>
      <form onSubmit={handleSubmit(handleSubmit2)}>
        <div className="input-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            {...register("title", { required: "You need to enter a title" })}
            className="form-control"
            onChange={onChange}
            value={formData.title}
          />
          {errors.title && <small className="error">{errors.title.message}</small>}
        </div>

        <div className="input-group">
          <label htmlFor="date">Date&Time: </label>
          <input
            type="datetime-local"
            {...register("timestamps", { required: "You need to enter date and time." })}
            id="timestamps"
            name="timestamps"
            className="form-control"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
          {errors.timestamps && <small className="error">{errors.timestamps.message}</small>}
        </div>

        <div className="input-group">
          <label htmlFor="eventDesc">Event description: </label>
          <textarea
            type="text"
            {...register("desc", { required: "You need to enter a description" })}
            id="description"
            name="desc"
            cols="30"
            rows="10"
            className="form-control"
            onChange={onChange}
            value={formData.description}
          />
          {errors.desc && <small className="error">{errors.desc.message}</small>}
        </div>
        <div>
          <button className="btn btn-outline ml-auto">Add Event</button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventView;
