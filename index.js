//function Monday(){
//    console.log("Go for a five-mile run");
//    console.log("Pump iron");
//}

//function Monday(){
//    runFiveMiles();
//    liftWeights();
//}
function Monday(){
    exerciseRoutine(liftWeights);
}

exerciseRoutine(() => console.log("Stretch! Work that core!"));

function exerciseRoutine(postRunActivity){
    runFiveMiles();
    postRunActivity();
}

function Tuesday(){
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

function Wednesday(){
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
}

function Thursday(){
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Friday(){
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

function runFiveMiles(){
    console.log("Go for a five-mile run");
}

function liftWeights(){
    console.log("Pump iron");
}

function swimFortyLaps(){
    console.log("Swim 40 laps");
}

function morningRoutine(exercise){
    let breakfast;

    if (exercise === liftWeights){
        breakfast = "protein bar";
    } else if (exercise === swimFortyLaps){
        breakfast = "kale smoothie";
    } else {
        breakfast = "granola";
    }

    exerciseRoutine(exercise);

    return function(){
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
}
const afterExercise = morningRoutine(liftWeights);
afterExercise();


function receivesAFunction(cb){
    cb();
}

const returnsANamedFunction = () => {
    const sum = (a, b) => a + b;
    return sum;
};

const sum = returnsANamedFunction();
sum(1, 5);
returnsANamedFunction()(1,5);

const returnsAnAnonymousFunction = () => {
    returnsANamedFunction();
    return function(){
        console.log("Please work");
    };
}