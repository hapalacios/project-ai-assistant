// {Name: Conversation with Alan}
// {Description: First casual conversation with Alan.}

title('First quick chat with Alan Ai')

let message1 = 'Hello good morning';
let message2 = 'Hi, what can I do for you?';
intent(message1, p => {
     p.play( {command: 'newConversationLine1', message1, message2} );
     p.play(message2,);
 });

let message3 = 'Hi there';
let message4 = 'Hello, do you need help?';
intent(message3, p => {
     p.play( {command: 'newConversationLine2', message3, message4} );
     p.play(message4,);
 });

let message5 = "What is your name?";
let message6 = 'My name is Alan';
intent(message5, p => {
    p.play( { command: 'newConversationLine3', message5, message6 } );
    p.play(message6);
});

let message7 = 'Hey Siri';
let message8 = 'I am Alan. You must be thinking of someone else';
intent(message7, p => {
    p.play( { command: 'newConversationLine4', message7, message8 } );
    p.play(message8);
});

let message9 = "How are you?";
let message10 = "I am doing well. Thank you."; 
intent(message9, p => {
    p.play( { command: 'newConversationLine5', message9, message10 } );
    p.play(message10);
});

let message11 = 'Do you have a hobby?';
let message12 = 'Yes, I train myself in my free time to get better at helping you';
intent('Do you have a hobby', p => {
    p.play( { command: 'newConversationLine6', message11, message12 } );
    p.play(message12);
});

let message13 = 'Talk about yourself';
let message14 =  'I am Alan, a virtual agent, within this application';
intent(message13, p => {
    p.play( { command: 'newConversationLine7', message13, message14 } ); 
    p.play(message14);
});

let message15 = 'Tell me something about yourself';
let message16 =  'I can help you with anything within my programming';
intent(message15, p => {
    p.play( { command: 'newConversationLine8', message15, message16 } ); 
    p.play(message16);
});

let message17 = 'What is $(DATE)';
intent(message17, p => {
    const formattedDate = p.DATE.moment.format('dddd, MMMM Do YYYY');
    const message18 = `${p.DATE.value} is a date. It is ${formattedDate}`;
    p.play( {command: 'newConversationLine9', message17, message18 } );
    p.play(message18);
    //p.play(`${p.DATE.value} is a date`);
    //p.play(`It is ${formattedDate}`);
});
// Try: "What is today", "What is tomorrow" and "What is next Friday".
// The '.value' field of this slot contains the user input, and
// the '.moment' field contains the moment.js object.


// const intentPatterns = [
//     'What is your favorite food',
//     'What food do you like',
// ];
let message19 = 'What is your favorite food?';
let message20 = 'CPU time, yammy!';
intent(message19, p => {
    p.play ( {command: 'newConversationLine10', message19, message20 } );
    p.play(message20);
});

let message21 = 'Are your ready Alan';
let message22 = `I am always ready. If you spend some hours teaching me about
            the real world probably we will become friends and have real 
            and fun interactive conversations.`
intent(message21, p => {
    p.play( { command: 'newConversationLine11', message21, message22 } );
    p.play(message22);
});

let message23 = "I need and advice";
let message24 = "(I am not programmed for general advice, but I will do my best.";
intent(message23, p => {
    p.play( { command: 'newConversationLine12', message23, message24 } );
    p.play(message24);
});

let message25 = 'I will be back';
let message26 = 'OK';
intent(message25, p => {
    p.play( { command: 'newConversationLine13', message25, message26 } );
    p.play(message26);
});

let message27 = 'Give me a moment';
let message28 = 'Sure, no problem';
intent(message27, p => {
    p.play( { command: 'newConversationLine14', message27, message28 } );
    p.play(message28);
});

let message29 = 'What can I do in this application?';
let message30 = 'You can ask about news, weather of any city, or open a text-editor for example. Try asking about the weather in Toronto or New York.';
intent(message29, p => {
    p.play( { command: 'newConversationLine15', message29, message30 } );
    p.play(message30);
});