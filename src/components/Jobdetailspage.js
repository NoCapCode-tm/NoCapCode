import React, { useEffect, useState } from 'react'
import styles from "../CSS/Jobdetailspage.module.css";
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { BriefcaseBusiness, Clock, MapPin } from 'lucide-react';

const Jobdetailspage = () => {
    const {id} = useParams()
    const[job,setJob]=useState(null)
    const[loading,setLoading]=useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        (async()=>{
            setLoading(true)
            try {
                const response = await axios.get(`https://atlasbackend-px53.onrender.com/api/v1/job/getjobs`,{withCredentials:true})
               
                const jobs = response.data.message.find(j => j?._id === id)
                setJob(jobs)
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }

        })()
    },[])
  return (
    <div className={styles.jobdetails}>
       {loading && <p>Loading...</p>}

{job && (
  <div className={styles.container}>
    {/* TOP META */}
    <div className={styles.meta}>
            <span><MapPin size={16}/>New York, NY</span>
            <span><Clock   size={16}/>{job?.mode}</span>
            <span><BriefcaseBusiness  size={16}/>{job?.department}</span>
          </div>

    {/* HEADER SECTION */}
    <div className={styles.header}>
      <h1 className={styles.title}>{job.title}</h1>
      <button className={styles.applyBtn} onClick={()=>{navigate(`/career/${id}/applicationform`)}}>
        Apply now <span>↗</span>
      </button>
    </div>

    <div className={styles.divider} />

    {/* JOB DESCRIPTION */}
    <section className={styles.section}>
      <h2 className={styles.sectionheader}>Job description</h2>
      <div
        className={styles.richContent}
        dangerouslySetInnerHTML={{ __html: job.description }}
      />
    </section>

    {/* RESPONSIBILITIES */}
    <section className={styles.section}>
      <h2 className={styles.sectionheader}>Job responsibilities</h2>
      <div
        className={styles.richContent}
        dangerouslySetInnerHTML={{ __html: job.responsibilities }}
      />
    </section>
    <section className={styles.section}>
      <h2 className={styles.sectionheader}>Job Perks</h2>
      <div
        className={styles.richContent}
        dangerouslySetInnerHTML={{ __html: job?.perks }}
      />
    </section>
    <section className={styles.section}>
      <h2 className={styles.sectionheader}>Who Should Apply</h2>
      <div
        className={styles.richContent}
        dangerouslySetInnerHTML={{ __html: job?.whoshouldapply}}
      />
    </section>

    {/* FOOTER ACTIONS */}
    <div className={styles.actions}>
      <button className={styles.applyBtn} onClick={()=>{navigate(`/career/${id}/applicationform`)}}>
        Apply now <span>↗</span>
      </button>
      <button className={styles.secondaryBtn} onClick={()=>{navigate(`/career`)}}>
        Browse all position <span>↗</span>
      </button>
    </div>
  </div>
)}

    </div>
  )
}

export default Jobdetailspage
