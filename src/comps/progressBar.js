import React, { useEffect } from "react";
import useStorge from "../Hooks/useStorge";

function ProgressBar({ file, setFile }) {
  const { url, prorgess } = useStorge(file);

  useEffect(() => {
    if (url) {
      setFile("");
    }
  }, [url, setFile]);

  return (
    <div>
      <div className="progress-bar" style={{ width: prorgess + "%" }}></div>
    </div>
  );
}

export default ProgressBar;
