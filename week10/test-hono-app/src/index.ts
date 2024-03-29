import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c: any, next: any) => {
  const body = await c.req.json()
  if (c.req.header("Authorization")) {
    //console.log(body);
    //console.log(c.req.query("param"));

    // auth validation

    await next()          // middleware
    console.log('will run after next middleware call')
  }
  else {
    return c.text('you do not have auth access')
  }
})

export default app
