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
          stroke="#212529"
          stroke-width="6"
          stroke-miterlimit="15"
          stroke-dasharray="14.2472,14.2472"
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
          stroke="#212529"
          stroke-width="1"
          stroke-miterlimit="10"
          stroke-dasharray="10,10"
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
          <rect x="30" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.1"
            ></animateTransform>
          </rect>
          <rect x="40" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.2"
            ></animateTransform>
          </rect>
          <rect x="50" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.3"
            ></animateTransform>
          </rect>
          <rect x="60" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.4"
            ></animateTransform>
          </rect>
          <rect x="70" y="35" width="5" height="30">
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
