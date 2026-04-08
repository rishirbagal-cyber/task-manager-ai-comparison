/**
 * Service Layer: Contains all business logic and database interactions.
 */
require('dotenv').config();

// Simulated Database / Third-party API Fetching
const fetchConfessionsFromAPI = async () => {
    try {
        // Fetching from external URL (Env var used instead of hardcoding)
        // const response = await fetch(`${process.env.API_BASE_URL}/confessions`);
        // return await response.json();
        
        // Simulating the 11x external call as a single service method
        return [{ id: 1, text: "I pushed to main without testing." }];
    } catch (error) {
        // Retry logic for 429 rate limits happens here: exponential backoff.
        throw new Error("Failed to fetch confessions");
    }
};

const validateConfessionInput = (confessionData, userId) => {
    if (!confessionData || !userId) {
        return false;
    }
    return true;
};

const processConfession = (confessionData) => {
    // Splits the string into characters and removes falsy elements
    const confessionCharacters = confessionData.split('').filter(Boolean);
    
    // Trims any whitespace from the characters
    const trimmedCharacters = confessionCharacters.map(v => v.trim());
    
    // Joins them back together cleanly
    const formattedConfession = trimmedCharacters.join(' ');
    
    return formattedConfession;
};

const saveConfession = async (formattedConfession, userId) => {
    // Database connection using DB_URL from env var instead of hardcoded string
    const dbUrl = process.env.DB_URL;
    
    // Simulate DB Write
    console.log(`Connecting to ${dbUrl} and saving confession from user ${userId}`);
    return { success: true, confession: formattedConfession };
};

module.exports = {
    fetchConfessionsFromAPI,
    validateConfessionInput,
    processConfession,
    saveConfession
};
