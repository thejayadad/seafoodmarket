import db from "@/lib/db";
import Order from "@/models/Order";


export async function GET(req) {
    await db.connect()

    try {
        const orders = await Order.find({})
        return new Response(JSON.stringify(orders), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}