import {
  Activity,
  BadgeIndianRupee,
  BarChart3,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  Cloud,
  FileCheck2,
  FileText,
  Fingerprint,
  Gauge,
  HardHat,
  Layers3,
  LockKeyhole,
  LucideIcon,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Smartphone,
  Truck,
  Users,
  Warehouse,
  Wrench
} from "lucide-react";

export const site = {
  name: "Build Nest",
  tagline: "Manage • Build • Deliver",
  url: "https://buildnestonline.in",
  appUrl: "https://buildnest.fixlab.co.in/",
  developer: "SYSGO LLP",
  managedBy: "Fixlab",
  email: "hello@buildnestonline.in",
  supportEmail: "support@buildnestonline.in",
  salesEmail: "sales@buildnestonline.in",
  phone: "0476 2081156",
  whatsappNumber: "8075815183",
  whatsappCountryCode: "91",
  address: "SYSGO LLP, Technopark Back Gate side, Trivandrum, 695581",
  offices: [
    {
      name: "SYSGO LLP",
      address: "Technopark Back Gate side, Trivandrum, 695581"
    },
    {
      name: "FIXLAB",
      address: "2nd floor, Federal Bank Building, Vallikavu, Kollam, 690525"
    }
  ]
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/mobile-application", label: "Mobile" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" }
];

export const trustBadges = [
  "Multi-Tenant SaaS",
  "Cloud Hosted",
  "Mobile Ready",
  "WhatsApp Login",
  "Role Based Access",
  "Enterprise Security",
  "Real Time Reporting",
  "Construction Focused"
];

export const whyBuildNest = [
  ["One Platform", "Unify project, procurement, workforce, billing, assets, reports and leadership visibility in one operating system."],
  ["Construction Specific", "Built around real site workflows, approvals, materials, DPRs, contractors, equipment and cost controls."],
  ["WhatsApp Authentication", "Let teams sign in quickly with familiar mobile-first OTP flows that reduce onboarding friction."],
  ["Multi Tenant Architecture", "Run multiple companies, branches or client workspaces with clean tenant separation and governance."],
  ["Mobile First Operations", "Give engineers, supervisors and managers practical tools for site updates, attendance and requests."],
  ["Complete ERP Integration", "Connect operational data to expenses, billing, stock, purchase orders and profitability reporting."],
  ["Attendance + Workforce", "Track site presence, shifts, accountability and daily manpower movement with stronger controls."],
  ["Procurement + Billing", "Move from material requests to purchase orders, GRN, invoices, GST documents and collections."],
  ["Asset Management", "Monitor machinery, rentals, damage, assignments, utilization and logistics from a single register."],
  ["Advanced Reporting", "Turn live project activity into DPRs, cost reports, attendance analytics and executive dashboards."]
];

export type FeatureModule = {
  slug: string;
  title: string;
  icon: LucideIcon;
  screenshot: string;
  overview: string;
  benefits: string[];
  keyFeatures: string[];
  useCases: string[];
};

