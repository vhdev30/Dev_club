

const list1= [ 
    {name:"rodolfo", vip: true},
    {name: "Maria", vip: false},
    {name:"João", vip: false},
    {name: "Bruno", vip: true},
    {name: "Carla", vip: true},
    {name: "Ana", vip: false},
    {name:"Julio", vip: true},
];

const list2 = list1.map (camarote =>  {
    const list2 = {
        name:camarote.name,
        vip: camarote.vip,
        setor: camarote.vip ? "black" : "green"
        
    }
    
    return list2
}) 
console.log(list1) 
console.log(list2)
// informar so seotr caso  for verdadeiro a opção de vip

//{ name: 'rodolfo', vip: true, setor: 'black' },
//{ name: 'Maria', vip: false, setor: 'green' },
//{ name: 'João', vip: false, setor: 'green' },
//{ name: 'Bruno', vip: true, setor: 'black' },
//{ name: 'Carla', vip: true, setor: 'black' },
//{ name: 'Ana', vip: false, setor: 'green' },
//{ name: 'Julio', vip: true, setor: 'black' }