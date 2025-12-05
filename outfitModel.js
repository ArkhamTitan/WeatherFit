function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getOutfit(temp, condition) {
  const cold = {
    tops: ["Heavy Jacket", "Parka", "Wool Coat"],
    bottoms: ["Thermal Pants", "Sweatpants", "Lined Jeans"],
    shoes: ["Snow Boots", "Winter Boots"]
  };

  const medium = {
    tops: ["Hoodie", "Long Sleeve Shirt", "Light Jacket"],
    bottoms: ["Jeans", "Chinos", "Cargo Pants"],
    shoes: ["Sneakers", "High Tops"]
  };

  const hot = {
    tops: ["T-shirt", "Tank Top", "Athletic Shirt"],
    bottoms: ["Shorts", "Gym Shorts"],
    shoes: ["Slides", "Sandals", "Low-top Sneakers"]
  };

  let category;

  if (temp < 50) category = cold;
  else if (temp < 75) category = medium;
  else category = hot;

  let shoes = getRandomItem(category.shoes);

  // Weather-based modifier
  if (condition.includes("rain")) {
    shoes = "Waterproof Boots";
  }

  return {
    top: getRandomItem(category.tops),
    bottom: getRandomItem(category.bottoms),
    shoes: shoes   // <-- FIXED
  };
}

module.exports = { getOutfit };
