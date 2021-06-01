import get from "get-value";

export const LoadingSpinner = (props) => {
  const className = get(props, "className", "");
  return (
    <div className={className}>
      <svg
        version="1.1"
        id="L1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <circle
          fill="none"
          stroke="white"
          strokeWidth="6"
          strokeMiterlimit="15"
          strokeDasharray="14.2472,14.2472"
          cx="50"
          cy="50"
          r="47"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="5s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
        <circle
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeMiterlimit="10"
          strokeDasharray="10,10"
          cx="50"
          cy="50"
          r="39"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="5s"
            from="0 50 50"
            to="-360 50 50"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
        <g fill="#212529">
          <rect x="30" y="35" width="5" height="30" fill="white">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.1"
            ></animateTransform>
          </rect>
          <rect x="40" y="35" width="5" height="30" fill="white">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.2"
            ></animateTransform>
          </rect>
          <rect x="50" y="35" width="5" height="30" fill="white">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.3"
            ></animateTransform>
          </rect>
          <rect x="60" y="35" width="5" height="30" fill="white">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.4"
            ></animateTransform>
          </rect>
          <rect x="70" y="35" width="5" height="30" fill="white">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.5"
            ></animateTransform>
          </rect>
        </g>
      </svg>
    </div>
  );
};
export const ImageLoadingHolder = (props) => {
  const className = get(props, "className", "");

  return (
    <div className={className}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <rect
          fill="#000"
          width="3"
          height="100"
          transform="translate(0) rotate(180 3 50)"
        >
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
          ></animate>
        </rect>
        <rect
          x="17"
          fill="#000"
          width="3"
          height="100"
          transform="translate(0) rotate(180 20 50)"
        >
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.1s"
          ></animate>
        </rect>
        <rect
          x="40"
          fill="#000"
          width="3"
          height="100"
          transform="translate(0) rotate(180 40 50)"
        >
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.3s"
          ></animate>
        </rect>
        <rect
          x="60"
          fill="#000"
          width="3"
          height="100"
          transform="translate(0) rotate(180 58 50)"
        >
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.5s"
          ></animate>
        </rect>
        <rect
          x="80"
          fill="#000"
          width="3"
          height="100"
          transform="translate(0) rotate(180 76 50)"
        >
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.1s"
          ></animate>
        </rect>
      </svg>
    </div>
  );
};
export const CartIcon = (props) => {
  const disableOtherIcon = get(props, "disableOtherIcon", false);
  return (
    <>
      {!disableOtherIcon && (
        <svg
          className="add-to-cart-box box-1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="2" fill="#ffffff" />
        </svg>
      )}
      {!disableOtherIcon && (
        <svg
          className="add-to-cart-box box-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="2" fill="#ffffff" />
        </svg>
      )}
      <svg
        className="cart-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
      {!disableOtherIcon && (
        <svg
          className="tick"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path
            fill="#ffffff"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"
          />
        </svg>
      )}
    </>
  );
};
