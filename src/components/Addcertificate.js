import React, { useEffect, useRef, useState } from 'react'
import styles from "../CSS/Addcertificate.module.css";
import axios from 'axios';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import {toast} from "react-toastify"
import LoaderDots from './LoaderDots';
import { useNavigate } from 'react-router';

const Addcertificate = () => {
    const[employees,setEmployees] = useState([])
    const[loading,setLoading]=useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        (async()=>{
          const response = await axios.get("http://localhost:5000/api/v1/admin/getalluser")
          setEmployees(response.data.message)
        })()
    },[])
    const[user,setUser]=useState()
    const[certificate,setcertificate]=useState()
    const[acknowledge,setacknowledge]=useState("")
          const fileInputRef = useRef(null);


      const Font = Quill.import("formats/font");

Font.whitelist = [
  "inter",
  "poppins",
  "roboto",
  "serif",
  "monospace",
];

Quill.register(Font, true);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!user) {
    alert("Please select an employee");
    return;
  }

  const formData = new FormData();
  formData.append("credid", user);
  formData.append("certificate", certificate);
  formData.append("content", acknowledge);

 try {
    setLoading(true)
    const response =  await axios.post(
       "http://localhost:5000/api/v1/job/addcertificate",
       formData,
       { headers: { "Content-Type": "multipart/form-data" } }
     );
     console.log(response.data.message)
     toast.success("Form Submitted Successfully")
     navigate("/verify")
   
 } catch (error) {
    toast.error("Something went wrong")
 }finally{
    setLoading(false)
 }

};



  return (
    <>
    {loading && <LoaderDots text="Adding Case Study" />}
    <div className={styles.addcertificate}>
        <h2 className={`${styles.claritytext} ${styles.gradienttext}`}>Certificate Allottment Form</h2>
                <p className={styles.subtext}>
                  Submit your case study with detailed information.
                </p>
       <form className={styles.form} >
       <div className={styles.field}>
  <label>Select Employee</label>

  <select
    value={user || ""}
    onChange={(e) => setUser(e.target.value)}
    className={styles.select}
  >
    <option value="" disabled>
      -- Select Employee --
    </option>

    {employees.map((emp) => (
      <option key={emp._id} value={emp._id} style={{background:"rgba(38, 38, 38, 0.3)"}}>
        {emp.name}
      </option>
    ))}
  </select>
</div>

  {/* Thumbnail */}
  <div className={styles.field}>
    <label>Certificate</label>
    <div className={styles.thumbnailBox}>
      <div className={styles.uploadArea}  onClick={() => fileInputRef.current.click()}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 16V4M12 4L8 8M12 4L16 8"
            stroke="#9ca3af"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 16V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V16"
            stroke="#9ca3af"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <p>
        {certificate ? certificate.name : "Click or drag and drop to upload thumbnail"}
      </p>
        <input   ref={fileInputRef} type="file" accept="image/*" onChange={(e) => setcertificate(e.target.files[0])} hidden />
      </div>
    </div>
  </div>

  {/* Content */}
  <div className={styles.field}>
  <label>Acknowledgement</label>

  <div className={styles.quillWrapper}>
    <ReactQuill
      theme="snow"
      value={acknowledge}
      onChange={setacknowledge}
      placeholder="Enter acknowledgement content and details..."
      modules={{
        toolbar: [
          [{ font: Font.whitelist }],
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["link"],
          ["clean"],
        ],
      }}
    />
  </div>
</div>


  {/* Submit */}
  <div className={styles.submitWrap} onClick={handleSubmit}>
    <button type="submit">
      Submit Form
      <span>→</span>
    </button>
  </div>
</form>
    </div>
    </>
  )
}

export default Addcertificate
