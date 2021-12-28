import { FC } from "react";
import classes from "./event.module.css";
import addZeros from "../../helpers/addZeros";

interface IEvent {
  desc: string;
  date: Date;
}

const Event: FC<IEvent> = ({ desc, date }) => {
  return (
    <div className={classes.event}>
      <div className={classes.desc}>{desc}</div>
      <div
        className={`${classes.date} ${
          date < new Date() ? classes["past-date"] : ""
        }`}
      >
        {date.getFullYear()}.{addZeros(date.getMonth() + 1)}.
        {addZeros(date.getDate())}
      </div>
    </div>
  );
};

export default Event;
