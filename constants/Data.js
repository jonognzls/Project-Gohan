import images from "./images"
import icons from "./icons"

const trendingRecipes = [
    {
        id: 1,
        name: "Chicken Teriyaki Rice Bowl",
        image: images.teriyaki_rice,
        duration: "25 mins",
        serving: 1,
        isBookmark: false,
        category: "Rice Bowl",
        author: {
            profilePic: images.UserProfile5,
            name: "Jihyo",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.soysauce,
                description: "Soy Sauce",
                quantity: "1/2 cup"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic Cloves",
                quantity: "4"
            },
            {
                id: 3,
                icon: icons.ginger,
                description: "Grated Fresh Ginger",
                quantity: "1/2 tsp"
            },
            {
                id: 4,
                icon: icons.honey,
                description: "Honey",
                quantity: "1/3"
            },
            {
                id: 5,
                icon: icons.ricevinegar,
                description: "Rice Vinegar",
                quantity: "1 tbsp"
            },
            

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                profilePic: images.UserProfile4
            }
        ]
    },
    {
        id: 2,
        name: "Japanese-Style Karaage",
        image: images.karaage_chicken,
        duration: "50 mins",
        serving: 1,
        isBookmark: true,
        category: "Chicken",
        author: {
            profilePic: images.UserProfile8,
            name: "Chaeyoung",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Thighs",
                quantity: "1 pound"
            },
            {
                id: 2,
                icon: icons.soysauce,
                description: "Soy Sauce",
                quantity: "2 tbsp"
            },
            {
                id: 3,
                icon: icons.ginger,
                description: "Grated Fresh Ginger",
                quantity: "2 tsp"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "2"
            },
            {
                id: 5,
                icon: icons.peanutoil,
                description: "Peanut Oil",
                quantity: "1 quart"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile5
            },
            {
                id: 2,
                profilePic: images.UserProfile4
            },
            {
                id: 3,
                profilePic: images.UserProfile1
            },
            {
                id: 4,
                profilePic: images.UserProfile2
            },
            {
                id: 5,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 3,
        name: "Japanese Katsu Sando",
        image: images.katsu_sando,
        duration: "30 mins",
        serving: 1,
        isBookmark: true,
        category: "Sandwich",
        author: {
            profilePic: images.UserProfile9,
            name: "Tzuyu",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.cabbage,
                description: "Green Cabbage",
                quantity: "1/4"
            },
            {
                id: 2,
                icon: icons.pork,
                description: "Boneless Pork Cutlets",
                quantity: "1 pound"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.flour,
                description: "All-purpose Flour",
                quantity: "1/2 cup"
            },
            {
                id: 5,
                icon: icons.breadcrumbs,
                description: "Panko Japanese Breadcrumbs",
                quantity: "1 1/2 cup"
            },

        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 4,
        name: "Spicy Tofu Stir-fry",
        image: images.tofu,
        duration: "50 mins",
        serving: 1,
        isBookmark: true,
        category: "Vegetable",
        author: {
            profilePic: images.UserProfile7,
            name: "Dahyun",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.tofu,
                description: "Extra-firm Tofu cut into 1/2-inch cubes",
                quantity: "16 ounces"
            },
            {
                id: 2,
                icon: icons.orangejuice,
                description: "Orange Juice",
                quantity: "1/2 cup"
            },
            {
                id: 3,
                icon: icons.vegbroth,
                description: "Vegetable Broth",
                quantity: "1/3 cup"
            },
            {
                id: 4,
                icon: icons.soysauce,
                description: "Soy Sauce",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: icons.honey,
                description: "Honey",
                quantity: "3 tbsp"
            },


        ],
        viewers: [

        ]
    },

]

const categories = trendingRecipes


export default {
    trendingRecipes,
    categories
}