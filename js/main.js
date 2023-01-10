function onEntry(entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show');
        }
    });
    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.main-content.content_about-us'); /* TODO */
    for (let elm of elements) {
        observer.observe(elm);
    }
};