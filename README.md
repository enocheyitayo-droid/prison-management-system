NCoS Prison Management System
Nigerian Correctional Service — Web-Based Records Managemen
Overview

The NCoS Prison Management System (PMS) is a fully offline, browser-based application for managing inmate records, staff assignments, visitor logs, and facility reporting at Nigerian correctional facilities. It was developed as part of an academic study on digitising prison administration in Nigeria, replacing manual paper-based record-keeping with a centralised, searchable digital system.

No installation, server, or internet connection is required. The entire system runs from a single HTML file.

Getting Started

 Requirements

- Any modern web browser: **Google Chrome**, **Microsoft Edge**, **Mozilla Firefox**, or **Safari**
- No internet connection needed after download
- No software installation

Running the System

1. Download `prison_management_system.html`
2. Double-click the file — it opens directly in your browser
3. Log in with the default credentials:

```
Email:    admin@ncos.gov.ng
Password: admin123
```

> You can change both the email and password from the **Settings** page after logging in.

---

Features

🏠 Dashboard
- Live summary stats: total inmates, awaiting trial count, convicted count, released count
- Security classification breakdown with visual progress bars (Minimum / Medium / Maximum)
- Recent activity feed showing logins, registrations, and deletions
- Quick-view table of the most recently registered inmates

👥 Inmates
- Full searchable and filterable inmate registry
- Filter by **name or ID**, **status** (Awaiting Trial / Convicted / Released), **security level**, and **gender**
- Click **👁️ View** on any row to open a detailed inmate profile showing all personal, case, custody, and next-of-kin information
- Click **✏️ Edit** inside the profile to pre-fill the registration form for updates
- Click **🗑️ Delete** to permanently remove a record (with confirmation prompt)

➕ Register New Inmate
Capture a full intake record including:

| Section | Fields |
|---|---|
| Personal | First name, last name, date of birth, gender, state of origin, nationality, home address |
| Case | Offense category, status, security classification, cell block, admission date, expected release date, court/case number, presiding judge, case description |
| Next of Kin | Name, relationship, phone number, address |

Each inmate is automatically assigned a unique ID in the format `NCS-001`, `NCS-002`, etc.

📋 Cases & Offenses
- Top offense categories displayed as summary stat cards
- Full case table with search and status filter
- Shows court number, admission date, and expected release for every inmate

🚪 Cell Blocks
- Real-time occupancy view for all five blocks: **Block A**, **Block B**, **Block C (Female)**, **Block D**, and **Remand Wing**
- Visual capacity bar with colour-coded status:
  - 🟢 Green — Normal capacity
  - 🟡 Amber — Near capacity (>85%)
  - 🔴 Red — Overcrowded (>100%)
- Lists up to three inmate names per block for quick reference

🛡️ Guard Management
- Full guard roster with name, rank, badge number, assigned block, shift, and duty status
- Filter by name or shift
- Add new guards via a modal form
- Remove guard records with a single click

👤 Visitor Logs
- Log every inmate visit with visitor name, national ID, relationship, purpose, date, time, and items brought
- Filter logs by visitor/inmate name or by date
- Linked to the inmate register — visitor modal shows a dropdown of all active (non-released) inmates

 📈 Reports
Six report types available:

| Report | Description |
|---|---|
| Inmate Population | Full census table of all registered inmates |
| Awaiting Trial | Lists all pre-trial detainees with court details |
| Release Schedule | Sorted by release date ascending |
| Security Classification | Grouped by Minimum / Medium / Maximum |
| Offense Breakdown | Visual bar chart of offense categories |
| Export to CSV | Downloads all inmate data as a `.csv` spreadsheet |

Every report has a **Print** button that opens a clean print-formatted version in a new tab.

### ⚙️ Settings
- Update facility name, location, capacity, and commanding officer
- Change admin name, email, and password
- Export all data to CSV
- Reset the entire database back to the default sample records

---
Dark Mode / Light Mode

