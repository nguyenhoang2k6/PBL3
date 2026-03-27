document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');

    // Giả lập fetch dữ liệu từ Data/products.json
    // Lưu ý: Cần chạy Live Server để fetch() hoạt động
    fetch('../../Data/products.json')
        .then(response => {
            if (!response.ok) throw new Error('Không thể tải dữ liệu sản phẩm');
            return response.json();
        })
        .then(products => {
            renderProducts(products);
        })
        .catch(error => {
            console.error(error);
            productContainer.innerHTML = `<p class="error-text">Lỗi: ${error.message}. Vui lòng chạy dự án bằng Live Server.</p>`;
        });

    function renderProducts(products) {
        productContainer.innerHTML = '';
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            // Format giá tiền VND
            const formattedPrice = new Intl.NumberFormat('vi-VN', {
                style: 'decimal'
            }).format(product.gia_ban) + 'đ';

            productCard.innerHTML = `
                <div class="product-img">
                    <img src="https://via.placeholder.com/200x200?text=${encodeURIComponent(product.ten_san_pham)}" alt="${product.ten_san_pham}">
                    ${product.trang_thai === 'Sắp về' ? '<span class="badge yellow">Sắp về</span>' : ''}
                </div>
                <div class="product-info">
                    <p class="product-category text-13">${product.danh_muc}</p>
                    <h3 class="product-name text-16 text-bold">${product.ten_san_pham}</h3>
                    <div class="product-meta">
                        <span class="product-brand text-14">${product.thuong_hieu}</span>
                        <span class="product-sku text-12">SKU: ${product.sku}</span>
                    </div>
                    <p class="product-price text-18 text-bold">${formattedPrice}</p>
                    <button class="add-to-cart-btn text-bold">
                        <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                </div>
            `;
            productContainer.appendChild(productCard);
        });
    }
});
