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
        image: "tonkotsu.jpg",
        rating: 8, 
        comment: "Totemo oishikute utsukushī"
    },
    { 
        id: 4, 
        name: "Naruto Ramen", 
        restaurant: "Ramen-ya", 
        image: "naruto.jpg",
        rating: 2, 
        comment: "Not so good"
    }
 ];

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

        img.addEventListener("click", () => handleClick(ramen));

        const div = document.createElement("div");
        div.classList.add("image");
        div.appendChild(img);

        ramenMenu.appendChild(div);
    });
}

function handleClick(ramen) {
    // Get the image element
    const ramenImg = document.getElementById("ramen-img");

    ramenImg.src = ramen.image.startsWith("http") ? ramen.name : `images/${ramen.image}`;
    ramenImg.alt = ramen ? ramen.name : 'Placeholder image';

    const ramenName = document.getElementById("ramen-name");
    const ramenRestaurant = document.getElementById("ramen-restaurant");

    ramenName.textContent = ramen ?.name || 'Insert name here';
    ramenRestaurant.textContent = ramen ?.restaurant || 'Insert restaurant here';

    const ramenRating = document.getElementById("ramen-rating");
    const ramenComment = document.getElementById("ramen-comment");

    ramenRating.textContent = ramen?.rating ? `${ramen.rating}/10` : 'Set your rating  /10';
    ramenComment.textContent = ramen?.comment || 'Insert comment here';
}

function addSubmitListener() {
    document.getElementById("form-button").addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Form submitted!");

        const name = document.getElementById("name").value;
        const restaurant = document.getElementById("restaurant").value;
        const image = document.getElementById("image").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("message").value;



        const newRamen = {
            id: ramens.length + 1, 
            name,
            restaurant,
            image,
            rating: rating ? parseInt(rating) : null,
            comment: comment || ""
        };

        ramens.push(newRamen);

        addedRamen(newRamen);

        event.target.reset();
    });
}

function addedRamen(ramen) {
    const ramenMenu = document.getElementById("ramen-menu");

    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.width = 250;
    img.height = 250;
    img.id = ramen.id;

    img.addEventListener("click", () => handleClick(ramen));

    const div = document.createElement("div");
    div.classList.add("image");
    div.appendChild(img);

    ramenMenu.appendChild(div);
}

function main () {
    displayRamens()
    addSubmitListener()
}

main();