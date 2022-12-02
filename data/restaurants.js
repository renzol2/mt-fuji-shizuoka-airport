/**
 * @typedef Hours
 * @property {string} day
 * @property {string} openingTime
 * @property {string} closingTime
 */

/**
 * @typedef Restaurant
 * @property {string} name
 * @property {Array<Hours>} hours
 * @property {string} priceRange
 * @property {string} gate
 * @property {string} description
 */

/** @type {Restaurant} */
const GOOSE_ISLAND_RESTAURANT = {
    name: "Goose Island Beer Company",
    hours: [
        { day: "Monday", openingTime: "6am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "6am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "6am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "6am", closingTime: "9pm" },
        { day: "Friday", openingTime: "6am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "6am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "6am", closingTime: "9pm" },
    ],
    priceRange: "$$",
    gate: "B1",
    description:
        "Chicago's very own Goose Island Brewing Company brews its own beer and root beer right here in the City. Come sample their home-brewed favorites here at O'Hare where a full service bar awaits you. Paninis, salads and sandwiches available.",
};

/** @type {Restaurant} */
const LA_TAPENADE_MEDITERRANEAN_CAFE_RESTAURANT = {
    name: "La Tapenade Mediterranean Cafe",
    hours: [
        { day: "Monday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "5:30am", closingTime: "9pm" },
        {
            day: "Wednesday",
            openingTime: "5:30am",
            closingTime: "9pm",
        },
        { day: "Thursday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Friday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "5:30am", closingTime: "9pm" },
    ],
    priceRange: "$$$",
    gate: "B4",
    description:
        "La Tapenade exudes the warmth and abundance of the coastal culture with its irresistible display of pastries, breads, gourmet sandwiches and pizzas. Fresh herbs, fine cheeses, specialty grilled meats and fire-roasted vegetables are used throughout the entire menu. Hand-made Mediterranean flatbreads are all baked fresh each day.",
};

/** @type {Restaurant} */
const STARBUCKS_A = {
    name: "Starbucks Coffee at B5",
    hours: [
        { day: "Monday", openingTime: "5am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "5am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "5am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "5am", closingTime: "9pm" },
        { day: "Friday", openingTime: "5am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "5am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "5am", closingTime: "9pm" },
    ],
    priceRange: "$$",
    gate: "B5",
    description:
        "It happens millions of times each week a customer receives a drink from a Starbucks barista, but each interaction is unique. It's just a moment in time, just one hand reaching over the counter to present a cup to another outstretched hand. But it's a connection.",
};

/** @type {Restaurant} */
const SMOOTHIE_KING_THE_GROVE = {
    name: "Smoothie King / The Grove",
    hours: [
        { day: "Monday", openingTime: "7am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "7am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "7am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "7am", closingTime: "9pm" },
        { day: "Friday", openingTime: "7am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "7am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "7am", closingTime: "9pm" },
    ],
    priceRange: "$",
    gate: "B6",
    description:
        "The Grove delivers high quality snacks, that are superior in taste and are good for you! The Grove seeks the best avalable ingredients in the marketplace in order to provide deliciously different snack offerings to on the go airport travelers.",
};

/** @type {Restaurant} */
const GARRETT_POPCORN_SHOPS = {
    name: "Garrett Popcorn Shops",
    hours: [
        { day: "Monday", openingTime: "7am", closingTime: "8pm" },
        { day: "Tuesday", openingTime: "7am", closingTime: "8pm" },
        { day: "Wednesday", openingTime: "7am", closingTime: "8pm" },
        { day: "Thursday", openingTime: "7am", closingTime: "8pm" },
        { day: "Friday", openingTime: "7am", closingTime: "8pm" },
        { day: "Saturday", openingTime: "7am", closingTime: "8pm" },
        { day: "Sunday", openingTime: "7am", closingTime: "8pm" },
    ],
    priceRange: "$",
    gate: "B7",
    description:
        "Every batch of our gourmet popcorn is handmade daily using the highest quality ingredients. It's no wonder Garrett Popcorn Shops has been a Chicago Tradition Since 1949.",
};

/** @type {Restaurant} */
const JAMBA_JUICE = {
    name: "Jamba Juice",
    hours: [
        { day: "Monday", openingTime: "7am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "7am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "7am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "7am", closingTime: "9pm" },
        { day: "Friday", openingTime: "7am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "7am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "7am", closingTime: "9pm" },
    ],
    priceRange: "$",
    gate: "B7",
    description:
        "Jamba Juice is the category-defining leader in healthy blended beverages, juices, and good-for-you snacks.",
};

/** @type {Restaurant} */
const WOLFGANG_EXPRESS = {
    name: "Wolfgang Express",
    hours: [
        { day: "Monday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Friday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "5:30am", closingTime: "9pm" },
    ],
    priceRange: "$",
    gate: "B7",
    description:
        "Critically acclaimed chef Wolfgang Puck brings fine dining to O'Hare International Airport. The eclectic interior design and savory dishes are a treat for the eyes and palette. Full Bar available.",
};

/** @type {Restaurant} */
const ELIS_CHEESECAKE = {
    name: "Eli's Cheesecake",
    hours: [
        { day: "Monday", openingTime: "9am", closingTime: "6pm" },
        { day: "Tuesday", openingTime: "9am", closingTime: "6pm" },
        { day: "Wednesday", openingTime: "9am", closingTime: "6pm" },
        { day: "Thursday", openingTime: "9am", closingTime: "6pm" },
        { day: "Friday", openingTime: "9am", closingTime: "6pm" },
        { day: "Saturday", openingTime: "9am", closingTime: "6pm" },
        { day: "Sunday", openingTime: "9am", closingTime: "6pm" },
    ],
    priceRange: "$",
    gate: "B9",
    description:
        "Created in the kitchen of Eli's restaurant, where superstars like Frank Sinatra, Sean Connery, and Liza Minelli came to dine, Eli's cheesecake has become a Chicago tradition and one of the best-selling cheesecakes in America. You can buy one slice, or take home an entire cheesecake.",
};

/** @type {Restaurant} */
const STARBUCKS_B = {
    name: "Starbucks Coffee at B9",
    hours: [
        { day: "Monday", openingTime: "4:30am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "4:30am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "4:30am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "4:30am", closingTime: "9pm" },
        { day: "Friday", openingTime: "4:30am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "4:30am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "4:30am", closingTime: "9pm" },
    ],
    priceRange: "$",
    gate: "B9",
    description:
        "It happens millions of times each week a customer receives a drink from a Starbucks barista, but each interaction is unique. It's just a moment in time, just one hand reaching over the counter to present a cup to another outstretched hand. But it's a connection.",
};

/**
 * @typedef Restaurants
 * @type {Object.<string, Array<Restaurant>}
 */

/** @type {Restaurants} */
const RESTAURANTS = {
    B1: [GOOSE_ISLAND_RESTAURANT],
    B2: [],
    B3: [],
    B4: [LA_TAPENADE_MEDITERRANEAN_CAFE_RESTAURANT],
    B5: [STARBUCKS_A],
    B6: [SMOOTHIE_KING_THE_GROVE],
    B7: [JAMBA_JUICE, GARRETT_POPCORN_SHOPS, WOLFGANG_EXPRESS],
    B8: [],
    B9: [ELIS_CHEESECAKE, STARBUCKS_B],
};

export { RESTAURANTS };
