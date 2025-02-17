// utils/functions.js

import validator from 'validator';
import axios from 'axios';

// Email validation function
export function validateEmail(email) {
    return validator.isEmail(email);
}

// Phone number validation (10 digits, starting with 7, 8, or 9)
export function validatePhone(phone) {
    const phoneRegex = /^[7-9][0-9]{9}$/;
    return phoneRegex.test(phone);
}

// Pincode validation using a free API (replace with an actual API if needed)
export async function validatePincode(pincode) {
    // Check if pincode is exactly 6 digits long and does not start with 0
    const pincodeRegex = /^[1-9][0-9]{5}$/; // 6 digits, starting from 1-9
    if (!pincodeRegex.test(pincode)) {
        return false;  // Return false immediately if invalid
    }

    try {
        // Example API URL (replace with the free API you prefer)
        const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = response.data[0];
        return data.Status === 'Success';  // Checking the API response for validity
    } catch (error) {
        console.error("Error validating pincode:", error);
        return false;
    }
}

// Function to sanitize input (escaping dangerous characters)
export function sanitizeInput(input) {
    return validator.escape(input);
}
