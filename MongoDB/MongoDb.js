find(condition, projection)
db.Employee_Data.find({}, { EmpID: 1, EmpName: 1 })

db.Employee_Data.find({}, { EmpID: 0 })

db.Employee_Data.find({}, { EmpID: 1, EmpName: 1, EmpGender })


db.Employee_Data.updateOne({ EmpID: 1001 }, { $set: { EmpName: 'Sachin Ramesh' } })


db.Employee_Data.updateOne({ EmpID: 1008 }, { $set: { 'EmpLocAdd.City': 'Kanpur' } })


db.Employee_Data.updateOne({ EmpID: 1010 }, { $set: { 'EmpLocAdd.City': 'Kanpur', EmpSalary: 75000 } })


db.Employee_Data.updateOne({ EmpID: 1015 }, { $set: { 'EmpLocAdd.City': 'Kanpur', EmpSalary: 75000 } }, { upsert: true })


db.Employee_Data.updateOne({ 'EmpLocAdd.City': 'Kanpur' }, { $set: { 'EmpLocAdd.PinCode': 208001 } })

db.Employee_Data.updateMany({ 'EmpLocAdd.City': 'Kanpur' }, { $set: { 'EmpLocAdd.PinCode': 208001 } })

db.Employee_Data.updateOne({}, { $rename: { EmpGender: "Gender" } })

db.Employee_Data.updateOne({}, { $: { EmpGender: "Gender" } })


db.Employee_Data.updateOne({ EmpID: 1010 }, { $unset: { EmpSalary: "" } })

db.Employee_Data.deleteOne({ EmpID: 1010 })

db.Employee_Data.deleteMany({ DateOfJoin: { $exists: true } })

db.Employee_Data.find().sort({ 'EmpLocAdd.City': 1, EmpID: -1 })

// 1001, 1005, 1009

db.Employee_Data.updateMany({ EmpID: 1001 }, { $set: { About: 'I am a good sportsman' } })

db.Employee_Data.updateMany({ EmpID: { $in: [1001, 1005, 1009] } }, { $set: { About: 'I am a good sportsman' } })

db.Employee_Data.updateMany({ EmpID: { $in: [1002, 1003, 1004] } }, { $set: { About: 'I am a Singer and Dancer' } })

db.Employee_Data.updateMany({ EmpID: { $in: [1006, 1007, 1008] } }, { $set: { About: 'I love to write Codes' } })

db.Employee_Data.find({ EmpName: 'Anoop' })

// Case Sensitive Comparision
db.Employee_Data.find({ About: /Singer/ })

db.Employee_Data.find({ About: /Singer/ })

// Case in-Sensitive Comparision
db.Employee_Data.find({ About: /code/i })

// ^ -> Starts With
db.Employee_Data.find({ EmpName: /^Sa/i })


// $ -> ends with
db.Employee_Data.find({ EmpName: /n$/i })


// Third character must be 'c'
db.Employee_Data.find({ EmpName: /^.{2}c/i })

// Second last character must be 'n'
db.Employee_Data.find({ EmpName: /n.{1}$/i })





db.Employee_Data.insertOne({
    EmpID: 1007,
    EmpName: 'Anoop',
    EmpGender: 'Male',
    EmpProgLang: ["C", "Java", "Python"]

})

db.Employee_Data.insertOne({

    EmpID: 1008,
    EmpName: 'Mudit',
    EmpGender: 'Male',
    EmpProgLang: ["Linux", "AWS"],
    EmpLocAdd: {
        City: "Delhi",
        PinCode: 11011
    }
})

db.Employee_Data.insertOne({

    EmpID: 1009,
    EmpName: 'Sri',
    EmpGender: 'Male',
    EmpProgLang: ["C#", "Linux", "Javascript"],
    EmpLocAdd: {
        City: "Delhi",
        PinCode: 11011
    },
    DateOfJoin: Date()
})

