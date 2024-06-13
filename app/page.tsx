

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const body = JSON.stringify({ information: "test123" })
  const url = "http://127.0.0.1:3000/api"
  const options: RequestInit = { 
    method: "POST", 
    headers: { "Content-Type": "application/json" },
    body: body
}

  async function normalAction() {
    "use server"

    // this will include the body in the request
    await fetch(url, options)
  }

  async function brokenAction() {
    "use server"
    
    // this will *not* include the body in the request
    await fetch(new Request(url, options))
  }

  return (
    <div>
      <form action={normalAction}>
        <button type="submit">Normal fetch</button>
      </form>

      <form action={brokenAction}>
        <button type="submit">Fetch with Request object</button>
      </form>
    </div>
  );
}
