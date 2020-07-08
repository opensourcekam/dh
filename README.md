## Introduction

Thank you for your interest in Daily Harvest! We're pleased to invite you to take part in the next step of our interview process by completing the following coding challenge. This is a simplified instance of the sort of functionality that we build for Daily Harvest customers. We will discuss your solution to this challenge during the next part of the interview process.

## Challenge

At Daily Harvest, we want to make it as easy as possible for our customers to get healthy food that they enjoy. One way to do this is to allow people to search for products that contain a favorite ingredient (apples, kale, banana, coconut, etc.).

We have provided two mock API endpoints for fetching product and ingredient data:

https://raw.githubusercontent.com/daily-harvest/opportunities/master/web-1/data/products.json

https://raw.githubusercontent.com/daily-harvest/opportunities/master/web-1/data/ingredients.json

Since Daily Harvest uses React and Redux, we'd like you to write a simple React app that allows the end user to enter an ingredient search term into an input field and return the set of products that contain that ingredient. Please be sure to cover any edge cases you might think of, and include any instructions for configuring and running your app along with your solution.

## Example

*User Input*
```
Organic Coconut
```

*Result Set*
```
Pineapple + Matcha
Blackberry + Majik
Cacao Cookie Dough
Salted Caramel
Strawberry Cheesecake
Chocolate Hazelnut Sundae
Chocolate Brownie Batter
Coffee Crunch
Chai + Coconut
Red Lentil + Cumin
Kale + Lemongrass
Vanilla Bean + Cacao
Coconut Lemon
Cold Brew + Cacao
Coconut + Lemon
Cacao Nib + Vanilla
Kabocha + Spice
```

## Other Considerations
* Performance
* Organization and documentation
* How will your solution scale?
* State management 
* Tests

## Project structure
```
 /api: data fetching fixtures and api setup layer
 /app: main App
 /redux: contains all redux setup and modules
   /modules: Follows ducks pattern
   /tests: tests functions which manipulate state
 /components: components that are reused in multiple places
 /features: groups components that all share code for one larger feature
 /utils: any misc functions that may be needed across app
```

## On this solution
I've built this solution with CREATE-REACT-APP, Redux/toolkit, lodash, normalizr, axios, and styled-components as my sensible defaults. I utilized the given testing libraries for writing my component and unit tests. 

Once the app is running searching will return a list of strings, the input can be any string or as a comma seperated list of strings. The given strings from our ingredients list will return products which ingredientsIds list match id's with. The place I struggled most through this assignment was writing the ingredients to products matching logic (utilizing lodash) and I believe that is where I can probably make the most optimizations if given a collaborator to reflect with. I felt like throught the challenge I made good decisions with architecture, scalibile defaults (i.e. default unit and component testing).

## Running my solution

```
After download this repo
Run `yarn` to install packages
Run `yarn start` to start app

Once the app is booted it should be avaliable at `localhost:3000`

Testing:
Run `yarn test` to see tests
```


