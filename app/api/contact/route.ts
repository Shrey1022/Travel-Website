import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Create DB connection
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "", // default in XAMPP
      database: "contact_db",
    });

    // Insert data safely
    await db.execute(
      "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)",
      [name, email, subject, message]
    );

    await db.end();

    return NextResponse.json({ message: "✅ Message sent successfully!" });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "❌ Failed to send message" },
      { status: 500 }
    );
  }
}