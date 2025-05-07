getCoffee();
singASong();

function getCoffee() {
    console.log("I am getting a coffee.......");
    aSyncFunc(() => {
        console.log("Your coffee is here");
    });
}

function singASong() {
    console.log("I am singing a song");
}

function aSyncFunc(callback) {
    setTimeout(() => {
        callback();
    }, 3000);
}