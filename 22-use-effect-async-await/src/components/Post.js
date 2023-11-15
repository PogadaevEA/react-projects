import './Post.css'
function Post(props) {
  const { id, userId, title, body } = props
  return (
    <div className="post">
      <small>{id}</small>
      <h1>{title}</h1>
      <h3>{body}</h3>
      <h3>{userId}</h3>
    </div>
  )
}

export default Post
