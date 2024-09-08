


// Function to toggle visibility of sections
function toggleSection(sectionId: string, buttonId: string, showText: string, hideText: string): void {
    const section = document.getElementById(sectionId);
    const button = document.getElementById(buttonId);

    if (section && button) {
        if (section.style.display === 'none') {
            section.style.display = 'block';
            button.textContent = hideText;
        } else {
            section.style.display = 'none';
            button.textContent = showText;
        }
    }
}

// Add event listeners to toggle buttons
document.getElementById('toggle-skills-btn')?.addEventListener('click', () => {
    toggleSection('skills-list', 'toggle-skills-btn', 'Show skills', 'Hide Skills');
});

document.getElementById('toggle-education-btn')?.addEventListener('click', () => {
    toggleSection('education-list', 'toggle-education-btn', 'Show Education', 'Hide Education');
});

document.getElementById('toggle-work-btn')?.addEventListener('click', () => {
    toggleSection('work-list', 'toggle-work-btn', 'Show Work Experience', 'Hide Work Experience');
});
