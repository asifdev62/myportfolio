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
  doc.moveDown(1);

  const y = doc.y;
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#9ca3af")
    .text(index, LEFT, y, { lineBreak: false, characterSpacing: 0.6 });
  doc
    .fontSize(10.8)
    .fillColor(GREEN)
    .text(title.toUpperCase(), LEFT + 21, y, {
      lineBreak: false,
      characterSpacing: 0.9,
    });

  doc.y = y + 14;
  doc
    .moveTo(LEFT, doc.y)
    .lineTo(LEFT + contentWidth, doc.y)
    .lineWidth(0.6)
    .strokeColor(RULE)
    .stroke();
  doc.y += 10;
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
  const fontSize = options.size ?? 10.2;

  doc.font("Helvetica").fontSize(fontSize);
  const textHeight = doc.heightOfString(text, {
    width: textWidth,
    lineGap: options.lineGap ?? 3,
  });

  const startY = doc.y;
  const bottom = startY + textHeight + 22;
  drawPanel(startY, bottom, options.panel);

  doc
    .font("Helvetica")
    .fontSize(fontSize)
    .fillColor(options.color ?? BODY)
    .text(text, textX, startY + 11, {
      width: textWidth,
      lineGap: options.lineGap ?? 3,
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
      doc.font("Helvetica").fontSize(9.4).fillColor(MUTED);
      doc.text(separator, x, y, { lineBreak: false });
      x += doc.widthOfString(separator);
    }

    doc
      .font("Helvetica-Bold")
      .fontSize(9.8)
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
  doc.font("Helvetica").fontSize(9).fillColor(color);
  const width = doc.widthOfString(label);
  doc.text(label, x, y, { lineBreak: false, underline: true });
  doc.link(x, y - 1, width, doc.currentLineHeight() + 2, url);
  return x + width;
}

/** Small footer pinned to the bottom margin of the page. */
function syncResumeFooter() {
  const ruleY = doc.page.height - doc.page.margins.bottom - 20;

  doc
    .moveTo(LEFT, ruleY)
    .lineTo(LEFT + contentWidth, ruleY)
    .lineWidth(0.4)
    .strokeColor(HAIRLINE)
    .stroke();

  doc
    .font("Helvetica")
    .fontSize(7.8)
    .fillColor(MUTED)
    .text(
      "Asif Ali  ·  Full-Stack Web Developer  ·  asif62n@gmail.com  ·  github.com/asifdev62",
      LEFT,
      ruleY + 5,
      { width: contentWidth, align: "center" },
    );
}

// ---------------------------------------------------------------------------
// Header (circular photo + identity + contact)
// ---------------------------------------------------------------------------
const photoSize = 66;
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
  .fontSize(28)
  .fillColor(DARK)
  .text("Asif Ali", textX, headerY + 1, { width: textWidth });

doc
  .font("Helvetica-Bold")
  .fontSize(9.2)
  .fillColor(GREEN)
  .text("FULL-STACK WEB DEVELOPER", textX, doc.y + 2, {
    width: textWidth,
    characterSpacing: 1.1,
  });

doc
  .font("Helvetica")
  .fontSize(9.1)
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
doc.font("Helvetica").fontSize(9).fillColor(MUTED);
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
  doc.rect(LEFT + 1, y + 4.5, 3.4, 3.4).fillColor(GREEN).fill();

  doc
    .font("Helvetica-Bold")
    .fontSize(9.8)
    .fillColor(DARK)
    .text(`${label}: `, LEFT + 10, y, { lineBreak: false });

  const labelWidth = doc.widthOfString(`${label}: `);
  doc
    .font("Helvetica")
    .fontSize(9.8)
    .fillColor(BODY)
    .text(value, LEFT + 10 + labelWidth, y, {
      width: contentWidth - 10 - labelWidth,
      lineGap: 2.2,
    });
  doc.moveDown(0.3);
}

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
sectionTitle("03", "Education");

const educationText =
  "My studies focus on the fundamentals of software engineering — programming, data structures, algorithms, and databases — which I apply directly in the full-stack web applications I build.";
const educationTextWidth = contentWidth - 24;

doc.font("Times-Bold").fontSize(13.5);
const degreeHeight = doc.heightOfString(
  "Bachelor of Science in Computer Science and Engineering",
  { width: educationTextWidth },
);
doc.font("Helvetica-Bold").fontSize(8.6);
const universityHeight = doc.heightOfString(
  "BSC IN CSE  ·  ASIAN UNIVERSITY OF BANGLADESH",
  { width: educationTextWidth, characterSpacing: 0.7 },
);
doc.font("Helvetica").fontSize(9.9);
const descriptionHeight = doc.heightOfString(educationText, {
  width: educationTextWidth,
  lineGap: 2.2,
});

const educationY = doc.y;
const educationBottom =
  educationY +
  11 +
  degreeHeight +
  4 +
  universityHeight +
  6 +
  descriptionHeight +
  11;
drawPanel(educationY, educationBottom);

doc
  .font("Times-Bold")
  .fontSize(13.5)
  .fillColor(DARK)
  .text(
    "Bachelor of Science in Computer Science and Engineering",
    LEFT + 12,
    educationY + 11,
    { width: educationTextWidth },
  );

doc
  .font("Helvetica-Bold")
  .fontSize(8.6)
  .fillColor(GREEN)
  .text(
    "BSC IN CSE  ·  ASIAN UNIVERSITY OF BANGLADESH",
    LEFT + 12,
    educationY + 11 + degreeHeight + 4,
    { width: educationTextWidth, characterSpacing: 0.7 },
  );

doc
  .font("Helvetica")
  .fontSize(9.9)
  .fillColor(MUTED)
  .text(
    educationText,
    LEFT + 12,
    educationY + 11 + degreeHeight + 4 + universityHeight + 6,
    { width: educationTextWidth, lineGap: 2.2 },
  );

doc.y = educationBottom;

// ---------------------------------------------------------------------------
// Selected projects (latest first, clickable links)
// ---------------------------------------------------------------------------
sectionTitle("04", "Selected Projects");

const selectedProjects = [
  {
    name: "BookNook",
    description:
      "Full-stack book platform to discover books, browse organised categories, and view details, with JWT authentication and proxy-protected routes.",
    live: "https://book-nook-ivory.vercel.app/",
    repo: "https://github.com/asifdev62/BookNook",
    backend: "https://github.com/asifdev62/BookNook-Server",
    tech: "Next.js · React · TypeScript · Tailwind CSS · Express.js · MongoDB · JWT",
  },
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
];

selectedProjects.forEach((project, index) => {
  if (index > 0) {
    doc.y += 10;
    doc
      .moveTo(LEFT, doc.y)
      .lineTo(LEFT + contentWidth, doc.y)
      .lineWidth(0.4)
      .strokeColor(HAIRLINE)
      .stroke();
    doc.y += 14;
  }

  const nameY = doc.y;
  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .fillColor(DARK)
    .text(project.name, LEFT, nameY, { lineBreak: false });

  doc.y = nameY + 15;
  paragraph(project.description, { size: 10.1, lineGap: 2.3 });
  paragraph(project.tech, { size: 9.1, color: MUTED });

  linkRow(
    [
      { label: "Live demo", url: project.live },
      { label: "Code", url: project.repo },
      project.backend ? { label: "Backend", url: project.backend } : null,
    ].filter(Boolean),
  );
});

syncResumeFooter();

doc.end();

await new Promise((resolve, reject) => {
  doc.on("end", resolve);
  doc.on("error", reject);
});

console.log(`Resume written to ${outPath}`);
