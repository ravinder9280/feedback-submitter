import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const feedbacks =[
        {
          "fullName": "Eleanor Vance",
          "email": "e.vance88@email.com",
          "message": "The onboarding process was incredibly smooth and intuitive. I appreciated the clear instructions and the helpful introductory video."
        },
        {
          "fullName": "Rajesh Kumar",
          "email": "raj.kumar.it@techfirm.net",
          "message": "I encountered a minor bug when trying to export the data in CSV format. The column headers seemed to be misaligned. Otherwise, the functionality is great."
        },
        {
          "fullName": "Seraphina Dubois",
          "email": "s.dubois.art@creativemail.org",
          "message": "The visual design of the application is very appealing and modern. The color palette is easy on the eyes, and the layout feels well-organized."
        },
        {
          "fullName": "Kenji Tanaka",
          "email": "k.tanaka.eng@industrymail.com",
          "message": "The performance of the data processing seems a bit slow when dealing with larger datasets. Optimizing this would significantly improve the user experience."
        },
        {
          "fullName": "Olivia Rodriguez",
          "email": "o.rodriguez.hr@corpmail.info",
          "message": "I found the search functionality to be quite effective in quickly locating the information I needed. The filtering options are also very useful."
        },
        {
          "fullName": "Alistair McGregor",
          "email": "a.mcgregor.law@legalnet.co",
          "message": "The security measures implemented appear to be robust, which is a crucial aspect for handling sensitive user data. I appreciate the transparency in this regard."
        },
        {
          "fullName": "Priya Sharma",
          "email": "p.sharma.educate@learnmail.edu",
          "message": "The learning resources provided are comprehensive and well-structured. They have been very helpful in understanding the various features of the application."
        },
        {
          "fullName": "Samuel Chen",
          "email": "s.chen.finance@moneymail.biz",
          "message": "The reporting features are quite detailed and provide valuable insights. The ability to customize the reports is a significant advantage."
        },
        {
          "fullName": "Isabelle Lefevre",
          "email": "i.lefevre.design@artmail.io",
          "message": "The mobile responsiveness of the application is excellent. It adapts seamlessly to different screen sizes, making it easy to use on the go."
        },
        {
          "fullName": "David Wilson",
          "email": "d.wilson.support@helpdesk.com",
          "message": "The customer support team was very responsive and helpful when I had a question about setting up my account. Their assistance was greatly appreciated."
        }
      ]

    for (const feedback of feedbacks) {
        await prisma.feedback.create({
            data: feedback,
        });
    }

    console.log('Dummy feedback data inserted successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });