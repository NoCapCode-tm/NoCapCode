import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Star } from 'lucide-react';
import styles from '../CSS/OnboardingComplete.module.css';

const OnboardingComplete = () => {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState([]);

  useEffect(() => {
    // Get completed steps data
    const steps = [
      { id: 1, title: 'Basic Personal Information', status: 'Submitted' },
      { id: 2, title: 'Identity Information', status: 'Submitted' },
      { id: 3, title: 'Bank & Payroll Detail', status: 'Submitted' }
    ];
    setCompletedSteps(steps);
  }, []);

  return (
    <div className={styles.onboardingComplete}>
      
      <div className={styles.container}>
        {/* Main Content */}
        <div className={styles.content}>
          <h1 className={styles.title}>Your onboarding is complete</h1>
          
          <div className={styles.successSection}>
            <div className={styles.iconContainer}>
              <div className={styles.checkIcon}>
                <CheckCircle size={32} />
              </div>
              <div className={styles.starIcon}>
                <Star size={20} />
              </div>
            </div>
            
            <h2 className={styles.congratsTitle}>Congratulations!</h2>
            <p className={styles.congratsText}>
              Onboarding complete! You're ready to conquer the workplace... or at least the coffee machine.
            </p>
          </div>

          {/* Status Cards */}
          <div className={styles.statusCards}>
            {completedSteps.map((step) => (
              <div key={step.id} className={styles.statusCard}>
                <div className={styles.cardIcon}>
                  <CheckCircle size={20} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardStatus}>{step.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingComplete;