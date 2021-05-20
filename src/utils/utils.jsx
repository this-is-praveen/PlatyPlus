import React from "react";
import ReactDOM from "react-dom";
import { toast, ToastContainer } from "react-toastify";

export const useDate = () => {
  const locale = "en";
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  }, `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return {
    date,
    time,
    wish,
  };
};

export const setToastMessage = (props) => {
  ReactDOM.createPortal(<ToastContainer />, document.body);

  const { message, status } = props;
  const statusMark =
    status === "success" ? (
      <i className={"fa fa-check mr-2"} aria-hidden={true} />
    ) : status === "fail" ? (
      <i className={"fas fa-times mr-2"} aria-hidden={true} />
    ) : status === "warning" ? (
      <i className={"fas fa-exclamation-triangle mr-2"} aria-hidden={true} />
    ) : (
      <React.Fragment />
    );

  toast.dark(
    <p className="mb-0">
      {statusMark}
      {message}
    </p>,
    {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: `${status}`,
    }
  );
};
