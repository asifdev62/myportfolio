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
const GREEN_SOFT = "#f2f8f1";
const DARK = "#111827";
const BODY = "#374151";
const MUTED = "#6b7280";
const RULE = "#d1d5db";
const HAIRLINE = "#e5e7eb";

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 46, bottom: 46, left: 54, right: 54 },
  info: {
    Title: "Asif Ali - Resume",
    Author: "Asif Ali",
    Subject: "Full-Stack Web Developer Resume",
  },
});

doc.pipe(createWriteStream(outPath));

const LEFT = doc.page.margins.left;
const contentWidth =
  doc.page.width - doc.page.margins.left - doc.page.margins.right;

function paragraph(text, options = {}) {
  const { bold, size, color, lineGap, x, width, ...textOptions } = options;

  doc
    .font(bold ? "Helvetica-Bold" : "Helvetica")
    .fontSize(size ?? 9.8)
    .fillColor(color ?? BODY)
    .text(text, x ?? LEFT, doc.y, {
      width: width ?? contentWidth,
      lineGap: lineGap ?? 2,
      ...textOptions,
    });
}

/** Numbered section header with the accent rule, drawn without continued text. */
function sectionTitle(index, title) {
  doc.moveDown(0.7);

  const y = doc.y;
  doc
    .font("Helvetica-Bold")
    .fontSize(8.5)
    .fillColor("#9ca3af")
    .text(index, LEFT, y, { lineBreak: false, characterSpacing: 0.6 });
  doc
    .fontSize(10)
    .fillColor(GREEN)
    .text(title.toUpperCase(), LEFT + 20, y, {
      lineBreak: false,
      characterSpacing: 0.9,
    });

  doc.y = y + 13;
  doc
    .moveTo(LEFT, doc.y)
    .lineTo(LEFT + contentWidth, doc.y)
    .lineWidth(0.6)
    .strokeColor(RULE)
    .stroke();
  doc.y += 9;
}

/** Light panel with a green left bar, painted behind a section's content. */
function drawPanel(startY, bottom, options = {}) {
  doc.save();
  doc
    .roundedRect(LEFT, startY, contentWidth, bottom - startY, 7)
    .fillColor(options.background ?? GREEN_SOFT)
    .fill();
  doc
    .rect(LEFT, startY, 3, bottom - startY)
    .fillColor(options.bar ?? GREEN)
    .fill();
  doc.restore();
}

/** Section panel: measures the text first, paints the panel, then the text. */
function paneledSection(index, title, text, options = {}) {
  sectionTitle(index, title);

  const textX = LEFT + 12;
  const textWidth = contentWidth - 24;
  const fontSize = options.size ?? 9.8;

  doc.font("Helvetica").fontSize(fontSize);
  const textHeight = doc.heightOfString(text, {
    width: textWidth,
    lineGap: options.lineGap ?? 2.4,
  });

  const startY = doc.y;
  const bottom = startY + textHeight + 20;
  drawPanel(startY, bottom, options.panel);

  doc
    .font("Helvetica")
    .fontSize(fontSize)
    .fillColor(options.color ?? BODY)
    .text(text, textX, startY + 10, {
      width: textWidth,
      lineGap: options.lineGap ?? 2.4,
    });

  doc.y = bottom;
}

/** Clickable link row built from explicit rectangles (reliable in every viewer). */
function linkRow(links) {
  const y = doc.y;
  let x = LEFT;

  links.forEach((link, index) => {
    if (index > 0) {
      const separator = "   •   ";
      doc.font("Helvetica").fontSize(9).fillColor(MUTED);
      doc.text(separator, x, y, { lineBreak: false });
      x += doc.widthOfString(separator);
    }

    doc
      .font("Helvetica-Bold")
      .fontSize(9.2)
      .fillColor(index === 0 ? GREEN : DARK);

    const width = doc.widthOfString(link.label);
    doc.text(link.label, x, y, { underline: true, lineBreak: false });
    doc.link(x, y - 1, width, doc.currentLineHeight() + 2, link.url);
    x += width;
  });

  doc.y = y + doc.currentLineHeight() + 2;
}

/** A link label placed inline (used in the header). */
function inlineLink(label, x, y, url, color = GREEN) {
  doc.font("Helvetica").fontSize(8.8).fillColor(color);
  const width = doc.widthOfString(label);
  doc.text(label, x, y, { lineBreak: false, underline: true });
  doc.link(x, y - 1, width, doc.currentLineHeight() + 2, url);
  return x + width;
}

