import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const Exporter = () => {
  const exportFile = (type, name) => {
    const element = document.documentElement;

    html2canvas(element, { scrollY: -window.scrollY }).then((canvas) => {
      let dataURL = canvas.toDataURL("image/png");

      if (type === "pdf") {
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "in",
          format: [14, 10],
        });

        pdf.addImage(dataURL, "PNG", 0.6, 0.6);
        pdf.save(`${name}.pdf`);
      } else if (type === "png") {
        var link = document.createElement("a");
        link.download = `${name}.png`;
        link.href = dataURL;
        link.click();
      }
    });
  };

  return (
    <center>
      <div>
        <button onClick={() => exportFile("pdf", "Captured Data")}>
          <FileDownloadOutlinedIcon />
        </button>
        {/* 
        Uncomment the following lines if you want to capture specific content:
        <div id={`capture`}>
          <h1>Content Export and Capture the Screen</h1>
          {props.children}
        </div>
        */}
      </div>
    </center>
  );
};

export default Exporter;
