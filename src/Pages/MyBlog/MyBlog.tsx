import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

export default function MyBlog() {
  return (
    <div className='p-5'>
      <CreatePost />
      <PostList />
    </div>
  )
}
