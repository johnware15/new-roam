const conn = require('./conn');

const POSTS = {
  viewAllPosts: () => conn.query(`SELECT * FROM posts`),
  viewPostsById: (postId) => conn.query(`SELECT * FROM posts WHERE id = $1`, postId),
  viewPostsByCity: (cityId) => conn.query(`SELECT name, date_added, content FROM posts
    JOIN users ON users.id = posts.user_id
    JOIN cities ON cities.id = posts.city_id
    WHERE posts.id = city_id
    ORDER BY date_added
    `, cityId),
  viewPostsByUser: (userId) => conn.query(`SELECT name, avatar, date_added, content FROM posts
    JOIN users ON users.id = posts.user_id
    WHERE users.id = user_id
    ORDER BY date_added
    `, userId)
}

module.exports = {
  viewAllPosts: POSTS.viewAllPosts,
  viewPostsById: POSTS.viewPostsById,
  viewPostsByCity: POSTS.viewPostsByCity,
  viewPostsByUser: POSTS.viewPostsByUser
}
