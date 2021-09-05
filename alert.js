// alert 
function maIsComming() {
    alert('Taratari Porte bosss')
}

// confirm 
const isGoing = () => {
    const response = confirm('Are you ready for going to picnic')
    if (response === true) {
        alert('tk joma de akhoni ')
    }
    else {
        console.log('DGM ! doew giya mor');
    }
}

// prompt 
const takeName = () => {
    const name = prompt('What is Your Name')
    if (name) {
        alert('Thank you')
    }
    else {
        alert('First tell me your Name')
    }
}