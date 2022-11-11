import {
	FaRunning,
	FaPaintBrush,
	FaCoffee,
	FaTrain,
	FaFax,
	FaPhoneAlt,
} from "react-icons/fa"
import { TbMovie } from "react-icons/tb"
import { MdMuseum, MdPark, MdRestaurant } from "react-icons/md"

export const navLinks = [
	{
		name: "Amenities",
		href: "/amenities",
	},
	{
		name: "Floor Plans",
		href: "/floorplans",
	},
	{
		name: "Neighborhood",
		href: "/neighborhood",
	},
	{
		name: "Contact",
		href: "/contact",
	},
]

export const amenitiesFeatures = [
	{
		title: "Building Features",
		list: [
			"24 hour fitness center",
			"Rooftop lounger with amazing city skyline views",
			"Coworking space with kitchenette",
			"Free high speed WiFi",
			"Private gated paring on site (limited availability)",
			"24 hour video monitoring throughout the building",
			"Keyless entry",
			"Pet friendly",
		],
	},
	{
		title: "Apartment Features",
		list: [
			"Studios through 4 bedrooms",
			"Video intercom system",
			"In-unit laundry",
			"Stainless steel appliances",
			"Granite countertops in kitchens",
			"Custom glass shower doors in bathroom",
			"USB charging outlets",
			"Utilities including heat, A/C, and water",
			"Furnished options available upon request",
		],
	},
]

export const bedrooms = [
	{
		title: "Studio",
		size: "420 sq ft",
		list: [
			"Full Bathroom",
			"Kitchen includes sink, stove, refrigerator, dishwasher",
			"Washer & Dryer",
			"Heating & Air Conditioning",
		],
	},
	{
		title: "2 Bedroom - 2 Bath",
		size: "750 sq ft",
		list: [
			"Living Room",
			"Kitchen includes sink, stove, refrigerator, dishwasher",
			"Washer & Dryer",
			"Heating & Air Conditioning",
		],
	},
	{
		title: "3 Bedroom - 3 Bath",
		size: "870 sq ft",
		list: [
			"Living Room",
			"1 extra closet",
			"Kitchen includes sink, stove, refrigerator, dishwasher",
			"Washer & Dryer",
			"Heating & Air Conditioning",
		],
	},
	{
		title: "4 Bedroom - 2 Bath",
		size: "1,150 sq ft",
		list: [
			"Living Room",
			"2 extra closets",
			"Kitchen includes sink, stove, refrigerator, dishwasher",
			"Washer & Dryer",
			"Heating & Air Conditioning",
		],
	},
]

export const disclaimerDesc =
	"Apartment photos and floor plans are for illustrative purposes only. Actual square footage and property or apartment features may vary."

export const neighborhoodDesc =
	"Student-oriented apartment rentals conveniently located in the heart of University City and just steps from the campus of Drexel, UPenn, and University of the Sciences."

export const events = [
	{
		title: "Movie Theatres",
		href: "https://www.cinemark.com/theatres/pa-philadelphia/cinemark-university-city-penn-6",
		Icon: TbMovie,
	},
	{
		title: "Athletic Field",
		href: "https://drexeldragons.com/sports/2016/8/3/facilities-vidas-field-aug-2016.aspx?id=929",
		Icon: FaRunning,
	},
	{
		title: "ICA Philadelphia",
		href: "https://icaphila.org/",
		Icon: FaPaintBrush,
	},
	{
		title: "Penn Museum",
		href: "https://www.penn.museum/",
		Icon: MdMuseum,
	},
	{
		title: "Schuylkill Banks",
		href: "https://www.schuylkillbanks.org/",
		Icon: MdPark,
	},
	{
		title: "Coffee Shops",
		href: "https://www.yelp.com/search?find_desc=CoffeeTea&find_loc=12S43rdStPhiladelphiaPA19104",
		Icon: FaCoffee,
	},
	{
		title: "Restaurants",
		href: "https://www.yelp.com/search?find_desc=Restaurants&find_loc=12+S+43rd+St+Philadelphia+PA+19104&ns=1",
		Icon: MdRestaurant,
	},
	{
		title: "Septa",
		href: "https://www5.septa.org/?redirect=maps%2Ftransit%2Fmfl",
		Icon: FaTrain,
	},
]

export const contact = [
	{
		desc: "1(800)-374-5123",
		Icon: FaPhoneAlt,
	},
	{
		desc: "1(888)-823-5250 ",
		Icon: FaFax,
	},
]
