import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent calls itself autonomous, then waits for a go-ahead on a task the user already approved twice.";

// Gate: 1–140 chars, not only whitespace.
if (line.length < 1 || line.length > 140 || line.trim().length === 0) {
  throw new Error(`gate failed: entry is ${line.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
