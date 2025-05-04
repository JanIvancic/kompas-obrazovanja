namespace Kompas.Obrazovanja.Model;

public class Korisnik
{
    public int KorisnikId { get; set; }
    public string Ime { get; set; }
    public string Prezime { get; set; }
    public string Email { get; set; }
    public bool EmailConfirmed { get; set; }
    public string PasswordHash { get; set; }

    public PremiumClanstvo PremiumClanstvo { get; set; }
    public ICollection<RezultatTesta> RezultatiTesta { get; set; }
    public ICollection<Iskustvo> Iskustva { get; set; }
    public ICollection<ChatSesija> ChatSesije { get; set; }
}
