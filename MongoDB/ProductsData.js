use ecommerce_db; // Creates or switches to the database

db.products.insertMany([
    {
        _id: 1,
        name: "Smartphone X",
        category: "Electronics",
        price: 799.99,
        stock: 50,
        features: ["5G", "OLED Display", "Dual Camera"],
        manufacturer: "TechGadget Inc.",
        releaseDate: ISODate("2023-01-15T10:00:00Z"),
        reviews: [
            { userId: "user101", rating: 5, comment: "Amazing phone!", date: ISODate("2023-01-20T14:30:00Z") },
            { userId: "user102", rating: 4, comment: "Good, but battery could be better.", date: ISODate("2023-02-01T09:00:00Z") }
        ],
        warrantyYears: 1
    },
    {
        _id: 2,
        name: "Wireless Headphones",
        category: "Audio",
        price: 149.99,
        stock: 200,
        features: ["Noise Cancelling", "Bluetooth 5.0"],
        manufacturer: "SoundWave Co.",
        releaseDate: ISODate("2022-11-01T11:00:00Z"),
        reviews: [
            { userId: "user103", rating: 5, comment: "Excellent sound quality.", date: ISODate("2022-11-10T16:00:00Z") }
        ],
        warrantyYears: 2
    },
    {
        _id: 3,
        name: "Laptop Pro 15",
        category: "Electronics",
        price: 1200.00,
        stock: 15,
        features: ["Intel i7", "16GB RAM", "512GB SSD"],
        manufacturer: "TechGadget Inc.",
        releaseDate: ISODate("2023-03-20T10:00:00Z"),
        reviews: [
            { userId: "user101", rating: 4, comment: "Fast and reliable.", date: ISODate("2023-04-01T12:00:00Z") }
        ]
        // Missing warrantyYears field
    },
    {
        _id: 4,
        name: "E-Reader Lite",
        category: "Books & Media",
        price: 89.00,
        stock: 120,
        features: ["E-Ink Display", "Built-in Light"],
        manufacturer: "ReadFlow Inc.",
        releaseDate: ISODate("2022-09-01T15:00:00Z"),
        // No reviews field
        warrantyYears: 1
    },
    {
        _id: 5,
        name: "Smart Watch Elite",
        category: "Wearables",
        price: 299, // Integer price - demonstrating $type
        stock: 30,
        features: ["Heart Rate Monitor", "GPS"],
        manufacturer: "WearTech",
        releaseDate: ISODate("2023-05-10T08:00:00Z"),
        reviews: [
            { userId: "user104", rating: 3, comment: "Decent, but limited apps.", date: ISODate("2023-05-15T10:00:00Z") }
        ],
        warrantyYears: 1
    },
    {
        _id: 6,
        name: "Gaming Mouse",
        category: "Accessories",
        price: 49.99,
        stock: 80,
        manufacturer: "GamePro",
        // Missing features and reviews
        warrantyYears: 1
    },
    {
        _id: 7,
        name: "Portable Speaker",
        category: "Audio",
        price: 75.50,
        stock: 150,
        features: ["Waterproof", "Long Battery Life"],
        manufacturer: "SoundWave Co.",
        releaseDate: ISODate("2023-06-01T10:00:00Z"),
        reviews: [], // Empty reviews array
        warrantyYears: 2
    },
    {
        _id: 8,
        name: "External SSD 1TB",
        category: "Storage",
        price: "150.00", // String price - demonstrating $type
        stock: 60,
        manufacturer: "DataVault",
        releaseDate: ISODate("2023-02-28T09:00:00Z"),
        warrantyYears: 3
    },
    {
        _id: 9,
        name: "Webcam HD",
        category: "Accessories",
        price: 60.00,
        stock: 90,
        features: ["1080p", "Auto-focus"],
        manufacturer: "StreamView",
        releaseDate: ISODate("2023-04-05T14:00:00Z"),
        reviews: null, // Null value for reviews
        warrantyYears: 1
    },
    {
        _id: 10,
        name: "Bluetooth Earbuds",
        category: "Audio",
        price: 89.99,
        stock: 110,
        features: ["True Wireless", "Touch Controls"],
        manufacturer: "SoundWave Co.",
        releaseDate: ISODate("2023-07-01T09:00:00Z"),
        reviews: [
            { userId: "user105", rating: 4, comment: "Great for workouts.", date: ISODate("2023-07-10T11:00:00Z") },
            { userId: "user106", rating: 5, comment: "Comfortable fit.", date: ISODate("2023-07-12T15:00:00Z") }
        ],
        warrantyYears: 2
    }
]); 