export const featureModules: FeatureModule[] = [
  {
    slug: "dashboard",
    title: "Dashboard",
    icon: Gauge,
    screenshot: "/screenshots/dashboard.png",
    overview: "Executive dashboards bring project, finance, workforce and procurement signals into one leadership view.",
    benefits: ["Executive KPIs", "Progress Monitoring", "Financial Visibility", "Operational Health"],
    keyFeatures: ["Portfolio summary", "Project status tiles", "Cost and billing snapshots", "Alerts and pending approvals"],
    useCases: ["Daily review meetings", "Promoter reporting", "Cost control reviews"]
  },
  {
    slug: "project-management",
    title: "Project Management",
    icon: Building2,
    screenshot: "/screenshots/projects.png",
    overview: "Plan, monitor and control every project from kickoff to handover with structured budgets and status controls.",
    benefits: ["Project Lifecycle", "Budget Control", "Timeline Tracking", "Status Management"],
    keyFeatures: ["Project register", "Milestones", "Budgets", "Status workflows"],
    useCases: ["Residential projects", "Commercial construction", "Infrastructure packages"]
  },
  {
    slug: "task-management",
    title: "Task Management",
    icon: ClipboardCheck,
    screenshot: "/screenshots/tasks.png",
    overview: "Convert project plans into clear work packages, responsibilities, schedules and measurable progress.",
    benefits: ["WBS", "Work Packages", "Assignment", "Scheduling", "Progress Tracking"],
    keyFeatures: ["Task boards", "Owners and due dates", "Priority controls", "Completion evidence"],
    useCases: ["Site execution", "Quality follow-ups", "Management action lists"]
  },
  {
    slug: "user-management",
    title: "User Management",
    icon: Users,
    screenshot: "/screenshots/users.png",
    overview: "Control user access with WhatsApp OTP login, role-based permissions and employee-level governance.",
    benefits: ["WhatsApp OTP Login", "Role Management", "Permission Matrix", "Employee Access Control"],
    keyFeatures: ["User directory", "Role templates", "Permission groups", "Access logs"],
    useCases: ["Department access", "Vendor portals", "Supervisor onboarding"]
  },
  {
    slug: "attendance",
    title: "Attendance",
    icon: CalendarCheck,
    screenshot: "/screenshots/attendance.png",
    overview: "Capture site attendance with mobile-first check-in, check-out, location validation and workforce reports.",
    benefits: ["GPS Attendance", "Geofencing", "Site Check-in", "Site Check-out"],
    keyFeatures: ["Location capture", "Shift logs", "Attendance reports", "Exception tracking"],
    useCases: ["Labour accountability", "Supervisor attendance", "Payroll inputs"]
  },
  {
    slug: "materials",
    title: "Materials",
    icon: Warehouse,
    screenshot: "/screenshots/materials.png",
    overview: "Maintain a clean material register, monitor stock, handle requests and record returns across sites.",
    benefits: ["Material Register", "Stock Control", "Request Workflow", "Return Workflow"],
    keyFeatures: ["Stock ledger", "Issue and return flows", "Material requests", "Low-stock alerts"],
    useCases: ["Site stores", "Material reconciliation", "Consumption tracking"]
  },
  {
    slug: "procurement",
    title: "Procurement",
    icon: PackageCheck,
    screenshot: "/screenshots/procurement.png",
    overview: "Standardize vendor sourcing, RFQs, quote comparisons, purchase orders and goods receipt tracking.",
    benefits: ["Vendor Management", "RFQ", "Quotation Comparison", "Purchase Orders", "GRN"],
    keyFeatures: ["Vendor list", "RFQ pipeline", "PO approvals", "GRN records"],
    useCases: ["Rate comparison", "Central procurement", "Site purchase approvals"]
  },
  {
    slug: "erp-operations",
    title: "ERP Operations",
    icon: Layers3,
    screenshot: "/screenshots/erp.png",
    overview: "Connect operational execution with expense controls, contractor work, labour tracking and profitability.",
    benefits: ["Expense Management", "Labour Tracking", "Contractor Management", "Profitability Analysis"],
    keyFeatures: ["Expense approvals", "Labour records", "Contractor ledgers", "Profit views"],
    useCases: ["Cost reviews", "Contractor payments", "Project profitability"]
  },
  {
    slug: "billing",
    title: "Billing",
    icon: BadgeIndianRupee,
    screenshot: "/screenshots/billing.png",
    overview: "Create professional quotations, invoices, GST documents, PDFs and collection follow-ups.",
    benefits: ["Invoices", "Quotations", "GST", "PDF Generation", "Collections"],
    keyFeatures: ["Invoice builder", "GST fields", "PDF exports", "Payment status"],
    useCases: ["Client billing", "Progress claims", "Collection tracking"]
  },
  {
    slug: "subcontractors",
    title: "Subcontractors",
    icon: HardHat,
    screenshot: "/screenshots/subcontractors.png",
    overview: "Manage subcontractor work orders, contracts, progress, payment tracking and performance visibility.",
    benefits: ["Work Orders", "Contracts", "Payment Tracking", "Progress Monitoring"],
    keyFeatures: ["Work order register", "Contract terms", "Progress records", "Payment ledger"],
    useCases: ["MEP packages", "Civil labour contracts", "Interior scopes"]
  },
  {
    slug: "transport",
    title: "Transport",
    icon: Truck,
    screenshot: "/screenshots/transport.png",
    overview: "Coordinate fleet, trips, drivers and logistics movement connected to construction operations.",
    benefits: ["Fleet Management", "Trip Management", "Driver Management", "Logistics Tracking"],
    keyFeatures: ["Vehicle register", "Trip sheets", "Driver profiles", "Route notes"],
    useCases: ["Material movement", "Equipment transport", "Site logistics"]
  },
  {
    slug: "assets",
    title: "Assets",
    icon: Wrench,
    screenshot: "/screenshots/assets.png",
    overview: "Track machinery, equipment, rentals, damage, assignments and maintenance readiness.",
    benefits: ["Machinery Tracking", "Equipment Management", "Rentals", "Damage Tracking"],
    keyFeatures: ["Asset register", "Rental logs", "Damage reports", "Assignment history"],
    useCases: ["Equipment utilization", "Rental billing", "Maintenance planning"]
  },
  {
    slug: "reports",
    title: "Reports",
    icon: BarChart3,
    screenshot: "/screenshots/reports.png",
    overview: "Generate DPR, cost, attendance, procurement and profitability reports from live operational data.",
    benefits: ["DPR Reports", "Cost Reports", "Attendance Reports", "Procurement Reports", "Profitability Reports"],
    keyFeatures: ["Report library", "Filters", "Exports", "Management summaries"],
    useCases: ["Daily progress reporting", "Monthly reviews", "Investor updates"]
  },
  {
    slug: "documents",
    title: "Documents",
    icon: FileText,
    screenshot: "/screenshots/documents.png",
    overview: "Keep drawings, stage plans, revisions and controlled distribution organized by project and team.",
    benefits: ["Drawings", "Stage Plans", "Revisions", "Controlled Distribution"],
    keyFeatures: ["Document folders", "Revision notes", "Access control", "Distribution history"],
    useCases: ["Drawing control", "Plan sharing", "Site documentation"]
  },
  {
    slug: "settings",
    title: "Settings",
    icon: ShieldCheck,
    screenshot: "/screenshots/settings.png",
    overview: "Configure company profile, GST details, security, integrations and subscription preferences.",
    benefits: ["Company Setup", "GST Configuration", "Security", "Integrations", "Subscription Management"],
    keyFeatures: ["Company profile", "Tax settings", "Security controls", "Subscription view"],
    useCases: ["Account setup", "Compliance configuration", "Admin governance"]
  }
];

