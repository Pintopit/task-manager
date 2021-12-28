import { useRef } from "react";
import { useEffect } from "react";
import { ChangeEvent, useState } from "react";
import Event from "../../components/Event/Event";
import classes from "./events.module.css";

const initialEvents = [
  { date: new Date(2021, 11, 5), desc: "description" },
  { date: new Date(2021, 10, 9), desc: "description2" },
];

function Events() {
  const [events, setEvents] = useState(initialEvents);
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  const onAddEvent = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    setEvents((events) => [...events, { date, desc: inputValue }]);
    setInputValue("");
  };
  const onClearEvents = () => setEvents([]);
  const isLengthInvalid = () =>
    inputValue.length > 240 || inputValue.length === 0;
  const eventsEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    eventsEndRef.current?.scrollIntoView();
    textareaRef.current?.focus();
  });
  return (
    <div className={classes.events}>
      <div className={classes.title}>События</div>
      <div className={classes["events-list"]}>
        {events.map((event) => (
          <Event key={event.date.getTime()} {...event} />
        ))}
        <div style={{ float: "left", clear: "both" }} ref={eventsEndRef}></div>
      </div>
      <textarea
        ref={textareaRef}
        className={classes.textarea}
        value={inputValue}
        onChange={onInputChange}
      />
      <div className={classes["add-event"]}>
        <div
          className={`${classes.length} ${
            isLengthInvalid() ? classes["length-error"] : ""
          }`}
        >
          {inputValue.length} / 240 символов
        </div>
        <button
          className={`${classes["add-button"]} ${
            isLengthInvalid() ? classes["add-button-error"] : ""
          }`}
          disabled={isLengthInvalid()}
          onClick={onAddEvent}
        >
          Добавить событие
        </button>
      </div>
      {events.length > 0 && (
        <button className={classes["clear-events"]} onClick={onClearEvents}>
          Очистить события
        </button>
      )}
    </div>
  );
}

export default Events;
