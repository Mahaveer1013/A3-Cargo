// // app/api/user/route.js
// import { userSchema } from '../../../lib/validation';
// import { createUserData } from '../../../services/userService';

// export async function POST(req) {
//   const { name, age } = await req.json();

//   // Validate data
//   const { error } = userSchema.validate({ name, age });
//   if (error) {
//     return new Response(JSON.stringify({ error: error.details[0].message }), {
//       status: 400,
//     });
//   }

//   const result = createUserData(name, age);
//   return new Response(JSON.stringify(result), { status: 201 });
// }


export async function POST(req) {
  const { name, age } = await req.json();

  console.log({name, age});
  

  // Validate data
  // const { error } = userSchema.validate({ name, age });
  // if (error) {
  //   return new Response(JSON.stringify({ name, age }), {
  //     status: 400,
  //   });
  // }

  // const result = createUserData(name, age);
  return new Response(JSON.stringify({name, age}), { status: 201 });
}