export const industryList = [
  "Construction Companies",
  "Builders",
  "Infrastructure",
  "Road Projects",
  "MEP Contractors",
  "Interior Contractors",
  "Government Projects",
  "Industrial Projects",
  "Real Estate Developers",
  "Facility Management",
  "Smart Cities"
];

export const benefitList = [
  "Reduce paperwork by 90%",
  "Improve project visibility",
  "Increase workforce accountability",
  "Reduce project delays",
  "Improve procurement efficiency",
  "Better cost control",
  "Faster billing cycle",
  "Higher profitability"
];

export const pricingTiers = [
  {
    name: "Free",
    price: "Free",
    suffix: "forever",
    description: "Explore essential Build Nest workflows before choosing a paid plan.",
    features: ["Core Access", "Demo Workspace", "Mobile Access", "Reports", "WhatsApp Enquiry Support"]
  },
  {
    name: "Starter",
    price: "₹199",
    suffix: "/month",
    description: "For small teams starting with essential construction control.",
    features: ["Starter Access", "Projects", "Attendance", "Tasks", "Reports"]
  },
  {
    name: "Professional",
    price: "₹499",
    suffix: "/month",
    description: "For teams that need complete modules and stronger reporting.",
    features: ["Professional Access", "All Modules", "Advanced Reports", "Priority Support", "Mobile App"],
    highlighted: true
  },
  {
    name: "Custom",
    price: "Custom",
    suffix: "pricing",
    description: "For large, multi-branch, white-label or dedicated infrastructure needs.",
    features: ["Unlimited Users", "Unlimited Projects", "White Label", "Dedicated Server", "Custom Integrations", "Dedicated Support"]
  }
];

export const securityItems = [
  ["Tenant Isolation", "Every workspace is logically separated so company data remains private and governed."],
  ["Encryption", "Sensitive traffic and application data are designed around secure encrypted handling."],
  ["Secure Authentication", "WhatsApp OTP and controlled access flows reduce password friction and improve adoption."],
  ["Role Permissions", "Granular permission design helps teams expose only the modules each role needs."],
  ["Backups", "Operational continuity planning includes backup-ready architecture and recovery workflows."],
  ["Audit Logs", "Important actions can be traced for accountability, review and compliance readiness."],
  ["Data Ownership", "Customers retain ownership of their construction, workforce, project and commercial data."],
  ["Compliance Readiness", "The platform is structured to support enterprise review, governance and policy controls."]
];

