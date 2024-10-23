import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { log } from "console";
import Link from "next/link";

type Blog = {
  userId: string
  id: string
  title: string
  body: string
}

export default async function Home() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const blogs = await data.json()

  const style = {
    "link": {
      textDecoration: "none",
      color: "inherit"
    }
  }

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <Link href="/" style={style.link}>home</Link>
      </Box>
      <Stack sx={{
        maxWidth: '85rem',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '1rem',
        mx: '1rem',
        my: '1rem',
      }}>
        {blogs.map((blog: Blog) => (
          <Card key={blog.id} sx={{
            width: { xs: '90vw', sm: '20rem' },
            height: { xs: 'auto', sm: '14rem' },
            borderRadius: '10px',
            boxShadow: 'none',
            border: '1px solid #00000025',
            color: '#000000dd',
            transition: "all 0.3s ease-in-out",
            '&:hover': {
              border: '1px solid #00000035',
              boxShadow: '0px 0px 20px #00000065',
              color: '#000000',
            }
          }}>
            <CardContent sx={{
              position: 'relative',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <Typography
                sx={{
                  width: '100%',
                  pb: '0.625rem',
                  color: 'inherit',
                  fontSize: '18px',
                  fontWeight: '600',
                  textTransform: "capitalize",
                  transition: "all 0.3s ease-in-out",
                  overflow: 'hidden',
                }}>
                {blog.title.length > 50
                  ? blog.title.slice(0, 50).toLowerCase() + "..."
                  : blog.title.toLowerCase()}
              </Typography>
              <Typography
                sx={{
                  width: '100%',
                  color: 'inherit',
                  fontSize: '15px',
                  transition: "all 0.3s ease-in-out",
                  overflow: 'hidden',
                }}>
                {blog.body.slice(0, 100)}...
              </Typography>

              <Link href={`posts/${blog.id}`}
                style={style.link}>
                <Typography
                  sx={{
                    marginTop: '0.5rem',
                    padding: '5px 10px',
                    border: '1px solid #00000020',
                    borderRadius: '5px',
                    boxShadow: '0px 1px 0px 1px #00000050',
                    fontSize: '15px',
                    fontWeight: '500',
                    transition: "all 0.3s ease-in-out",
                    '&:hover': {
                      color: '#ddd',
                      background: '#444',
                      boxShadow: 'none',
                    }
                  }}>
                  Full blog
                </Typography>
              </Link>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </main>
  );
}
