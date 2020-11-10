// {Name: Navigation in the app}
// {Description: Navigation between screens and sections}

title('Navigation  in the website')

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

intent("go to the professional assistant page",
       "go to the professional assistant screen",
       "go to the assistant page",
       "got to the assistant screen",
       "open the professional assistant page", (p) => {
    p.play({command:"go:assistant"});
    p.play("Navigating to the assistant screen");
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

// Commands to write/read in text editor

intent("go to the text editor",
       "go text editor",
       "open the text editor",
       "open text editor", (p) => {
    p.play({command:"open:texteditor"});
});

//let messageWrite = "Working on Mental Health and Education Assistants"
let messageWrite = "Working on Mental Health Assistant Application"
intent("write in the text editor","write text editor",
       "write text", (p) => {
    p.play({command:"write:texteditor", messageWrite});
});

intent("copy in the text editor",
       "copy text editor",
       "copy first article",
       "copy the news",
       "copy text", (p) => {
    p.play({command:"copy:texteditor"});
});

intent("read the text editor",
       "read text editor",
       "read the text", (p) => {
    p.play({command:"read:texteditor"});
});

// Commands to write/read in scheduler

intent("go to the scheduler",
       "go scheduler",
       "open the scheduler",
       "open scheduler",
       "schedule a new activity",
       "schedule an activity",
       "schedule activity",
       "schedule a new task",
       "schedule task",
       (p) => {
    p.play({command:"open:scheduler"});
});