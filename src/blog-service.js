let blogs = {
    1:{
        id: 1,
        title: 'Mr blog',
        textArea: 'Some text'
    },
    2:{
        id: 2,
        title: 'Bacon Ipsum',
        textArea: 'Bacon ipsum dolor amet hamburger short loin pork ball tip prosciutto chicken bacon landjaeger biltong jowl ground round turducken. Swine kevin porchetta jerky fatback cow pancetta shank flank meatball ribeye tenderloin sausage. Ham kevin tenderloin meatball flank strip steak tri-tip ribeye capicola pastrami t-bone beef andouille corned beef chuck. Chuck rump pork, bacon frankfurter chicken shank porchetta boudin hamburger tri-tip pancetta. T-bone biltong leberkas brisket filet mignon cupim pork loin sirloin swine pancetta pork chop sausage jerky meatloaf boudin. Flank turkey shank andouille picanha jowl, pork chop alcatra ball'
    }
}

let nextId = 3

let blogService = {
    getBlog(index) {
        let blog = blogs[index]
        return blog || { title: "Blog not found" }
    },
    getBlogs() {
        return blogs
    },
    addBlog(blogName, blogText) {
        blogs[nextId] = { title: blogName, id: nextId, textArea: blogText}
        nextId++
    },
    removeBlog(index) {
        delete blogs[index]
    }
    ,
    editBlog(index, blogTitle, blogText) {
        let blog = blogs[index]

        if(blogTitle)
        blog.title = blogTitle;

        if(blogText)
        blog.textArea = blogText;

    }
}

export default blogService