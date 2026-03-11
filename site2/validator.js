
    let lastClickedSubmitButton = null;
    
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('form').forEach(function(form) {
            form.querySelectorAll('button[type="submit"], input[type="submit"]').forEach(function(button) {
                button.addEventListener('click', function() {
                    lastClickedSubmitButton = button;
                });
            });
            form.addEventListener('submit', function(event) {
                if (lastClickedSubmitButton) {
                    lastClickedSubmitButton.disabled = true;
                    lastClickedSubmitButton = null;
                }
            });
        });
    });
    