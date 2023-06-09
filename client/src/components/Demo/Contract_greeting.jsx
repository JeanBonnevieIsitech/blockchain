import { useRef, useEffect } from "react";

function Contract_greeting({ value }) {
  const spanEle = useRef(null);

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [value]);

  return (
    <code>
      {`Votre salutation = `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{value}</strong>
      </span>
    </code>
  );
}

export default Contract_greeting;
