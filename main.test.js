//👉 Write your tests below here:

import { findPowderSkis } from "./main.js";
import { test, expect } from "@jest/globals";
// const { test, expect, beforeEach, afterEach } = require('@jest/globals');
import jest from 'jest';



// const { findPowderSkis } = require('./main.js');




// Write a test to check that the findPowderSkis function returns the correct gearBag with the powder skis (number 5)

    test ("When given the list of gearBags, the findPowderSkis function returns the correct gearBag with the powder skis", () => {
        const gearBags = [
            { name: "gearBag1", contents: ["climbing shoes", "harness", "rock climbing helmet", "twin ropes"] },
            { name: "gearBag2", contents: ["ice axes", "crampons", "ice harness", "ice screws", "warm gloves", "helmet"] },
            { name: "gearBag3", contents: ["caving suit", "knee pads", "head torch", "dry sack"] },
            { name: "gearBag4", contents: ["ski touring skis", "lightweight harness", "alloy crampons", "alloy ice axe", "avalanche tranceiver", "glacier rope", "sun glasses"] },
            { name: "gearBag5", contents: ["avalanche backpack", "ski helmet", "ski goggles", "powder skis", "avalanche transceiver"] }
          ];
        const actual = findPowderSkis(gearBags);
        const gearBag5 = { name: "gearBag5", contents: ["avalanche backpack", "ski helmet", "ski goggles", "powder skis", "avalanche transceiver"] };
        const expected = gearBag5;
        
        expect(actual).toStrictEqual(expected);
        });

//=======================================


// Write a test that checks if the correct gearBag is returned by listing its contents 

test('findPowderSkis should return the gear bag containing "powder skis"', () => {
    const gearBags = [
        { name: "gearBag1", contents: ["climbing shoes", "harness", "rock climbing helmet", "twin ropes"] },
        { name: "gearBag2", contents: ["ice axes", "crampons", "ice harness", "ice screws", "warm gloves", "helmet"] },
        { name: "gearBag3", contents: ["caving suit", "knee pads", "head torch", "dry sack"] },
        { name: "gearBag4", contents: ["ski touring skis", "lightweight harness", "alloy crampons", "alloy ice axe", "avalanche tranceiver", "glacier rope", "sun glasses"] },
        { name: "gearBag5", contents: ["avalanche backpack", "ski helmet", "ski goggles", "powder skis", "avalanche transceiver"] }
      ];
      
    const result = findPowderSkis(gearBags);
    expect(result).toEqual({"contents": ["avalanche backpack", "ski helmet", "ski goggles", "powder skis", "avalanche transceiver"], "name": "gearBag5"});
  });

      

//=======================================
  
// OTHER TESTS CONSIDERED BUT NOT IMPLEMENTED

// a test to ensure the function returns an object
// a test to return "null" if none of the arrays contain 'powder skis'
    // -> this is unecessary
// a test to ensure multiple arrays don't contain 'powder skis'
    // -> this is unecessary
// a test to ensure the arrays contain text and not empty strings
    // -> this is unecessary