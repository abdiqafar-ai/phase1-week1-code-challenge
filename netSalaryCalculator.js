function calculateNetSalary(basicSalary, benefits) {
    const PAYE = 0.35; 
    const NHIF = 0.025; 
    const NSSF = 0.06; 

    const grossSalary = basicSalary + benefits;
    const tax = grossSalary * PAYE;
    const nhifDeductions = grossSalary * NHIF;
    const nssfDeductions = grossSalary * NSSF;
    const netSalary = grossSalary - (tax + nhifDeductions + nssfDeductions);

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Net Salary: ${netSalary}`);
}

const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));
calculateNetSalary(basicSalary, benefits);
