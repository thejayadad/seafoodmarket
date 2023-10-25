import db from "@/lib/db";
import Sides from "@/models/Sides";


export async function GET(req) {
    await db.connect()

    try {
        const sideItems = await Sides.find({})
        return new Response(JSON.stringify(sideItems), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

export async function POST(req) {
    await db.connect()

    // const accessToken = req.headers.get("authorization")
    // const token = accessToken.split(' ')[1]

    // const decodedToken = verifyJwtToken(token)

    // if (!accessToken || !decodedToken) {
    //     return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    // }

    try {
        const body = await req.json()
        const newside = await Sides.create(body)
        return new Response(JSON.stringify(newside), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}