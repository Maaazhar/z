import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link"

type Blog = {
  userId: string
  id: string
  title: string
  body: string
}
type Comment = {
  postId: string
  id: string
  name: string
  email: string
  body: string
}

type Params = {
  
  params: {
    id: string
  }
}

const Post = async ({ params: { id } }: Params) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const blog: Blog = await data.json()

  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const comments = await res.json()

  const style = {
    "link": {
      textDecoration: "none",
      color: "inherit"
    }
  }

  return (
    <main>
      <Box style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <Link href="/" style={style.link}>home</Link>
      </Box>
      <Stack sx={{
        p: '2rem',
        gap:'1rem',
      }}>
        <Box sx={{
          p:'1rem',
          border: '1px solid #00000025',
        }}>
          <h5>{blog.id}</h5>
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
        </Box>
        <Stack sx={{
          p:'1rem',
          border: '1px solid #00000025',
        }}>
          <h4>Comments</h4>
          {comments.map((comment: Comment) => {
            if (comment.postId == id) {
              return (
                <Box key={comment.id} >
                  <h5>{comment.postId}</h5>
                  <h2>{comment.name}</h2>
                  <h4>{comment.email}</h4>
                  <p>{comment.body}</p>
                </Box>
              )
            }
          })}
        </Stack>
      </Stack>
    </main >
  )
}

export default Post