import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: false }); // Desative SSL para conexões locais

export async function GET() {
  try {
    // Testa a conexão com o banco de dados executando uma consulta simples
    const result = await sql`SELECT NOW() AS current_time`;

    return new Response(
      JSON.stringify({ success: true, currentTime: result[0].current_time }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Database connection error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to connect to database",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
