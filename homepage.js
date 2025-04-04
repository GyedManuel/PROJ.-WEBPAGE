document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button-container button');

    buttons.forEach((button) => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#003d66'; 
            button.style.transform = 'scale(1.1)'; 
            button.style.transition = 'all 0.3s ease';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#007BFF';
            button.style.transform = 'scale(1)';
        });
    });

    function adjustButtonLayout() {
        const buttonContainer = document.querySelector('.button-container');
        if (window.innerWidth < 600) {
            buttonContainer.style.flexDirection = 'column'; 
            buttonContainer.style.width = '100%'; 
        } else {
            buttonContainer.style.flexDirection = 'column'; 
            buttonContainer.style.width = '';
        }
    }

    
    window.addEventListener('resize', adjustButtonLayout);

    adjustButtonLayout();
});