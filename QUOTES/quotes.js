let arr1=[
    {
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Inspirational",
            "Advice",
            "Humor"
        ]
    },
    {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        "quote": "True friends stab you in the front.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "People"
        ]
    },
    {
        "quote": "Women are made to be Loved, not understood.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        "quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Philosophy",
            "Advice"
        ]
    },
    {
        "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        "quote": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom"
        ]
    },
    {
        "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "People"
        ]
    },
    {
        "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Advice"
        ]
    },
    {
        "quote": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Life"
        ]
    },
    {
        "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Love"
        ]
    },
    {
        "quote": "Our lives begin to end the day we become silent about things that matter.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "People",
            "Life"
        ]
    },
    {
        "quote": "Injustice anywhere is a threat to justice everywhere.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Wisdom"
        ]
    },
    {
        "quote": "The time is always right to do what is right.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Life's most persistent and urgent question is, 'What are you doing for others?",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Life",
            "People"
        ]
    },
    {
        "quote": "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "I have not failed. I've just found 10,000 ways that won't work.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
]

let index=0;

function next(){
    if(index<=0){
        index=arr1.length-1;
}
else{
    index++;
}
display(index);
}
function prev(){
    if(index>=arr1.length-1){
        index=0;
    }
    else{
        index--;
    }
display(index);
}

function display(index){
    index=Math.floor(Math.random()*arr1.length);
    document.getElementById("quote").innerHTML=`"${arr1[index].quote}"`;
document.getElementById("author").innerHTML=`-${arr1[index].author} (${arr1[index].profession})`;
}
function showQuot(){

}
next();