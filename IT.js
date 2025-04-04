document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table');

   
    table.addEventListener('mouseover', (event) => {
        const cell = event.target;
        if (cell.tagName === 'TD' && cell.className) {
            cell.style.backgroundColor = '#dcedc8';
            cell.style.cursor = 'pointer';
        }
    });

    table.addEventListener('mouseout', (event) => {
        const cell = event.target;
        if (cell.tagName === 'TD') {
            cell.style.backgroundColor = ''; 
        }
    });

    function adjustTableLayout() {
        const rows = table.querySelectorAll('tr');
        if (window.innerWidth < 768) {
            rows.forEach((row) => {
                row.style.display = 'block'; 
                row.style.borderBottom = '1px solid #ccc'; 
            });
            table.style.width = '100%'; 
        } else {
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