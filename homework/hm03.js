// Log processing function
function processLogs(logs) {
    const totalActionsPerUser = {};
    const sessionDurations = {};
    const errorCount = {};
    let mostActiveUser = '';

    // หาก logs ว่าง ให้คืนค่าเริ่มต้นทันที
    if (logs.length === 0) {
        return {
            totalActionsPerUser: {},
            sessionDurations: {},
            errorCount: {},
            mostActiveUser: '', // เปลี่ยนจาก null เป็น ''
        };
    }

    // Temporary storage for active sessions
    const activeSessions = {};

    logs.forEach(log => {
        const { user, action, timestamp } = log;
        const time = new Date(timestamp);

        // Count total actions per user
        if (!totalActionsPerUser[user]) {
            totalActionsPerUser[user] = 0;
        }
        totalActionsPerUser[user]++;

        // Track session durations
        if (action === "LOGIN") {
            if (!activeSessions[user]) {
                activeSessions[user] = [];
            }
            activeSessions[user].push({ start: time });
        } else if (action === "LOGOUT") {
            if (activeSessions[user] && activeSessions[user].length > 0) {
                const session = activeSessions[user].pop();
                const duration = (time - session.start) / 60000; // Convert milliseconds to minutes
                if (!sessionDurations[user]) {
                    sessionDurations[user] = [];
                }
                sessionDurations[user].push(Math.round(duration));
            }
        }

        // Count errors
        if (action === "ERROR") {
            if (!errorCount[user]) {
                errorCount[user] = 0;
            }
            errorCount[user]++;
        }
    });

    // Ensure all users have error counts, even if none exist
    Object.keys(totalActionsPerUser).forEach(user => {
        if (!errorCount[user]) {
            errorCount[user] = 0;
        }
    });

    // Find the most active user
    let maxActions = 0;
    Object.keys(totalActionsPerUser).forEach(user => {
        if (totalActionsPerUser[user] > maxActions) {
            maxActions = totalActionsPerUser[user];
            mostActiveUser = user;
        }
    });

    return {
        totalActionsPerUser,
        sessionDurations,
        errorCount,
        mostActiveUser,
    };
}

// Example logs
const logs = [
    { "timestamp": "2024-09-15T08:23:45Z", "user": "Alice", "action": "LOGIN", "details": "User Alice logged in" },
    { "timestamp": "2024-09-15T08:25:12Z", "user": "Alice", "action": "REQUEST", "details": "Requested resource 123" },
    { "timestamp": "2024-09-15T08:27:30Z", "user": "Alice", "action": "LOGOUT", "details": "User Alice logged out" },
    { "timestamp": "2024-09-15T08:35:11Z", "user": "Bob", "action": "LOGIN", "details": "User Bob logged in" },
    { "timestamp": "2024-09-15T08:40:22Z", "user": "Bob", "action": "REQUEST", "details": "Requested resource 124" },
    { "timestamp": "2024-09-15T08:42:08Z", "user": "Bob", "action": "ERROR", "details": "Database connection failed" },
    { "timestamp": "2024-09-15T08:45:15Z", "user": "Alice", "action": "LOGIN", "details": "User Alice logged in" },
    { "timestamp": "2024-09-15T08:50:30Z", "user": "Alice", "action": "REQUEST", "details": "Requested resource 125" },
    { "timestamp": "2024-09-15T08:55:45Z", "user": "Bob", "action": "ERROR", "details": "File not found" },
    { "timestamp": "2024-09-15T09:27:30Z", "user": "Alice", "action": "LOGOUT", "details": "User Alice logged out" },
    { "timestamp": "2024-09-15T09:00:00Z", "user": "Bob", "action": "LOGOUT", "details": "User Bob logged out" },
    { "timestamp": "2024-09-16T08:35:11Z", "user": "Bob", "action": "LOGIN", "details": "User Bob logged in" },
    { "timestamp": "2024-09-16T08:55:45Z", "user": "Bob", "action": "ERROR", "details": "File not found" },
    { "timestamp": "2024-09-16T10:00:00Z", "user": "Bob", "action": "LOGOUT", "details": "User Bob logged out" }
];

// Run the function and log the output
const report = processLogs(logs);
console.log(report);

/*
Expected Output:
{
    totalActionsPerUser: { Alice: 6, Bob: 8 },
    sessionDurations: { Alice: [4, 42], Bob: [25, 85] },
    errorCount: { Alice: 0, Bob: 3 },
    mostActiveUser: 'Bob'
}
*/

module.exports = processLogs;