import axios from 'axios';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
const API_KEY = '0756f5ede6c1006be1dbd89ac711a756';
const API_ACCESS_TOKEN = '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';
const STORE_URL = 'https://panaverse-template.myshopify.com';
const JWT_Secret_Key =
  'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IlRhbGFsIiwiZXhwIjoxNjk2MTkyMTg3LCJpYXQiOjE2OTYxOTIxODd9.h2TGrorcJ8Heo3RxsWclSqv7dK8RrXE4dPagn7mEJGA';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email, password } = data;

  try {
    if (!email || !password) {
      throw new Error('Please fill all fields');
    }

    const response = await axios.get(`${STORE_URL}/admin/api/2021-10/customers.json`, {
      auth: {
        username: API_KEY,
        password: API_ACCESS_TOKEN
      }
    });
    if (response.status === 200) {
      console.log('User Login Successfully');
      const customers_data = response.data.customers;
      const res = customers_data.filter((e: any, i: any) => {
        if (e.email == email) {
          return e;
        }
      });
      if (res.length > 0) {
        console.log('user Found', res[0].email);
        const token = jwt.sign(
          {
            _id: res[0].id,
            email: res[0].email,
            firstName: res[0].first_name,
            lastName: res[0].last_name
          },
          JWT_Secret_Key,
          { expiresIn: '1h' }
        );
        return NextResponse.json({
          status: 200,
          token: token,
          message: 'Successfully Logged In'
        });
      } else {
        return NextResponse.json({
          status: 400,
          message: 'Wrong Email or Password'
        });
      }
    } else {
      console.error(`Failed to Login Shopify customer: ${response.statusText}`);
      return NextResponse.json({
        status: response.status,
        message: 'Login Failed'
      });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      if (response) {
        if (response.status === 401) {
          console.error('Error in Shopify login:', response.data);
          return NextResponse.json({
            status: 401,
            message: 'Invalid email or password'
          });
        } else {
          console.error('Error in Shopify login:', response.statusText);
          return NextResponse.json({
            status: response.status,
            message: 'An unexpected error occurred'
          });
        }
      }
    }
    // @ts-ignore
    console.error('Error in Shopify login:', error.message);
    return NextResponse.json({
      status: 500,
      message: 'An unexpected error occurred'
    });
  }
}
