function loadDates() {
    // Slot Registration Open Time
    elementUpdate("slot-reg-open-time", "9:00pm (UTC +8)");

    // Slot Registration Open Date
    elementUpdate("slot-reg-open-date", "25th August 2025 (Monday)");

    // 10 Committee Selection Deadline
    elementUpdate("deadline-10cs", "1st November 2025 (Saturday)");

    // Wall Gallery Deadline
    elementUpdate("deadline-wall-gallery", "30th November 2025 (Sunday)");

    // Free Slot Submission Deadline
    elementUpdate("deadline-fs", "7th December 2025 (Sunday)");
}

function elementUpdate(className, date) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(e => {
        e.textContent = date;
    })
};

document.addEventListener('DOMContentLoaded', loadDates);
