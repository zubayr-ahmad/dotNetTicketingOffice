using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TicketingSystemSelf.Models;

public partial class DbA95314TicketingsystemContext : DbContext
{
    public DbA95314TicketingsystemContext()
    {
    }

    public DbA95314TicketingsystemContext(DbContextOptions<DbA95314TicketingsystemContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Attachment> Attachments { get; set; }

    public virtual DbSet<Comment> Comments { get; set; }

    public virtual DbSet<DueDate> DueDates { get; set; }

    public virtual DbSet<Log> Logs { get; set; }

    public virtual DbSet<Ticket> Tickets { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=sql8003.site4now.net;User=db_a95314_ticketingsystem_admin;Password=ticketingsystem123;Database=db_a95314_ticketingsystem;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Attachment>(entity =>
        {
            entity.Property(e => e.AttachmentId).HasColumnName("Attachment_Id");
            entity.Property(e => e.AttachmentSize).HasColumnName("Attachment_Size");
            entity.Property(e => e.AttachmentType)
                .HasMaxLength(10)
                .HasColumnName("Attachment_Type");
            entity.Property(e => e.DateTime).HasColumnType("datetime");
            entity.Property(e => e.Path).IsUnicode(false);
            entity.Property(e => e.TicketId).HasColumnName("Ticket_Id");
            entity.Property(e => e.UserId).HasColumnName("User_Id");

            entity.HasOne(d => d.Ticket).WithMany(p => p.Attachments)
                .HasForeignKey(d => d.TicketId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Attachments_Ticket1");

            entity.HasOne(d => d.User).WithMany(p => p.Attachments)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Attachments_User");
        });

        modelBuilder.Entity<Comment>(entity =>
        {
            entity.Property(e => e.CommentId).HasColumnName("Comment_Id");
            entity.Property(e => e.Description).IsUnicode(false);
            entity.Property(e => e.TicketId).HasColumnName("Ticket_Id");
            entity.Property(e => e.UserId).HasColumnName("User_Id");

            entity.HasOne(d => d.Ticket).WithMany(p => p.Comments)
                .HasForeignKey(d => d.TicketId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Comments_Ticket");

            entity.HasOne(d => d.User).WithMany(p => p.Comments)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_Comments_User");
        });

        modelBuilder.Entity<DueDate>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("DueDate");

            entity.Property(e => e.TicketId).HasColumnName("Ticket_id");
            entity.Property(e => e.Time).HasColumnType("datetime");

            entity.HasOne(d => d.Ticket).WithMany()
                .HasForeignKey(d => d.TicketId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DueDate_Ticket1");
        });

        modelBuilder.Entity<Log>(entity =>
        {
            entity.HasKey(e => e.LogId).HasName("PK_Log");

            entity.Property(e => e.LogId).HasColumnName("Log_Id");
            entity.Property(e => e.ChangerId).HasColumnName("Changer_Id");
            entity.Property(e => e.NewAssigneeId).HasColumnName("New_AssigneeId");
            entity.Property(e => e.NewStatus).HasColumnName("New_Status");
            entity.Property(e => e.OldStatus).HasColumnName("Old_Status");
            entity.Property(e => e.TicketId).HasColumnName("Ticket_Id");

            entity.HasOne(d => d.Ticket).WithMany(p => p.Logs)
                .HasForeignKey(d => d.TicketId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Logs_Ticket");
        });

        modelBuilder.Entity<Ticket>(entity =>
        {
            entity.HasKey(e => e.IdTicket);

            entity.ToTable("Ticket");

            entity.Property(e => e.IdTicket).HasColumnName("Id_Ticket");
            entity.Property(e => e.AssignyId).HasColumnName("Assigny_Id");
            entity.Property(e => e.Comment).IsUnicode(false);
            entity.Property(e => e.DateCreated)
                .HasColumnType("datetime")
                .HasColumnName("Date_Created");
            entity.Property(e => e.Description).IsUnicode(false);
            entity.Property(e => e.DueDate).HasColumnType("date");
            entity.Property(e => e.RequesterId).HasColumnName("Requester_id");
            entity.Property(e => e.Sentiment)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TaskId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TicketSubject)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Ticket_Subject");
            entity.Property(e => e.UpdatedDate)
                .HasColumnType("date")
                .HasColumnName("Updated_Date");

            entity.HasOne(d => d.Requester).WithMany(p => p.Tickets)
                .HasForeignKey(d => d.RequesterId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Ticket_User2");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("User");

            entity.Property(e => e.UserId).HasColumnName("User_Id");
            entity.Property(e => e.Email)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.FirstName)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("First_Name");
            entity.Property(e => e.LastName)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Last_Name");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
