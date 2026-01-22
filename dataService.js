const catalog = [
    {
"title": "Still Sleepy Orange Juice",
"category": "beverage",
"price": 10.00,
"image": "orangejuice2.jpg",
"_id:":"1",
    },

       {
"title": "Not in the Moooood Milk",
"category": "beverage",
"price": 5.75,
"image": "milk.jpg",
"_id":"2",
    },

       {
"title": " I am in Love Chocolate Bar",
"category": "candy",
"price": 4.25,
"image": "choc2.jpg",
"_id:":"3",
    },

       {
"title": "I Hate Everyone Coffee Beans",
"category": "coffee",
"price": 12.00,
"image": "coffee3.jpg",
"_id:":"4"
    },

    {
 "title": "Monster's Ball Chocolate",
"category": "candy",
"price": 7.50,
"image": "choc3.jpg",
"_id:":"5"
    },

    {
 "title": "Nightmare Fuel Energy Drink",
"category": "beverage",
"price": 3.50,
"image": "energy.jpg",
"_id:":"6"
    },

    {
"title": "StarOcean Water",
"category": "beverage",
"price": 4.70,
"image": "waterbottle2.jpg",
"_id:":"7",
    },

    {
    "title": "Sleppyhead Coffee",
"category": "coffee",
"price": 15.20,
"image": "coffee4.jpg",
"_id:":"8"
    },

];

class DataService{
    getProducts()
{
    return catalog;
}
};

export default DataService;