import React from "react"; 
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
class Exporter extends React.Component {
   constructor(props) {
	 super(props)
   } 

export =(type, name)=>{

html2canvas(document.querySelector(`#app`)).then(canvas => {
  let dataURL = canvas.toDataURL('image/png');

  if (type === 'pdf') {
	const pdf = new jsPDF({
	  orientation: "landscape",
	  unit: "in",
	  format: [14, 10]
	});

	pdf.addImage(dataURL, 'PNG', .6, .6);
	pdf.save(`${name}.pdf`);

  } else if (type === 'png') {
	var link = document.createElement('a');
	link.download = `${name}.png`;
	link.href = dataURL;
	link.click();
  }
});
}
render() { 
return (
 <center> 
	<div>
	<button onClick={()=>this.export("pdf", "Captured Data")}>
    <FileDownloadOutlinedIcon/>
	</button>
	{/* <div id={`capture`} >
	<h1>Content Export and Capture the Screen</h1>
	  {this.props.children}
	</div> */}
  </div>
  </center>
  
)
}
}

export default Exporter