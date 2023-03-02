

const list1= [ 
    {name:"rodolfo", vip: true},
    {name: "Maria", vip: false},
    {name:"João", vip: false},
    {name: "Bruno", vip: true},
    {name: "Carla", vip: true},
    {name: "Ana", vip: false},
    {name:"Julio", vip: true},
];

const C = list1.filter ( festa => {
return festa.vip

})
console.log(C)