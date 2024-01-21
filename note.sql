user
booking
buss



 




CREATE TABLE User (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(255),
    Password VARCHAR(255),
    Email VARCHAR(255),
    Phone VARCHAR(15),
    
);
-- Booking Table
CREATE TABLE Booking (
    BookingID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    BusID INT,
    RouteID INT,
    BookingTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Passengers INT,
    Status VARCHAR(20),
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (BusID) REFERENCES Bus(BusID),
   