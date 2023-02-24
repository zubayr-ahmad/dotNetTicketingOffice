using System;
using System.Collections.Generic;

namespace TicketingSystemSelf.Models;

public partial class User
{
    public int UserId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }

    public virtual ICollection<Attachment> Attachments { get; } = new List<Attachment>();

    public virtual ICollection<Comment> Comments { get; } = new List<Comment>();

    public virtual ICollection<Ticket> Tickets { get; } = new List<Ticket>();
}
