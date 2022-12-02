const accordions = document.querySelectorAll('.qa-list-item');
const accordionflow = document.querySelectorAll('.flow-list-item');

accordions.forEach(accordion => {
    // クリックイベントclickされた時
    accordion.addEventListener('click', () => {
        const content = accordion.querySelector('.qa-list-content');

        content.classList.toggle('active');

        if(content.classList.contains('active')) {
            content.style.height = content.scrollHeight + 'px';
        } else {
            content.style.height = '0px';
        }

    });
});
accordionflow.forEach(accordion => {
    // クリックイベントclickされた時
    accordion.addEventListener('click', () => {
        const content = accordion.querySelector('.flow-list-content');

        content.classList.toggle('active');

        if(content.classList.contains('active')) {
            content.style.height = content.scrollHeight + 'px';
        } else {
            content.style.height = '0px';
        }

    });
});

