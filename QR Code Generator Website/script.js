// get the input element
const inputElement = document.querySelector('input');
// get the img element
const img = document.querySelector('#qr-code');

// We can use API to Generate QR Code
// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

function generateQRCode(){    
    // get the value of inputElement
    const data = inputElement.value;

    if(data.length > 0){
        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`)
        .then( (result) => {
            // add the image src in img tag
            img.setAttribute("src", result.url);
            // set the img element to display block so it's visible
            img.style.display = "block";
        });

        // we can write ${data} to "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data ;
    }
    else{
        inputElement.classList.add('error');
        inputElement.style.borderColor = "red";
        setTimeout( () => {
            inputElement.classList.remove('error');
            inputElement.style.borderColor = "#494eea";
        }, 1000);
    }
    
}