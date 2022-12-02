/**
 * @typedef Flight
 * @property {string} number
 * @property {string} departure
 * @property {string} arrival
 * @property {string} time
 * @property {string} airline
 * @property {string} gate
 */

// To avoid having to implement actual searching, it may be better to create lists of flights on certain days
// and use conditionals to see if it should be displayed (map function)
// should talk about this on Wednesday's meeting


/** @type {Array<Flight>} */
export const FLIGHTS = [
    {
        number: "QR9298",
        airline: "Qatar Airways",
        departure: "ORD",
        arrival: "DFW",
        date: new Date("2022-11-17T01:05"),
        gate: "B3"
    },
    {
        number: "AA263",
        airline: "American Airlines",
        departure: "ORD",
        arrival: "LAX",
        date: new Date("2022-11-23T01:10"),
        gate: "B7"
    },
    {
        number: "UA3141",
        airline: "American Airlines",
        departure: "ORD",
        arrival: "LAX",
        date: new Date("2022-11-23T02:15"),
        gate: "B4"
    },
    {
        number: "AI126",
        airline: "Air India",
        departure: "ORD",
        arrival: "DEL",
        date: new Date("2022-12-01T03:20"),
        gate: "B9"
    },
    {
        number: "UA4804",
        airline: "United Airlines",
        departure: "ORD",
        arrival: "PWM",
        date: new Date("2022-12-12T05:25"),
        gate: "B6"
    },
    {
        number: "AC5781",
        airline: "Air Canada",
        departure: "ORD",
        arrival: "DEN",
        date: new Date("2022-12-19T08:30"),
        gate: "B4"
    },
    {
        number: "QR3468",
        airline: "Qatar Airways",
        departure: "ORD",
        arrival: "DFW",
        date: new Date("2022-12-20T13:45"),
        gate: "B3"
    },
    {
        number: "UA1568",
        airline: "United Airlines",
        departure: "ORD",
        arrival: "SEA",
        date: new Date("2022-12-30T21:55"),
        gate: "B3"
    }
];
