const addProductBtn = document.getElementById("add-product-btn");
const productsSection = document.getElementById("products");
const productForm = document.getElementById("product-form");

addProductBtn.addEventListener("click", () => {
    productForm.style.display = "block";
});

productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const productName = document.getElementById("product-name").value;
    const productDescription = document.getElementById("product-description").value;
    const productImage = document.getElementById("product-image").files[0];

    const newProduct = document.createElement("div");
    newProduct.classList.add("product");

    const productImageElement = document.createElement("img");
    productImageElement.src = URL.createObjectURL(productImage);
    newProduct.appendChild(productImageElement);

    const productNameElement = document.createElement("h3");
    productNameElement.textContent = productName;
    newProduct.appendChild(productNameElement);

    const productDescriptionElement = document.createElement("p");
    productDescriptionElement.textContent = productDescription;
    newProduct.appendChild(productDescriptionElement);

    productsSection.appendChild(newProduct);
    productForm.style.display = "none";
});