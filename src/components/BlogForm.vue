<template>
    <div class="blog-form">
        <form @submit.prevent="addBlog">
            <input type="text" v-model="blogTitle" required>
            <textarea rows="4" cols="50" v-model="blogText" required> </textarea>
            <button>New Blog</button>
        </form>
    </div>
</template>

<script>
    import Blog from './Blog'
    import blogService from '../blog-service'

    export default {
        name: 'blog-list',
        data() {
            return {
                blogTitle: '',
                blogText: '',
                blogs: blogService.getBlogs(),
            }
        },
        methods: {
            addBlog() {
                blogService.addBlog(this.blogTitle, this.blogText)
                this.$parent.updateData();
                this.blogTitle = ''
                this.blogText = ''
            }
        }
    }

</script>