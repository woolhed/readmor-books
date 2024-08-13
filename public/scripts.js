function showBookDetails(bookTitle) {
    alert("More information about " + bookTitle);
    // In a real application, you would display more detailed info here
}

/* Infinite Scrolling Script (REVIEW)

let currentPage = 1;
const contentContainer = document.getElementById('content');
const loadingIndicator = document.getElementById('loading');

async function loadMoreContent(page) {
    try {
        // Simulate an API call
        const response = await fetch(`https://api.example.com/content?page=${page}`);
        const data = await response.json();

        // Assuming the API returns an array of content items
        data.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.body}</p>
            `;
            contentContainer.appendChild(itemDiv);
        });

        // Hide the loading indicator if no more data
        if (data.hasMore === false) {
            loadingIndicator.style.display = 'none';
            window.removeEventListener('scroll', handleScroll);
        }
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        // Near the bottom, load more content
        currentPage++;
        loadMoreContent(currentPage);
    }
}

// Load initial content
loadMoreContent(currentPage);

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

*/