// Define the correct password
const correctPassword = "@han12";
const imageUrl = "https://i.ibb.co/nZNQ5yj/tbimg.jpg"; // Link to the image

// Function to handle the password verification and image download
function handleAccess() {
  const input = document.getElementById("passwordInput").value; // Get the input value
  const errorMsg = document.getElementById("errorMsg"); // Reference to the error message element

  // Check if the entered password matches the correct one
  if (input === correctPassword) {
    // Hide the error message if the password is correct
    errorMsg.style.display = "none";

    // Open the image in a new tab
    window.open(imageUrl, '_blank');

    // Trigger the image download
    downloadImage(imageUrl);
  } else {
    // Show the error message if the password is incorrect
    errorMsg.style.display = "block";
  }
}

// Function to download the image
async function downloadImage(url) {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);

    // Create an invisible link to trigger the download
    const link = document.createElement('a');
    link.href = objectURL;
    link.download = 'tbimg.jpg';  // Name for the downloaded file
    document.body.appendChild(link);
    link.click();  // Simulate a click on the link to trigger the download
    document.body.removeChild(link); // Clean up after download
    URL.revokeObjectURL(objectURL); // Revoke the object URL
  } catch (err) {
    alert('Failed to download image.');
    console.error(err);
  }
}
