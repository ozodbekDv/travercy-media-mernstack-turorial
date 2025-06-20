import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGoal } from "../app/features/goals/goalSlice";

function GoalFrom() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalFrom;
