const gates = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9"];


const restaurants = {
    B: {
        B1: { 1: { name: "Goose Island Beer Company", hours: "6am-9pm" } },
        B2: {},
        B3: {},
        B4: { 1: { name: "Goose Island Beer Company", hours: "6am-9pm" } },
        B5: { 1: { name: "Goose Island Beer Company", hours: "6am-9pm" } },
        B6: { 1: { name: "Goose Island Beer Company", hours: "6am-9pm" } },
        B7: { 1: { name: "Goose Island Beer Company", hours: "6am-9pm" } },
        B8: { 1: { name: "Goose Island Beer Company", hours: "6am-9pm" } },
        B9: { 1: { name: "Goose Island Beer Company", hours: "6am-9pm" } },
    },
};

// ATTEMPTING TO USE THESE EXPORTS IN ANOTHER FILE CAUSES AN EXPORT NOT DEFINED ERROR
export { gates, restaurants }