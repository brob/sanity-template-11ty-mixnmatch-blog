export default {
    type: 'array',
    name:'body',
    title: 'Body',
    of: [
        {
            type: 'block',
            marks: {
                decorators: [
                    {title: 'Strong', value: 'strong'},
                    {title: 'Emphasis', value: 'em'},
                    {title: 'Code', value: 'code'}
                ],
            }
        },
        {type: 'code', title: 'code'}
    ]
    
}