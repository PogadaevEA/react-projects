import { useState } from 'react'

function Login() {
  const [data, setData] = useState({ username: '', password: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(data)
    alert(JSON.stringify(data))
  }

  function handleInputChange(text, name) {
    setData({ ...data, [name]: text })
  }

  return (
    <>
      <h1>LoginForm</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(event) => handleInputChange(event.target.value, 'username')}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(event) => handleInputChange(event.target.value, 'password')}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
