document.getElementById('fetchMessage').addEventListener('click', async function() {
    const response = await fetch('/api');
    const data = await response.json();
    document.getElementById('message').textContent = data.message;
  });
  