// Generates public/resume.pdf from verified information only.
// Run with: npm run resume
import PDFDocument from "pdfkit";
import { createWriteStream, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public");
mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "resume.pdf");
const photoPath = path.join(outDir, "my.png");

const GREEN = "#15803d";
const DARK = "#111827";
const BODY = "#374151";
const MUTED = "#6b7280";
const RULE = "#d1d5db";

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 50, bottom: 50, left: 55, right: 55 },
  info: {
    Title: "Asif Ali - Resume",
    Author: "Asif Ali",
    Subject: "Full-Stack Web Developer Resume",
  },
});

doc.pipe(createWriteStream(outPath));

const contentWidth =
  doc.page.width - doc.page.margins.left - doc.page.margins.right;

function sectionTitle(text) {
  doc.moveDown(0.9);
  doc
    .font("Helvetica-Bold")
    .fontSize(10.5)
    .fillColor(GREEN)
    .text(text.toUpperCase(), { characterSpacing: 0.6 });
  const y = doc.y + 3;
  doc
    .moveTo(doc.page.margins.left, y)
    .lineTo(doc.page.margins.left + contentWidth, y)
    .lineWidth(0.6)
    .strokeColor(RULE)
    .stroke();
  doc.moveDown(0.5);
}

function paragraph(text, options = {}) {
  doc
    .font(options.bold ? "Helvetica-Bold" : "Helvetica")
    .fontSize(options.size ?? 10)
    .fillColor(options.color ?? BODY)
    .text(text, { lineGap: 1.5, ...options });
}

// ---------------------------------------------------------------------------
// Header (circular photo + identity + contact)
// ---------------------------------------------------------------------------
const photoSize = 70;
const headerX = doc.page.margins.left;
const headerY = doc.page.margins.top;
const photoCenterX = headerX + photoSize / 2;
const photoCenterY = headerY + photoSize / 2;

doc.save();
doc.circle(photoCenterX, photoCenterY, photoSize / 2).clip();
doc.image(photoPath, headerX, headerY, { width: photoSize });
doc.restore();
doc
  .circle(photoCenterX, photoCenterY, photoSize / 2)
  .lineWidth(1.2)
  .strokeColor(GREEN)
  .stroke();

const textX = headerX + photoSize + 18;
const textWidth = contentWidth - photoSize - 18;

let headerTextY = headerY + 4;
doc
  .font("Helvetica-Bold")
  .fontSize(23)
  .fillColor(DARK)
  .text("Asif Ali", textX, headerTextY, { width: textWidth });
headerTextY = doc.y + 1;
doc
  .font("Helvetica")
  .fontSize(11.5)
  .fillColor(GREEN)
  .text("Full-Stack Web Developer", textX, headerTextY, { width: textWidth });
headerTextY = doc.y + 4;
doc
  .font("Helvetica")
  .fontSize(9)
  .fillColor(MUTED)
  .text(
    "asif62n@gmail.com  •  01823059188  •  Mirpur, Dhaka, Bangladesh",
    textX,
    headerTextY,
    { width: textWidth },
  );
headerTextY = doc.y + 1;
doc.text("linkedin.com/in/asifali62  •  github.com/asifdev62", textX, headerTextY, {
  width: textWidth,
});

// Continue below the photo regardless of how tall the text block is.
doc.y = Math.max(doc.y, headerY + photoSize + 8);

// ---------------------------------------------------------------------------
// Professional summary
// ---------------------------------------------------------------------------
sectionTitle("Professional Summary");
paragraph(
  "Full-Stack Web Developer passionate about building modern, responsive, and user-focused web applications. Experienced in working with JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, API integration, and authentication. Focused on writing clean, maintainable code and continuously improving development skills through practical projects.",
);

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
sectionTitle("Education");
paragraph(
  "Bachelor of Science in Computer Science and Engineering (BSc in CSE)",
  { bold: true, color: DARK },
);
paragraph("Asian University of Bangladesh", { color: BODY });

// ---------------------------------------------------------------------------
// Technical skills
// ---------------------------------------------------------------------------
sectionTitle("Technical Skills");
const skillGroups = [
  [
    "Frontend Development",
    "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS",
  ],
  [
    "Backend Development",
    "Node.js, Express.js, MongoDB, REST API Integration, Authentication",
  ],
  ["Tools & Workflow", "Git, GitHub, VS Code"],
  ["Other Skills", "Responsive Web Design, API Integration"],
];
for (const [label, value] of skillGroups) {
  doc.font("Helvetica-Bold").fontSize(10).fillColor(DARK).text(`${label}: `, {
    continued: true,
  });
  doc.font("Helvetica").fillColor(BODY).text(value, { lineGap: 1.5 });
}

// ---------------------------------------------------------------------------
// Selected projects
// ---------------------------------------------------------------------------
sectionTitle("Selected Projects");
const selectedProjects = [
  {
    name: "Bazar Dor",
    description:
      "Bengali market-price web app to explore everyday product prices, browse by category, and compare price changes over time.",
    live: "https://bazar-dor-psi-olive.vercel.app/",
    repo: "https://github.com/asifdev62/bazar-dor.git",
    tech: "Next.js, TypeScript, Tailwind CSS, REST API",
  },
  {
    name: "Bangla News 24",
    description:
      "Bengali news platform to browse articles by category with authenticated user accounts and profiles.",
    live: "https://bangla-news24-kappa.vercel.app/",
    repo: "https://github.com/asifdev62/banglaNews24.git",
    tech: "Next.js, TypeScript, Tailwind CSS, MongoDB, Better Auth",
  },
  {
    name: "FitLog",
    description:
      "Workout planner to build a daily plan of up to five workouts, save routines for later, and track completion.",
    live: "https://fitlog-black-two.vercel.app/",
    repo: "https://github.com/asifdev62/FitLog-in-Next.js.git",
    tech: "Next.js, TypeScript, Tailwind CSS, React Context, localStorage",
  },
  {
    name: "Book Vibe",
    description:
      "Book discovery app to explore titles, read details and reviews, and organise reading lists and wishlists.",
    live: "https://bookvibe-sigma.vercel.app/",
    repo: "https://github.com/asifdev62/Book-Vibe-in-Next.js.git",
    tech: "Next.js, TypeScript, Tailwind CSS, DaisyUI, Recharts",
  },
];

for (const project of selectedProjects) {
  paragraph(project.name, { bold: true, color: DARK, size: 10.5 });
  paragraph(project.description);
  paragraph(`Technologies: ${project.tech}`, { size: 9.5, color: MUTED });
  paragraph(`Live: ${project.live}`, { size: 9.5, color: MUTED });
  paragraph(`GitHub: ${project.repo}`, { size: 9.5, color: MUTED });
  doc.moveDown(0.35);
}

doc.end();

await new Promise((resolve, reject) => {
  doc.on("end", resolve);
  doc.on("error", reject);
});

console.log(`Resume written to ${outPath}`);
