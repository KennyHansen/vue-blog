<template>
     <ul>
        <li v-for="blog in blogs">
            <router-link :to="'' + blog.id">{{blog.id}}: {{blog.title}}</router-link>
        </li>
    </ul>
</template>

<script>
    import Blog from './Blog'
    import blogService from '../blog-service'

    export default {
        name: 'blog-list',
        data() {
            return {
                blogTitle: '',
                blogText: ''   
            }
        },
        methods: {
            addBlog() {
                blogService.addBlog(this.blogTitle, this.blogText)
                this.blogTitle = ''
                this.blogText = ''
            }
        },
        computed: {
            blogs: function() {
                this.$parent.lastUpdate;
                return blogService.getBlogs()
            }
        }
    }

</script>