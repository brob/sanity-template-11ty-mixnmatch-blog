
module.exports = function(config) {
    config.addPassthroughCopy("style.css");

    config.addCollection('posts', collection => {
        return collection.getFilteredByTag('post').reverse();
    });
}