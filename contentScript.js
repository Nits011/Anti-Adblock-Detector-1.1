document.addEventListener('DOMContentLoaded', () => {
    const scriptTag = document.querySelector('script[src="https://rotizer.net/assets/js/fuckadblock.min.js?v=3"]');
  
    // Create a hidden test div to check if adblocker is active
    const testDiv = document.createElement('div');
    testDiv.id = 'ad-test';
    testDiv.style.display = 'none';
    document.body.appendChild(testDiv);
  
    setTimeout(() => {
      if (!scriptTag || getComputedStyle(testDiv).display === 'none') {
        alert('Adblocker is active!');
      } else {
        alert('Adblocker is not active!');
      }
      document.body.removeChild(testDiv);
    }, 1000);
  });
  