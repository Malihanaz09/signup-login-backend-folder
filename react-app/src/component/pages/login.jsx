import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login() {

  // const[name, setName]= useState('')
  const[email, setEmail]= useState('')
  const[password, setPassword]= useState('')
  const navigate = useNavigate()
  const [message, setMessage] = useState('');

  const handleLogin = async(values)=>{
    // e.preventDefault();
    console.log("form submitted", values)
    const url = "http://localhost:5000/api/user/login";
    try{
    const result = await axios.post(url, {email: values.email , password: values.password})
    console.log(result);
    setMessage(result.data.message);
    navigate('/profile')
   }catch(err){ 
    console.log(err);
    setMessage('Error: ' + (err.response?.data?.message || 'Something went wrong'))
   }
  };
  return (
    <div>
      <h1>Login</h1>
  <Form
    onFinish = {handleLogin}
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    // onFinish={login}
    // onFinishFailed={onFinishFailed}
    // autoComplete="off"
  >
    {/* <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item> */}

    <Form.Item
      label="Email Address"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email address!',
        },
        // {
        //   pattern:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        //   message:"please enter correct email"
        // }
      ]}
    >
      <Input value={email}  
      onChange={(e)=> setEmail(e.target.value)} />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password 
      value={password}  
      onChange={(e)=> setPassword(e.target.value)} />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  {message && <p>{message}</p>}
  <div style={{display:"Flex" ,justifyContent:"Center"}}>
    Don`t have account? <Link to="/signup"> SignUp</Link>
  </div>

    </div>
  )
}

export default Login
