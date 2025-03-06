let input= document.getElementById('input-pokemons')
let btn = document.querySelector('.btn')
let typeTxt = document.getElementById('type1')
let id = document.getElementById('id')
let name = document.getElementById('name')
let img = document .getElementById('img')


btn.addEventListener('click', () =>{

//async é para dizer que ela é asincrona, ou seja ele só vai te fazer uma promessa

const requestAPI = async (pokemon) =>{
    //fetch se comunica com a api trazendo informações/ o await ele espera todas essas informações
    let url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    //json faz com que o js entenda o que tem
    const leitura = await url.json()
    if(url.status == 200){
        console.log(leitura)
        console.log('tudo certinho')
    }else{
        alert('tente novamente')
    }
    return leitura
}
requestAPI(input.value)

const typePoke  = async (pokemon) =>{
    let consumo = await requestAPI(pokemon)
   
    typeTxt.innerHTML = consumo['types']['0']['type']['name']

    id.innerHTML = `#0${consumo.id}`

    name.innerHTML = consumo.name
    img.src = consumo['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

       if ( consumo['types']['0']['type']['name'] =='electric' ){
        typeTxt.style.backgroundColor = '#F8D030'
       }else if (consumo['types']['0']['type']['name'] =='water' ){
        typeTxt.style.backgroundColor = '#6890F0'
       }else if (consumo['types']['0']['type']['name'] =='grass' ){
        typeTxt.style.backgroundColor = '#78C850'
       }else if (consumo['types']['0']['type']['name'] =='fire' ){
        typeTxt.style.backgroundColor = '#F08030'
       }else if (consumo['types']['0']['type']['name'] =='poison' ){
        typeTxt.style.backgroundColor = '#A040A0'
       }else if (consumo['types']['0']['type']['name'] =='bug' ){
        typeTxt.style.backgroundColor = '#A8B820'
       }else if (consumo['types']['0']['type']['name'] =='psychc' ){
        typeTxt.style.backgroundColor = '#F85888'
       }else if (consumo['types']['0']['type']['name'] =='dark' ){
        typeTxt.style.backgroundColor = '#705848'
       }else if (consumo['types']['0']['type']['name'] =='fighting' ){
        typeTxt.style.backgroundColor = '#C03028'
       }else if (consumo['types']['0']['type']['name'] =='normal' ){
        typeTxt.style.backgroundColor = '#A8A878'
       }else if (consumo['types']['0']['type']['name'] =='ice' ){
        typeTxt.style.backgroundColor = '#98D8D8'
       }
   
   
   
   }
   typePoke(input.value)
   
})

