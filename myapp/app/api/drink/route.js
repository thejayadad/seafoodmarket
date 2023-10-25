import db from "@/lib/db";
import Drinks from "@/models/Drinks";

export async function GET(req) {
    await db.connect()

    try {
        const drinkItems = await Drinks.find({})
        return new Response(JSON.stringify(drinkItems), { status: 200 })
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
        const newdrink = await Drinks.create(body)
        return new Response(JSON.stringify(newdrink), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}