import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Campuses } from '../models/campus-model';
import { Students } from '../models/students-model';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const campuses = [
      {
        'campusId': 1,
        'campusName': 'App academy',
        'campusImage': '/assets/images/campus1.jpeg',
        'campusDetails': 'Courses for ruby,javaScript and react'
      },
      {
      'campusId': 2,
      'campusName': 'FastTrack academy',
      'campusImage': '/assets/images/campus3.jpeg',
      'campusDetails': 'Courses for ruby and react-redux'
      },
      {
        'campusId': 3,
        'campusName': 'New academy',
        'campusImage': '/assets/images/campus2.jpeg',
        'campusDetails': 'Courses for java and dot net'
      },
      {
        'campusId': 4,
        'campusName': 'Plural academy',
        'campusImage': '/assets/images/new-campus.jpeg',
        'campusDetails': 'Courses for node and ruby'
      },
      {
        'campusId': 3,
        'campusName': 'Udacity academy',
        'campusImage': '/assets/images/new-campus.jpeg',
        'campusDetails': 'Courses for react and redux'
      }
    ];
    const students = [
      {
        'id': 1,
        'studentId': 1,
        'name': 'Ra Singh',
        'email': 'razz@yahoo.com',
        'gpa': 2.9,
        'campus': 'New academy',
        'campusID': 3
       },
       {
         'id': 2,
         'studentId': 2,
         'name': 'jasmina Jacob',
         'email': 'jasmina@yahoo.com',
         'gpa': 2.9,
         'campus': 'FastTrack academy',
         'campusID': 2
        },
        {
          'id': 3,
         'studentId': 3,
         'name': 'Rocky s',
         'email': 'rocky@yahoo.com',
         'gpa': 2.8,
         'campus': 'App academy',
         'campusID': 1
        },
        {
          'id': 4,
         'studentId': 4,
         'name': 'Rachel R',
         'email': 'rachel@yahoo.com',
         'gpa': 3.7,
         'campus': 'FastTrack academy',
         'campusID': 2
        },
        {
          'id': 5,
         'studentId': 5,
         'name': 'Shazia',
         'email': 'shazia@gmail.com',
         'gpa': 3.4,
         'campus': 'App academy',
         'campusID': 1
        },
        {
          'id': 6,
         'studentId': 6,
         'name': 'Raji ',
         'email': 'razz@yahoo.com',
         'gpa': 3.9,
         'campus': 'Plural academy',
         'campusID': 4
        },
        {
          'id': 7,
         'studentId': 7,
         'name': 'samaira khan',
         'email': 'sam@hotmail.com',
         'gpa': 4.9,
         'campus': 'Plural academy',
         'campusID': 4
        },
        {
          'id': 8,
         'studentId': 8,
         'name': 'Archit',
         'email': 'archit@yahoo.com',
         'gpa': 5,
         'campus': 'New academy',
         'campusID': 2
        },
        {
          'id': 9,
         'studentId': 9,
         'name': 'Natalie',
         'email': 'natalie@yahoo.com',
         'gpa': 2.9,
         'campus': 'FastTrack academy',
         'campusID': 2
        },
        {
          'id': 10,
         'studentId': 10,
         'name': 'kathy',
         'email': 'kat@yahoo.com',
         'gpa': 3.5,
         'campus': 'New academy',
         'campusID': 3
        }
    ];
    return { campuses, students};
  }
}
