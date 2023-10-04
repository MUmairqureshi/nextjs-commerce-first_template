// 'use client';
// import { Button } from 'src/components/ui/button';
// import { Input } from 'src/components/ui/input';
// // import { Label } from "@/components/ui/label"
// // import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// // import  createShopifyCustomer  from '@/app/api/shopify/createShopifyCustomer'; // Replace with the actual path to your Shopify API function
// import axios from 'axios';
// import Link from 'next/link';
// import React, { useState } from 'react';

// interface FormData {
//   fname: string;
//   lname: string;
//   email: string;
//   password: string;
// }
// const Register: React.FC = () => {
//   const [formData, setFormData] = useState({
//     firstName: '', // Update to firstName
//     lastName: '', // Update to lastName
//     email: '',
//     password: ''
//   });
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [fname, setFName] = useState('');
//   const [lname, setLName] = useState('');
//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('register');
//     try {
//       axios
//         .post('/api/register', {
//           fname,
//           lname,
//           email,
//           password,
//           confirmPassword
//         })
//         .then((response) => {
//           if (response.data.status === 200) {
//             console.log('success', response.data.message);
//           } else {
//             console.log('err', response.data.message);
//           }
//         })
//         .catch((error) => {
//           console.log('err', error);
//         });
//     } catch (error) {
//       console.log('Error creating Shopify customer:', error);
//     }
//   };
//   return (
//     <div className="flex h-screen w-screen items-center justify-center bg-slate-100">
//       <div className="mb-4 flex w-full max-w-sm items-center justify-center gap-1.5 space-x-2 space-y-12 px-8 pb-8 pt-12 text-2xl font-semibold text-sky-950 sm:bg-white sm:shadow-xl">
//         <form
//           onSubmit={onSubmit}
//           className="w-full 	space-y-5 rounded-full border-sky-500 sm:w-[400px]"
//         >
//           <div className="mb-4 flex w-full max-w-sm items-center justify-center gap-1.5 space-x-2 text-2xl font-semibold text-sky-950 ">
//             <label>Create Account</label>
//           </div>
//           <div className="grid w-full max-w-sm items-center gap-1.5 border-sky-500	 text-slate-800">
//             <Input
//               value={fname}
//               onChange={(e) => setFName(e.target.value)}
//               type="fname"
//               placeholder="First Name"
//               id="fname"
//             />
//           </div>
//           <div className="grid w-full  max-w-sm items-center gap-1.5 border-sky-500	text-slate-800	">
//             <Input
//               onChange={(e) => setLName(e.target.value)}
//               type="lname"
//               placeholder="Last Name"
//               id="lname"
//             />
//           </div>
//           <div className="grid w-full max-w-sm items-center gap-1.5 border-sky-500	text-slate-800	">
//             <Input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Email"
//               id="email"
//             />
//           </div>
//           <div className="grid w-full max-w-sm items-center gap-1.5 border-sky-500	 text-slate-800	">
//             <Input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="Password"
//               id="password"
//             />
//           </div>
//           <div className="grid w-full max-w-sm items-center gap-1.5 border-sky-500	 text-slate-800	">
//             <Input
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               type="password"
//               placeholder="Confirm Password"
//               id="password"
//             />
//           </div>
//           <div className="grid  w-full max-w-sm items-center gap-1.5 text-slate-200 shadow-xl ">
//             <Button variant="default">Register</Button>
//           </div>
//           <div className="mb-4 flex w-full max-w-sm items-center justify-center gap-1.5 space-x-2 text-sm font-semibold text-sky-950 ">
//             <label>
//               Have an account?{' '}
//               <Link href="/login" className="text-indigo-500 hover:underline">
//                 Sign in
//               </Link>
//               {''}
//             </label>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
