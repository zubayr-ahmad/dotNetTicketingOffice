using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace TicketingSystemSelf.Controllers
{
    public class TicketController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        private readonly DbA95314TicketingsystemContext _context; // creating object of Database context Class
        public TicketController(DbA95314TicketingsystemContext context) //constructor (in cons passed obj of Contextdataase 
        {
            _context = context;
        }








        [HttpPost("RetrievingDataFromTicketTable")]
        // [Route("{page}")]
        // public async Task<ActionResult<Std>> GetResult() // if we use this statement we will also see the model of the database in swagger
        public async Task<IActionResult> GetResult(int page) //Iaction means we are performing some action and returning some status code
        {
            if (_context.Tickets == null)
                return NotFound();  // will return not found if item is not present

            var pageResult = 10f; // no of items you want to show on one page 
            var pageCount = Math.Ceiling(_context.Tickets.Count() / pageResult); //total pages divided by pageResult to calculate pages

            var tickets = await _context.Tickets
                .Skip((page - 1) * (int)pageResult)  // this will skip specific no of pages (if user want to see page no 6 it will skip 5 pages) 
                .Take((int)pageResult)  // will take  remaining entries present in pages 
                .ToListAsync();



            var response = new TicketResponse
            {
                Tickets = tickets,
                CurrentPage = page,
                Pages = (int)pageCount
            };

            return Ok(response);

            //return Ok(await _context.Tickets.ToListAsync());
            // return Task.CompletedTask(); //
        }




        //[HttpGet("Retrieving data from Ticket Table")]
        //public ActionResult<IEnumerable<Ticket>> Get()
        //{
        //    return _context.Tickets.ToList();  // returning tickets list 
        //}



        [HttpPost("Add ticket")]
        public ActionResult<string> AddTicket([FromBody]TicketModel obj)
        {
            try
            {
                Ticket obj1 = new Ticket();//creating new object
                obj1.Status = obj.Status;
                obj1.TicketSubject = obj.TicketSubject;
                obj1.AssignyId = obj.AssignyId;
                obj1.RequesterId = obj.RequesterId;
                obj1.Priority = obj.Priority;
                obj1.DateCreated = DateTime.Now;
                obj1.Comment = obj.Comment; 
                obj1.Description = obj.Description;
                obj1.DueDate = obj.DueDate;
                obj1.UpdatedDate =obj.UpdatedDate;
                obj1.Sentiment = obj.Sentiment; 




                _context.Tickets.Add(obj1);
                _context.SaveChanges();


                return Ok("Ticket is succesfully added");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message); //we can also send own msg
            }


        }





        [HttpPost("LogIn_API")]
        
        public bool Method ([FromBody] LoginModel item)
        {

            var item1 =  _context.Users.Where(x=> x.Email==item.Email).FirstOrDefault(); //will find that obj that has same email or null
            if (item1 != null)
            {

                var item2 = _context.Users.Where(x => x.Password == item.Password && x.Email==item.Email).FirstOrDefault();//will find that obj that has same password or null
                if (item2 != null)
                {
                    return true;

                }

                return false;


            }
            else

                return false;


        }















    }  


}

    

