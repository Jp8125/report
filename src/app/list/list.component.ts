import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
students=[
  {
    "StudentID": 1,
    "StudentName": "Meghna"
  },
  {
    "StudentID": 2,
    "StudentName": "Reena"
  },
  {
    "StudentID": 3,
    "StudentName": "Rahul"
  }
]

marks =[
  {
    "StudentID": 1,
    "StudentName": "Rahul",
    "StudentImage": "https://d2c967qfslpzim.cloudfront.net/images/img1.jpg",
    "Address": "Ahmedabad",
    "DOB": "1980-02-9",
    "Subjects": {
      "Hindi": {
        "Internal": 90,
        "External": 100
      },
      "English": {
        "Internal": 90,
        "External": 100
      },
      "Math": {
        "Internal": 90,
        "External": 100
      },
      "Science": {
        "Internal": 40,
        "External": 50
      }
    }
  },
  {
    "StudentID": 2,
    "StudentName": "Rita",
    "StudentImage": "https://d2c967qfslpzim.cloudfront.net/images/img2.jpg",
    "Address": "Ahmedabad",
    "DOB": "1987-02-9",
    "Subjects": {
      "Hindi": {
        "Internal": 30,
        "External": 100
      },
      "English": {
        "Internal": 80,
        "External": 100
      },
      "Math": {
        "Internal": 70,
        "External": 40
      },
      "Science": {
        "Internal": 40,
        "External": 50
      }
    }
  },
  {
    "StudentID": 3,
    "StudentName": "Rohan",
    "StudentImage": "https://d2c967qfslpzim.cloudfront.net/images/img3.jpg",
    "Address": "Ahmedabad",
    "DOB": "1987-02-9",
    "Subjects": {
      "Hindi": {
        "Internal": 30,
        "External": 60
      },
      "English": {
        "Internal": 80,
        "External": 60
      },
      "Math": {
        "Internal": 35,
        "External": 40
      },
      "Science": {
        "Internal": 40,
        "External": 50
      }
    }
  }
]
}
