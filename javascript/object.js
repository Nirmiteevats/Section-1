const user = {
    name: 'raju',
    email: 'raju@mail.com',
    password: 'rajupinki123',
};

console.log(user.name);
console.log(user['email']);

user.address = 'Bangalore';
user.name = 'Raju rastogi';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand: 'Samsung',
    model: 'Galaxy S21',
    price: 150000,
    colors: ['Gray', 'White', 'Violet'],
};
console.log(smartphone);

smartphone.price = 140000;
console.log(smartphone);
console.log(smartphone.colors.at(-1));
console.log(smartphone.colors[1][0]);
// console.log(smartphone.colors[1][0][0]);
console.log(smartphone.colors[1][0] + 5);
// console.log(smartphone.colors[1]);

smartphone.colors.push('Black');
console.log(smartphone);

const phonelist = [
    {
        brand: 'Samsung',
        model: 'Galaxy S21',
        price: 150000,
        colors: ['Gray', 'White', 'Violet'],
    },
    {
        brand: 'Apple',
        model: 'iPhone 13',
        price: 120000,
        colors: ['Black', 'White']
    },
    {
        brand: 'OnePlus',
        model: 'OnePlus 9',
        price: 70000,
        colors: ['Blue', 'Black', 'Silver']
    },
    {
        brand: 'Google',
        model: 'Pixel 6',
        price: 80000,
        colors: ['Black', 'White']
    },
    {
        brand: 'Xiaomi',
        model: 'Mi 11',
        price: 60000,
        colors: ['Black', 'White', 'Blue']
    }
];
console.log(phonelist.length);

console.log(phonelist[2].price);

// create an array of all smartphone brands
const brands = phonelist.map((phone) => {
    return phone.brand;
});

console.log(brands);


// filter all the phones which have proce less than 50000
const cheapPhones = phonelist.filter((phone) => {
    return phone.price < 50000;
});

console.log(cheapPhones);
