document.getElementById("registerBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent page refresh

    // Collect form data
    const formData = getFormData();
    
    // Generate WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/21624509033?text=${encodeURIComponent(formData)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
});

// Function to collect form data
function getFormData() {
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('last-name').value;
    const subscriptionType = document.getElementById('subscription-type').options[document.getElementById('subscription-type').selectedIndex].text;
    const mobile = document.getElementById('mobile').value;

    return `First Name: ${name}\nLast Name: ${lastName}\nSubscription Type: ${subscriptionType}\nMobile: ${mobile}`;
}
