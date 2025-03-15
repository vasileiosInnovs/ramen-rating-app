const ramens = [
    { 
        id: 1, 
        name: "Shoyu Ramen", 
        restaurant: "Ichiran", 
        image: "shoyu.jpg", 
        rating: 5, 
        comment: "Delicious!"
    },
    { 
        id: 2, 
        name: "Miso Ramen", 
        restaurant: "Menya", 
        image: "miso.jpg", 
        rating: 4, 
        comment: "Very flavorful!" 
    },
    { 
        id: 3, 
        name: "Tonkotsu Ramen", 
        restaurant: "Ramen-ya", 
        image: "tonkotsu.jpg" 
    },
    { 
        id: 4, 
        name: "Naruto Ramen", 
        restaurant: "Ramen-ya", 
        image: "naruto.jpg" 
    }
 ];

/*  function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu"); 
    ramenMenu.innerHTML = ""; // Clear existing content to prevent duplication

    ramens.forEach(ramen => {
        const img = document.createElement("img"); // Create an image element
        img.src = `images/${ramen.image}`; // Set the image source
        img.alt = ramen.name; // Set the alt text
        img.width = 250; // Set width
        img.height = 250; // Set height
        img.id = ramen.id; // Set id

        const div = document.createElement("div"); // Create a div container
        div.classList.add("image");
        div.appendChild(img); // Append img to div

        ramenMenu.appendChild(div); // Append div to #ramen-menu
    });
}

// Call the function to load the images when the page loads
displayRamens(); */

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");

    if (ramenMenu.children.length > 0) return;

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = `images/${ramen.image}`;
        img.alt = ramen.name;
        img.width = 250;
        img.height = 250;
        img.id = ramen.id;

        const div = document.createElement("div");
        div.classList.add("image");
        div.appendChild(img);

        ramenMenu.appendChild(div);
    });
}

displayRamens();
