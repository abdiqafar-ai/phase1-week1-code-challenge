function calculateNetSalary(basicSalary, benefits) {
    const PAYE = 0.35; //35%
    const NHIF = 0.025;//2.5% 
    const NSSF = 0.06; //6%
//to get the basic salary, calculate basics salary of the individual plus the benefits
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
