import body from "../objects/body";

export default {
    name: 'blog',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Post Title',
            type: 'string'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // // will be ignored if slugify is set
                slugify: input => input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .slice(0, 200),
                isUnique: proposedSlug => true,
            },
        },
        
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            title: 'Featured Image',
            name: 'featuredImg',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
        },
        {
            title: 'Categories',
            name: 'categories',
            type: 'array',
            of: [
                {type: 'string'},
            ],
        },
        body
    ]
}