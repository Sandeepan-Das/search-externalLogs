# Search External Logs (ODM and Factories)
This project was made by Team *Boolean Bandits* during Dell Hack-to-Hire Hackathon'21 conducted at IIIT Bhubaneswar.
### Project Overview
----------------------------------
#### What problem did we, as a team, try to solve?
As a manufacturing company, Dell receives a huge amount of data in the form of logs. However, there is no single place to search these logs for a specific need.

#### What is the proposed solution?
To deal with our problem, we created a UI-based searching system, which lets the user enter comma-separated service tags and the required fields will be displayed in the form of a dynamic table.

### Solution Description
----------------------------------


   * **Development** of a Search UI that dynamically displays the required log fields in a table
   * **Optimization** of the *search time* of service tag in the file system using the applications of Trie Data Structure
   * **Testing** of the solution prototype against a zip file of size of 49.7MB, having 15 levels hierarchy nested folder structure.
#### What did we achieve?
- Faster preprocessing and extraction of desired fields by the end user.
- The search time of the service tag in the 15 level hierarchial zip folder was reduced by 90% using the Trie Data Structure. 
- Improved user experience.


#### Tools and Technologies Used

* React v17.0.2
* Redux v4.1.2
* Material UI v5.3.0
* Node.js v16.13.2
* Express v4.17.2

#### Testing
The machine used for the test has the following specifications:
- Intel i7-8565U
- 16GB RAM
Testing was done on Windows 11.

The test sample consists of a zip file of size of 49.7MB, having 15 levels hierarchy nested folder structure.

### Team Members
----------------------------------

| Name | College ID    | Email             |
| :-------- | :------- | :------------------------- |
| Adhisikha Patnaik | B119003 |b119003@iiit-bh.ac.in|
| Biswajit Rout | B119018 |b119018@iiit-bh.ac.in|
| Plavani Sahoo| B119038 |b119038@iiit-bh.ac.in|
| Sandeepan Das| B119046 |b119046@iiit-bh.ac.in|
| Somen Sidharth Sahoo | B119057 |b119057@iiit-bh.ac.in|
