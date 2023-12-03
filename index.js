// Create a menu app as seen in this week’s video. What you create is up to you as long as 
//   it meets the following requirements:
//     Use at least one array.
//     Use at least two classes.
//     Your menu should have the options to create, view, and delete elements.

// Creating a class for my baked goods, passing two variables of item and price
class bakedGoods {
  constructor(item, price) {
    this.item = item;
    this.price = price;
  }
}

// Creating my Menu class which stores the menu logic: 
// Menu, adding items, removing items and viewing the list
class Menu {
  constructor() {
    //create my empty array to plug in my baked goods later
    this.goodsList = [];
  }

  // Create my start method, which includes my switch statement to handle my menu selections
  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        // If the user inputs one, it will execute the addItem method defined below
        case '1': 
          this.addItem();
          // Once this has executed the switch ends
          break;
        // If the user inputs two, it will execute the deleteItem method defined below
        case '2':
          this.deleteItem();
          // Once this has executed the switch ends
          break;
        // If the user inputs three, it will execute the deleteItem method defined below
        case '3':
          this.viewList();
          // Once this has executed the switch ends
          break;
        // Any other selection will default to 0 and execute the Goodbye! Alert below
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
  }

  // Build the menu options display
  showMainMenuOptions() {
    return prompt( `
      0) Exit
      1) Add Item
      2) Delete Item
      3) View Bake Sale List
    `);
  }

  // Defining the addItem method, setting item and price as prompts for the customer to input
  addItem() {
    let item = prompt('Enter the name of the Item you wish to add:');
    let price = prompt('Enter the price of the Item you wish to add:');
    // Once the prompts have been inputted, push the item to the array
    this.goodsList.push(new bakedGoods(item, price));
  }

  // Define the viewList method, this method loops through the 
  // array of added items and adds them to the empty string listString
  viewList() {
    let listString = '';
    for (let i = 0; i < this.goodsList.length; i++) {
      listString += i + `) ${this.goodsList[i].item} - $${this.goodsList[i].price} \n`;
    }
      // If the list is empty display that there aren't items in the list and a tip to get back to the main menu
      if (listString < 1) {
        return prompt(`There are no items in the Bake Sale. 

Press Enter to return to the main menu.`)
        // If the list is not empty, display the list of items and a tip to get back to the main menu
      } else {
        return prompt(`${listString}
Press Enter to return to the main menu.`);
      }
  }

  // Defining the deleteItem method, this removes an indicated item from the list
  deleteItem() {
    let index = prompt(`Enter the index of the Item you wish to delete:`);
    if (index > -1 && index < this.goodsList.length) {
      this.goodsList.splice(index, 1);
    }
  }
}

// let's initialize this bad boy
let menu = new Menu();
menu.start();