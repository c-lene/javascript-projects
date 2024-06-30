let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
let nameInitials = function(getInitial) {
    let initials = getInitial.slice(0,1);
    return initials;
};

// and pass it to .map()
let firstInitials = names.map(nameInitials);

console.log(firstInitials);
