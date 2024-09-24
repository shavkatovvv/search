// const url = "https://data-lesson-13.vercel.app/all"

// const input = document.querySelector(".input")
// const box = document.querySelector(".box");


// const render = async (value) => {
//     if(value.length > 2){
//         try {
//             const res = await fetch(`https://data-lesson-13.vercel.app/all?title_like=${value}`)
//             const data = await res.json()
    
//             box.innerHTML = data.map((item) => `
//             <li class="item">
//             <img class="rend_img" src="${item.img}" alt="">
//             <h1 class="title">${item.title}</h1>
//             </li>
            
//             `).join("")
//         } catch (error) {
            
//         }
//     }else{
//         box.innerHTML = ""
//     }
    
// }


// const useDebounce = () => {
//     let id;
//     return () => {
//       box.innerHTML = "<h1 class=load>жди молодой человек....</h1>";
//       clearTimeout(id);
//       id = setTimeout(() => {
//         render(input.value);
//       }, 1500);
//     };
//   };
  
//   const debounce = useDebounce();
  


// input.addEventListener("keyup", (e) => {
//     debounce(e.target.value)
// })



// let str = "NajotTalim";

// const st = () => {
//     let strt = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == str[i].toUpperCase()) {
//             strt += str[i].toLowerCase();
//         } else {
//             strt += str[i].toUpperCase()
//         }
//     }
//     return strt;
// }

// console.log(st()); 



