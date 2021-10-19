let data = [
    {
        name: 'Matero',
        age: '30'
    },
    {
        name: 'Sarah',
        age: '32'
    },
    {
        name: 'Tim',
        age: '20'
    },
    {
        name: 'Sam',
        age: '22'
    },
    {
        name: 'John',
        age: '27'
    },
    {
        name: 'Joey',
        age: '34'
    }   
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');
