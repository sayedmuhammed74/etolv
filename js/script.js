let nav = document.querySelector('nav'),
    products = document.querySelector('.products'),
    services = document.querySelector('.services_page'),
    clients = document.querySelector('.clients_page'),
    closeIconPro = document.querySelector('.products .icon i'),
    closeIconSer = document.querySelector('.services_page .icon i'),
    closeIconCli = document.querySelector('.clients_page .icon i'),
    service_button = document.getElementById('ser'),
    product_button = document.getElementById('pro'),
    client_button = document.getElementById('cli'),
    about = document.querySelector('div.about'),
    news = document.querySelector('div.newsletter');
    

// window.addEventListener('scroll', function(){
//     nav.classList.toggle('sticky', window.scrollY > 80);
//     // document.querySelector('.top-list').classList.toggle('fixed' ,  window.scrollY > 0);
// })



product_button.onclick = (e) => {
    e.preventDefault();
    products.classList.add('show');
}

closeIconPro.onclick = (e) => {
    e.preventDefault();
    products.classList.remove('show');
}

service_button.onclick = (e) => {
    e.preventDefault();
    services.classList.add('show');
}

closeIconSer.onclick = (e) => {
    e.preventDefault();
    services.classList.remove('show');
}
client_button.onclick = (e) => {
    e.preventDefault();
    clients.classList.add('show');
}

closeIconCli.onclick = (e) => {
    e.preventDefault();
    clients.classList.remove('show');
}

window.addEventListener('scroll', function(){
    about.classList.add('animate', window.scrollY >= 304);
    news.classList.add('animate', window.scrollY >= 1420);
    nav.classList.toggle('sticky', window.scrollY == 100);
    nav.classList.toggle('up', window.scrollY >= 200);
})


