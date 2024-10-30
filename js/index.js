const firstList = [
    true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true
]

const secondList = [
    false, false, false
]

function countSheeps(list){
    let sheeps = 0
    for (let i = 0; i<list.length; i++) {
        if (list[i] === true){
            sheeps++
        }
    }
    
    if (sheeps != 0){
        console.log("There are", sheeps, "sheep in total")
    }
    
    if (sheeps == 0){
        console.log("UPS!!! Wolfs eaten Sheeps")
    }
    return sheeps;
}

countSheeps(firstList);
countSheeps(secondList);

