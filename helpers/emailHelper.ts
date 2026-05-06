import 'dotenv/config';

import nodemailer from 'nodemailer';

export class EmailHelper {

    static async sendReport() {

        const transporter =
            nodemailer.createTransport({

                service: 'gmail',

                auth: {

                    user: process.env.EMAIL_USER,

                    pass: process.env.EMAIL_PASS
                }
            });

        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: process.env.EMAIL_TO,

            subject: 'Playwright Automation Report',

            text:
                'Playwright Execution Completed Successfully'
        });

        console.log(
            'Email Sent Successfully'
        );
    }
}