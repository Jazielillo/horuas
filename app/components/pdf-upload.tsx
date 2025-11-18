"use client";

import { useState } from "react";

export default function UploadPDF() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("id_escuela", "1"); // <-- tú lo ajustas
    formData.append("id_grupo", "1"); // <-- tú lo ajustas

    setLoading(true);
    const res = await fetch("/api/alumnos/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setLoading(false);
    setResult(data);
  }

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleUpload} />
      {loading && <p>Procesando...</p>}
      {result && (
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
