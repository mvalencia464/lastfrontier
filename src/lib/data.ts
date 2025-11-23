export const businessInfo = {
  name: "Last Frontier Lawns",
  owner: "Jesse Miessner",
  phone: "907-440-7160",
  email: "lastfrontierlawnco@gmail.com",
  website: "https://lastfrontierlawns.com/",
  serviceAreas: "Anchorage & Palmer",
  rating: "5.0",
  reviewCount: "50+",
};

export const services = {
  spring: [
    { item: "Full Cleanups", price: "Starting at $220" },
    { item: "Premium Fertilizer", price: "$55" },
    { item: "Debris Removal", price: null },
    { item: "First Mow", price: null },
  ],
  summer: [
    { item: "Weekly Mowing", price: "Starting at $55" },
    { item: "Midsummer Feed", price: "$55 per bag" },
    { item: "Weed Control", price: "Starting at $85" },
  ],
  fall: [
    { item: "Fall Cleanups", price: "Starting at $220" },
    { item: "Leaf Mulching", price: null },
  ],
  winter: [
    { item: "Snow Plowing", price: "Starting at $55" },
    { item: "Ice Control / Sanding", price: "Starting at $85" },
  ]
};

export const standardServiceItems = [
  "Spring Cleanup", "Weekly Mowing", "Fertilizer Program", "Weed Control", "Fall Cleanup", "Debris Removal"
];

export const winterServiceItems = [
  "Snow Plowing (Starts at $55)", "Plow Driveway", "Walkway Clearing", "Sanding (Starts at $85)", "Ice Control"
];

export const christmasServiceItems = [
  "Roofline Lighting", "Tree Wrapping", "Wreaths & Garland", "Removal & Storage", "Timer/Automation"
];
