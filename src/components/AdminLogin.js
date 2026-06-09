import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import styles from '../CSS/Login.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoaderDots from './LoaderDots';
import Footer from './Footer';

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
            const response = await axios.post("https://nocapcode-backend-hapd.onrender.com/api/v1/job/adminlogin",{
                userid:formData.email,
                password:formData.password
            },{withCredentials:true})
            console.log(response.data.message)
            toast.success("Admin Loginned Successfully")
            navigate('/adminHome');
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

            <Footer />
            </div>
        </>
    );
};

export default AdminLogin;