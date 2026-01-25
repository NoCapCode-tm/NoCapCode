import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ExternalLink, Instagram } from 'lucide-react';
import styles from '../CSS/Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const navigate = useNavigate();
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', formData);
        // Navigate to dashboard or onboarding
        navigate('/onboarding');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
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
                                    Sign <span className={styles.accent}>In</span>
                                </h2>
                                <p className={styles.loginSubtitle}>Access your onboarding portal</p>
                            </div>

                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Email Address</label>
                                    <div className={styles.inputWrapper}>
                                        <Mail className={styles.inputIcon} size={20} />
                                        <input
                                            type="email"
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
                    <div className={styles.mirrorOverlay} />
                    <div className={styles.footerBox}>
                        <div className={styles.top}>
                            <div className={styles.left}>
                                <h2 className={styles.logo}>NoCapCode™</h2>
                                <p className={styles.tagline}>No cap. Built like it's ours.</p>
                                <div className={styles.socials}>
                                    <span><ExternalLink size={20} color="rgba(190, 190, 190, 1)" /></span>
                                     <span onClick={()=>{navigate("/404")}}><FontAwesomeIcon icon={faXTwitter} /></span>
              <span onClick={()=>{navigate("/404")}}><Instagram size={16} color="rgba(190, 190, 190, 1)"/></span>
              
                                </div>
                                <div className={styles.badge}>
                                    <img src="/badge.png" alt="/" height="100%" width="100%" />
                                </div>
                            </div>

                            <div className={styles.right}>
                                <div className={styles.col}>
                                    <h4>Explore</h4>
                                    <ul>
                                        <li style={{ cursor: "pointer" }}>How We Work</li>
                                        <li onClick={() => { navigate("/about"); window.scrollTo(0, 0); }} style={{ cursor: "pointer" }}>About NoCapCode</li>
                                        <li>Start with Clarity</li>
                                        <li>Careers</li>
                                    </ul>
                                </div>

                                <div className={styles.col}>
                                    <h4>Company</h4>
                                    <p>
                                        Algodones, New Mexico,<br />
                                        US, 87001
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.divider} />

                        <div className={styles.bottom}>
                            <p>© 2025-2026 NoCapCode. All rights reserved.<br />Built with restraint, responsibility, and long-term thinking.</p>
                            <div className={styles.links}>
                                <span onClick={() => { navigate("/terms") }} style={{ cursor: "pointer" }}>Terms of Service</span>
                                <span onClick={() => { navigate("/privacy") }} style={{ cursor: "pointer" }}>Privacy Policy</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Login;