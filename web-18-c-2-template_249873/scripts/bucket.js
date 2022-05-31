// On clicking remove button the item should be removed from DOM as well as localstorage.

let list_arr = JSON.parse(localStorage.getItem("coffee"))
console.log(list_arr)

displayData(list_arr)

function displayData(data){
    let bucket = document.getElementById('bucket')

    let sum = 0;

    data.forEach(function(ele, index){

        let div = document.createElement('div')

        let img = document.createElement('img')
        img.src = ele.image

        let p1 = document.createElement('p')
        p1.innerText = ele.title

        let p2 = document.createElement('p')
        p2.innerText = ele.price;
        sum += ele.price

        let btn = document.createElement('button')
        btn.innerText = 'Remove'
        btn.id = 'remove_coffee';
        btn.addEventListener('click', function(){
                deleteItem(ele, index)
        })

        div.append(img, p1, p2, btn)
        bucket.append(div)
    })

    let total_amount = document.getElementById('total_amount')
    total_amount.innerHTML = sum;
    console.log(sum)
}

function deleteItem(ele, index){

    list_arr.splice(index, 1);
    localStorage.setItem('coffee', JSON.stringify(list_arr))
    window.location.reload()
   
}

