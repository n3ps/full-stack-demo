using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
  [Route("[controller]")]
  public class PetsController : Controller
  {
    private readonly PetsContext _context;

    public PetsController(PetsContext context)
    {
        _context = context;

        if (_context.Pets.Count() == 0)
        {
          _context.Pets.AddRange(new List<Pet>{
            new Pet { Id = "1", Name = "Labrador", PhotoUrl = "/images/labrador.jpg"},
            new Pet { Id = "2", Name = "Beagle", PhotoUrl = "/images/beagle.jpg"},
            new Pet { Id = "3", Name = "Husky", PhotoUrl = "/images/husky.jpg"},
            new Pet { Id = "4", Name = "Corgi", PhotoUrl = "/images/corgi.jpg"},
            new Pet { Id = "5", Name = "Shih Tzu", PhotoUrl = "/images/shihtzu.jpg"}
          });

          _context.SaveChanges();
        }
    }

    [HttpGet]
    public IEnumerable<Pet> GetAll()
    {
      return _context.Pets.ToList();
    }

    [HttpGet("{id}", Name = "GetPet")]
    public IActionResult GetById(string id)
    {
      var item = _context.Pets.FirstOrDefault(t => t.Id == id);
      if (item == null)
      {
        return NotFound();
      }
      return new ObjectResult(item);
    }

    [HttpPost]
    public IActionResult Create([FromBody] Pet item)
    {
      if (item == null)
      {
        return BadRequest();
      }

      _context.Pets.Add(item);
      _context.SaveChanges();

      return CreatedAtRoute("GetPet", new {id = item.Id}, item);
    }

    [HttpPut("{id}")]
    public IActionResult Update(string id, [FromBody] Pet item)
    {
      if (item == null || item.Id != id)
      {
        return BadRequest();
      }

      var pet = _context.Pets.FirstOrDefault(t => t.Id == id);
      if (pet == null)
      {
        return NotFound();
      }

      pet.Name = item.Name;

      _context.Pets.Update(pet);
      _context.SaveChanges();

      return new NoContentResult();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(string id)
    {
      var pet = _context.Pets.FirstOrDefault(t => t.Id == id);
      if (pet == null)
      {
        return NotFound();
      }

      _context.Pets.Remove(pet);
      _context.SaveChanges();

      return new NoContentResult();
    }

  }
}