db.Employee_Data.insertOne({

    EmpID: 1009,
    EmpName: 'Bhanu',
    EmpGender: 'Male',
    EmpProgLang: ["C#", "C", "DSA"],
    EmpLocAdd: {
        City: "Delhi",
        PinCode: 11011
    },
    DateOfJoin: new Date()
})

db.Employee_Data.insertOne({

    EmpID: 1010,
    EmpName: 'Amit',
    EmpGender: 'Male',
    EmpProgLang: ["C", "C++", "DSA"],
    EmpLocAdd: {
        City: "Delhi",
        PinCode: 11011
    },
    DateOfJoin: ISODate(),
    EmpSalary: 56000

})


db.Employee_Data.find({

    EmpSalary: { $exists: true, $gt: 50000 }

})

db.Employee_Data.find(
    {
        DateOfJoin: { $exists: true, $type: 'date' }
    },
    {
        EmpID: 1,
        EmpName: 1,
        JoiningDate: {
            $dateToString:
            {
                date: '$DateOfJoin',
                format: '%d-%B-%Y %H:%M:%S',
                timezone: 'Asia/Kolkata'
            }
        }
    }
)

db.Employee_Data.insertMany([
    {
        EmpID: 1004,
        EmpName: 'Yuvraj',
        EmpGender: 'Male'
    },
    {
        EmpID: 1005,
        EmpName: 'John',
        EmpGender: 'Male'
    },
    {
        EmpID: 1006,
        EmpName: 'Saurabh',
        EmpGender: 'Male'
    }
])



db.Employee_Data.find({
    EmpName: "Sachin"
})

db.Employee_Data.find({
    EmpName: {
        $eq: "Sachin"
    }
})

db.Employee_Data.find({
    EmpID: {
        $gte: 1007
    }
})

db.Employee_Data.find({
    EmpID: {
        $in: [1010, 1001, 1005, 1091]
    }
})

db.Employee_Data.find({
    EmpName: {
        $gt: "Sachin"
    }
})


db.Employee_Data.find({
    $and: [
        {
            EmpName: { $eq: "Virat" }
        },
        {
            EmpID: { $not: { $eq: 1002 } }
        }
    ]
})


db.Employee_Data.find({

    EmpID: { $gt: 1005, $lt: 1010 }

})


db.Employee_Data.find({

    EmpSalary: { $exists: true }

})


db.Employee_Data.find({
    EmpID: { $type: 'int' }
})


db.Employee_Data.find({
    DateOfJoin: { $type: 'int' }
})

db.Employee_Data.find({
    DateOfJoin: { $exists: true, $type: ['date', 'string'] }
})


db.Employee_Data.find({
    EmpProgLang: { $eq: "C" }
})


db.Employee_Data.find({
    'EmpLocAdd.City': { $eq: "Delhi" }
})

db.Employee_Data.find({
    DateOfJoin: { $eq: '2025-07-07T15:06:59.386Z' }
})


db.Employee_Data.find({
    DateOfJoin: { $eq: 'Mon Jul 07 2025 19:52:47 GMT+0530 (India Standard Time)' }
})


db.Employee_Data.find({
    DateOfJoin: { $eq: new Date('2025-07-07T15:06:59.386Z') }
})

db.Employee_Data.find({
    DateOfJoin: { $eq: ISODate('2025-07-07T15:06:59.386Z') }
})

db.Employee_Data.find({
    DateOfJoin: { $eq: ISODate('2025-07-07') }
})




// Data for Agg.

