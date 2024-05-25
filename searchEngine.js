


// function filterItems(searchQuery) {
//     const containers = document.querySelectorAll('.rowShoes > div');
//     containers.forEach(container => {
//         const title = container.querySelector('.titleShoes');
//         if (title) {
//             const isVisible = title.textContent.toLowerCase().includes(searchQuery.toLowerCase());
//             container.style.display = isVisible ? 'block' : 'none';
//         }
//     });
// }

// // Event listener for input on search bar
// document.getElementById('searchBar').addEventListener('input', function() {
//     const searchQuery = this.value;
//     filterItems(searchQuery);
// });


function filterItems(searchQuery) {
    const containers = document.querySelectorAll('.rowShoes > div');
    let anyVisible = false; // Flag to check if any item is visible
    
    containers.forEach(container => {
        const title = container.querySelector('.titleShoes');
        if (title) {
            const isVisible = title.textContent.toLowerCase().includes(searchQuery.toLowerCase());
            container.style.display = isVisible ? 'block' : 'none';
            if (isVisible) {
                anyVisible = true; // If any item is visible, set the flag to true
            }
        }
    });
    
    // Show or hide the noResult message based on anyVisible flag
    const noResultMessage = document.querySelector('.noResult');
    noResultMessage.style.display = anyVisible ? 'none' : 'block';
}

// Event listener for input on search bar
document.getElementById('searchBar').addEventListener('input', function() {
    const searchQuery = this.value;
    filterItems(searchQuery);
});

let priceFilter = 'all';

function filterItems() {
    const searchQuery = (document.getElementById('searchBar')?.value || '').toLowerCase();
    const containers = document.querySelectorAll('.rowShoes > div');
    let hasVisibleItems = false;

    containers.forEach(container => {
        const title = container.querySelector('.titleShoes').textContent.toLowerCase();
        const priceText = container.querySelector('.priceShoes').textContent;
        const price = parseFloat(priceText.replace(/[^\d.-]/g, ''));

        const matchesSearch = title.includes(searchQuery);
        const matchesPrice = (priceFilter === 'all') ||
            (priceFilter === '0-500' && price <= 500) ||
            (priceFilter === '500-1000' && price > 500 && price <= 1000) ||
            (priceFilter === '1000-1500' && price > 1000 && price <= 1500) ||
            (priceFilter === '1500-2000' && price > 1500 && price <= 2000) ||
            (priceFilter === '2000-2500' && price > 2000 && price <= 2500) ||
            (priceFilter === '2500-3000' && price > 2500 && price <= 3000) ||
            (priceFilter === 'over3000' && price > 3000);

        const isVisible = matchesSearch && matchesPrice;
        container.style.display = isVisible ? 'block' : 'none';

        if (isVisible) {
            hasVisibleItems = true;
        }
    });

    document.querySelector('.noResult').style.visibility = hasVisibleItems ? 'hidden' : 'visible';
}

// Event listener for search bar input
const searchBar = document.getElementById('searchBar');
if (searchBar) {
    searchBar.addEventListener('input', filterItems);
}

// Event listener for price filters
document.querySelectorAll('.priceFilters .filterBtn').forEach(button => {
    button.addEventListener('click', () => {
        priceFilter = button.id.replace('price', '');
        filterItems();
    });
});

// Event listener for the "Reset" button
document.getElementById('priceReset').addEventListener('click', () => {
    priceFilter = 'all';
    filterItems();
});

// Initialize filter to show all items
filterItems();






document.getElementById('inStockBtn').addEventListener('click', function() {
    document.querySelector('.inStock').style.display = 'block';
    document.querySelector('.outOfStock').style.display = 'none';
    this.classList.add('active');
    document.getElementById('outOfStockBtn').classList.remove('active');
  });
  
  document.getElementById('outOfStockBtn').addEventListener('click', function() {
    document.querySelector('.inStock').style.display = 'none';
    document.querySelector('.outOfStock').style.display = 'block';
    this.classList.add('active');
    document.getElementById('inStockBtn').classList.remove('active');
  });
  



  document.getElementById('creditButton').addEventListener('click', function() {
    document.getElementById('creditsContainer').style.display = 'flex';
  });
  
  document.getElementById('exitButton').addEventListener('click', function() {
    document.getElementById('creditsContainer').style.display = 'none';
  });
  





  function showCredits() {
    var container = document.getElementById('creditsContainer');
    container.classList.add('show');
  }

  // Example: Show the credits container after 1 second
  setTimeout(showCredits, 300);


  


