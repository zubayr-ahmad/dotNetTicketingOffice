using System;
using System.Collections.Generic;

namespace TicketingSystemSelf.Models;

public partial class Attachment
{
    public int AttachmentId { get; set; }

    public int TicketId { get; set; }

    public DateTime DateTime { get; set; }

    public string AttachmentType { get; set; } = null!;

    public double AttachmentSize { get; set; }

    public string Path { get; set; } = null!;

    public int UserId { get; set; }

    public virtual Ticket Ticket { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
