import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const API_KEY = `0756f5ede6c1006be1dbd89ac711a756`;
const API_ACCESS_TOKEN = `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`;
const STORE_URL = `https://panaverse-template.myshopify.com`;

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { fname, lname, email, password, confirmPassword } = data;

  try {
    if (!fname || !lname || !email || !password || !confirmPassword) {
      throw new Error('Please fill all fields');
    }
    try {
      const response = await axios.post(
        `${STORE_URL}/admin/api/2021-10/customers.json`,
        {
          customer: {
            first_name: fname,
            last_name: lname,
            email: email,
            password: password,
            password_confirmation: confirmPassword
          }
        },
        {
          auth: {
            username: API_KEY,
            password: API_ACCESS_TOKEN
          }
        }
      );

      if (response.status === 201) {
        console.log('Customer created successfully');
        return NextResponse.json({
          status: 200,
          message: 'Customer Created successfully'
        });
      } else {
        console.error(`Failed to create Shopify customer: ${response.statusText}`);
        return NextResponse.json({
          status: 400,
          message: 'Registaation Failed'
        });
      }
    } catch (error) {
      // @ts-ignore
      return NextResponse.json({
        status: 400,
        message: (error as { response: { data: { errors: any } } }).response.data.errors
      });
      // console.error('Error creating Shopify customer:', error.response.data.errors);
      // throw error;
    }
    // const res=await createShopifyCustomer({ firstName: fname, lastName: lname, email, password });
    // console.log("helooo",res)
  } catch (err) {
    return NextResponse.json({
      status: 400,
      message: (err as { message: string }).message
    });
  }
}