export const faqs = [
  ["What is Build Nest?", "Build Nest is a construction management SaaS platform for managing projects, tasks, workforce, materials, procurement, billing, assets, subcontractors and reports."],
  ["Who developed Build Nest?", "Build Nest is developed by SYSGO LLP and managed by Fixlab."],
  ["Is Build Nest suitable for Indian construction companies?", "Yes. The product is designed for Indian builders, contractors, EPC teams, site supervisors and construction companies with workflows such as GST billing, WhatsApp login and site attendance."],
  ["How much does Build Nest cost?", "Build Nest offers a free plan, Starter at ₹199 per month, Professional at ₹499 per month, and custom pricing for larger requirements."],
  ["Can I request a demo?", "Yes. You can request a product demo from the contact page or any Request Demo button on the website."],
  ["Is there a free plan?", "Yes. Build Nest offers a free plan so teams can evaluate essential workflows before choosing a paid plan."],
  ["Does Build Nest support multiple projects?", "Yes. Depending on the plan, teams can manage starter, professional or custom project requirements."],
  ["Does Build Nest have role-based access?", "Yes. Admins can configure roles and permissions for managers, engineers, supervisors, accounts teams and other users."],
  ["How does WhatsApp login work?", "Build Nest supports WhatsApp OTP-based access flows so field teams can sign in with a familiar mobile channel."],
  ["Can site attendance be tracked?", "Yes. Attendance includes GPS attendance, geofencing concepts, site check-in and check-out workflows."],
  ["Does attendance work for labour and staff?", "Yes. It can support employee, supervisor and workforce accountability use cases depending on configuration."],
  ["Can Build Nest manage materials?", "Yes. Build Nest includes material registers, stock control, request workflows and return workflows."],
  ["Does Build Nest include procurement?", "Yes. Procurement includes vendors, RFQs, quotation comparison, purchase orders and GRN tracking."],
  ["Can I generate invoices?", "Yes. Billing supports quotations, invoices, GST fields, PDF generation and collection tracking."],
  ["Does Build Nest support subcontractors?", "Yes. It includes work orders, contracts, payment tracking and progress monitoring for subcontractors."],
  ["Can assets and equipment be tracked?", "Yes. Asset management covers machinery, equipment, rentals, assignments and damage tracking."],
  ["Does Build Nest include transport management?", "Yes. Transport features include fleet records, trip management, driver management and logistics tracking."],
  ["What reports are available?", "Reports include DPR, cost, attendance, procurement and profitability reporting."],
  ["Can I export reports?", "The reporting architecture supports management summaries and export-ready workflows."],
  ["Does Build Nest have mobile apps?", "Yes. The mobile application experience is designed for site engineers, supervisors and management teams."],
  ["What can users do on mobile?", "Mobile users can update attendance, tasks, material requests, project updates, reports and notifications."],
  ["Is Build Nest cloud hosted?", "Yes. Build Nest is positioned as a cloud-hosted, multi-tenant SaaS platform."],
  ["Is tenant data isolated?", "Yes. Tenant isolation is part of the platform security model."],
  ["Who owns the data?", "Customers own their project, workforce, commercial and operational data."],
  ["Does Build Nest support backups?", "The platform architecture includes backup-ready operational practices."],
  ["Can Build Nest integrate with other tools?", "Custom plans can support integrations based on technical and business requirements."],
  ["How fast can Build Nest be deployed?", "Deployment depends on company size and configuration, but the product is designed for fast SaaS onboarding."],
  ["Is training available?", "Dedicated support and onboarding can be provided, especially for Professional and Custom plans."],
  ["Can government contractors use it?", "Yes. Government contractors can use Build Nest for projects, documentation, procurement, billing and reporting workflows."],
  ["How do I contact sales?", "Use the contact page, schedule meeting CTA, WhatsApp enquiry or lead form to reach the Build Nest team."]
];

export const seoKeywords = [
  "construction management software india",
  "construction erp software",
  "project management software for construction",
  "construction attendance software",
  "construction billing software",
  "construction saas",
  "builder software india",
  "site management software",
  "contractor management software"
];