// ---------------------------------------------------------------------------
// Header (circular photo + identity + contact)
// ---------------------------------------------------------------------------
const photoSize = 62;
const headerY = doc.page.margins.top;
const photoCenterX = LEFT + photoSize / 2;
const photoCenterY = headerY + photoSize / 2;

doc.save();
doc.circle(photoCenterX, photoCenterY, photoSize / 2).clip();
doc.image(photoPath, LEFT, headerY, { width: photoSize });
doc.restore();
doc
  .circle(photoCenterX, photoCenterY, photoSize / 2)
  .lineWidth(1.4)
  .strokeColor(GREEN)
  .stroke();

const textX = LEFT + photoSize + 18;
const textWidth = contentWidth - photoSize - 18;

doc
  .font("Times-Bold")
  .fontSize(26)
  .fillColor(DARK)
  .text("Asif Ali", textX, headerY + 1, { width: textWidth });

doc
  .font("Helvetica-Bold")
  .fontSize(8.8)
  .fillColor(GREEN)
  .text("FULL-STACK WEB DEVELOPER", textX, doc.y + 2, {
    width: textWidth,
    characterSpacing: 1.1,
  });

doc
  .font("Helvetica")
  .fontSize(8.8)
  .fillColor(MUTED)
  .text(
    "asif62n@gmail.com  •  01823059188  •  Mirpur, Dhaka, Bangladesh",
    textX,
    doc.y + 4,
    { width: textWidth },
  );

const linksY = doc.y + 2;
let linkX = textX;
linkX = inlineLink(
  "linkedin.com/in/asifali62",
  linkX,
  linksY,
  "https://www.linkedin.com/in/asifali62",
);
doc.font("Helvetica").fontSize(8.8).fillColor(MUTED);
doc.text("   •   ", linkX, linksY, { lineBreak: false });
linkX += doc.widthOfString("   •   ");
inlineLink("github.com/asifdev62", linkX, linksY, "https://github.com/asifdev62");

doc.y = Math.max(doc.y, headerY + photoSize + 8);
doc
  .moveTo(LEFT, doc.y)
  .lineTo(LEFT + contentWidth, doc.y)
  .lineWidth(0.8)
  .strokeColor(RULE)
  .stroke();
doc.y += 4;

// ---------------------------------------------------------------------------
// Professional summary
// ---------------------------------------------------------------------------
paneledSection(
  "01",
  "Professional Summary",
  "Full-Stack Web Developer passionate about building modern, responsive, and user-focused web applications. Experienced in working with JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, API integration, and authentication. Focused on writing clean, maintainable code and continuously improving development skills through practical projects.",
);

// ---------------------------------------------------------------------------
// Technical skills
// ---------------------------------------------------------------------------
sectionTitle("02", "Technical Skills");
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
  const y = doc.y;
  doc.rect(LEFT + 1, y + 4, 3, 3).fillColor(GREEN).fill();

  doc
    .font("Helvetica-Bold")
    .fontSize(9.2)
    .fillColor(DARK)
    .text(`${label}: `, LEFT + 9, y, { lineBreak: false });

  const labelWidth = doc.widthOfString(`${label}: `);
  doc
    .font("Helvetica")
    .fontSize(9.2)
    .fillColor(BODY)
    .text(value, LEFT + 9 + labelWidth, y, {
      width: contentWidth - 9 - labelWidth,
      lineGap: 1.6,
    });
  doc.moveDown(0.12);
}

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
sectionTitle("03", "Education");

const educationText =
  "My studies focus on the fundamentals of software engineering — programming, data structures, algorithms, and databases — which I apply directly in the full-stack web applications I build.";
const educationTextWidth = contentWidth - 24;

doc.font("Times-Bold").fontSize(12.5);
const degreeHeight = doc.heightOfString(
  "Bachelor of Science in Computer Science and Engineering",
  { width: educationTextWidth },
);
doc.font("Helvetica-Bold").fontSize(8);
const universityHeight = doc.heightOfString(
  "BSC IN CSE  ·  ASIAN UNIVERSITY OF BANGLADESH",
  { width: educationTextWidth, characterSpacing: 0.7 },
);
doc.font("Helvetica").fontSize(9.4);
const descriptionHeight = doc.heightOfString(educationText, {
  width: educationTextWidth,
  lineGap: 2,
});

const educationY = doc.y;
const educationBottom =
  educationY +
  10 +
  degreeHeight +
  3 +
  universityHeight +
  5 +
  descriptionHeight +
  10;
drawPanel(educationY, educationBottom);

