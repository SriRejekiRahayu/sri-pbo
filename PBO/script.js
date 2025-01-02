const products = [
    { name: 'Beras', price: '10.000' },
    { name: 'Gula', price: '12.000' },
    { name: 'Minyak Goreng', price: '15.000' },
    { name: 'Telur', price: '20.000' },
];

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('products');
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - Rp ${product.price}`;
        productList.appendChild(li);
    });

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('service-worker.js')
                .then(registration => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        });
    }
});
