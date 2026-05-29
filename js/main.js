/* global document */
<script>
    // Lógica Básica do Widget de Doação
    const amountButtons = document.querySelectorAll('.amt-btn');
    const customInput = document.getElementById('custom-amount');

    amountButtons.forEach(button => {
        button.addEventListener('click', () => {
            amountButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            customInput.value = button.getAttribute('data-value');
        });
    });

    customInput.addEventListener('input', () => {
        amountButtons.forEach(btn => {
            if(btn.getAttribute('data-value') === customInput.value) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    });

    // Interação de FAQ Accordion
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const parent = trigger.parentElement;
            const isOpen = parent.classList.contains('active');
            
            // Fecha todos os abertos
            document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
            
            if (!isOpen) {
                parent.classList.add('active');
            }
        });
    });
</script>