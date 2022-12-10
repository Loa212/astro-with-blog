export default function () {
  return import.meta.env.API_URL || "http://localhost:3000";
}
