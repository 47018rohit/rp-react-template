import React from "react";
import { Button } from "./components/button";
import { Card } from "./components/card";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card>
        <h1 className="text-2xl font-semibold mb-4">
          Welcome to your Vite + React + TS + Tailwind app
        </h1>
        <p className="mb-6 text-sm text-slate-600">
          This template includes a minimal set of shadcn-style components.
        </p>
        <div className="flex gap-2">
          <Button onClick={() => alert("Clicked!")}>Primary</Button>
          <Button variant="ghost" onClick={() => alert("Ghost")}>
            Ghost
          </Button>
        </div>
      </Card>
    </div>
  );
}
