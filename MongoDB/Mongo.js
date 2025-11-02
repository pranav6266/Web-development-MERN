db.Employee_Data.insertMany([
  {
    EmpID: 101,
    EmpName: "Aarav",
    Gender: "Male",
    dateOfJoin: new Date("2021-03-15"),
    localAdd: { state: "Karnataka", city: "Bengaluru", pincode: 560001 },
    empProgLang: ["Java", "Python"],
    isActive: true
  },
  {
    EmpID: 102,
    EmpName: "Meera",
    Gender: "Female",
    dateOfJoin: new Date("2019-12-01"),
    localAdd: { state: "Delhi", city: "New Delhi", pincode: 110002 },
    empProgLang: ["JavaScript", "HTML", "CSS"],
    isActive: false,
    Salary: 85000.75
  },
  {
    EmpID: 103,
    EmpName: "Kiran",
    Gender: "Male",
    empProgLang: [],
    localAdd: { state: "Kerala", city: "Kochi", pincode: 682016 }
  },
  {
    EmpID: 104,
    EmpName: "Sneha",
    Gender: "Female",
    dateOfJoin: new Date("2020-06-21"),
    empProgLang: ["Python"],
    isActive: true
  },
  {
    EmpID: 105,
    EmpName: "Raj",
    Gender: "Male",
    dateOfJoin: new Date("2022-01-10"),
    localAdd: { state: "Tamil Nadu", city: "Chennai", pincode: 600001 },
    empProgLang: ["Go", "Rust"],
    Contract: true
  },
  {
    EmpID: 106,
    EmpName: "Divya",
    Gender: "Female",
    empProgLang: ["PHP"],
    localAdd: { state: "Maharashtra", city: "Pune", pincode: 411001 }
  },
  {
    EmpID: 107,
    EmpName: "Aditya",
    Gender: "Male",
    dateOfJoin: new Date("2023-04-11"),
    empProgLang: ["C#", "SQL"],
    Salary: 72000
  },
  {
    EmpID: 108,
    EmpName: "Nisha",
    Gender: "Female",
    dateOfJoin: new Date("2018-08-08"),
    localAdd: { state: "Gujarat", city: "Surat", pincode: 395007 },
    empProgLang: ["Swift", "Kotlin"]
  },
  {
    EmpID: 109,
    EmpName: "Yash",
    Gender: "Male",
    empProgLang: ["Assembly", "C"],
    isActive: false
  },
  {
    EmpID: 110,
    EmpName: "Fatima",
    Gender: "Female",
    dateOfJoin: new Date("2021-11-30"),
    localAdd: { state: "Punjab", city: "Ludhiana", pincode: 141003 },
    empProgLang: ["Java", "JavaScript"],
    Projects: 3
  },
  {
    EmpID: 111,
    EmpName: "Neeraj",
    Gender: "Male",
    dateOfJoin: new Date("2022-09-15"),
    localAdd: { state: "West Bengal", city: "Kolkata", pincode: 700019 },
    empProgLang: ["Python", "SQL"],
    Remote: true
  },
  {
    EmpID: 112,
    EmpName: "Tanvi",
    Gender: "Female",
    empProgLang: ["HTML", "CSS"],
    Salary: 59000.5
  },
  {
    EmpID: 113,
    EmpName: "Arun",
    Gender: "Male",
    localAdd: { state: "Haryana", city: "Gurgaon", pincode: 122001 },
    empProgLang: ["Perl", "Scala"]
  },
  {
    EmpID: 114,
    EmpName: "Ishita",
    Gender: "Female",
    dateOfJoin: new Date("2020-03-12"),
    empProgLang: ["Ruby"],
    localAdd: { state: "Jharkhand", city: "Ranchi", pincode: 834001 }
  },
  {
    EmpID: 115,
    EmpName: "Mohit",
    Gender: "Male",
    empProgLang: []
  }
])