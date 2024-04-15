class_detail = {
    "Rouge":{
        "VIT": 1,
        "AGI": 4,
        "INT": 2,
        "AWR": 3,
        "WIL": -1,
        "PRS": -2,
        "SPL": 2,
        "STL": 5,
        "CTC": 4,
        "MUS": 1,
        "TEC": 2,
        "TAC": 2,
        "BHP": 9,
        "Mana": 10
    },
    "Soldier":{
        "VIT": 3,
        "AGI": -2,
        "INT": -1,
        "AWR": 3,
        "WIL": 2,
        "PRS": 2,
        "SPL": 2,
        "STL": 1,
        "CTC": 5,
        "MUS": 2,
        "TEC": 3,
        "TAC": 4,
        "BHP": 12,
        "Mana": 5
    },
    "Mage":{
        "VIT": -2,
        "AGI": -1,
        "INT": 4,
        "AWR": 2,
        "WIL": 3,
        "PRS": 1,
        "SPL": 5,
        "STL": 2,
        "CTC": 1,
        "MUS": 4,
        "TEC": 2,
        "TAC": 2,
        "BHP": 9,
        "Mana": 20
    },
    "Bard":{
        "VIT": -1,
        "AGI": 1,
        "INT": 2,
        "AWR": 1,
        "WIL": 1,
        "PRS": 3,
        "SPL": 3,
        "STL": 1,
        "CTC": 2,
        "MUS": 5,
        "TEC": 2,
        "TAC": 3,
        "BHP": 10,
        "Mana": 15
    },
    "Ranger":{
        "VIT": 2,
        "AGI": 3,
        "INT": -1,
        "AWR": 4,
        "WIL": 1,
        "PRS": -2,
        "SPL": 1,
        "STL": 4,
        "CTC": 3,
        "MUS": 2,
        "TEC": 2,
        "TAC": 5,
        "BHP": 11,
        "Mana": 10
    },
    "Priest":{
        "VIT": 1,
        "AGI": -2,
        "INT": 3,
        "AWR": 2,
        "WIL": 2,
        "PRS": 1,
        "SPL": 4,
        "STL": 2,
        "CTC": 1,
        "MUS": 3,
        "TEC": 5,
        "TAC": 2,
        "BHP": 11,
        "Mana": 25
    }
}

classes = ["Rouge", "Soldier", "Mage", "Bard", "Ranger", "Priest"]

lckdie = [-2, -1, 0, 0, 1, 2]

lm = {
    1: -2,
    2: -1,
    3: -1,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8:  1,
    9:  1,
    10: 2
}

core_mod = {
    0:-4,
    1:-3,
    2:-3,
    3:-2,
    4:-2,
    5:-1,
    6:-1,
    7:0,
    8:0,
    9:1,
    10:1,
    11:2,
    12:2,
    13:3,
    14:3,
    15:4,
    16:4
}

function core_attr() {
    x = Array.from({length: 3}, () => Math.floor(Math.random(Date.now()) * 6 + 1));
    x.sort()
    return x[1] + x[2];
}

function rand_class() {
    return classes[Math.floor(Math.random(Date.now()) * 6)];
}

function luck() {
    x =  Math.floor(Math.random(Date.now()) * 6 + 1);
    y = 0;
    if(x < 5){
        for(i = 0; i < 2; i++){
            y += Math.floor(Math.random(Date.now()) * 10 + 1);
        }
    } else {
        y = x;
        for(i = 0; i < 3; i++){
            y += Math.floor(Math.random(Date.now()) * 6 + 1);
        }
    }
    y = Math.floor((y*100)/24);
    if(y < 5){
        return 0
    } else if(y < 15){
        return 1
    } else if(y < 25){
        return 2
    } else if(y < 35){
        return 3
    } else if(y < 45){
        return 4
    } else if(y < 55){
        return 5
    } else if(y < 65){
        return 6
    } else if(y < 75){
        return 7
    } else if(y < 85){
        return 8
    } else if(y < 95){
        return 9
    } else {
        return 10
    }
}

function luck_dice() {
    return lckdie[Math.floor(Math.random(Date.now()) * 6)];
}