The system defaults to **dark mode**. Use the **🌙 / ☀️ button** in the top-right corner of the topbar to toggle between dark and light mode at any time. Your preference is saved automatically and remembered the next time you open the file.

---

## Data Storage

All data is stored in your browser's **localStorage** — it persists between sessions without any database or server. This means:

- Data is saved automatically every time you register, edit, or delete a record
- Closing and reopening the browser will not erase your data
- Data is tied to the browser and device you are using
- Clearing your browser's site data will erase all records (use **Export to CSV** in Settings to back up first)

 Backing Up Your Data

Go to **Settings → Export All Data (CSV)** or **Reports → Export to CSV** to download a spreadsheet of all inmate records at any time.

### Resetting to Default Data

Go to **Settings → Reset to Default Data** to wipe all records and restore the nine sample inmates that come pre-loaded with the system. **This cannot be undone.**

Default Sample Records

The system ships with nine pre-loaded inmate records for demonstration:

| ID | Name | Offense | Status | Security |
|---|---|---|---|---|
| NCS-001 | Chibuike Nwachukwu | Armed robbery | Convicted | Maximum |
| NCS-002 | Amina Suleiman | Drug trafficking | Awaiting Trial | Medium |
| NCS-003 | Taiwo Adeyemo | Fraud / embezzlement | Convicted | Minimum |
| NCS-004 | Emeka Eze | Murder / homicide | Awaiting Trial | Maximum |
| NCS-005 | Fatima Bello | Theft | Awaiting Trial | Minimum |
| NCS-006 | Segun Akintola | Kidnapping | Convicted | Maximum |
| NCS-007 | Bola Ogundimu | Assault | Awaiting Trial | Medium |
| NCS-008 | Halima Ibrahim | Drug trafficking | Convicted | Medium |
| NCS-009 | Chidi Okoye | Cybercrime | Released | Minimum |

---

## Technology Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 with custom properties (variables) for theming |
| Logic | Vanilla JavaScript (no frameworks or libraries) |
| Storage | Browser localStorage API |
| Offline | Fully self-contained — no CDN or network calls |

---

## Academic Context

This system was developed based on research detailed across three thesis chapters:

- **Chapter One** — Background on the Nigerian prison system, the problem of manual record-keeping, and the aim to develop a web-based prison management system using HTML, CSS, JavaScript, and a NoSQL/SQL database backend.
- **Chapter Two** — Literature review covering the history of prisons in Nigeria, the Nigerian Correctional Service Act (2019), classification of custodial facilities, international standards (Nelson Mandela Rules, WHO Prison Health Framework), overcrowding, and principles of effective prison management.
- **Chapter Three** — System analysis, functional and non-functional requirements, proposed system features, software/hardware specifications, data flow diagrams, system flowchart, and use case diagrams.
Objectives Met

- ✅ Designed a database structure for prisoner records
- ✅ Implemented the system using HTML, CSS, and JavaScript (frontend)
- ✅ localStorage provides client-side data persistence equivalent to a NoSQL document store
- ✅ System is evaluable: search, filter, report generation, and CSV export allow performance assessment

Offline Capability

Because the file contains zero external dependencies — no CDN links, no API calls, no frameworks loaded from the internet — the system works with **no internet connection whatsoever**. You can copy it to a USB drive, share it by email, or run it from a local network folder and it will behave identically.

Limitations

- Data is stored per-browser. Two users on different computers cannot share the same data without exporting and re-importing.
- There is a single admin account. Multi-user access with role-based permissions is not implemented in this version.
- The system does not currently support file/photo attachments for inmate records.
- For a production deployment, the backend should be replaced with a proper server-side database (MongoDB or SQL Server as specified in the thesis) and a secure authentication layer.

Author & Version

**Project:** Web-Based Prison Management System for Effective Management of Prisoners' Records  
**Institution:** Based on undergraduate thesis research  
**Version:** 1.0  
**Stack:** Pure HTML / CSS / JavaScript — single-file, zero dependencies  
