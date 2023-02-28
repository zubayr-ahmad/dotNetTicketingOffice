using System;
using System.Collections.Generic;

namespace TicketingSystemSelf.Models;

public partial class Ticket
{
    public int IdTicket { get; set; }

    public int RequesterId { get; set; }

    public string TicketSubject { get; set; } = null!;

    public int AssignyId { get; set; }

    public int Priority { get; set; }

    public int Status { get; set; }

    public DateTime DateCreated { get; set; }

    public string? Description { get; set; }

    public string? Comment { get; set; }

    public string? Sentiment { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public DateTime? DueDate { get; set; }

    public string? TaskId { get; set; }

    public virtual ICollection<Attachment> Attachments { get; } = new List<Attachment>();

    public virtual ICollection<Comment> Comments { get; } = new List<Comment>();

    public virtual ICollection<Log> Logs { get; } = new List<Log>();

    public virtual User Requester { get; set; } = null!;
}
