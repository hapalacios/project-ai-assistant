// {Name: Conversation with Alan}
// {Description: First casual conversation with Alan.}

title('First quick chat with Alan Ai')

intent("go back to the home page", (p) => {
    p.play({command:"go:home"});
    p.play("Navigating to the home screen");
});

intent("go back to the previous screen", (p) => {
    p.play({command:"go:back"});
    p.play("Navigating to the previous screen");
});

intent("go to the next page","go to the next screen", (p) => {
    p.play({command:"go:forward"});
    p.play("Navigating to the next screen");
});

intent("open the conversation application","go to the conversation screen",
       "let's have a quick chat", "let's have a quick conversation", (p) => {
    p.play({command:"go:conversation"});
    p.play("Navigating to the conversation app screen");
});

intent("go to the professional assistant page","go to the professional assistant screen",
       "open the professional assistant page", (p) => {
    p.play({command:"go:assistant"});
    p.play("Navigating to the professional assistant screen");
});

intent("go back to new features page","go to the new features screen",
       "open the new features page",(p) => {
    p.play({command:"go:newfeatures"});
    p.play("Navigating to the new features screen");
});

intent("go to the about page","go to the about screen",
       "open the about page", (p) => {
    p.play({command:"go:about"});
    p.play("Navigating to the about screen");
});

intent('hello good morning', p => {
     p.play( {command: 'newConversationLine1'});
     p.play('Hi, what can I do for you?',);
 });

intent('hi there', p => {
     p.play( {command: 'newConversationLine2'});
     p.play('Hello, Do you need help?',);
 });

intent('what is your name', p => {
    p.play( { command: 'newConversationLine3' })
    p.play('My name is Allan. ');
});

intent('Hey Siri', p => {
    p.play( { command: 'newConversationLine4' } )
    p.play('I am Alan. You must be thinking of someone else.');
});

intent('how are you', p => {
    p.play( { command: 'newConversationLine5' })
    p.play('I\'m doing well. Thank you');
});

intent('Do you have a hobby', p => {
    p.play( { command: 'newConversationLine6' })
    p.play('Yes, I train myself in my free time to get better at helping you.');
});

intent('Talk about yourself','(Tell me|Talk) some(thing|stuff|things) about (you|yourself)',
    'I want to know (more about you|you better)', p => {
    p.play( { command: 'newConversation:line8' } ) 
    p.play(`I\'m Alan, a virtual agent, (within this application.|) 
           (I can help you get what you need|I can help you with anything 
            within my programming).`);
});

intent('What is $(DATE)', p => {
    p.play( {command: 'newConversation:line9' } );
    const formattedDate = p.DATE.moment.format('dddd, MMMM Do YYYY');

    p.play(`${p.DATE.value} is a date`);
    p.play(`It is ${formattedDate}`);
});
// Try: "What is today", "What is tomorrow" and "What is next Friday".
// The '.value' field of this slot contains the user input, and
// the '.moment' field contains the moment.js object.

const intentPatterns = [
    'What is your favorite food',
    'What food do you like',
];

intent(intentPatterns, p => {
    p.play ( {command: 'newConversation:line10' } )
    p.play('CPU time, yammy!');
});

intent('Are you ready Alan', p => {
    p.play( { command: 'newConversation:line11' } )
    p.play(`I am always ready. If you spend some hours teaching me about
            the real world probably we will become friends and have real 
            and fun interactive conversations.`);
});

intent('I need (an|) advice', p => {
    p.play( { command: 'newConversation:line12' } )
    p.play('(OK|Alright) I\'ll do my best to help you.','I\'m not programmed for general advice, but I will do my best.');
});

intent('I will be back','Hold on','Give me a (moment|second|sec)', p => {
    p.play( { command: 'newConversation:line13' } )
    p.play('OK','Sure, no problem');
});