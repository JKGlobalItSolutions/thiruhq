import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Ensure data directory exists
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// POST /api/enquiry - Receive customer enquiry
app.post("/api/enquiry", (req, res) => {
  try {
    const {
      fullName,
      mobileNumber,
      email,
      city,
      insuranceType,
      companyName,
      message,
      submittedAt,
      source,
    } = req.body;

    // Validate required fields
    if (!fullName || !mobileNumber || !email || !city || !insuranceType || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Prepare enquiry data
    const enquiry = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      fullName,
      mobileNumber,
      email,
      city,
      insuranceType,
      companyName: companyName || null,
      message,
      submittedAt: submittedAt || new Date().toISOString(),
      source: source || "Get Quote Modal",
      status: "new",
      createdAt: new Date().toISOString(),
    };

    // Save to JSON file for persistence
    const enquiriesPath = path.join(dataDir, "enquiries.json");
    let enquiries = [];
    if (fs.existsSync(enquiriesPath)) {
      const fileContent = fs.readFileSync(enquiriesPath, "utf-8");
      try {
        enquiries = JSON.parse(fileContent);
      } catch {
        enquiries = [];
      }
    }
    enquiries.push(enquiry);
    fs.writeFileSync(enquiriesPath, JSON.stringify(enquiries, null, 2), "utf-8");

    // Also log to console
    console.log("=== NEW ENQUIRY ===");
    console.log(`Name: ${enquiry.fullName}`);
    console.log(`Mobile: ${enquiry.mobileNumber}`);
    console.log(`Email: ${enquiry.email}`);
    console.log(`City: ${enquiry.city}`);
    console.log(`Insurance Type: ${enquiry.insuranceType}`);
    console.log(`Company: ${enquiry.companyName || "N/A"}`);
    console.log(`Message: ${enquiry.message}`);
    console.log(`Time: ${enquiry.submittedAt}`);
    console.log("===================");

    // Return success
    return res.status(201).json({
      success: true,
      message:
        "Thank you for your enquiry! Our Customer Care Executive will contact you shortly to understand your requirements and provide the best insurance quotation.",
      enquiryId: enquiry.id,
    });
  } catch (error) {
    console.error("Error processing enquiry:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
});

// GET /api/enquiries - List all enquiries (for admin/review)
app.get("/api/enquiries", (req, res) => {
  try {
    const enquiriesPath = path.join(dataDir, "enquiries.json");
    if (!fs.existsSync(enquiriesPath)) {
      return res.json({ success: true, enquiries: [] });
    }
    const fileContent = fs.readFileSync(enquiriesPath, "utf-8");
    const enquiries = JSON.parse(fileContent);
    return res.json({ success: true, enquiries });
  } catch (error) {
    console.error("Error reading enquiries:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to read enquiries",
    });
  }
});

app.listen(PORT, () => {
  console.log(`ThiruHQ Enquiry Server running on http://localhost:${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/enquiry`);
});