document.addEventListener('DOMContentLoaded', () => {
    const scheduleTable = document.querySelector('.schedule-table table');

    scheduleTable.addEventListener('mouseover', (event) => {
        const cell = event.target;
        if (cell.tagName === 'TD' && cell.className) {
            cell.style.backgroundColor = '#ffecb3'; 
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
        const table = scheduleTable;
        const rows = table.querySelectorAll('tr');
        if (window.innerWidth < 768) {
            rows.forEach((row) => {
                row.style.display = 'block'; 
                row.style.borderBottom = '1px solid #ccc'; 
            });
            table.style.width = '100%'; 
            rows.forEach((row) => {
                row.style.display = ''; 
                row.style.borderBottom = '';
            });
            table.style.width = ''; 
        }
    }

    window.addEventListener('resize', adjustTableLayout);

    adjustTableLayout();
});