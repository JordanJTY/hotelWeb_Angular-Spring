package com.jordan.hotelako.tools;

import java.io.File;
import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.stereotype.Component;

@Component
public class EmailSender {
    public void sendEmail(byte[] resource)
    {
        try
        {
            Properties props = new Properties();
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.starttls.enable", "true");
            props.put("mail.smtp.host", "smtp.gmail.com");
            props.put("mail.smtp.port", "587");

            Session session = Session.getInstance(props, new javax.mail.Authenticator()
            {
                protected PasswordAuthentication getPasswordAuthentication()
                {
                    return new PasswordAuthentication("test@gmail.com", "password");
                }
            });
            Message msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress("darkjordanrayo@gmail.com", false));

            msg.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse("test@gmail.com"));
            msg.setSubject("Leave Letter");
            msg.setSentDate(new Date());

            MimeBodyPart messageBodyPart = new MimeBodyPart();
            messageBodyPart.setContent("I am not feeling well, So I am taking leave today",
                    "text/html");

            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(messageBodyPart);

            MimeBodyPart attachPart = new MimeBodyPart();
            attachPart.attachFile(String.valueOf(resource));
            multipart.addBodyPart(attachPart);
            msg.setContent(multipart);
            Transport.send(msg);
        }
        catch (Exception exe)
        {
            exe.printStackTrace();
        }
    }
}
