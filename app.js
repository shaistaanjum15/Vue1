const app = Vue.createApp({
    //template:"<h2>I am template here</h2>"
    data(){
        return{
            showBooks:true,
            title:"The final empire",
            author:"Brandon Sanderson",
            age:45,
            x:0,
            y:0,

            url:"https://www.youtube.com",

            books:[
                {title:"Name of the Wind",author:"Patrick Rofuss",img:"assets/1.jpg",isFav:true},
                {title:"final empire",author:"Brandon Sanderson",img:"assets/2.jpg",isFav:false},
                {title:"way of Kings",author:"Brandon Sanderson",img:"assets/3.jpg",isFav:true},
            ]
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        changeTitle(title){
            this.title = title
        },
        handleEvents(e,data){
            console.log(e,e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        togglelistEvents(book){0
            book.isFav = !book.isFav
        },
        
    },
    //computed property is depended on data
    //filter is js function
    // computed:{
    //     filteredBooks(){
    //         return this.books.filter((book)=>book.isFav)
    //     }
    // }
})


app.mount("#app");