export const routeMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Build Nest | Construction Management Software India",
    description: "Build Nest is a construction management SaaS platform for projects, workforce, procurement, billing, assets and reporting."
  },
  "/features": {
    title: "Build Nest Features | Construction ERP Modules",
    description: "Explore Build Nest modules for dashboards, projects, tasks, attendance, materials, procurement, billing, reports and more."
  },
  "/mobile-application": {
    title: "Build Nest Mobile App | Site Engineer & Supervisor App",
    description: "Mobile-first construction operations for attendance, task updates, material requests, reports and notifications."
  },
  "/industries": {
    title: "Construction Industries Served by Build Nest",
    description: "Build Nest supports builders, contractors, infrastructure, MEP, interiors, real estate and government projects."
  },
  "/benefits": {
    title: "Benefits of Build Nest Construction SaaS",
    description: "Reduce paperwork, improve project visibility, control costs, speed billing and improve construction profitability."
  },
  "/pricing": {
    title: "Build Nest Pricing | Construction Management SaaS Plans",
    description: "Compare Build Nest's Free, Starter, Professional and Custom pricing plans."
  },
  "/about-us": {
    title: "About Build Nest | Developed by SYSGO LLP",
    description: "Build Nest is a modern construction operating system developed by SYSGO LLP and managed by Fixlab."
  },
  "/security": {
    title: "Build Nest Security | Tenant Isolation & Role Permissions",
    description: "Learn about Build Nest tenant isolation, encryption, secure authentication, backups, audit logs and data ownership."
  },
  "/contact": {
    title: "Contact Build Nest | Request Demo & Sales Enquiry",
    description: "Contact Build Nest for demo requests, WhatsApp enquiries, sales questions and implementation discussions."
  },
  "/privacy-policy": {
    title: "Build Nest Privacy Policy",
    description: "Read the Build Nest privacy policy covering data collection, usage, security, retention, user rights and contact details."
  },
  "/terms-and-conditions": {
    title: "Build Nest Terms and Conditions",
    description: "Read the BuildNest terms and conditions for platform use, subscriptions, payments, acceptable use, data ownership and legal terms."
  },
  "/refund-policy": {
    title: "Build Nest Refund and Cancellation Policy",
    description: "Read the BuildNest refund and cancellation policy covering subscription payments, cancellations, duplicate payments, failed transactions and refund timelines."
  },
  "/cookie-policy": {
    title: "Build Nest Cookie Policy",
    description: "Read the BuildNest cookie policy covering essential cookies, analytics, security, third-party services and cookie controls."
  },
  "/data-retention-policy": {
    title: "Build Nest Data Retention Policy",
    description: "Read the BuildNest data retention policy covering storage, backups, deletion requests, legal holds, retention periods and data security."
  },
  "/security-policy": {
    title: "Build Nest Security Policy",
    description: "Read the BuildNest security policy covering access controls, customer data protection, monitoring, incident response and vulnerability reporting."
  },
  "/faq": {
    title: "Build Nest FAQ | Pricing, Security, Mobile Apps & Support",
    description: "Answers to common questions about Build Nest construction software pricing, security, attendance, billing and deployment."
  },
  "/blog": {
    title: "Build Nest Blog | Construction Technology & ERP",
    description: "Construction technology insights on ERP, project management, procurement, site operations and digital transformation."
  }
};

export const blogCategories = [
  "Construction Technology",
  "ERP",
  "Project Management",
  "Procurement",
  "Site Operations",
  "Digital Transformation",
  "Workforce Management"
];

export const workflow = ["Workspace", "Projects", "Tasks", "Materials", "Procurement", "Execution", "Billing", "Reports"];

export const appPersonas = [
  {
    title: "Site Engineer App",
    icon: HardHat,
    body: "Capture daily progress, task updates, material requests, photos, attendance and site observations."
  },
  {
    title: "Supervisor App",
    icon: MapPin,
    body: "Track workforce movement, check-ins, site assignments, work packages and execution bottlenecks."
  },
  {
    title: "Management App",
    icon: Activity,
    body: "Review KPIs, reports, approvals, costs, billing status and project health from anywhere."
  }
];

export const footerColumns = [
  ["Product", "Features", "Pricing", "Mobile App", "Security"],
  ["Resources", "Blog", "FAQ", "Whitepaper", "Product Tour"],
  ["Company", "About Us", "Contact", "Request Demo", "Schedule Meeting"]
];
