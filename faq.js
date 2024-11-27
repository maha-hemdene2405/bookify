
    document.getElementById('faqSearch').addEventListener('input', function() {
        let filter = this.value.toLowerCase();
        let items = document.querySelectorAll('.faq-item');
        items.forEach(function(item) {
            let question = item.querySelector('.accordion-button').textContent.toLowerCase();
            if (question.indexOf(filter) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
