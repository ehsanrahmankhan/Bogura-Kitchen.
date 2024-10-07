function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    document.getElementById('datetime').textContent = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);
// Customer Feedback Carousel
const feedbackItems = document.querySelectorAll('.feedback-item');
const prevButton = document.querySelector('.feedback-nav.prev');
const nextButton = document.querySelector('.feedback-nav.next');
let currentFeedback = 0;

function showFeedback(index) {
    feedbackItems.forEach(item => item.classList.remove('active'));
    feedbackItems[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentFeedback = (currentFeedback - 1 + feedbackItems.length) % feedbackItems.length;
    showFeedback(currentFeedback);
});

nextButton.addEventListener('click', () => {
    currentFeedback = (currentFeedback + 1) % feedbackItems.length;
    showFeedback(currentFeedback);
});