<template>
    <div class="main-page">
        <blog-form></blog-form>
        <blog-list></blog-list>
    </div>
</template>

<script>
    import BlogForm from './BlogForm'
    import BlogList from './BlogList'
    import Blog from './Blog'
    import blogService from '../blog-service'

    export default {
        name: 'main-page',
        components: { BlogForm, BlogList },
        data() {
            return {
                blogTitle: '',
                blogText: '',
                blogs: blogService.getBlogs(),
                lastUpdate: Date.now()
            }
        },
        methods: {
            addBlog() {
                blogService.addBlog(this.blogTitle, this.blogText)
                this.blogTitle = ''
                this.blogText = ''
            },
            updateData() {
                this.lastUpdate = Date.now()
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    /*li {
        display: inline-block;
        margin: 0 10px;
    }*/
    
    a {
        color: #42b983;
    }
</style>