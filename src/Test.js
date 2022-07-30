import React, { useState } from "react";

function Test() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className="App">
			<h2>Add Image:</h2>
			<input type="file" onChange={handleChange} />
			<img src={file} alt="its aada dacha "/>

		</div>

	);
}

export default Test;
