import { PORT } from "./config";
import app from "./core/app";

app.listen(PORT, () =>
  console.log("Your app is running on http://localhost:%d", PORT)
)
