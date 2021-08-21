window.addEventListener('scroll',function(){
    const hd=this.document.querySelector('header');
    hd.classList.toggle("sticky",window.scrollY > 0);
});

function tgl(){
    const p = document.querySelector('.togglemenu');
    const q = document.querySelector('.navigation');
    p.classList.toggle('active');
    q.classList.toggle('active');
}