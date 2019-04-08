// A constructor, business logic for AddressBook
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}
//This is a method .addContact, it takes the Object Contact and pushes it into the array Contacts
AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}
AddressBook.prototype.assignId =function() {
  this.currentId +=1;
  return this.currentId;
}
//AddressBook.prototype.update = function(phoneNumber)
  //this.phoneNumber = 

AddressBook.prototype.findContact = function(id) {
  for(var i=0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
          return this.contacts[i];
        }
      }
    };
  return false;
}
AddressBook.prototype.deleteContact = function (id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}
//Business Logic for Contacts, Object with multiple properties. (last, first, #)
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}
//this is a method that takes two properties and returns them together. Can be applied to any contact object (.prototype) lets it inherit the method
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


//var testContact = new Contact ("Ada", "Lovelace", "503-867-5309");


// User Interface Logic ---------
var addressBook = new AddressBook():

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
  })
})