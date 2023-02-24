using System;
using System.Collections.Generic;

namespace TicketingSystemSelf.Models;

public partial class Comment
{
    public int CommentId { get; set; }

    public int TicketId { get; set; }

    public string Description { get; set; } = null!;

    public int? UserId { get; set; }

    public virtual Ticket Ticket { get; set; } = null!;

    public virtual User? User { get; set; }
}
