// Test facilities; name, address, description,
// imageUrl, default, openTime, closeTime

export default [
  {
    name: "Central Park",
    address: "59th St to 110th St, New York, NY 10022",
    description: "A large public park in New York City.",
    imageUrl: "https://placehold.co/300x200",
    default: true,
    openTime: "09:00",
    closeTime: "17:00",
  },
  {
    name: "Golden Gate Park",
    address: "San Francisco, CA 94121",
    description: "A large urban park with gardens and museums.",
    imageUrl: "https://placehold.co/300x200",
    default: false,
    openTime: "05:00",
    closeTime: "13:00",
  },
  {
    name: "Hyde Park",
    address: "London, UK",
    description:
      "One of the largest parks in London, famous for its Speakers' Corner.",
    imageUrl: "https://placehold.co/300x200",
    default: false,
    openTime: "12:00",
    closeTime: "23:00",
  },
] as const;
