(function(){

var app = angular.module('store', []);
app.controller('StoreController', function(){
this.products = gems;
});

var gems = [
    
    {
    name: "Sala de Juntas grande",
    price: 2.65,
    description: 'Ideal para 20 pesonas',
    canPurchase: true,
    images: [{
        full: 'salaGrande.jpg'
    }],
    reviews: [{
        stars: 5,
        body: "Gran sala, muy util",
        autor: "Manuel Gopar",
    }],
},
{
    name: "Sala de Juntas mediana",
    price: 3.40,
    description: "Ideal para 10 personas",
    canPurchase: true,
    images: [{
        full: "salaChica.jpg"
    }],
    reviews: [{
        stars: 5,
        body: "Me gusto mucho la sala, ideal para 6 personas",
        autor: "Juan Perez",
    }],
}
];
})();