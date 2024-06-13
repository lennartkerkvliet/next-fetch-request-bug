
import { NextResponse } from 'next/server';



export async function POST(request: Request) {
    const { information } = await request.json()
    console.log(request)
    
    if (information == "test123") {
        return NextResponse.json({ message: "correct" })
    } else {
        return NextResponse.json({ message: "NO!" }, { status: 500 })
    }    
}
  