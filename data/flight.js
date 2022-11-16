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
        departure: "ORD",
        arrival: "DFW",
        time: "12:05",
        airline: "Qatar Airways",
        gate: "B3"

    },
    {
        number: "AA263",
        departure: "ORD",
        arrival: "LAX",
        time: "01:05",
        airline: "American Airlines",
        gate: "B7"

    },
    {
        number: "AI126",
        departure: "ORD",
        arrival: "DEL",
        time: "12:30",
        airline: "Air India",
        gate: "B9"

    },
    {
        number: "UA4804",
        departure: "ORD",
        arrival: "PWM",
        time: "12:45",
        airline: "United Airlines",
        gate: "B6"

    },
    {
        number: "AC5781",
        departure: "ORD",
        arrival: "DEN",
        time: "12:50",
        airline: "Air Canada",
        gate: "B4"

    },
    {
        number: "QR9298",
        departure: "ORD",
        arrival: "DFW",
        time: "12:55",
        airline: "Qatar Airways",
        gate: "B3"

    },
    {
        number: "UA1568",
        departure: "ORD",
        arrival: "SEA",
        time: "12:50",
        airline: "Unitd Airlines",
        gate: "B3"

    },
];
