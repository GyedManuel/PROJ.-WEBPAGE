document.addEventListener('DOMContentLoaded', () => {
    const scheduleTable = document.querySelector('table');

    scheduleTable.addEventListener('mouseover', (event) => {
        const cell = event.target;
        if (cell.tagName === 'TD' && cell.className) {
            cell.style.backgroundColor = '#c8e6c9'; 
            cell.style.cursor = 'pointer';
        }
    });

    scheduleTable.addEventListener('mouseout', (event) => {
        const cell = event.target;
        if (cell.tagName === 'TD') {
            cell.style.backgroundColor = ''; 
        }
    });

    function adjustTableLayout() {
        const tableRows = scheduleTable.querySelectorAll('tr');
        if (window.innerWidth < 768) {
            tableRows.forEach((row) => {
                row.style.display = 'block'; 
            });
        } else {
            tableRows.forEach((row) => {
                row.style.display = ''; 
            });
        }
    }

    window.addEventListener('resize', adjustTableLayout);

    adjustTableLayout();
});