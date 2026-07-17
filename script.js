document.querySelectorAll('[data-copy-link]').forEach(function (button) {
    button.addEventListener('click', function () {
        if (!navigator.clipboard) {
            button.textContent = 'copy the address above';
            return;
        }

        navigator.clipboard.writeText(window.location.href).then(function () {
            button.textContent = 'copied';
            window.setTimeout(function () {
                button.textContent = 'copy page link';
            }, 1200);
        });
    });
});
