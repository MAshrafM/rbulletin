// Get posts from wordpress
// Using Torrent Freak
export const fetchPosts = () =>
  fetch('https://torrentfreak.com/wp-json/wp/v2/posts').then(data =>
    data.json()
  )
