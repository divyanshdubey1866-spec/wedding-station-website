import { NextResponse } from 'next/server';

export async function POST(req: Request){
  try{
    const body = await req.json();
    // For now we simply echo back — in a real site you'd store or email this
    return NextResponse.json({ok:true, received: body}, {status:200});
  }catch(err){
    return NextResponse.json({ok:false, error: 'Invalid request'}, {status:400});
  }
}
