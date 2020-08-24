import React, { useState } from "react";
import ProgressBar from "./progressBar";

function UploadForm() {
  const [file, setFile] = useState("");

  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"];

  const onChangeHandler = (e) => {
    let selected = e.target.files[0];

    if (types.includes(selected.type)) {
      setFile(selected);
      setError("");
      console.log(selected);
    } else {
      setFile("");
      setError("please select an image file (png or jpg)");
    }
  };

  return (
    <form>
      <label>
        +
        <input type="file" onChange={onChangeHandler} />
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="flie">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadForm;
