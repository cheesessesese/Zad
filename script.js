let selected_rating = null;
const rating_options = document.querySelectorAll('#rating-options button');
const submit_button = document.getElementById('submit-button');
const user_rating_p = document.getElementById('user-rating');

const submit_rating_ui = document.getElementById('submit-rating');
const thank_you_message_ui = document.getElementById('thank-you-message');


rating_options.forEach(button => {
    button.addEventListener('click', () => {
        rating_options.forEach(btn => btn.classList.remove('active'))
        button.classList.add('active');


        selected_rating = button.dataset.value;
        console.log(rating_options)
        console.log(selected_rating)
    });
});

submit_button.addEventListener('click', () => {
    if (selected_rating != null) {
        submit_rating_ui.style.display = 'none';
        thank_you_message_ui.style.display = 'flow';
    }

    user_rating_p.innerHTML = `You selected ${selected_rating} out of 5`;

});