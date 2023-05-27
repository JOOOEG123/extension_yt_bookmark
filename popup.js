document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', () => {
        const name = document.getElementById('container');
        // name.innerText = 'Hello, world!';
        if (name.innerText === 'Hello, world!') {
            name.innerText = 'Hello, Chrome!';
        } else {
            name.innerText = 'Hello, world!';
        }
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'toggle' });
        });
    });
    }
);