const timetables = {
    0: { // 11.CCP
        0: [ // Sunday
            { subject: "DB201", teacher: "DR", room: "C2", start: "07:15", end: "08:45" },
            { subject: "OS201", teacher: "AA", room: "C2", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "OS201", teacher: "AA", room: "C2", start: "09:50", end: "10:35" },
            { subject: "WEB102", teacher: "AK", room: "C4", start: "10:35", end: "12:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "13:05", end: "13:45" },
        ],
        1: [ // Monday
            { subject: "ARC201", teacher: "MS/IA", room: "C3", start: "07:15", end: "08:00" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "08:00", end: "08:45" },
            { subject: "WEB201", teacher: "AK", room: "C4", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "WEB201", teacher: "AK", room: "C4", start: "09:50", end: "10:35" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "10:35", end: "12:05" },
            { subject: "OS201", teacher: "AA", room: "C2", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "OS201", teacher: "AA", room: "C2", start: "13:05", end: "13:45" },
        ],
        2: [ // Tuesday
            { subject: "CHM201", teacher: "RY/SS", room: "Ch. Lab", start: "07:15", end: "08:45" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "09:50", end: "10:35" },
            { subject: "PHY201", teacher: "FM", room: "B9", start: "10:35", end: "12:05" },
            { subject: "ARB", teacher: "HS", room: "A7", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "ISL", teacher: "NS", room: "A8", start: "13:05", end: "13:45" },
        ],
        3: [ // Wednesday
            { subject: "ARB", teacher: "HS", room: "A1", start: "07:15", end: "08:00" },
            { subject: "NE", teacher: "NS", room: "A8", start: "08:00", end: "08:45" },
            { subject: "ARC201", teacher: "MS/IA", room: "C3", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "ARC201", teacher: "MS/IA", room: "C3", start: "09:50", end: "10:35" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "10:35", end: "12:05" },
            { subject: "DB201", teacher: "DR", room: "C1", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "DB201", teacher: "DR", room: "C1", start: "13:05", end: "13:45" },
        ],
        4: [ // Thursday
            { subject: "PHY201", teacher: "FM", room: "BB1", start: "07:00", end: "08:20" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "08:20", end: "08:45" },
            { subject: "PE", teacher: "O", room: "PE", start: "08:45", end: "09:55" },
            { subject: "ARC201", teacher: "MS/IA", room: "C1", start: "09:55", end: "11:15" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "11:15", end: "11:55" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "11:55", end: "12:10" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "12:10", end: "12:55" },
            { subject: "Clubs", teacher: "???", room: "???", start: "12:55", end: "13:45" },
        ]
    },
    1: { // 11.AI
        0: [ // Sunday
            { subject: "BD201", teacher: "SG", room: "C1", start: "07:15", end: "08:45" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "09:50", end: "10:35" },
            { subject: "DB201", teacher: "DR", room: "C2", start: "10:35", end: "12:05" },
            { subject: "ARB", teacher: "HS", room: "A7", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "NE", teacher: "NS", room: "A1", start: "13:05", end: "13:45" },
        ],
        1: [ // Monday
            { subject: "MAT201", teacher: "YA", room: "C1", start: "07:15", end: "08:00" },
            { subject: "ISL", teacher: "NS", room: "A7", start: "08:00", end: "08:45" },
            { subject: "ML201", teacher: "SG", room: "B7", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "ML201", teacher: "SG", room: "B7", start: "09:50", end: "10:35" },
            { subject: "PHY201", teacher: "FM", room: "Ph. Lab", start: "10:35", end: "12:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "13:05", end: "13:45" },
        ],
        2: [ // Tuesday
            { subject: "PHY201", teacher: "FM", room: "B9", start: "07:15", end: "08:45" },
            { subject: "DB201", teacher: "DR", room: "C3", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "DB201", teacher: "DR", room: "C3", start: "09:50", end: "10:35" },
            { subject: "ARB", teacher: "HS", room: "A1", start: "10:35", end: "11:20" },
            { subject: "ML201", teacher: "SG", room: "C1", start: "11:20", end: "12:05" },
            { subject: "PE", teacher: "O", room: "PE", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "PE-S", teacher: "New/O", room: "PE", start: "13:05", end: "13:45" },
        ],
        3: [ // Wednesday 
            { subject: "BD201", teacher: "SG", room: "C1", start: "07:15", end: "08:45" },
            { subject: "WEB201", teacher: "AK", room: "C1", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "WEB201", teacher: "AK", room: "C1", start: "09:50", end: "10:35" },
            { subject: "CHM201", teacher: "RY", room: "Ch. Lab", start: "10:35", end: "12:05" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "13:05", end: "13:45" },

        ],
        4: [
            { subject: "MAT201", teacher: "YA", room: "B6", start: "07:00", end: "08:20" },
            { subject: "ML201", teacher: "SG", room: "C1", start: "08:20", end: "09:00" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:00", end: "09:15" },
            { subject: "ML201", teacher: "SG", room: "C1", start: "09:15", end: "9:55" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "9:55", end: "11:15" },
            { subject: "WEB201", teacher: "AK", room: "C2", start: "11:15", end: "11:55" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "11:55", end: "12:10" },
            { subject: "WEB201", teacher: "AK", room: "C2", start: "12:10", end: "12:55" },
            { subject: "Clubs", teacher: "???", room: "???", start: "12:55", end: "13:45" },
        ]
    },
    2: { // 11.SEC
        0: [ // Sunday
            { subject: "SEC201", teacher: "KM", room: "C3", start: "07:15", end: "08:45" },
            { subject: "CHM201", teacher: "RY", room: "Ch. Lab", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "CHM201", teacher: "RY", room: "Ch. Lab", start: "09:50", end: "10:35" },
            { subject: "PHY201", teacher: "FM", room: "Ph. Lab", start: "10:35", end: "12:05" },
            { subject: "ISL", teacher: "NS", room: "A8", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "MAT201", teacher: "AQ", room: "B1", start: "13:05", end: "13:45" },
        ],
        1: [ // Monday
            { subject: "MAT", teacher: "YA", room: "C1", start: "07:15", end: "08:45" },
            { subject: "ISL", teacher: "NS", room: "A7", start: "08:00", end: "08:45" },
            { subject: "ML201", teacher: "SG", room: "B7", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "ML201", teacher: "SG", room: "B7", start: "09:50", end: "10:35" },
            { subject: "PHY201", teacher: "FM", room: "Ph. Lab", start: "10:35", end: "12:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "13:05", end: "13:45" },
        ],
        2: [ // Tuesday
            { subject: "PHY201", teacher: "FM", room: "B9", start: "07:15", end: "08:45" },
            { subject: "DB201", teacher: "DR", room: "C3", start: "08:00", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "DB201", teacher: "DR", room: "C3", start: "09:50", end: "10:35" },
            { subject: "ARB", teacher: "HS", room: "A1", start: "10:35", end: "11:20" },
            { subject: "ML201", teacher: "SG", room: "C1", start: "11:20", end: "12:05" },
            { subject: "PE", teacher: "O", room: "PE", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "PE-S", teacher: "New/O", room: "PE", start: "13:05", end: "13:45" },
        ],
        3: [ // Wednesday 
            { subject: "BD201", teacher: "SG", room: "C1", start: "07:15", end: "08:45" },
            { subject: "WEB201", teacher: "AK", room: "C1", start: "08:00", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "WEB201", teacher: "AK", room: "C1", start: "09:50", end: "10:35" },
            { subject: "CHM201", teacher: "RY", room: "Ch. Lab", start: "10:35", end: "12:05" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "13:05", end: "13:45" },

        ],
        4: [
            { subject: "MAT201", teacher: "YA", room: "B6", start: "07:00", end: "08:20" },
            { subject: "ML201", teacher: "SG", room: "C1", start: "08:20", end: "09:00" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:00", end: "09:15" },
            { subject: "ML201", teacher: "SG", room: "C1", start: "09:15", end: "09:55" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "09:55", end: "11:15" },
            { subject: "WEB201", teacher: "AK", room: "C2", start: "11:15", end: "11:55" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "11:55", end: "12:10" },
            { subject: "WEB201", teacher: "AK", room: "C2", start: "12:10", end: "12:55" },
            { subject: "Clubs", teacher: "???", room: "???", start: "12:55", end: "13:45" },
        ]
    },
    3: { // 12.CCP
        0: [ // Sunday
            { subject: "GRD301", teacher: "AK/MS", room: "B8", start: "07:15", end: "08:45" },
            { subject: "Math", teacher: "KNT/JA", room: "B3", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "Math", teacher: "KNT/JA", room: "B3", start: "09:50", end: "10:35" },
            { subject: "Arab", teacher: "AM", room: "A8", start: "10:35", end: "11:20" },
            { subject: "ISL", teacher: "AR", room: "A8", start: "11:20", end: "12:05" },
            { subject: "IOT301", teacher: "AA", room: "B7", start: "12:05", end: "12:45"}
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "IOT301", teacher: "AA", room: "B7", start: "13:05", end: "13:45" },
        ],
        1: [ // Monday
            { subject: "Chem", teacher: "DN/AH", room: "CHM. Lab", start: "07:15", end: "08:45" },
            { subject: "Math", teacher: "KNT/JA", room: "B3", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "Historey", teacher: "AR", room: "A7", start: "09:50", end: "10:35" },
            { subject: "English", teacher: "SS", room: "A5", start: "10:35", end: "12:05" },
            { subject: "ARC301", teacher: "AK", room: "B8", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "ARC301", teacher: "AK", room: "B8", start: "13:05", end: "13:45" },
        ],
        2: [ // Tuesday
            { subject: "Historey", teacher: "AR", room: "A7", start: "07:15", end: "08:00" },
            { subject: "Arab", teacher: "AM", room: "A8", start: "08:00", end: "08:45" },
            { subject: "English", teacher: "SS", room: "A6", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "English", teacher: "SS", room: "A6", start: "09:50", end: "10:35" },
            { subject: "GRD301", teacher: "AK/MS", room: "B8", start: "10:35", end: "12:05" },
            { subject: "Physics", teacher: "SK", room: "B9", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "Physics", teacher: "SK", room: "B9", start: "13:05", end: "13:45" },
        ],
        3: [ // Wednesday 
            { subject: "ARC301", teacher: "AK", room: "B8", start: "07:15", end: "08:45" },
            { subject: "Physics", teacher: "SK", room: "Ph. Lab", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "Physics", teacher: "SK", room: "Ph. Lab", start: "09:50", end: "10:35" },
            { subject: "CC301", teacher: "AK", room: "B8", start: "10:35", end: "12:05" },
            { subject: "English", teacher: "SS", room: "A5", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "English", teacher: "SS", room: "A5", start: "13:05", end: "13:45" },

        ],
        4: [ 
            { subject: "CC301", teacher: "AK", room: "B8", start: "07:00", end: "08:20" },
            { subject: "English", teacher: "SS", room: "A5", start: "08:20", end: "09:00" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:00", end: "09:15" },
            { subject: "English", teacher: "SS", room: "A5", start: "09:15", end: "09:55" },
            { subject: "IOT301", teacher: "AA", room: "B7", start: "09:55", end: "11:15" },
            { subject: "Math", teacher: "KNT/JA", room: "B3", start: "11:15", end: "11:55" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "11:55", end: "12:10" },
            { subject: "Math", teacher: "KNT/JA", room: "B3", start: "12:10", end: "12:50" },
            { subject: "Clubs", teacher: "???", room: "???", start: "12:55", end: "13:45" },
        ]
    },
    4: { // 12.AI
        0: [ // Sunday
            { subject: "ML301", teacher: "AA", room: "B7", start: "07:15", end: "08:45" },
            { subject: "DL301", teacher: "SG/AA", room: "C1", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "English", teacher: "SS", room: "A5", start: "10:35", end: "12:05" },
            { subject: "Physics", teacher: "SK", room: "Ph. Lab", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "Physics", teacher: "SK", room: "Ph. Lab", start: "13:05", end: "13:45" },
        ],
        1: [ // Monday
            { subject: "GRD301", teacher: "AA/AA", room: "B7", start: "07:15", end: "08:45" },
            { subject: "ML301", teacher: "AA", room: "C1", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "ML301", teacher: "AA", room: "C1", start: "09:50", end: "10:35" },
            { subject: "Arab", teacher: "AM", room: "A8", start: "10:35", end: "11:20" },
            { subject: "Math", teacher: "JA", room: "B3", start: "11:20", end: "12:05" },
            { subject: "English", teacher: "SS", room: "A5", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "English", teacher: "SS", room: "A5", start: "13:05", end: "13:45" },
        ],
        2: [ // Tuesday
            { subject: "GRD301", teacher: "AA/AA", room: "B7", start: "07:15", end: "08:45" },
            { subject: "Math", teacher: "JA", room: "B3", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "Math", teacher: "JA", room: "B3", start: "09:50", end: "10:35" },
            { subject: "Chemistry", teacher: "RY/DN", room: "CH. Lab", start: "10:35", end: "11:20" },
            { subject: "English", teacher: "SS", room: "A5", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "English", teacher: "SS", room: "A5", start: "13:05", end: "13:45" },
        ],
        3: [ // Wednesday 
            { subject: "English", teacher: "SS", room: "A5", start: "07:15", end: "08:45" },
            { subject: "Islam", teacher: "AR", room: "A1", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "Historey", teacher: "SZ", room: "A7", start: "09:50", end: "10:35" },
            { subject: "DL301", teacher: "SG/AA", room: "B7", start: "10:35", end: "12:05" },
            { subject: "IOT301", teacher: "AA", room: "B7", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "IOT301", teacher: "AA", room: "B7", start: "13:05", end: "13:45" },

        ],
        4: [ 
            { subject: "Physics", teacher: "SK", room: "B9", start: "07:00", end: "08:20" },
            { subject: "IOT301", teacher: "AA", room: "B7", start: "08:20", end: "09:00" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:00", end: "09:15" },
            { subject: "IOT301", teacher: "AA", room: "B7", start: "09:15", end: "09:55" },
            { subject: "Math", teacher: "JA", room: "B3", start: "09:55", end: "11:15" },
            { subject: "Historey", teacher: "SZ", room: "A7", start: "11:15", end: "11:55" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "11:55", end: "12:10" },
            { subject: "Arab", teacher: "AM", room: "A8", start: "12:10", end: "12:50" },
            { subject: "Clubs", teacher: "???", room: "???", start: "12:55", end: "13:45" },
        ]
    },
    5: { // 12.SEC
        0: [ // Sunday
            { subject: "Math", teacher: "KNT", room: "B3", start: "07:15", end: "08:00" },
            { subject: "History", teacher: "SZ", room: "A7", start: "08:00", end: "08:45" },
            { subject: "GDV301", teacher: "HA", room: "C3", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "GDV301", teacher: "HA", room: "C3", start: "09:50", end: "10:35" },
            { subject: "IOT301", teacher: "KM/AA", room: "B7", start: "10:35", end: "12:05" },
            { subject: "English", teacher: "SS", room: "A5", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "English", teacher: "SS", room: "A5", start: "13:05", end: "13:45" },
        ],
        1: [ // Monday
            { subject: "English", teacher: "AA", room: "A5", start: "07:15", end: "08:45" },
            { subject: "Phy", teacher: "SK", room: "Ph.Lab", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "Physics", teacher: "SK", room: "Ph.Lab", start: "09:50", end: "10:35" },
            { subject: "SEC311", teacher: "KM", room: "C3", start: "10:35", end: "12:05" },
            { subject: "Islam", teacher: "AR", room: "A7", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "Arab", teacher: "AM", room: "A8", start: "13:05", end: "13:45" },
        ],
        2: [ // Tuesday
            { subject: "Math", teacher: "KNT", room: "B3", start: "07:15", end: "08:45" },
            { subject: "GRD301", teacher: "KM/IA", room: "C4", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "GRD301", teacher: "KM/IA", room: "C4", start: "09:50", end: "10:35" },
            { subject: "Physics", teacher: "SK", room: "B9", start: "10:35", end: "11:20" },
            { subject: "Chemistry", teacher: "RY/DN", room: "CH.Lab", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "Chemistry", teacher: "RY/DN", room: "CH.Lab", start: "13:05", end: "13:45" },
        ],
        3: [ // Wednesday 
            { subject: "GDV301", teacher: "HA", room: "C3", start: "07:15", end: "08:45" },
            { subject: "IOT301", teacher: "KM/AA", room: "B7", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "IOT301", teacher: "KM/AA", room: "B7", start: "09:50", end: "10:35" },
            { subject: "English", teacher: "SS", room: "A5", start: "10:35", end: "12:05" },
            { subject: "Math", teacher: "KNT", room: "B3", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "Math", teacher: "KNT", room: "B3", start: "13:05", end: "13:45" },

        ],
        4: [ 
            { subject: "English", teacher: "SS", room: "A5", start: "07:00", end: "08:20" },
            { subject: "GRD301", teacher: "KM/IA", room: "C4", start: "08:20", end: "09:00" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:00", end: "09:15" },
            { subject: "GRD301", teacher: "KM/IA", room: "C4", start: "09:15", end: "09:55" },
            { subject: "History", teacher: "SZ", room: "A7", start: "09:55", end: "10:35" },
            { subject: "Arab", teacher: "AM", room: "A8", start: "10:35", end: "11:15" },
            { subject: "SEC311", teacher: "KM", room: "C3", start: "11:15", end: "11:55" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "11:55", end: "12:10" },
            { subject: "SEC", teacher: "KM", room: "C3", start: "12:10", end: "12:50" },
            { subject: "Clubs", teacher: "???", room: "???", start: "12:55", end: "13:45" },
        ]
    },

};
function getClassSchedule(selectedClass) {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5); // HH:MM format
    const currentDay = now.getDay(); // 0-6 (Sun-Sat)

    const todayClasses = timetables[selectedClass][currentDay] || [];
    let currentClass = null;
    let nextClass = null;

    todayClasses.forEach((classInfo, index) => {
        if (currentTime >= classInfo.start && currentTime < classInfo.end) {
            currentClass = classInfo;
            nextClass = todayClasses[index + 1] || null;
        }
    });

    return { currentClass, nextClass, todayClasses, currentDay };
}

function displayClasses() {
    const classSelect = document.getElementById('class-select');
    const selectedClass = classSelect.value;
    const currentClassDiv = document.getElementById('current-class');
    const timeRemainingDiv = document.getElementById('time-remaining');
    const nextClassDiv = document.getElementById('next-class');
    const scheduleBody = document.getElementById('schedule-body');
    const timeElapsedDiv = document.getElementById('time-elapsed');
    const currentTimeDiv = document.getElementById('current-time');


    // Clear the table body
    scheduleBody.innerHTML = '';

    const now = new Date();
    const currentDay = now.getDay(); // 0-6 (Sun-Sat)
    const todayClasses = timetables[selectedClass][currentDay] || [];

    // Get the current class and next class
    const { currentClass, nextClass } = getClassSchedule(selectedClass);

    // Populate the schedule table for today's classes
    todayClasses.forEach((classInfo) => {
        const row = document.createElement('tr');

        // Highlight the current class
        if (currentClass && classInfo.subject === currentClass.subject && classInfo.teacher === currentClass.teacher) {
            row.classList.add('highlight');
        }

        row.innerHTML = `
            <td>${classInfo.start}</td>
            <td>${classInfo.end}</td>
            <td>${classInfo.subject}</td>
            <td>${classInfo.teacher}</td>
            <td>${classInfo.room}</td>
        `;
        scheduleBody.appendChild(row);
    });
    if (currentClass) {
        currentClassDiv.innerHTML = `Current Class: ${currentClass.subject} (Room: ${currentClass.room}, ${currentClass.teacher})`;

        // Calculate end time
        const currentClassEnd = new Date();
        const [endHour, endMinute] = currentClass.end.split(':');
        currentClassEnd.setHours(endHour, endMinute, 0);
        const remainingTime = Math.ceil((currentClassEnd - new Date()) / 1000); // in seconds

        // Calculate start time
        const currentClassStart = new Date();
        const [startHour, startMinute] = currentClass.start.split(':');
        currentClassStart.setHours(startHour, startMinute, 0);
        const elapsedTime = Math.ceil((new Date() - currentClassStart) / 1000); // in seconds

        if (remainingTime > 0) {
            const timeNow = now.getSeconds();
            const hours = now.getHours();
            const minutesNow = now.getMinutes();
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;

            const elapsedMinutes = Math.floor(elapsedTime / 60);
            const elapsedSeconds = elapsedTime % 60;

            timeRemainingDiv.innerHTML = `Time Remaining: ${minutes} minutes and ${seconds} seconds`;
            currentTimeDiv.innerHTML = `Current Time: ${now.toLocaleTimeString('en-US', { hour12: false })}`;
            timeElapsedDiv.innerHTML = `Elapsed Time: ${elapsedMinutes} minutes and ${elapsedSeconds} seconds`;
        } else {
            timeRemainingDiv.innerHTML = "Class has ended.";
            timeElapsedDiv.innerHTML = "";
        }

    } else {
        currentClassDiv.innerHTML = "No current class.";
        timeRemainingDiv.innerHTML = "";
        timeElapsedDiv.innerHTML = "";
        currentTimeDiv.innerHTML = ""
    }

    // Check for the next class
    if (nextClass) {
        nextClassDiv.innerHTML = `Next Class: ${nextClass.subject} (Room: ${nextClass.room})`;

        // Check if there's 1 minute left for the next class
        const nextClassStart = new Date();
        const [startHour, startMinute] = nextClass.start.split(':');
        nextClassStart.setHours(startHour, startMinute, 0);
        const timeUntilNextClass = Math.ceil((nextClassStart - new Date()) / 1000); // in seconds

        if (timeUntilNextClass <= 300 && timeUntilNextClass > 0) {
            nextClassDiv.classList.add('blinking-red');
        } else {
            nextClassDiv.classList.remove('blinking-red');
        }
    } else {
        nextClassDiv.innerHTML = "No more classes for today.";
        nextClassDiv.classList.remove('blinking-red');
    }
}

displayClasses();

// Update the display every second
setInterval(displayClasses, 1000);

document.getElementById('class-select').addEventListener('change', displayClasses);


const toggleThemeButton = document.getElementById('toggle-theme');

// Set theme and save choice to localstorage
function setTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    const container = document.querySelector('.container');
    container.classList.toggle('dark', theme === 'dark');
    const header = document.querySelector('h1');
    header.classList.toggle('dark', theme === 'dark');
    const label = document.querySelector('label');
    label.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
}

// Check for a saved theme preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
}

toggleThemeButton.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    setTheme(currentTheme);
});
