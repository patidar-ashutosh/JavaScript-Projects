const productImg = document.getElementById("product-img");
const btn = document.getElementsByClassName("btn");
const colorInput = document.getElementsByClassName("color");

let selectedSpan = 0;
let selectedInputColor = 0;
let color = "red";

colorInput[0].addEventListener("click", () => {
    colorInput[selectedInputColor].removeAttribute("checked");
    colorInput[0].setAttribute("attribute", "checked");
    selectedInputColor = 0;

    color = colorInput[selectedInputColor].id;
    getImages(color);
})

colorInput[1].addEventListener("click", () => {
    colorInput[selectedInputColor].removeAttribute("checked");
    colorInput[1].setAttribute("attribute", "checked");
    selectedInputColor = 1;

    color = colorInput[selectedInputColor].id;
    getImages(color);
})

colorInput[2].addEventListener("click", () => {
    colorInput[selectedInputColor].removeAttribute("checked");
    colorInput[2].setAttribute("attribute", "checked");
    selectedInputColor = 2;

    color = colorInput[selectedInputColor].id;
    getImages(color);
})


function getImages(color){

    productImg.src = `images/${color}/img${selectedSpan+1}.png`;

    btn[0].addEventListener("click", () => {
        productImg.src = `images/${color}/img1.png`;

        btn[selectedSpan].classList.remove("active");
        btn[0].classList.add("active");
        selectedSpan = 0;
    })

    btn[1].addEventListener("click", () => {
        productImg.src = `images/${color}/img2.png`;

        btn[selectedSpan].classList.remove("active");
        btn[1].classList.add("active");
        selectedSpan = 1;
    })

    btn[2].addEventListener("click", () => {
        productImg.src = `images/${color}/img3.png`;

        btn[selectedSpan].classList.remove("active");
        btn[2].classList.add("active");
        selectedSpan = 2;
    })
}

getImages(color);