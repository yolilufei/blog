const callback = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            setTimeout(() => {
                // document.querySelector('.img').src = 'https://ktool.corp.kuaishou.com/static/media/logo.9de5d68a.png';
                document.querySelector('.box').innerHTML = '加载中';
            }, 1000);
        }
    });
};
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver(callback, options);

observer.observe(document.querySelector('.box'));