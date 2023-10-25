import db from "@/lib/db";
import FoodItem from "@/models/FoodItem";



export async function GET(req) {
    await db.connect()

    try {
        const foodItems = await FoodItem.find({})
        return new Response(JSON.stringify(foodItems), { status: 200 })
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
        const newFood = await FoodItem.create(body)
        return new Response(JSON.stringify(newFood), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}