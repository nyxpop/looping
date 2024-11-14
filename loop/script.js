const limitinput = document.getElementById('limit-input');
const startButton = document.getElementById('start-btn');
const evenNumbersDiv = document.getElementById('even-numbers');
const oddNumbersDiv = document.getElementById('odd-numbers');

startButton.addEventListener('click' , () => {
    const limit = parseInt(limitinput.value);
    
    //pastikan iput adalag positif
    if (isNaN(limit) || limit <= 0) {
        alert('please enter a positive number.');
        return;
    }

    //kosongkan tampilan sebelumnya
    evenNumbersDiv.textContent = 'even numbers: ';
    oddNumbersDiv.textContent = 'odd numbers: ';

    for (let i = 1; i <= limit; i++){
        if (i % 2 === 0) {
            evenNumbersDiv.textContent += i + ' ';
        } else {
            oddNumbersDiv.textContent += i + ' ';
        }
    }
} );