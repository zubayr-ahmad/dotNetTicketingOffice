 namespace TicketingSystemSelf.Models
{
    public class TicketModel
    {
        public string TaskId { get; set; }
        public int RequesterId { get; set; }

        public string TicketSubject { get; set; } = null!;

        public int AssignyId { get; set; }

        public int Priority { get; set; }

        public int Status { get; set; }
        public string Description { get; set; }

        public string Comment { get; set; }

        public string Sentiment { get; set; }

        public DateTime? UpdatedDate { get; set; }
        public DateTime? DueDate { get; set;}



    }
}
