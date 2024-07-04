document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = () => document.querySelector('.Menu').classList.toggle('active');
    const btn = document.querySelector('.Header-button');
    const btnX = document.querySelector('.Arriba-btn');

    btn.addEventListener('click', toggleMenu);
    btnX.addEventListener('click', toggleMenu);

    const ul = document.querySelector('.Interna');
    document.querySelectorAll('.Primero-li').forEach(li => {
        li.addEventListener('mouseover', () => ul.classList.add('active'));
        li.addEventListener('mouseleave', () => ul.classList.remove('active'));
    });

    const img = document.querySelector('.Primero-img');
    document.querySelectorAll('.Interna-li').forEach(li => {
        li.addEventListener('mouseover', () => img.classList.add('active'));
        li.addEventListener('mouseleave', () => img.classList.remove('active'));
    });

    const toggleFooterClasses = (add) => {
        const method = add ? 'add' : 'remove';
        document.querySelector('.Container-textPrimero').classList[method]('active');
        document.querySelector('.Container-textSegundo').classList[method]('active');
        document.querySelector('.Container-imgSegunda').classList[method]('active');
        document.querySelector('.Container-imgPrimera').classList[method]('active');
    }

    document.querySelector('.Footer-primero').addEventListener('click', () => toggleFooterClasses(true));
    document.querySelector('.Footer-segundo').addEventListener('click', () => toggleFooterClasses(false));
});
