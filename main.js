
// 👉 Write your kata here!

/* 

Look outside! ...it's been snowing for three days straight. You know what that means... It's time to go powder skiing! 
But first, you need to grab the correct bag with your equipment in. Write a script to search through all five of your 'gearBags' to find your 'powder skis' and return the correct bag 

Note: you must use the `find` method to locate your bag...! 

*/


// 👉 Write the function your CodeWarriors will start with below here:

const gearBags = [
    { name: "gearBag1", contents: ["climbing shoes", "harness", "rock climbing helmet", "twin ropes"] },
    { name: "gearBag2", contents: ["ice axes", "crampons", "ice harness", "ice screws", "warm gloves", "helmet"] },
    { name: "gearBag3", contents: ["caving suit", "knee pads", "head torch", "dry sack"] },
    { name: "gearBag4", contents: ["ski touring skis", "lightweight harness", "alloy crampons", "alloy ice axe", "avalanche tranceiver", "glacier rope", "sun glasses"] },
    { name: "gearBag5", contents: ["avalanche backpack", "ski helmet", "ski goggles", "powder skis", "avalanche transceiver"] }
  ];
  

export function findPowderSkis(gearBags) {

  // Write your code here...
 

    let result = gearBags.find(gearBag => gearBag.contents.includes("powder skis"));
    return result;



}


// 👉 Write your code below here:








  

