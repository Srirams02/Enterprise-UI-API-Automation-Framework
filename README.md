# 🧪 Enterprise Playwright UI API Automation Framework

> Enterprise-grade automation framework built using **Playwright + TypeScript**, supporting **UI Automation**, **API Automation**, and **End-to-End testing** with integrated **GitHub Actions CI/CD**, **Allure Reporting**, and **Automated Email Notifications**.

---

![Playwright](https://img.shields.io/badge/Automation-Playwright-green)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![CI](https://img.shields.io/badge/CI-GitHub_Actions-success)
![Report](https://img.shields.io/badge/Reporting-Allure-orange)

---

# 🔥 Why This Project Stands Out

- Covers complete **UI + API + E2E automation flows**
- Cross-browser execution using:
  - Chromium
  - Firefox
  - WebKit
- Parallel test execution support
- Integrated Allure reporting with screenshots, videos, and traces
- GitHub Actions CI/CD integration
- Scheduled automation execution support
- Automated email notifications after execution
- Page Object Model (POM) architecture
- Retry handling and browser stability improvements
- Dynamic test data generation using Faker

---

# 🧠 What This Demonstrates

- Enterprise automation framework architecture
- UI automation using Playwright
- API automation using Playwright Request Context
- End-to-End workflow validation
- CI/CD pipeline integration
- Reporting and execution tracking
- Cross-browser execution handling
- Retry and flaky test handling

---

# ⚙️ CI/CD Pipeline

## Triggers

- Push to main branch
- Scheduled daily execution
- Manual workflow trigger

---

# 🔁 CI/CD Flow

```text
Push / Schedule / Manual Trigger
                ↓
        GitHub Actions
                ↓
      Install Dependencies
                ↓
     Playwright Test Execution
                ↓
         Allure Reporting
                ↓
        Artifact Upload
                ↓
       Email Notification
```

---

# 📸 Execution Proof

## 🔹 Playwright HTML Report
<img width="1919" height="1010" alt="image" src="https://github.com/user-attachments/assets/6b34e96e-3d87-422e-b895-b4c6c8a615f2" />
<img width="1914" height="1017" alt="image" src="https://github.com/user-attachments/assets/3fede2f9-8ecb-4003-b5da-5115c16fc682" />



---

## 🔹 Allure Report
<img width="1919" height="1014" alt="image" src="https://github.com/user-attachments/assets/93954103-0209-47e9-b02d-c35764857b89" />
<img width="1918" height="1006" alt="image" src="https://github.com/user-attachments/assets/227b64a2-1603-42e7-8be5-5796ece330a7" />
---

## 🔹 GitHub Actions CI/CD
<img width="1905" height="894" alt="image" src="https://github.com/user-attachments/assets/4b992d16-3e87-48e8-8d1e-b0026a5b7c8d" />
---

## 🔹 Email Notification
<img width="987" height="850" alt="image" src="https://github.com/user-attachments/assets/b19ac899-8b82-4965-a2af-293bf00c57b9" />
---

# 📂 Framework Architecture

```text
Enterprise-Playwright-UI-API-Automation-Framework/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── config/
│   └── env.ts
│
├── helpers/
│
├── pages/
│   ├── DashboardPage.ts
│   ├── EmployeePage.ts
│   └── LoginPage.ts
│
├── reports/
│
├── test-data/
│
├── tests/
│   ├── api/
│   ├── e2e/
│   └── ui/
│
├── utils/
│   ├── apiHelper.ts
│   ├── constants.ts
│   ├── emailHelper.ts
│   ├── fakerData.ts
│   └── logger.ts
│
├── .env
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

---

# 🧪 UI Automation Coverage

## Application Under Test

- OrangeHRM Demo Application

---

## Executed UI Test Scenarios

### 🔹 Login Validation

- Verify successful login with valid credentials
- Validate dashboard navigation after login

---

### 🔹 Invalid Login Validation

- Verify invalid credential error message

---

### 🔹 Logout Validation

- Verify successful logout functionality
- Validate navigation back to login page

---

### 🔹 Add Employee Flow

- Login to OrangeHRM
- Navigate to PIM module
- Open Add Employee page
- Add employee details
- Save employee information
- Validate Personal Details page

---

### 🔹 Search Employee Flow

- Navigate to PIM module
- Search employee using employee name
- Validate Employee Information page

---

# 🔌 API Automation Coverage

## API Under Test

- Restful Booker API

---

## Executed API Test Scenarios

### 🔹 Get Booking API

- Verify booking endpoint returns successful response
- Validate booking data availability

---

### 🔹 Create Booking API

- Create booking using POST request
- Validate booking ID generation
- Validate successful response

---

### 🔹 Update Booking API

- Dynamically create booking
- Generate authentication token
- Update booking using PATCH request
- Validate supported response handling

---

### 🔹 Delete Booking API

- Dynamically create booking
- Generate authentication token
- Delete booking using DELETE request
- Validate supported response handling

---

# 🔄 End-to-End Automation Coverage

## Enterprise Employee Workflow

Executed E2E workflow:

1. Login to OrangeHRM
2. Navigate to PIM module
3. Add employee
4. Validate employee creation
5. Search employee
6. Validate employee information page

---

# ⚙️ Framework Features

## 🔹 Cross-Browser Execution

Framework supports:

- Chromium
- Firefox
- WebKit

---

## 🔹 Parallel Execution

Configured Playwright workers for parallel execution to improve runtime performance.

---

## 🔹 Retry Mechanism

Implemented retry handling to stabilize execution in public demo environments.

---

## 🔹 Reporting

Integrated:

- Playwright HTML Report
- Allure Report

Generated artifacts include:

- Screenshots
- Videos
- Traces
- Failure diagnostics

---

# 📧 Automated Email Notification

Integrated automated email reporting using:

- Nodemailer
- Gmail App Password Authentication

Execution summary email includes:

- Total tests
- Passed tests
- Failed tests
- Execution link

---

# 📊 Dynamic Test Data

Implemented Faker utility for:

- First names
- Last names
- Email generation

---

# 🪵 Logging Utility

Implemented reusable logger utility for:

- Info logs
- Success logs
- Error logs

---

# 🛠️ Tech Stack

| Layer | Tool |
|---|---|
| UI Automation | Playwright |
| API Automation | Playwright Request Context |
| Language | TypeScript |
| Runtime | Node.js |
| Reporting | Allure |
| CI/CD | GitHub Actions |
| Email Notification | Nodemailer |
| Test Data | Faker |

---

# ▶️ Run Locally

## Install Dependencies

```bash
npm install
```

---

## Run Complete Test Suite

```bash
npx playwright test
```

---

## Run UI Tests

```bash
npm run ui
```

---

## Run API Tests

```bash
npm run api
```

---

## Run E2E Tests

```bash
npm run e2e
```

---

## Run Headed Execution

```bash
npm run headed
```

---

## Generate Allure Report

```bash
allure generate ./allure-results --clean
```

---

## Open Allure Report

```bash
allure open
```

---

# 🔐 GitHub Secrets

Configured secrets:

- EMAIL_USERNAME
- EMAIL_PASSWORD
- EMAIL_TO

---

# 📅 Scheduled Execution

Configured scheduled GitHub Actions execution:

- Daily at 4:00 PM IST

---

# ⚙️ Stability Strategy

Implemented stability handling for public demo applications:

- Retry mechanism enabled
- Browser-specific timeout handling
- Additional synchronization waits
- Cross-browser execution tuning

---

# 🚀 Future Enhancements

Potential improvements:

- Docker integration
- Jenkins integration
- Slack notifications
- Data-driven execution
- Advanced reporting dashboard

---

# 👨‍💻 Author

**Sriram S**

GitHub: https://github.com/Srirams02

LinkedIn: https://www.linkedin.com/in/sriram-s-a6947423a

---

# ⭐ Final Note

This project demonstrates a scalable Playwright automation framework combining:

- UI Automation
- API Automation
- End-to-End Validation
- CI/CD Integration
- Allure Reporting
- Automated Email Notifications
- Cross-Browser Execution
- Parallel Execution
- Enterprise Framework Architecture

The framework is designed to simulate a practical enterprise automation solution using modern Playwright automation practices.
