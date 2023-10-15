import mysql from "mysql2";

var connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

export async function POST(request, context) {
  const { userName } = await request.json();

  const result = await connection.execute(
    `update test.user set name = '${userName}' where id = 1`
  );

  return Response.json({ now: Date.now() });
}
