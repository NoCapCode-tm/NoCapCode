// Utility functions for onboarding validation and progress tracking

export const validateStep1 = (data) => {
  const requiredFields = [
    'fullName',
    'personalEmail',
    'phoneNumber',
    'dateOfBirth',
    'permanentAddress',
    'communicationAddress',
    'gender',
    'emergencyContactNumber',
    'emergencyContactName'
  ];
  
  return requiredFields.every(field => data[field] && data[field].trim() !== '');
};

export const validateStep2 = (data) => {
  const requiredFields = ['aadhaarNumber']; // PAN Card Number is now optional
  const requiredFiles = ['aadhaarUpload', 'passportPhoto']; // PAN Card upload and College ID are now optional
  
  const fieldsValid = requiredFields.every(field => data[field] && data[field].trim() !== '');
  const filesValid = requiredFiles.every(field => data[field]);
  
  return fieldsValid && filesValid;
};

export const validateStep3 = (data) => {
  const requiredFields = [
    'highestQualification',
    'collegeName',
    'courseName',
    'currentYear'
    // 'expectedGraduation' is now optional
  ];
  
  return requiredFields.every(field => data[field] && data[field].trim() !== '');
};

export const validateStep4 = (data) => {
  const requiredFields = [
    'roleDesignation',
    'department',
    'engagementType',
    'workMode'
    // 'startDate', 'endDate', 'workingHours', 'reportingManager' are now optional
  ];
  
  return requiredFields.every(field => data[field] && data[field].trim() !== '');
};

export const validateStep5 = (data) => {
  // Step 5 is considered completed if:
  // 1. User has filled at least one field, OR
  // 2. User has explicitly saved the step (even with empty data)
  
  const hasAnyData = Object.values(data).some(value => value && value.trim() !== '');
  const hasBeenSaved = localStorage.getItem('onboarding_step5') !== null;
  
  // Only consider it completed if user has actually been through the step
  // We'll check if the step data exists and has been explicitly saved
  return hasBeenSaved && (hasAnyData || localStorage.getItem('onboarding_step5_completed') === 'true');
};

export const validateStep6 = (data) => {
  const requiredFields = [
    'laptopType',
    'operatingSystem',
    'linkedinProfile'
    // 'portfolioLink', 'githubProfile' are now optional
  ];
  
  const hasRequiredFields = requiredFields.every(field => data[field] && data[field].trim() !== '');
  const hasBeenCompleted = localStorage.getItem('onboarding_step6_completed') === 'true';
  
  return hasRequiredFields && hasBeenCompleted;
};

export const getCompletedSteps = () => {
  const completedSteps = [];
  
  // Check each step
  const step1Data = JSON.parse(localStorage.getItem('onboarding_step1') || '{}');
  if (validateStep1(step1Data)) completedSteps.push(1);
  
  const step2Data = JSON.parse(localStorage.getItem('onboarding_step2') || '{}');
  if (validateStep2(step2Data)) completedSteps.push(2);
  
  const step3Data = JSON.parse(localStorage.getItem('onboarding_step3') || '{}');
  if (validateStep3(step3Data)) completedSteps.push(3);
  
  const step4Data = JSON.parse(localStorage.getItem('onboarding_step4') || '{}');
  if (validateStep4(step4Data)) completedSteps.push(4);
  
  const step5Data = JSON.parse(localStorage.getItem('onboarding_step5') || '{}');
  if (validateStep5(step5Data)) completedSteps.push(5);
  
  const step6Data = JSON.parse(localStorage.getItem('onboarding_step6') || '{}');
  if (validateStep6(step6Data)) completedSteps.push(6);
  
  return completedSteps;
};

export const canAccessStep = (stepNumber) => {
  const completedSteps = getCompletedSteps();
  
  // Step 1 is always accessible
  if (stepNumber === 1) return true;
  
  // Step 7 (review) is accessible when step 6 is completed
  if (stepNumber === 7) return completedSteps.includes(6);
  
  // For other steps, previous step must be completed
  return completedSteps.includes(stepNumber - 1);
};