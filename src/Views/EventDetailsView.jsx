import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventById } from "../store/actions/eventAction";
import { useParams } from "react-router-dom";

const EventDetailsView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getEventById(id));
  }, []);

  const { loading, data, error } = useSelector((state) => state.event);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {data && (
        <div className=" card">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
};

export default EventDetailsView;
