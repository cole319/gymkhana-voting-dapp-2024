// export default function VotersList() {
//   return (
//     <div className="min-h-screen bg-neutral-50 text-black">VotersList</div>
//   );
// }

import { useState } from "react";
import Button from "@/components/Button";
import * as XLSX from "xlsx";

export default function VotersList() {
  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  // submit state
  const [excelData, setExcelData] = useState(null);

  // onchange event
  const handleFile = (e) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("Please select your file");
    }
  };

  // submit event
  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 10));
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen text-sky-950 px-60 py-20">
      <h3 className="text-2xl font-bold pb-8">Upload & View Excel Sheets</h3>

      {/* form */}
      <form
        className="space-y-2 py-10 bg-gradient-to-br from-sky-800 via-sky-500 to-sky-700 rounded-md shadow-lg p-10"
        onSubmit={handleFileSubmit}
      >
        <input
          type="file"
          className="text-neutral-100"
          required
          onChange={handleFile}
        />
        <button
          type="submit"
          className="w-1/3 cursor-pointer bg-neutral-50 text-neutral-800 font-semibold px-3 py-1 
        rounded-md border-2 border-neutral-50 hover:bg-transparent hover:text-neutral-50"
        >
          UPLOAD XLS FILE
        </button>
        {typeError && (
          <div className="alert alert-danger" role="alert">
            {typeError}
          </div>
        )}
      </form>

      {/* view data */}
      <div className="py-2">
        {excelData ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  {Object.keys(excelData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {excelData.map((individualExcelData, index) => (
                  <tr key={index}>
                    {Object.keys(individualExcelData).map((key) => (
                      <td key={key}>{individualExcelData[key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>No File is uploaded yet!</div>
        )}
      </div>
    </div>
  );
}
