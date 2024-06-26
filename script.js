function copyToClipboard(button) {
    const pre = button.parentElement;
    const code = pre.querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        // Change button text to indicate success
        button.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-copy"></i>';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
