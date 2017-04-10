<template>
    <div class="blog">
        <router-link to="/">Back</router-link>
        <h2>{{blog.title}}</h2>
        <p>{{blog.textArea}}</p>


        <form v-if="blog.id" @submit.prevent="removeBlog">
            <button>Delete</button>
        </form>

        <form v-if="blog.id" @submit.prevent="editBlog">
            <input type="text" v-model="blogTitle">
            <textarea rows="4" cols="50" v-model="blogText"></textarea>
            <button>Edit</button>
        </form>
    </div>
</template>

<script>
    import blogService from '../blog-service'
    export default {
        name: 'main-page',
        // components: { Blog },
        data() {
            return {
                blogTitle: '',
                blogText: '',
                blog: blogService.getBlog(this.$route.params.id)
            }
        },
        methods: {
            removeBlog() {
                blogService.removeBlog(this.$route.params.id)
            },
            editBlog() {
                blogService.editBlog(this.$route.params.id, this.blogTitle, this.blogText)
            }
        }
    }

</script>