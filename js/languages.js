let langs = document.querySelector("langs"),
    link = document.querySelectorAll("a"),
    title = document.querySelector(".headerTitle");

link.forEach(el => {
    el.addEventListener("click", ()=> {
        langs.querySelector(".active").classList.remove("active")
        el.classList.add("active");

        let attr = el.getAttribute("language")

        title.textContent = data[attr].title
    })
})

let data = {
    uzbek: {
        title: "UMRA safari biz bilan yanada yaqin"
    },
    russian:{
        title: "Поездка УМРА ближе с нами"
    },
    english:{
        title: "UMRA trip is closer with us"
    }
}