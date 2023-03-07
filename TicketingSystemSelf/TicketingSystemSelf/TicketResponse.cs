namespace TicketingSystemSelf
{
    public class TicketResponse
    {

        public List<Ticket> Tickets { get; set; } = new List<Ticket>();

        public int Pages { get; set; }
        public int CurrentPage { get; set; }

    }
}
