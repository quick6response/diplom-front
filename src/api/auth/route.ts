import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  // set a cookie named jwt with a value and some options
  cookies().set('jwt', 'some-token', {
    maxAge: 60 * 60 * 24, // one day in seconds
    httpOnly: true, // prevent client-side access
    sameSite: 'strict' // prevent cross-site requests
  });

  // read the cookie named jwt and log its value
  const jwt = cookies().get('jwt')?.value;
  console.log(jwt); // some-token

  // delete the cookie named jwt
  cookies().delete('jwt');

  // return a JSON response
  return Response.json({ message: 'Cookie demo' });
}
