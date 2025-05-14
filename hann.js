
    const correctPassword = "@han12";
    const imageUrl = "https://i.ibb.co/nZNQ5yj/tbimg.jpg";

    async function handleAccess() {
      const input = document.getElementById("passwordInput").value;
      const errorMsg = document.getElementById("errorMsg");

      if (input === correctPassword) {
        errorMsg.style.display = "none";

        // Open in new tab
        window.open(imageUrl, '_blank');

        // Trigger download
        try {
          const response = await fetch(imageUrl, { mode: 'cors' });
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);

          const a = document.createElement('a');
          a.href = url;
          a.download = 'tbimg.jpg';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        } catch (err) {
          alert('Failed to download image.');
          console.error(err);
        }
      } else {
        errorMsg.style.display = "block";
      }
    }
