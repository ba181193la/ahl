import React,{useState} from 'react'

 function Fileupload() {
    const [file, setFile] = useState(null);

    const handleFileChange = async (event) => {
      const file = event.target.files[0]; // Get the selected file
  
      if (file) {
        // Read the file as a base64 string
        const base64 = await convertToBase64(file);
  
        // Create the file object
        const fileDetails = {
          fileName: file.name,
          size: file.size, // Size in bytes
          mimetype: file.type, // MIME type
          base64: base64,
        };
  
        console.log("...fileDetails",fileDetails); // Log the file object
      }
    };
  
    // Convert file to Base64
    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file); // Read file as Data URL
        reader.onload = () => resolve(reader.result); // On success
        reader.onerror = (error) => reject(error); // On error
      });
    };
  
    // Submit the file to the backend
    const handleSubmit = async () => {
      if (!file) {
        alert("Please select a file to upload.");
        return;
      }
  
      // Create FormData and append the file
      const formData = new FormData();
      formData.append("file", file); // 'file' must match the parameter name in the .NET API
  
      try {
        const response = await fetch("https://tagstationery.travelport.online/api/Staff/import", {
          method: "POST",
          body: formData, // Use FormData
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log("File uploaded successfully:", data);
        } else {
          console.error("File upload failed:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    };
  return (
    <div>
         <input type="file" onChange={handleFileChange} />
         <button onClick={handleSubmit}>Upload</button>
    </div>
  )
}
export default Fileupload