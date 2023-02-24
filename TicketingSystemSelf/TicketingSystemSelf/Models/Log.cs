using System;
using System.Collections.Generic;

namespace TicketingSystemSelf.Models;

public partial class Log
{
    public int LogId { get; set; }

    public int OldStatus { get; set; }

    public int NewStatus { get; set; }

    public int ChangerId { get; set; }

    public int NewAssigneeId { get; set; }

    public int TicketId { get; set; }

    public virtual Ticket Ticket { get; set; } = null!;
}
