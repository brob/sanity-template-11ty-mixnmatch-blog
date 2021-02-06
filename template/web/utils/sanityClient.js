const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: "<#< sanity.projectId >#>",
    dataset: "<#< sanity.dataset >#>",
    useCdn: true // `false` if you want to ensure fresh data
})
