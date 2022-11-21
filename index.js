const names = ["Jessica", "Steve", "Holly"]; 
const events = "wedding";

function writeCards(names, events) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
        debugger;
    }
    return messages;
};

writeCards(names, events);


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts;
}
wrapGifts(gifts);

function countDown(countdown) {
    while (countdown >= 0) {
        console.log(countdown);
        countdown -= 1;
        ;
    }
}

countDown(10);