doc
  .font("Times-Bold")
  .fontSize(12.5)
  .fillColor(DARK)
  .text(
    "Bachelor of Science in Computer Science and Engineering",
    LEFT + 12,
    educationY + 10,
    { width: educationTextWidth },
  );

doc
  .font("Helvetica-Bold")
  .fontSize(8)
  .fillColor(GREEN)
  .text(
    "BSC IN CSE  ·  ASIAN UNIVERSITY OF BANGLADESH",
    LEFT + 12,
    educationY + 10 + degreeHeight + 3,
    { width: educationTextWidth, characterSpacing: 0.7 },
  );

doc
  .font("Helvetica")
  .fontSize(9.4)
  .fillColor(MUTED)
  .text(
    educationText,
    LEFT + 12,
    educationY + 10 + degreeHeight + 3 + universityHeight + 5,
    { width: educationTextWidth, lineGap: 2 },
  );

doc.y = educationBottom;

// ---------------------------------------------------------------------------
// Selected projects (latest first, clickable links)
// ---------------------------------------------------------------------------
sectionTitle("04", "Selected Projects");

const latestNames = new Set(["Wanderlust", "Bazar Dor", "Bangla News 24"]);

const selectedProjects = [
  {
    name: "Wanderlust",
    description:
      "Full-stack travel platform to explore destinations by category, add new places, and manage travel bookings through an authenticated account.",
    live: "https://wanderlust-gamma-pink.vercel.app/",
    repo: "https://github.com/asifdev62/Wanderlust",
    backend: "https://github.com/asifdev62/wanderlust-server",
    tech: "Next.js · React · TypeScript · Tailwind CSS · Express.js · MongoDB · Better Auth",
  },
  {
    name: "Bazar Dor",
    description:
      "Bengali market-price web app to explore everyday product prices, browse by category, and compare price changes over time.",
    live: "https://bazar-dor-psi-olive.vercel.app/",
    repo: "https://github.com/asifdev62/bazar-dor.git",
    tech: "Next.js · React · TypeScript · Tailwind CSS · REST API",
  },
  {
    name: "Bangla News 24",
    description:
      "Bengali news platform to browse articles by category with authenticated user accounts and profiles.",
    live: "https://bangla-news24-kappa.vercel.app/",
    repo: "https://github.com/asifdev62/banglaNews24.git",
    tech: "Next.js · React · TypeScript · Tailwind CSS · MongoDB · Better Auth",
  },
  {
    name: "FitLog",
    description:
      "Workout planner to build a daily plan of up to five workouts, save routines for later, and track completion.",
    live: "https://fitlog-black-two.vercel.app/",
    repo: "https://github.com/asifdev62/FitLog-in-Next.js.git",
    tech: "Next.js · TypeScript · Tailwind CSS · React Context · localStorage",
  },
  {
    name: "Book Vibe",
    description:
      "Book discovery app to explore titles, read details and reviews, and organise reading lists and wishlists.",
    live: "https://bookvibe-sigma.vercel.app/",
    repo: "https://github.com/asifdev62/Book-Vibe-in-Next.js.git",
    tech: "Next.js · TypeScript · Tailwind CSS · DaisyUI · Recharts",
  },
];

selectedProjects.forEach((project, index) => {
  if (index > 0) {
    doc.y += 6;
    doc
      .moveTo(LEFT, doc.y)
      .lineTo(LEFT + contentWidth, doc.y)
      .lineWidth(0.4)
      .strokeColor(HAIRLINE)
      .stroke();
    doc.y += 10;
  }

  const nameY = doc.y;
  doc
    .font("Helvetica-Bold")
    .fontSize(10.8)
    .fillColor(DARK)
    .text(project.name, LEFT, nameY, { lineBreak: false });

  if (latestNames.has(project.name)) {
    const nameWidth = doc.widthOfString(project.name);
    doc
      .font("Helvetica-Bold")
      .fontSize(7)
      .fillColor(GREEN)
      .text("LATEST", LEFT + nameWidth + 6, nameY + 2, {
        lineBreak: false,
        characterSpacing: 0.8,
      });
  }

  doc.y = nameY + 13;
  paragraph(project.description, { size: 9.5, lineGap: 2 });
  paragraph(project.tech, { size: 8.6, color: MUTED });

  linkRow(
    [
      { label: "Live demo", url: project.live },
      { label: "Code", url: project.repo },
      project.backend ? { label: "Backend", url: project.backend } : null,
    ].filter(Boolean),
  );
});

doc.end();

await new Promise((resolve, reject) => {
  doc.on("end", resolve);
  doc.on("error", reject);
});

console.log(`Resume written to ${outPath}`);
