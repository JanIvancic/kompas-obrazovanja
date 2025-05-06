using Kompas.Obrazovanja.Model;
using Microsoft.EntityFrameworkCore;

namespace Kompas.Obrazovanja.Database
{
    public class KompasDbContext : DbContext
    {
        public KompasDbContext(DbContextOptions<KompasDbContext> opts)
            : base(opts) { }

        public DbSet<Korisnik> Korisnici { get; set; }
        public DbSet<PremiumClanstvo> PremiumClanstva { get; set; }
        public DbSet<RezultatTesta> RezultatiTesta { get; set; }
        public DbSet<Test> Testovi { get; set; }
        public DbSet<Iskustvo> Iskustva { get; set; }
        public DbSet<ChatSesija> ChatSesije { get; set; }
        public DbSet<Zupanija> Zupanije { get; set; }
        public DbSet<Grad> Gradovi { get; set; }
        public DbSet<Skola> Skole { get; set; }
        public DbSet<Smjer> Smjerovi { get; set; }
        public DbSet<Predmet> Predmeti { get; set; }
        public DbSet<SmjerPredmet> SmjerPredmeti { get; set; }

        protected override void OnModelCreating(ModelBuilder b)
        {
            b.Entity<PremiumClanstvo>()
             .HasOne(pc => pc.Korisnik)
             .WithOne(k => k.PremiumClanstvo)
             .HasForeignKey<PremiumClanstvo>(pc => pc.KorisnikId);

            b.Entity<RezultatTesta>()
             .HasOne(r => r.Korisnik)
             .WithMany(k => k.RezultatiTesta)
             .HasForeignKey(r => r.KorisnikId);
            b.Entity<RezultatTesta>()
             .HasOne(r => r.Test)
             .WithMany(t => t.RezultatiTesta)
             .HasForeignKey(r => r.TestId);

            b.Entity<Iskustvo>()
             .HasOne(i => i.Korisnik)
             .WithMany(k => k.Iskustva)
             .HasForeignKey(i => i.KorisnikId);
            b.Entity<Iskustvo>()
             .HasOne(i => i.Skola)
             .WithMany(s => s.Iskustva)
             .HasForeignKey(i => i.SkolaId);

            b.Entity<ChatSesija>()
             .HasOne(c => c.Korisnik)
             .WithMany(k => k.ChatSesije)
             .HasForeignKey(c => c.KorisnikId);

            b.Entity<Grad>()
             .HasOne(g => g.Zupanija)
             .WithMany(z => z.Gradovi)
             .HasForeignKey(g => g.ZupanijaId);

            b.Entity<Skola>()
             .HasOne(s => s.Grad)
             .WithMany(g => g.Skole)
             .HasForeignKey(s => s.GradId);

            b.Entity<Smjer>()
             .HasOne(s => s.Skola)
             .WithMany(k => k.Smjerovi)
             .HasForeignKey(s => s.SkolaId);

            b.Entity<SmjerPredmet>()
             .HasKey(sp => new { sp.SmjerId, sp.PredmetId });
            b.Entity<SmjerPredmet>()
             .HasOne(sp => sp.Smjer)
             .WithMany(s => s.SmjerPredmeti)
             .HasForeignKey(sp => sp.SmjerId);
            b.Entity<SmjerPredmet>()
             .HasOne(sp => sp.Predmet)
             .WithMany(p => p.SmjerPredmeti)
             .HasForeignKey(sp => sp.PredmetId);

            b.Entity<Test>()
             .HasOne(t => t.Predmet)
             .WithMany(p => p.Tests)
             .HasForeignKey(t => t.PredmetId);

            base.OnModelCreating(b);
        }
    }
}
