using MailKit.Net.Smtp;
using MimeKit;
using System.Net.Mail;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;
namespace Kompas.Obrazovanja.Infrastructure.Email;
public class SmtpEmailSender : IEmailSender
{
    public async Task SendAsync(string to, string subject, string body)
    {
        var msg = new MimeMessage();
        msg.To.Add(MailboxAddress.Parse(to));
        msg.Subject = subject;
        msg.Body = new TextPart("plain") { Text = body };
        using var smtp = new SmtpClient();
        await smtp.ConnectAsync("smtp.example.com", 587, false);
        await smtp.AuthenticateAsync("user", "pass");
        await smtp.SendAsync(msg);
        await smtp.DisconnectAsync(true);
    }
}
