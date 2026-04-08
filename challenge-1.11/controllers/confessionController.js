const confessionService = require('../services/confessionService');

/**
 * Controller Layer: Extracts request data, calls services, sends formatted responses.
 */

const createConfession = async (req, res) => {
    try {
        const { confessionData, userId } = req.body;

        // 1. Validate Input
        const isValid = confessionService.validateConfessionInput(confessionData, userId);
        if (!isValid) {
            return res.status(400).json({ error: "Invalid input data" });
        }

        // 2. Process Data
        const formattedConfession = confessionService.processConfession(confessionData);

        // 3. Save to DB
        const savedData = await confessionService.saveConfession(formattedConfession, userId);

        // 4. Format and Send Response
        return res.status(201).json({
            message: "Confession successfully created",
            data: savedData
        });
    } catch (error) {
        console.error("Error creating confession:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const getConfessions = async (req, res) => {
    try {
        const confessions = await confessionService.fetchConfessionsFromAPI();
        return res.status(200).json({ data: confessions });
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch confessions" });
    }
};

module.exports = {
    createConfession,
    getConfessions
};
