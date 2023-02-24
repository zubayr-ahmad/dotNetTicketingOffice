using System;
using System.Collections.Generic;

namespace TicketingSystemSelf.Models;

public partial class DueDate
{
    public int TicketId { get; set; }

    public int DueDateType { get; set; }

    public DateTime Time { get; set; }

    public virtual Ticket Ticket { get; set; } = null!;
}
