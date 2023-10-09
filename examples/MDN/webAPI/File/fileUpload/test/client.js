window.onload = () => {
    const res = fetch('http://localhost:3012/supportRangeRequest', {
        method: 'HEAD'
    });
    console.log(res);
}