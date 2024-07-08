function searchcountry(){
    let searchvalue = document.getElementById("countryname").value;

    let name = document.getElementById("name")
    let flag = document.getElementById("flag")
    let capital = document.getElementById("capital")


    fetch(`https://restcountries.com/v3.1/name/${searchvalue}`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(obj=>{
            console.log(obj);
            name.innerText = obj.name.common;
            flag.innerHTML = `<img class="rounded-5 shadow" src = "${obj.flags.png}" >`
            capital.innerHTML = obj.capital.Array[0];
        })
    })
}

// let res = fetch("https://restcountries.com/v3.1/all")
// .then(res=>res.json())
//  .then(data=>{
//     let tblCountries = document.getElementById("tbl");

//     let tblBody=`<tr>
//                     <th class="table-light">Name</th>
//                     <th class="table-light">Flag</th>
//                 </tr>`
//     data.forEach(element => {
//         console.log(element)
//         tblBody+=`<tr>
//                     <td>${element.name.common}</td>
//                     <td>${element.flag}</td>
//                 </tr>`
//     });
//     tblCountries.innerHTML = tblBody;
//  })