db.employees.insertMany([
    {
        _id: 1,
        firstName: "John",
        lastName: "King",
        gender: 'male',
        email: "john.king@abc.com",
        salary: 5000,
        department: {
            "name": "HR"
        }
    },
    {
        _id: 2,
        firstName: "Sachin",
        lastName: "Tendulkar",
        gender: 'male',
        email: "sachin.t@abc.com",
        salary: 8000,
        department: {
            "name": "Finance"
        }
    },
    {
        _id: 3,
        firstName: "Virat",
        lastName: "kohli",
        gender: 'male',
        email: "kohli@abc.com",
        salary: 7500,
        department: {
            "name": "Marketing"
        }
    },
    {
        _id: 4,
        firstName: "Rohini",
        lastName: "Sharma",
        gender: 'female',
        email: "roh@abc.com",
        salary: 5000,
        department: {
            "name": "HR"
        }

    },
    {
        _id: 5,
        firstName: "Kapil",
        lastName: "Dev",
        gender: 'male',
        email: "kapil.d@abc.com",
        salary: 4500,
        department: {
            "name": "Finance"
        }

    },
    {
        _id: 6,
        firstName: "Amit",
        lastName: "B",
        gender: 'male',
        email: "amit.b@abc.com",
        salary: 7000,
        department: {
            "name": "Marketing"
        }
    },
    {
        _id: 7,
        firstName: "Atul",
        lastName: "Gupta",
        gender: 'male',
        email: "amitgupta@abc.com",
        salary: 7000,
        department: {
            "name": "Technical"
        }
    },
    {
        _id: 8,
        firstName: "Tanisha",
        lastName: "Chauhan",
        gender: 'female',
        email: "tanisha@abc.com",
        salary: 6500,
        department: {
            "name": "Marketing"
        }
    }

])

// Agg. Project
db.employees.aggregate([{ $project: { firstName: 1, lastName: 1, email: 1, department: 1 } }])

// Agg Match
db.employees.aggregate([{ $match: { gender: 'Male' } }])
db.employees.aggregate([{ $match: { gender: 'male', salary: { $gte: 6000 } } }])

// Agg Group
db.employees.aggregate([{ $group: { _id: '$gender' } }])
db.employees.aggregate([{ $group: { _id: '$department.name' } }])

// Agg. Sum
db.employees.aggregate([{ $group: { _id: '$department.name', TotalSalary: { $sum: '$salary' } } }])
// Agg average
db.employees.aggregate([{ $group: { _id: '$department.name', AverageSalary: { $avg: '$salary' } } }])

db.employees.aggregate([{ $group: { _id: '$department.name', MaximumSalary: { $max: '$salary' } } }])

db.employees.aggregate([{ $group: { _id: '$department.name', MinimumSalary: { $min: '$salary' } } }])

db.employees.aggregate([{ $group: { _id: '$department.name', TotalSalary: { $sum: '$salary' }, AverageSalary: { $avg: '$salary' }, MaximumSalary: { $max: '$salary' }, MinimumSalary: { $min: '$salary' } } }])

db.employees.aggregate([{ $match: { gender: 'Male' } }, { $sort: { firstName: 1 } }])

db.employees.aggregate([
    {
        $match: { gender: 'male' }
    },
    {
        $group: {
            _id: '$department.name'
            ,
            TotalEmployees: { $sum: 1 }
        }
    },
    {
        $sort: { TotalEmployees: -1 }
    },
    {
        $limit: 2
    }
])

db.employees.aggregate([{ $match: { gender: 'male' } }, { $sort: { firstName: 1 } }])

db.employees.aggregate([{ $match: { gender: 'male' } }, { $sort: { firstName: 1 } }, { $sample: { size: 3 } }])

db.employees.aggregate([{ $sortByCount: '$gender' }])
db.employees.aggregate([{ $sortByCount: '$department.name' }])



