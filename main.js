const colorBlocks = document.querySelectorAll('.color-block');
const closeButton = document.getElementById('closeButton');

colorBlocks.forEach(block => {
    block.addEventListener('click', () => {
        document.body.style.backgroundColor = block.style.backgroundColor;
    });
});

closeButton.addEventListener('click', () => {
    document.body.style.backgroundColor = '';  
});
