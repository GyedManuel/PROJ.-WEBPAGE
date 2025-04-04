document.addEventListener('DOMContentLoaded', () => {
    const scheduleTable = document.querySelector('.schedule-table');

    scheduleTable.addEventListener('mouseover', (event) => {
        const cell = event.target;
        if (cell.tagName === 'TD' && cell.textContent.trim() !== '') {
            cell.style.backgroundColor = '#e0f7fa';
            cell.style.cursor = 'pointer';
        }
    });

    scheduleTable.addEventListener('mouseout', (event) => {
        const cell = event.target;
        if (cell.tagName === 'TD') {
            cell.style.backgroundColor = '';
        }
    });

    function adjustFontSize() {
        if (window.innerWidth < 768) {
            scheduleTable.style.fontSize = '0.8em';
        } else {
            scheduleTable.style.fontSize = '1em';
        }
    }

    window.addEventListener('resize', adjustFontSize);

    adjustFontSize();
});