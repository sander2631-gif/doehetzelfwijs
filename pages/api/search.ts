import type { NextApiRequest, NextApiResponse } from "next";
import { projects } from "@/data/projects";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const q = (req.query.q as string || "").toLowerCase();
  const result = projects.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.steps.some(s => s.toLowerCase().includes(q))
  );
  res.status(200).json({ query: q, count: result.length, projects: result });
}
