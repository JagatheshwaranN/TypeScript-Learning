# Playwright Learning Guide  

## Introduction to Playwright  
- **Playwright** is an open-source end-to-end testing framework developed by **Microsoft**.  
- It enables **browser automation** for testing modern web applications.  
- It goes beyond just UI/browser automation by also providing a dedicated **API testing library**.  
- Playwright is an **open-source Node.js library**, first released in **2020**.  

---

## Introduction to Node.js  
- **Node.js** is an **open-source, cross-platform JavaScript runtime environment**.  
- It executes JavaScript code **outside of the browser**, enabling server-side development.  
- Playwright itself is built on top of Node.js.  

---

## Key Features of Playwright  

1. **Cross-Browser Support**  
   - Works with **Chromium (Chrome, Edge)**, **Firefox**, and **WebKit (Safari)**.  

2. **Cross-Platform Support**  
   - Compatible with **Windows, macOS, and Linux**.  

3. **Cross-Language Support**  
   - Write tests in **JavaScript, TypeScript, Python, Java, or C#**.  

4. **Mobile Web Testing**  
   - Test mobile browsers: **Chrome on Android** and **Safari on iOS**.  

5. **API Testing**  
   - Built-in API testing to validate **backend APIs** along with frontend flows.  

6. **Automatic Waiting (Auto-Wait)**  
   - Playwright **waits for elements** to be ready before performing actions, reducing flaky tests.  

7. **Handles Complex Elements**  
   - Easily interacts with **Shadow DOM**, **iframes**, and other tricky elements.  

8. **Parallel Execution**  
   - Run tests simultaneously across multiple browsers for **faster execution**.  

9. **Built-in Reporting**  
   - Provides reports in **HTML, JSON, JUnit**, and supports integration with **third-party reporters**.  

10. **Inspector Tool**  
    - Helps debug tests visually by showing **click points, locators, and element states**.  

11. **Code Generation (Codegen)**  
    - Records user interactions and converts them into **ready-to-use test scripts** in supported languages.  

12. **Tracing (Trace Viewer)**  
    - Captures **screenshots, videos, test steps, retries flaky tests**, and logs all details for **debugging failures**.  

---

## Why TypeScript with Playwright?  

1. **JavaScript vs TypeScript**  
   - JavaScript is **dynamically typed**.  
   - TypeScript is **statically typed** with **object-oriented features**, enabling better maintainability.  

2. **ECMAScript (ES3, ES4, ES5, ES6)**  
   - ECMAScript (ES) is the **standard** that defines how JavaScript should behave.  

3. **TypeScript as a Superset**  
   - TypeScript is a **superset of JavaScript** created by **Microsoft**.  
   - It adds features not defined by ECMAScript, such as:  
     - **Generics**  
     - **Interfaces & Classes**  
     - **Strong Typing**  
     - **Collections**  

4. **Benefits of TypeScript**  
   - Catches errors at **compile-time** instead of runtime.  
   - Provides **intellisense & auto-completion** in editors like VSCode.  
   - Ensures **scalable, maintainable test codebases**.  

---

## TypeScript Basics  

1. **Superset of JavaScript** – Any valid JavaScript code works in TypeScript.  
2. **Compilation** – TypeScript files (`.ts`) are compiled into JavaScript (`.js`).  
3. **Execution Environment** – TypeScript runs anywhere JavaScript does: **browser, Node.js, or any JS runtime**.  
4. **File Extensions** – TypeScript files end with **`.ts`**.  
5. **Error Prevention** – Helps **catch mistakes early** during development.  

---

## Environment Setup  

1. **Install Node.js**  
   - Download from [Node.js official site](https://nodejs.org/en/download).  
   - Node comes with **npm (Node Package Manager)**.  

2. **Install TypeScript Compiler**  
   ```bash
   npm install -g typescript
   ```

3. **Install a Code Editor**  
   - Recommended: **Visual Studio Code (VSCode)**.  

---

## First TypeScript Program  

1. Create a new folder and open it as a project in **VSCode**.  
2. Create a file named **`first_type.ts`** with the following content:  

   ```typescript
   console.log("Welcome to TypeScript!");
   ```

---

## Compile TypeScript to JavaScript  

Run the following command in terminal:  

```bash
tsc path\first_type.ts
```

This generates a file named **`first_type.js`**.  

---

## Fix Security Execution Policy Error (Windows Only)  

If you face a PowerShell execution policy error, run:  

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Restricted -Force
```

---

## Run the Compiled JavaScript File  

```bash
node path\first_type.js
```

---

## Run TypeScript Directly Without Compilation  

You can run `.ts` files directly using **TypeScript Executor**:  

1. Install tsx globally:  
   ```bash
   npm install -g tsx
   ```  

2. Run the `.ts` file:  
   ```bash
   tsx path\first_type.ts
   ```  
