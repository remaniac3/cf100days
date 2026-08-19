function loadDates() {
    // Slot Registration Open Time
    elementUpdate("slot-reg-open-time", "9:00pm (UTC +8)");

    // Slot Registration Open Date
    elementUpdate("slot-reg-open-date", "28th August 2026 (Friday)");

    // 10 Committee Selection Deadline
    elementUpdate("deadline-10cs", "1st November 2026 (Sunday)");

    // Wall Gallery Deadline
    elementUpdate("deadline-wall-gallery", "30th November 2026 (Monday)");

    // Free Slot Submission Deadline
    elementUpdate("deadline-fs", "6th December 2026 (Sunday)");
}

function elementUpdate(className, date) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(e => {
        e.textContent = date;
    })
};

document.addEventListener('DOMContentLoaded', loadDates);
