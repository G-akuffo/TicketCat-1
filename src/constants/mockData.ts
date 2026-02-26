export const EVENTS = {
  "1": {
    id: "1",
    title: "The Afrofuture Gala",
    date: "Dec 28, 2026",
    time: "19:00 GMT",
    location: "El-Wak Stadium",
    category: "MUSIC",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    description:
      "Join us for an unforgettable night celebrating African culture, music, and art. The Afrofuture Gala brings together the brightest stars and creatives for a seaside extravaganza under the stars. Expect live performances, gourmet cuisine, and a vibrant atmosphere.",
    price: "$150.00",
    ticketTiers: [
      {
        id: "t1",
        name: "General Admission",
        price: "$150.00",
        description: "Entry to the main event area + 1 complimentary drink.",
        available: 200,
        tierDesign: "GENERAL",
      },
      {
        id: "t2",
        name: "VIP",
        price: "$300.00",
        description:
          "Fast-track entry, VIP lounge access, open bar, and premium seating.",
        available: 50,
        tierDesign: "GOLD",
      },
      {
        id: "t3",
        name: "VVIP Cabana",
        price: "$1,000.00",
        description:
          "Private cabana for 6, dedicated server, premium bottle service, and backstage access.",
        available: 5,
        tierDesign: "ROYAL",
      },
    ],
  },
  "2": {
    id: "2",
    title: "Polo Invitational",
    date: "Jan 05, 2027",
    time: "14:00 GMT",
    location: "Accra Polo Club",
    category: "SPORTS",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    description:
      "Experience the elegance of the sport of kings at the annual Polo Invitational. Enjoy thrilling matches, exclusive VIP lounges, and a day of high fashion and networking.",
    price: "$250.00",
    ticketTiers: [
      {
        id: "t1",
        name: "Grandstand",
        price: "$250.00",
        description: "Reserved seating in the main grandstand.",
        available: 100,
        tierDesign: "BRONZE",
      },
      {
        id: "t2",
        name: "Clubhouse Access",
        price: "$450.00",
        description:
          "Access to the air-conditioned clubhouse with buffet lunch included.",
        available: 30,
        tierDesign: "SILVER",
      },
    ],
  },
  "3": {
    id: "3",
    title: "Tech Summit Accra",
    date: "Tomorrow",
    time: "09:00 GMT",
    location: "Movenpick Hotel",
    category: "BUSINESS",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    description:
      "The premier technology conference in West Africa. Connect with industry leaders, startups, and investors. Panels, workshops, and networking sessions throughout the day.",
    price: "$80.00",
    ticketTiers: [
      {
        id: "t1",
        name: "Standard Pass",
        price: "$80.00",
        description: "Access to all panels and exhibition area.",
        available: 500,
        tierDesign: "GENERAL",
      },
      {
        id: "t2",
        name: "Developer Pass",
        price: "$120.00",
        description: "Includes access to technical workshops and hackathon.",
        available: 150,
        tierDesign: "BRONZE",
      },
      {
        id: "t3",
        name: "Investor Pass",
        price: "$300.00",
        description:
          "Exclusive networking lounge and startup pitch deck access.",
        available: 20,
        tierDesign: "GOLD",
      },
    ],
  },
  "4": {
    id: "4",
    title: "Sip & Paint Night",
    date: "Friday",
    time: "19:00 GMT",
    location: "Cantonments",
    category: "ARTS",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
    description:
      "Unleash your inner artist at our Sip & Paint Night. No experience required! All materials provided, along with complimentary wine and snacks.",
    price: "$45.00",
    ticketTiers: [
      {
        id: "t1",
        name: "Single Ticket",
        price: "$45.00",
        description: "Includes canvas, paint supplies, and 2 glasses of wine.",
        available: 40,
        tierDesign: "GENERAL",
      },
      {
        id: "t2",
        name: "Couples Package",
        price: "$80.00",
        description:
          "Discounted rate for 2 people. Includes a shared snack platter.",
        available: 10,
        tierDesign: "BRONZE",
      },
    ],
  },
  "5": {
    id: "5",
    title: "Sunday Highlife",
    date: "Sunday",
    time: "16:00 GMT",
    location: "Osu Night Market",
    category: "MUSIC",
    image: "https://images.unsplash.com/photo-1514525253344-a812df99a716?w=800",
    description:
      "End your week with the soothing sounds of Highlife music. Live bands, local delicacies, and a relaxed atmosphere perfect for families and friends.",
    price: "$20.00",
    ticketTiers: [
      {
        id: "t1",
        name: "Entry Fee",
        price: "$20.00",
        description: "Gate fee only. Food and drinks sold separately.",
        available: 1000,
        tierDesign: "GENERAL",
      },
    ],
  },
};

export const FEATURED_EVENTS = [EVENTS["1"], EVENTS["2"]];

export const UPCOMING_EVENTS = [EVENTS["3"], EVENTS["4"], EVENTS["5"]];

export const MY_TICKETS = [
  {
    id: "1",
    title: "GHANA VS NIGERIA",
    tierDesign: "GOLD",
    date: "AUG 24, 2026",
    time: "19:00 GMT",
  },
  {
    id: "2",
    title: "PADEL RAVE",
    tierDesign: "SILVER",
    date: "AUG 24, 2026",
    time: "14:00 GMT",
  },
  {
    id: "3",
    title: "THE GARDEN GALA: EVENING OF JAZZ",
    tierDesign: "BRONZE",
    date: "AUG 24, 2026",
    time: "17:00 GMT",
  },
  {
    id: "4",
    title: "BHIM CONCERT",
    tierDesign: "GENERAL",
    date: "AUG 24, 2026",
    time: "20:00 GMT",
  },
  {
    id: "5",
    title: "DETTY RAVE",
    tierDesign: "ROYAL",
    date: "AUG 24, 2026",
    time: "16:00 GMT",
  },
];
