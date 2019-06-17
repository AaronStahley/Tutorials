using MVCDemoApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCDemoApplication.Controllers
{
    public class PeopleController : Controller
    {
        // GET: People
        public ActionResult Index()
        {
            PersonModel p = new PersonModel();
            int i = 5 / p.Age; 

            return View();
        }

        public ActionResult ListPeople()
        {

            List<PersonModel> people = new List<PersonModel>();

            people.Add(new PersonModel { FirstName = "Aaron", LastName = "Stahley", Age = 24 });
            people.Add(new PersonModel { FirstName = "Joe", LastName = "Smith", Age = 34 });
            people.Add(new PersonModel { FirstName = "Kristy", LastName = "Wickizer", Age = 26 });

            return View(people); 
        }
    }
}