{
    EmpID: 1009,
        EmpName: 'Bhanu',
            EmpGender: 'Male',
                EmpProgLang: ["C#", "C", "DSA"],
                    EmpLocAdd: {
        City: "Delhi",
            PinCode: 11011
    },
    DateOfJoin: new Date()
},
{

    EmpID: 1009,
        EmpName: 'Bhanu',
            EmpGender: 'Male',
                EmpProgLang: "C#",
                    EmpLocAdd: {
        City: "Delhi",
            PinCode: 11011
    },
    DateOfJoin: new Date()
},
{
    EmpID: 1009,
        EmpName: 'Bhanu',
            EmpGender: 'Male',
                EmpProgLang: "C",
                    EmpLocAdd: {
        City: "Delhi",
            PinCode: 11011
    },
    DateOfJoin: new Date()

    EmpID: 1009,
        EmpName: 'Bhanu',
            EmpGender: 'Male',
                EmpProgLang: "DSA",
                    EmpLocAdd: {
        City: "Delhi",
            PinCode: 11011
    },
    DateOfJoin: new Date()


    db.employees.updateMany(
        {
            _id: { $in: [1, 4, 6, 8] }
        },
        {
            $set: { skills: ["MongoDB", "AWS", "C#"] }
        }
    )

    db.employees.updateMany(
        {
            _id: { $in: [2, 3, 5, 7] }
        },
        {
            $set: { skills: ["DotNet", "Linux", "Java"] }
        }
    )


    db.employees.aggregate([
        {
            $unwind: '$skills'
        }
    ])

    db.employees.aggregate([
        {
            $unwind: '$skills'
        },
        {
            $sortByCount: '$skills'
        }
    ])

    db.employees.aggregate([
        {
            $unwind: '$skills'
        },
        {
            $project: { firstName: 1, email: 1, skills: "$skills" }
        }
    ])


    db.new_emp.insertMany([
        {
            _id: 1,
            firstName: 'John',
            lastName: 'King',
            gender: 'male',
            email: 'john.king@abc.com',
            salary: 5000,
            department: {
                name: 'HR'
            },
            skills: [
                'MongoDB',
                'AWS',
                'C#'
            ]
        },
        {
            _id: 2,
            firstName: 'Sachin',
            lastName: 'Tendulkar',
            gender: 'male',
            email: 'sachin.t@abc.com',
            salary: 8000,
            department: {
                name: 'Finance'
            },
            skills: [
                'DotNet',
                'Linux',
                'Java'
            ]
        },
        {
            _id: 5,
            firstName: 'Kapil',
            lastName: 'Dev',
            gender: 'male',
            email: 'kapil.d@abc.com',
            salary: 4500,
            department: {
                name: 'Finance'
            },
            skills: [
                'DotNet',
                'Linux',
                'Java'
            ]
        }
    ])




    // Add new element into Array
    db.new_emp.updateOne({
        _id: 5
    },
        {
            $push: { skills: "Python" }
        })

    // Checks the value, if exists it will not insert, otherwise it will insert
    db.new_emp.updateOne({
        _id: 5
    },
        {
            $addToSet: { skills: "Python" }
        })

    // Add multiple values at a time
    db.new_emp.updateOne({
        _id: 2
    },
        {
            $push: { skills: { $each: ["Python", "Ruby"] } }
        })


    // Update Array element
    db.new_emp.updateOne(
        {
            _id: 5, skills: "Python"
        },
        {
            $set: {
                skills: "AWS"
            }
        }
    )

    // skills:['DotNet','Linux','Java','Python']
    // skills.1:"AWS"
    db.new_emp.updateOne(
        {
            _id: 2, skills: "Python"
        },
        {
            $set: {
                'skills.$': "AWS"
            }
        }
    )

    // Delete from Array
    db.new_emp.updateOne(
        {
            _id: 2
        },
        {
            $pull: { skills: "Linux" }
        }
    )


    db.comp_emp.find({ age: { $gte: 39 } }).explain("executionStats")

    db.comp_emp.createIndex({ age: 1 }) // age_1

    db.comp_emp.createIndex({ age: -1 }) // age_-1

    db.comp_emp.find({ age: { $gte: 39 }, name: 'Mia Jackson' }).explain("executionStats")

    // Compound Index(Important : Order of a field)
    db.comp_emp.createIndex({ age: 1, gender: 1 }) // age_1_gender_1

    db.comp_emp.createIndex({ name: 1 }, { unique: true }) // age_1_gender_1

    db.comp_emp.find({ gender: "male", age: { $gte: 39 } }).explain('executionStats')

    // Partial Index
    db.comp_emp.createIndex({ age: 1 }, { partialFilterExpression: { age: { $gte: 39 } } }) // age_1

    // Covered Query
    db.comp_emp.find({ age: { $gte: 39 }, gender: "male" }, { age: 1, gender: 1 })


    db.comp_emp.updateMany({ _id: { $in: [1, 3, 5, 7, 9, 11, 13] } }, { $set: { skills: ["C", "C++", "Java"] } })

    db.comp_emp.updateMany({ _id: { $in: [2, 4, 6, 8, 10, 12, 14, 16] } }, { $set: { skills: ["Java", "Python", "C#"] } })

    // Multikey Index(always on Array)
    db.comp_emp.createIndex({ skills: 1 }) // age_1_gender_1

    // C , C++ , Java, Python , C#

    db.comp_emp.find({ skills: "Java" }).explain('executionStats')

    db.comp_emp.updateMany({ _id: { $in: [2, 4, 6, 8, 10, 12, 14, 16] } }, { $set: { about: "I am a dancer" } })

    db.comp_emp.updateMany({ _id: { $in: [1, 3, 5, 7, 9, 11, 13] } }, { $set: { about: "I am a Cricket player and a singer" } })


    Dance, Cricket, Player, Singer, playing

    Dance, Cricket, Player, Singer, play

    // Text Index(Only One)
    db.comp_emp.createIndex({ about: 'text' })



    db.comp_emp.find({ $text: { $search: "Cricket" } })
    db.comp_emp.find({ $text: { $search: "Cricket Singer" } })

    // For exclude some term, put '-',
    db.comp_emp.find({ $text: { $search: "Cricket -Singer" } })

    db.users.find({ $text: { $search: "John fan" } }, { Score: { $meta: 'textScore' } })
    db.users.find({ $text: { $search: "John fan" } }, { Score: { $meta: 'textScore' } }).sort({ Score: { $meta: 'textScore' } })


    db.comp_emp.createIndex({ about: 'text' }, { background: true })

    db.users.insertMany([
        { _id: 1, name: "John Doe", age: 35, gender: "male", hobbies: ["Swimming", "Dancing"], about: "I am Actor" },
        { _id: 2, name: "Alice Smith", age: 28, gender: "female", hobbies: ["Reading", "Cooking"], about: "I love books" },
        { _id: 3, name: "Michael Lee", age: 42, gender: "male", hobbies: ["Gaming", "Cycling"], about: "Software engineer" },
        { _id: 4, name: "Rachel Green", age: 30, gender: "female", hobbies: ["Traveling", "Photography"], about: "Freelancer" },
        { _id: 5, name: "David Kim", age: 26, gender: "male", hobbies: ["Running", "Gaming"], about: "Aspiring athlete" },
        { _id: 6, name: "Emma Watson", age: 33, gender: "female", hobbies: ["Acting", "Singing"], about: "Actress and activist" },
        { _id: 7, name: "Chris Evans", age: 38, gender: "male", hobbies: ["Boxing", "Swimming"], about: "Marvel superhero" },
        { _id: 8, name: "Sophia Brown", age: 29, gender: "female", hobbies: ["Dancing", "Painting"], about: "Ballet dancer" },
        { _id: 9, name: "Liam Johnson", age: 31, gender: "male", hobbies: ["Football", "Reading"], about: "Team player" },
        { _id: 10, name: "Olivia Davis", age: 24, gender: "female", hobbies: ["Yoga", "Meditation"], about: "Health enthusiast" },
        { _id: 11, name: "Noah Wilson", age: 27, gender: "male", hobbies: ["Music", "Gaming"], about: "DJ and gamer" },
        { _id: 12, name: "Ava Martinez", age: 32, gender: "female", hobbies: ["Sketching", "Reading"], about: "Creative soul" },
        { _id: 13, name: "Ethan Garcia", age: 36, gender: "male", hobbies: ["Traveling", "Blogging"], about: "Travel blogger" },
        { _id: 14, name: "Mia Rodriguez", age: 25, gender: "female", hobbies: ["Dancing", "Coding"], about: "Web developer" },
        { _id: 15, name: "James Anderson", age: 40, gender: "male", hobbies: ["Cooking", "Fishing"], about: "Chef by profession" },
        { _id: 16, name: "Isabella Thomas", age: 28, gender: "female", hobbies: ["Knitting", "Singing"], about: "Loves DIY crafts" },
        { _id: 17, name: "Benjamin Taylor", age: 34, gender: "male", hobbies: ["Chess", "Reading"], about: "Strategic thinker" },
        { _id: 18, name: "Charlotte Moore", age: 31, gender: "female", hobbies: ["Gardening", "Writing"], about: "Nature lover" },
        { _id: 19, name: "Logan White", age: 37, gender: "male", hobbies: ["Golf", "Photography"], about: "Finance analyst" },
        { _id: 20, name: "Amelia Harris", age: 26, gender: "female", hobbies: ["Cycling", "Gaming"], about: "Works in tech" },
        { _id: 21, name: "Henry Martin", age: 39, gender: "male", hobbies: ["Jogging", "Painting"], about: "Fitness fan" },
        { _id: 22, name: "Grace Thompson", age: 27, gender: "female", hobbies: ["Singing", "Acting"], about: "Stage performer" },
        { _id: 23, name: "Alexander Garcia", age: 33, gender: "male", hobbies: ["Swimming", "Reading"], about: "Bookworm and swimmer" },
        { _id: 24, name: "Harper Martinez", age: 30, gender: "female", hobbies: ["Photography", "Blogging"], about: "Freelance writer" },
        { _id: 25, name: "Daniel Lewis", age: 29, gender: "male", hobbies: ["Cricket", "Cooking"], about: "Cricket fan" },
        { _id: 26, name: "Ella Walker", age: 35, gender: "female", hobbies: ["Dancing", "Singing"], about: "Performer" },
        { _id: 27, name: "Matthew Hall", age: 28, gender: "male", hobbies: ["Gaming", "Coding"], about: "Full-stack dev" },
        { _id: 28, name: "Scarlett Allen", age: 36, gender: "female", hobbies: ["Knitting", "Gardening"], about: "Peaceful and calm" },
        { _id: 29, name: "Lucas Young", age: 41, gender: "male", hobbies: ["Fishing", "Traveling"], about: "Enjoys the outdoors" },
        { _id: 30, name: "Victoria Scott", age: 34, gender: "female", hobbies: ["Yoga", "Meditation"], about: "Mindfulness coach" }
    ]);

    // Backup and Restore of Data
    "mongodump --out 'C:\Users\Danish\Desktop\ICTIITK\MongoDB_BackUp'"

    // Specific Databases backup
    "mongodump --db ICT_Online --out C:\Users\Danish\Desktop\ICTIITK\MongoDB_BackUp"

    // To restore Database
    "mongorestore --db ICT C:\Users\Danish\Desktop\ICTIITK\MongoDB_BackUp\ICT_Online"

    // To restore Specific Collection
    "mongorestore --db Demo123 C:\Users\Danish\Desktop\ICTIITK\MongoDB_BackUp\ICT_Online\users.bson"

    // To export collection in JSON format
    "mongoexport --db=ICT_Online --collection=users  --out=C:\\Users\\Danish\\Desktop\\ICTIITK\\MongoDB_BackUp\users.json"

    // To export collection in CSV format
    "mongoexport --db=ICT_Online --collection=users  --out=C:\\Users\\Danish\\Desktop\\ICTIITK\\MongoDB_BackUp\users.csv --type=csv"

    // To restrore database in json format
    "mongoimport --db=Demo123 --collection=users --type=json --file=C:\Users\Danish\Desktop\ICTIITK\MongoDB_BackUp\users.json"

    // To restrore database in csv format
    "mongoimport --db=Demo123 --collection=users --type=csv --file=C:\Users\Danish\Desktop\ICTIITK\MongoDB_BackUp\users.csv"


