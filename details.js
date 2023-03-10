var list = [
  //SJIT - 1st SEM
    { college: "sjit", reg: 2021, sem: 1, dept: "I Year", code: "BS3171", name: "Physics and Chemistry Laboratory", credit: 2 },
    { college: "sjit", reg: 2021, sem: 1, dept: "I Year", code: "CY3151", name: "Engineering Chemistry", credit: 3 },
    { college: "sjit", reg: 2021, sem: 1, dept: "I Year", code: "GE3151", name: "Problem Solving and Python Programming", credit: 3 },
    { college: "sjit", reg: 2021, sem: 1, dept: "I Year", code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credit: 2 },
    { college: "sjit", reg: 2021, sem: 1, dept: "I Year", code: "HS3151", name: "Professional English - I", credit: 4 },
    { college: "sjit", reg: 2021, sem: 1, dept: "I Year", code: "MA3151", name: "Matrices and Calculus", credit: 4 },
    { college: "sjit", reg: 2021, sem: 1, dept: "I Year", code: "PH3151", name: "Engineering Physics", credit: 3 },

  //SJIT - 2ND SEM CSE
    { college: "sjit", reg: 2021, sem: 2, dept: "CSE", code: "HS3251", name: "Professional English - II", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "CSE", code: "MA3251", name: "Statistics and Numerical Methods", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "CSE", code: "PH3256", name: "Physics for Information Science", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "CSE", code: "BE3251", name: "Basic Electrical and Electronics Engineering", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "CSE", code: "GE3251", name: "Engineering Graphics", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "CSE", code: "CS3251", name: "Programming in C", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "CSE", code: "GE3271", name: "Engineering Practices Laboratory", credit: 2 },
    { college: "sjit", reg: 2021, sem: 2, dept: "CSE", code: "CS3271", name: "Programming in C Laboratory", credit: 2 },
  //ECE
    { college: "sjit", reg: 2021, sem: 2, dept: "ECE", code: "HS3251", name: "Professional English - II", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "ECE", code: "MA3251", name: "Statistics and Numerical Methods", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "ECE", code: "PH3254", name: "Physics for Electronics Engineering", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "ECE", code: "BE3254", name: "Basic Electrical and Instrumentation Engineering", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "ECE", code: "GE3251", name: "Engineering Graphics", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "ECE", code: "EC3251", name: "Circuit Analysis", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "ECE", code: "GE3271", name: "Engineering Practices Laboratory", credit: 2 },
    { college: "sjit", reg: 2021, sem: 2, dept: "ECE", code: "EC3271", name: "Circuit Analysis Laboratory", credit: 1 },
  //IT
    { college: "sjit", reg: 2021, sem: 2, dept: "IT", code: "HS3251", name: "Professional English - II", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "IT", code: "MA3251", name: "Statistics and Numerical Methods", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "IT", code: "PH3256", name: "Physics for Information Science", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "IT", code: "BE3251", name: "Basic Electrical and Electronics Engineering", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "IT", code: "GE3251", name: "Engineering Graphics", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "IT", code: "CS3251", name: "Programming in C", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "IT", code: "GE3271", name: "Engineering Practices Laboratory", credit: 2 },
    { college: "sjit", reg: 2021, sem: 2, dept: "IT", code: "CS3271", name: "Programming in C Laboratory", credit: 2 },
  //ADS
    { college: "sjit", reg: 2021, sem: 2, dept: "ADS", code: "HS3251", name: "Professional English - II", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "ADS", code: "MA3251", name: "Statistics and Numerical Methods", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "ADS", code: "PH3256", name: "Physics for Information science", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "ADS", code: "BE3251", name: "Basic Electrical and Electronics Engineering", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "ADS", code: "GE3251", name: "Engineering Graphics", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "ADS", code: "AD3251", name: "Data Structures Design", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "ADS", code: "GE3271", name: "Engineering Practices Laboratory", credit: 2 },
    { college: "sjit", reg: 2021, sem: 2, dept: "ADS", code: "AD3271", name: "Data Structures Design Laboratory", credit: 2 },
  //EEE
    { college: "sjit", reg: 2021, sem: 2, dept: "EEE", code: "HS3251", name: "Professional English - II", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "EEE", code: "MA3251", name: "Statistics and Numerical Methods", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "EEE", code: "PH3202", name: "Physics for Electrical Engineering", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "EEE", code: "BE3255", name: "Basic Civil and Mechanical Engineering", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "EEE", code: "GE3251", name: "Engineering Graphics", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "EEE", code: "EE3251", name: "Electric Circuit Analysis", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "EEE", code: "GE3271", name: "Engineering Practices Laboratory", credit: 2 },
    { college: "sjit", reg: 2021, sem: 2, dept: "EEE", code: "EE3271", name: "Electric Circuit Laboratory", credit: 2 },
  //MECH
    { college: "sjit", reg: 2021, sem: 2, dept: "MECH", code: "HS3251", name: "Professional English - II", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "MECH", code: "MA3251", name: "Statistics and Numerical Methods", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "MECH", code: "PH3251", name: "Materials Science", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "MECH", code: "BE3251", name: "Basic Electrical and Electronics Engineering", credit: 3 },
    { college: "sjit", reg: 2021, sem: 2, dept: "MECH", code: "GE3251", name: "Engineering Graphics", credit: 4 },
    { college: "sjit", reg: 2021, sem: 2, dept: "MECH", code: "GE3271", name: "Engineering Practices Laboratory", credit: 2 },
    { college: "sjit", reg: 2021, sem: 2, dept: "MECH", code: "BE3271", name: "Basic Electrical and Electronics Engineering Laboratory", credit: 2 },

  //SJIT - 3RD SEM CSE
    { college: "sjit", reg: 2021, sem: 3, dept: "CSE", code: "MA3354", name: "Discrete Mathematics", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "CSE", code: "CS3351", name: "Digital Principles and Computer Organization", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "CSE", code: "CS3352", name: "Foundations of Data Science", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "CSE", code: "CS3301", name: "Data Structures", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "CSE", code: "CS3391", name: "Object Oriented Programming", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "CSE", code: "CS3311", name: "Data Structures Laboratory", credit: 1.5 },
    { college: "sjit", reg: 2021, sem: 3, dept: "CSE", code: "CS3381", name: "Object Oriented Programming Laboratory", credit: 1.5 },
    { college: "sjit", reg: 2021, sem: 3, dept: "CSE", code: "CS3361", name: "Data Science Laboratory", credit: 2 },
    { college: "sjit", reg: 2021, sem: 3, dept: "CSE", code: "GE3361", name: "Professional Development", credit: 1 },
  //ECE
    { college: "sjit", reg: 2021, sem: 3, dept: "ECE", code: "MA3355", name: "Random Processes and Linear Algebra", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ECE", code: "CS3353", name: "C Programming and Data Structures", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ECE", code: "EC3354", name: "Signals and Systems", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ECE", code: "EC3353", name: "Electronic Devices and Circuits", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ECE", code: "EC3351", name: "Control Systems", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ECE", code: "EC3352", name: "Digital Systems Design", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ECE", code: "EC3361", name: "Electronic Devices and Circuits Laboratory", credit: 1.5 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ECE", code: "CS3362", name: "C Programming and Data Structures Laboratory", credit: 1.5 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ECE", code: "GE3361", name: "Professional Development", credit: 1 },
  //IT
    { college: "sjit", reg: 2021, sem: 3, dept: "IT", code: "MA3354", name: "Discrete Mathematics", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "IT", code: "CS3351", name: "Digital Principles and Computer Organization", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "IT", code: "CS3352", name: "Foundations of Data Science", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "IT", code: "CD3291", name: "Data Structures and Algorithms", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "IT", code: "CS3391", name: "Object Oriented Programming", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "IT", code: "CD3281", name: "Data Structures and Algorithms Laboratory", credit: 2 },
    { college: "sjit", reg: 2021, sem: 3, dept: "IT", code: "CS3381", name: "Object Oriented Programming Laboratory", credit: 1.5 },
    { college: "sjit", reg: 2021, sem: 3, dept: "IT", code: "CS3361", name: "Data Science Laboratory", credit: 2 },
    { college: "sjit", reg: 2021, sem: 3, dept: "IT", code: "GE3361", name: "Professional Development", credit: 1 },
  //ADS
    { college: "sjit", reg: 2021, sem: 3, dept: "ADS", code: "MA3354", name: "Discrete Mathematics", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ADS", code: "CS3351", name: "Digital Principles and Computer Organization", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ADS", code: "AD3391", name: "Database Design and Management", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ADS", code: "AD3351", name: "Design and Analysis of Algorithms", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ADS", code: "AD3301", name: "Data Exploration and Visualization", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ADS", code: "AL3391", name: "Artificial Intelligence", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ADS", code: "AD3381", name: "Database Design and Management Laboratory", credit: 1.5 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ADS", code: "AD3311", name: "Artificial Intelligence Laboratory", credit: 1.5 },
    { college: "sjit", reg: 2021, sem: 3, dept: "ADS", code: "GE3361", name: "Professional Development", credit: 1 },
  //EEE
    { college: "sjit", reg: 2021, sem: 3, dept: "EEE", code: "MA3303", name: "Probability and Complex Functions", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "EEE", code: "EE3301", name: "Electromagnetic Fields", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "EEE", code: "EE3302", name: "Digital Logic Circuits", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "EEE", code: "EC3301", name: "Electron Devices and Circuits", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "EEE", code: "EE3303", name: "Electrical Machines - I", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "EEE", code: "CS3353", name: "C Programming and Data Structures", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "EEE", code: "EC3311", name: "Electronic Devices and Circuits Laboratory", credit: 1.5 },
    { college: "sjit", reg: 2021, sem: 3, dept: "EEE", code: "EE3311", name: "Electrical Machines Laboratory ??? I", credit: 1.5 },
    { college: "sjit", reg: 2021, sem: 3, dept: "EEE", code: "CS3362", name: "C Programming and Data Structures Laboratory", credit: 1.5 },
    { college: "sjit", reg: 2021, sem: 3, dept: "EEE", code: "GE3361", name: "Professional Development", credit: 1 },
  //MECH
    { college: "sjit", reg: 2021, sem: 3, dept: "MECH", code: "MA3351", name: "Transforms and Partial Differential Equations", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "MECH", code: "ME3351", name: "Engineering Mechanics", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "MECH", code: "ME3391", name: "Engineering Thermodynamics", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "MECH", code: "CE3391", name: "Fluid Mechanics and Machinery", credit: 4 },
    { college: "sjit", reg: 2021, sem: 3, dept: "MECH", code: "ME3392", name: "Engineering Materials and Metallurgy ", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "MECH", code: "ME3393", name: "Manufacturing Processes", credit: 3 },
    { college: "sjit", reg: 2021, sem: 3, dept: "MECH", code: "ME3381", name: "Computer Aided Machine Drawing", credit: 2 },
    { college: "sjit", reg: 2021, sem: 3, dept: "MECH", code: "ME3382", name: "Manufacturing Technology Laboratory", credit: 2 },
    { college: "sjit", reg: 2021, sem: 3, dept: "MECH", code: "GE3361", name: "Professional Development", credit: 1 },


  //SJCE - 1st Sem
    { college: "sjce", reg: 2021, sem: 1, dept: "I Year", code: "HS1101", name: "Communicative English", credit: 3 },
    { college: "sjce", reg: 2021, sem: 1, dept: "I Year", code: "MA1102", name: "Engineering Mathematics ??? I", credit: 4 },
    { college: "sjce", reg: 2021, sem: 1, dept: "I Year", code: "PH1103", name: "Engineering Physics", credit: 3 },
    { college: "sjce", reg: 2021, sem: 1, dept: "I Year", code: "CY1104", name: "Engineering Chemistry", credit: 3 },
    { college: "sjce", reg: 2021, sem: 1, dept: "I Year", code: "GE1105", name: "Problem Solving and Python Programming", credit: 3 },
    { college: "sjce", reg: 2021, sem: 1, dept: "I Year", code: "GE1106", name: "Engineering Graphics", credit: 4 },
    { college: "sjce", reg: 2021, sem: 1, dept: "I Year", code: "GE1107", name: "Python Programming Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 1, dept: "I Year", code: "BS1108", name: "Physics and Chemistry Laboratory", credit: 2 },

  //SJEC - 2ND SEM CSE
    { college: "sjce", reg: 2021, sem: 2, dept: "CSE", code: "HS1201", name: "Professional English", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CSE", code: "MA1202", name: "Engineering Mathematics -II", credit: 4 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CSE", code: "PH1252", name: "Physics for Information Science", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CSE", code: "GE1204", name: "Environmental Science and Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CSE", code: "BE1251", name: "Basic Electrical, Electronics and Measurement Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CSE", code: "CS1206", name: "Programming in C", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CSE", code: "GE1207", name: "Engineering Practice Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CSE", code: "CS1208", name: "Programming in C Laboratory", credit: 2 },
  //ECE
    { college: "sjce", reg: 2021, sem: 2, dept: "ECE", code: "HS1201", name: "Professional English", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "ECE", code: "MA1202", name: "Engineering Mathematics -II", credit: 4 },
    { college: "sjce", reg: 2021, sem: 2, dept: "ECE", code: "PH1253", name: "Physics for Electronics Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "ECE", code: "GE1204", name: "Environmental Science and Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "ECE", code: "EC1205", name: "Circuit Analysis", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "ECE", code: "EC1206", name: "Electronic Devices", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "ECE", code: "GE1207", name: "Engineering Practices Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 2, dept: "ECE", code: "EC1208", name: "Circuits and Devices Laboratory", credit: 2 },
  //IT
    { college: "sjce", reg: 2021, sem: 2, dept: "IT", code: "HS1201", name: "Professional English", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "IT", code: "MA1202", name: "Engineering Mathematics -II", credit: 4 },
    { college: "sjce", reg: 2021, sem: 2, dept: "IT", code: "PH1252", name: "Physics for Information Science", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "IT", code: "GE1204", name: "Environmental Science and Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "IT", code: "BE1251", name: "Basic Electrical, Electronics and Measurement Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "IT", code: "CS1206", name: "Programming in C", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "IT", code: "GE1207", name: "Engineering Practice Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 2, dept: "IT", code: "CS1208", name: "Programming in C Laboratory", credit: 2 },
  //EEE
    { college: "sjce", reg: 2021, sem: 2, dept: "EEE", code: "HS1201", name: "Professional English", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "EEE", code: "MA1202", name: "Engineering Mathematics -II", credit: 4 },
    { college: "sjce", reg: 2021, sem: 2, dept: "EEE", code: "PH1253", name: "Physics for Electronics Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "EEE", code: "GE1204", name: "Environmental Science and Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "EEE", code: "GE1205", name: "Basic Civil and Mechanical Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "EEE", code: "EE1271", name: "Principles of Electrical, Electronics and Communication Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "EEE", code: "GE1207", name: "Engineering Practices Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 2, dept: "EEE", code: "EE1278", name: "Principles of Electrical and Electronic devices Laboratory", credit: 2 },
  //EIE
    { college: "sjce", reg: 2021, sem: 2, dept: "EIE", code: "HS1201", name: "Professional English", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "EIE", code: "MA1202", name: "Engineering Mathematics -II", credit: 4 },
    { college: "sjce", reg: 2021, sem: 2, dept: "EIE", code: "PH1253", name: "Physics for Electronics Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "EIE", code: "GE1204", name: "Environmental Science and Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "EIE", code: "GE1205", name: "Basic Civil and Mechanical Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "EIE", code: "EE1271", name: "Principles of Electrical, Electronics and Communication Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "EIE", code: "GE1207", name: "Engineering Practices Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 2, dept: "EIE", code: "EE1278", name: "Principles of Electrical and Electronic devices Laboratory", credit: 2 },
  //MECH
    { college: "sjce", reg: 2021, sem: 2, dept: "MECH", code: "HS1201", name: "Professional English", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "MECH", code: "MA1202", name: "Engineering Mathematics - II", credit: 4 },
    { college: "sjce", reg: 2021, sem: 2, dept: "MECH", code: "PH1254", name: "Materials Science ", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "MECH", code: "GE1204", name: "Environmental Science and Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "MECH", code: "BE1252", name: "Basic Electrical, Electronics and Instrumentation Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "MECH", code: "GE1206", name: "Engineering Mechanics", credit: 4 },
    { college: "sjce", reg: 2021, sem: 2, dept: "MECH", code: "GE1207", name: "Engineering Practices Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 2, dept: "MECH", code: "BE1258", name: "Basic Electrical, Electronics and Instrumentation Engineering Laboratory", credit: 2 },
  //CIVIL
    { college: "sjce", reg: 2021, sem: 2, dept: "CIVIL", code: "HS1201", name: "Professional English", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CIVIL", code: "MA1202", name: "Engineering Mathematics - II", credit: 4 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CIVIL", code: "PH1251", name: "Physics for Civil Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CIVIL", code: "GE1204", name: "Environmental Science and Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CIVIL", code: "BE1253", name: "Basic Electrical and Electronics Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CIVIL", code: "GE1206", name: "Engineering Mechanics", credit: 4 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CIVIL", code: "GE1207", name: "Engineering Practices Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CIVIL", code: "CE1208", name: "Computer aided drafting Laboratory", credit: 2 },
  //Bio-Tech
    { college: "sjce", reg: 2021, sem: 2, dept: "BIO-TECH", code: "HS1201", name: "Professional English", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "BIO-TECH", code: "MA1202", name: "Engineering Mathematics - II", credit: 4 },
    { college: "sjce", reg: 2021, sem: 2, dept: "BIO-TECH", code: "PH1255", name: "Physics of Materials", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "BIO-TECH", code: "GE1204", name: "Environmental science and Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "BIO-TECH", code: "GE1205", name: "Basic Civil and Mechanical Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "BIO-TECH", code: "BT1206", name: "Cell Biology", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "BIO-TECH", code: "GE1207", name: "Engineering Practices lab", credit: 2 },
    { college: "sjce", reg: 2021, sem: 2, dept: "BIO-TECH", code: "BT1208", name: "Cell Biology Lab", credit: 2 },
  //CHEM
    { college: "sjce", reg: 2021, sem: 2, dept: "CHEM", code: "HS1201", name: "Professional English", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CHEM", code: "MA1202", name: "Engineering Mathematics - II", credit: 4 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CHEM", code: "PH1255", name: "Physics of Materials", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CHEM", code: "GE1204", name: "Environmental science and Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CHEM", code: "GE1205", name: "Basic Civil and Mechanical Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CHEM", code: "CH1206", name: "Introduction to Chemical Engineering", credit: 2 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CHEM", code: "GE1207", name: "Engineering Practices lab", credit: 2 },
    { college: "sjce", reg: 2021, sem: 2, dept: "CHEM", code: "CH1208", name: "Technical Analysis Laboratory", credit: 2 },
  //AIDS
    { college: "sjce", reg: 2021, sem: 2, dept: "AIDS", code: "HS1201", name: "Professional English", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "AIDS", code: "MA1251", name: "Linear Algebra", credit: 4 },
    { college: "sjce", reg: 2021, sem: 2, dept: "AIDS", code: "PH1252", name: "Physics for Information Science", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "AIDS", code: "GE1204", name: "Environmental Science and Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "AIDS", code: "BE1251", name: "Basic Electrical, Electronics and Measurement Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "AIDS", code: "CS1206", name: "Programming in C", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "AIDS", code: "GE1207", name: "Engineering Practice Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 2, dept: "AIDS", code: "CS1208", name: "Programming in C Laboratory", credit: 2 },
  //AIML
    { college: "sjce", reg: 2021, sem: 2, dept: "AIML", code: "HS1201", name: "Professional English", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "AIML", code: "MA1251", name: "Linear Algebra", credit: 4 },
    { college: "sjce", reg: 2021, sem: 2, dept: "AIML", code: "PH1252", name: "Physics for Information Science", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "AIML", code: "GE1204", name: "Environmental Science and Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "AIML", code: "BE1251", name: "Basic Electrical, Electronics and Measurement Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "AIML", code: "CS1206", name: "Programming in C", credit: 3 },
    { college: "sjce", reg: 2021, sem: 2, dept: "AIML", code: "GE1207", name: "Engineering Practice Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 2, dept: "AIML", code: "CS1208", name: "Programming in C Laboratory", credit: 2 },

  //SJEC - 3RD SEM CSE
    { college: "sjce", reg: 2021, sem: 3, dept: "CSE", code: "MA1351", name: "Probability and Statistics", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CSE", code: "CS1301", name: "Digital Principles and Logic Design (Lab Integrated)", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CSE", code: "CS1302", name: "Data Structures", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CSE", code: "CS1303", name: "Object Oriented Programming", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CSE", code: "CS1304", name: "Computer Architecture", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CSE", code: "CS1305", name: "Software Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CSE", code: "CS1307", name: "Data Structures Laboratory using C", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CSE", code: "CS1308", name: "Object Oriented Programming Laboratory", credit: 2 },
  //ECE
    { college: "sjce", reg: 2021, sem: 3, dept: "ECE", code: "MA1352", name: "Linear Algebra and Partial Differential Equations", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "ECE", code: "EC1302", name: "Electronic Circuits - I", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "ECE", code: "EC1303", name: "Signals and Systems", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "ECE", code: "EC1304", name: "Digital Electronics", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "ECE", code: "EC1305", name: "Electromagnetic Fields", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "ECE", code: "EE1351", name: "Basic Electrical and Instrumentation Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "ECE", code: "EC1307", name: "Analog and Digital Circuits Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "ECE", code: "HS1310", name: "Professional Skills Laboratory", credit: 1 },
  //IT
    { college: "sjce", reg: 2021, sem: 3, dept: "IT", code: "MA1351", name: "Probability and Statistics", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "IT", code: "IT1301", name: "Java Programming", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "IT", code: "CS1301", name: "Digital Principles and Logic Design (Lab Integrated)", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "IT", code: "CS1302", name: "Data Structures", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "IT", code: "CS1304", name: "Computer Architecture", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "IT", code: "CS1305", name: "Software Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "IT", code: "CS1307", name: "Data Structures Laboratory using C", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "IT", code: "IT1308", name: "Java Programming Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "IT", code: "HS1310", name: "Professional Skills Laboratory", credit: 1 },
  //EEE
    { college: "sjce", reg: 2021, sem: 3, dept: "EEE", code: "MA1301", name: "Transforms and Partial Differential Equations", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "EEE", code: "EE1301", name: "Electromagnetic Theory", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "EEE", code: "EE1302", name: "Measurements and Instrumentation", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "EEE", code: "EE1371", name: "Electric Circuit Analysis", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "EEE", code: "EE1372", name: "Analog Electronics", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "EEE", code: "EE1373", name: "Digital Logic Circuits", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "EEE", code: "EE1381", name: "Electric Circuits Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "EEE", code: "EE1391", name: "Analog and Digital Electronics Laboratory", credit: 2 },
  //EIE
    { college: "sjce", reg: 2021, sem: 3, dept: "EIE", code: "MA1301", name: "Transforms and Partial Differential Equations", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "EIE", code: "EI1301", name: "Electrical and Electronic Measurements", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "EIE", code: "EI1302", name: "Transducer Engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "EIE", code: "EE1371", name: "Electric Circuit Analysis", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "EIE", code: "EE1372", name: "Analog Electronics", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "EIE", code: "EE1373", name: "Digital Logic Circuits", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "EIE", code: "EE1391", name: "Analog and Digital Electronics Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "EIE", code: "EI1308", name: "Electrical and Electronics Measurement Laboratory", credit: 2 },
  //MECH
    { college: "sjce", reg: 2021, sem: 3, dept: "MECH", code: "MA1301", name: "Transforms and Partial Differential Equations", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "MECH", code: "EE1352", name: "Electrical Drives and Controls", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "MECH", code: "CE1301", name: "Fluid Mechanics and Machinery", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "MECH", code: "ME1301", name: "Engineering Thermodynamics", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "MECH", code: "ME1302", name: "Manufacturing Processes", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "MECH", code: "EE1358", name: "Electrical Engineering Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "MECH", code: "ME1307", name: "Manufacturing Processes Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "MECH", code: "HS1310", name: "Professional Skills Laboratory", credit: 1 },
  //CIVIL
    { college: "sjce", reg: 2021, sem: 3, dept: "CIVIL", code: "MA1301", name: "Transforms and Partial Differential Equations", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CIVIL", code: "CE1302", name: "Engineering Geology and Construction Materials", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CIVIL", code: "CE1303", name: "Strength of Materials", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CIVIL", code: "CE1304", name: "Concrete Technology", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CIVIL", code: "CE1305", name: "Fluid Mechanics", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CIVIL", code: "CE1306", name: "Surveying", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CIVIL", code: "CE1307", name: "Strength of Materials Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CIVIL", code: "CE1308", name: "Surveying laboratory", credit: 2 },
  //BIO-TECH
    { college: "sjce", reg: 2021, sem: 3, dept: "BIO-TECH", code: "MA1301", name: "Transforms and Partial Differential Equations", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "BIO-TECH", code: "BT1301", name: "Process Calculations", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "BIO-TECH", code: "BT1302", name: "Basic Industrial Biotechnology", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "BIO-TECH", code: "BT1303", name: "Microbiology", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "BIO-TECH", code: "BT1304", name: "Biochemistry-I", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "BIO-TECH", code: "BT1305", name: "Molecular Biology", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "BIO-TECH", code: "BT1307", name: "Microbiology Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "BIO-TECH", code: "BT1308", name: "Biochemistry Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "BIO-TECH", code: "HS1310", name: "Professional Skills Lab", credit: 1 },
  //CHEM
    { college: "sjce", reg: 2021, sem: 3, dept: "CHEM", code: "MA1353", name: "Applied numerical analysis", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CHEM", code: "CH1301", name: "Process Calculations", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CHEM", code: "CH1302", name: "Fluid Mechanics for chemical Engineers", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CHEM", code: "EE1353", name: "Principles of electrical and electronics engineering", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CHEM", code: "CH1303", name: "Solid Mechanics for technologists", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CHEM", code: "CH1307", name: "Fluid Mechanics Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "CHEM", code: "EE1358", name: "Electrical Engineering Laboratory", credit: 2 },
  //AIDS
    { college: "sjce", reg: 2021, sem: 3, dept: "ADS", code: "MA1351", name: "Probability and Statistics", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "ADS", code: "DS1301", name: "Computer Organization and Architecture", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "ADS", code: "CS1302", name: "Data Structures", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "ADS", code: "DS1302", name: "Object Oriented Programming (Lab Integrated)", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "ADS", code: "DS1303", name: "Introduction to Artificial Intelligence", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "ADS", code: "DS1304", name: "Foundations of Data Science", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "ADS", code: "DS1307", name: "Data Structures Laboratory using Python", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "ADS", code: "DS1308", name: "Artificial Intelligence Laboratory", credit: 2 },
  //AIML
    { college: "sjce", reg: 2021, sem: 3, dept: "AIML", code: "MA1354", name: "Probability and Bayesian Inference", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "AIML", code: "CS1302", name: "Data Structures", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "AIML", code: "DS1303", name: "Introduction to Artificial Intelligence", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "AIML", code: "ML1301", name: "Data Foundation", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "AIML", code: "ML1302", name: "Object Oriented Software Engineering (Lab Integrated)", credit: 4 },
    { college: "sjce", reg: 2021, sem: 3, dept: "AIML", code: "ML1303", name: "Optimization for Machine Learning", credit: 3 },
    { college: "sjce", reg: 2021, sem: 3, dept: "AIML", code: "DS1307", name: "Data Structures Laboratory using Python", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "AIML", code: "DS1308", name: "Artificial Intelligence Laboratory", credit: 2 },
    { college: "sjce", reg: 2021, sem: 3, dept: "AIML", code: "HS1310", name: "Professional Skills Laboratory", credit: 1 },
  ];