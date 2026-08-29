const journalBtn = document.getElementById('journal-btn');
if (journalBtn) {
    journalBtn.addEventListener('click', function() {
    window.location.href = 'journal.html';
    });
}

const homeIcon = document.querySelector('.homeIcon');
if (homeIcon) {
    homeIcon.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}
