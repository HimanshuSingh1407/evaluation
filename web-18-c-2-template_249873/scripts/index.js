// Add the coffee to local storage with key "coffee"

//https://masai-mock-api.herokuapp.com/coffee/menu



async function getData(){
    let url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

    let res= await fetch(url);

    let data = await res.json();

    let data2 = data.menu.data

    append(data2)
   //console.log( data2)
}

getData();



function append(data2){
    let list = document.getElementById('menu')

    data2.forEach(function(ele){

        let div = document.createElement('div')

        let img = document.createElement('img')
        img.src = ele.image

        let p1 = document.createElement('p')
        p1.innerText = ele.title

        let p2 = document.createElement('p')
        p2.innerText = ele.price;

        let btn = document.createElement('button')
        btn.innerText = 'Add to Bucket'
        btn.id = 'add_to_bucket';
        btn.addEventListener('click', function(){
                addtobucket(ele)
        })

        div.append(img, p1, p2, btn)
        list.append(div)
        
    })
}

let list_arr = JSON.parse(localStorage.getItem("coffee")) || []
console.log(list_arr.length)

let coffee_count = document.getElementById('coffee_count')
coffee_count.innerHTML = list_arr.length



function addtobucket(ele){
    //console.log(ele)
    list_arr.push(ele)
    localStorage.setItem("coffee", JSON.stringify(list_arr));
    window.location.reload();
}

