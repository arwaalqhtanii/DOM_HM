
function changeText(element, newText) {

    if (!element.dataset.originalText) {
        element.dataset.originalText = element.innerHTML; 
    }
    element.innerHTML = newText; 
}

function resetText(element) {
    if (element.dataset.originalText) {
        element.innerHTML = element.dataset.originalText; 
    }
}


function changeText(element, newText) {
    element.dataset.originalText = element.innerText; 
    element.innerText = newText; 
}
function resetText(element, originalText) {
    element.innerText = originalText; 
}

//img
function changeProfileImage() {
    const img = document.getElementById('profileImage');
    img.src = 'pro2.png'; 
}

function resetProfileImage() {
    const img = document.getElementById('profileImage');
    img.src = 'pro.png'; 
}




