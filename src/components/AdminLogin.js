import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Instagram, Linkedin } from 'lucide-react';
import styles from '../CSS/Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoaderDots from './LoaderDots';

const AdminLogin = () => {
    const navigate = useNavigate();
    const[loading,setLoading]=useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await axios.post("http://localhost:5000/api/v1/job/adminlogin",{
                userid:formData.email,
                password:formData.password
            },{withCredentials:true})
            console.log(response.data.message)
            toast.success("Admin Loginned Successfully")
            navigate('/');
        } catch (error) {
            toast.error("Login Unsuccessfull")
        }finally{
            setLoading(false)
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
       
  {loading && <LoaderDots text="Signing you in" />}

            <div className={styles.header}>
                <h1 className={styles.title}>
                    Welcome to NoCapCode
                </h1>
            </div>
            <div className={styles.login}>

                <div className={styles.container}>
                    {/* Header */}


                    {/* Login Form */}
                    <div className={styles.loginContainer}>
                        <div className={styles.loginCard}>
                            <div className={styles.loginHeader}>
                                <h2 className={styles.loginTitle}>
                                   Admin Sign <span className={styles.accent}>In</span>
                                </h2>
                                <p className={styles.loginSubtitle}>Access your onboarding portal</p>
                            </div>

                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Admin id</label>
                                    <div className={styles.inputWrapper}>
                                        <Mail className={styles.inputIcon} size={20} />
                                        <input
                                            type="text"
                                            className={styles.input}
                                            placeholder="Your.developer@domain.com"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Password</label>
                                    <div className={styles.inputWrapper}>
                                        <Lock className={styles.inputIcon} size={20} />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className={styles.input}
                                            placeholder="Enter your password"
                                            value={formData.password}
                                            onChange={(e) => handleInputChange('password', e.target.value)}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className={styles.passwordToggle}
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </div>

                                <button type="submit" className={styles.signInButton}>
                                    <span>Sign In</span>
                                    <ArrowRight size={20} />
                                </button>
                            </form>

                            <div className={styles.loginFooter}>
                                <p>Don't have an account? <a className={styles.signUpLink} href="mailto:careers@nocapcode.cloud" >Contact HR</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer - Same as onboarding page */}
                <footer className={styles.footerWrap}>
       <div className={styles.footerScene}>
        <img src="/nocapbg.png" width="100%" height="100%" alt="/" />
       </div>
      <div className={styles.mirrorOverlay}/>
      <div className={styles.footerBox}>
    
        <div className={styles.top}>
          
          <div className={styles.left}>
            <h2 className={styles.logo}>NoCapCode™</h2>
            <p className={styles.tagline}>No cap. Built like it's ours.</p>
            <p className={styles.tagline}>We build software systems for teams who care about clarity, ownership, and longevity.</p>
            <div className={styles.socials}>
              <span><a href="https://www.linkedin.com/company/nocapcode"  rel="noreferrer" target="_blank"><Linkedin size={16} color="rgba(190, 190, 190, 1)"/></a></span>
              <span onClick={()=>{navigate("/404")}}><FontAwesomeIcon icon={faXTwitter} /></span>
              <span><a href="https://www.instagram.com/nocapcode.cloud" target="_blank" rel="noreferrer"><Instagram size={16} color="rgba(190, 190, 190, 1)"/></a></span>
              
              
            </div>

            <div className={styles.badge}>
                <img src="/badge.png" alt="/" height="100%" width="100%"/>
            </div>
          </div>

        
          <div className={styles.right}>

            <div className={styles.col}>
              <h4>Company</h4>
              <ul>
                <li onClick={()=>{
                  navigate("/careers")}} style={{ cursor: "pointer" }}>Careers</li>
                <li onClick={()=>{
                  navigate("/contact")}} style={{ cursor: "pointer" }}>Contact</li>
              </ul>
              <p>
                Algodones, New Mexico,<br />
                US, 87001
              </p>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottom}>
          <p>© 2025-2026 NoCapCode. All rights reserved.<br/>Built with restraint, responsibility, and long-term thinking.</p>

          <div className={styles.links}>
            <span onClick={()=>{navigate("/terms")}} style={{ cursor: "pointer" }}>Terms of Service</span>
            <span onClick={()=>{navigate("/privacy")}} style={{ cursor: "pointer" }}>Privacy Policy</span>
          </div>
        </div>
      </div>
                </footer>
            </div>
        </>
    );
};

export default AdminLogin;