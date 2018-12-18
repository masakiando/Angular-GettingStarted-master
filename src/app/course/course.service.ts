// CourseService
import { Injectable } from '@angular/core';
import { Course } from '../model';

@Injectable()
export class CourseService {
  private courses: Course[] = [
    { id: 1,
      title: "dddd",
      watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
      authorId: "cory-house",
      length: "5:08",
      category: "JavaScript",
      done: true
    },
    {
      id: 2,
      title: "Clean Code: Writing Code for Humans",
      watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
      authorId: "cory-house",
      length: "3:10",
      category: "Software Practices",
      done: true
    },
    {
      id: 3,
      title: "Architecting Applications for the Real World",
      watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
      authorId: "cory-house",
      length: "2:52",
      category: "Software Architecture",
      done: true
    },
    {
      id: 4,
      title: "Becoming an Outlier: Reprogramming the Developer Mind",
      watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
      authorId: "cory-house",
      length: "2:30",
      category: "Career",
      done: true
    },
    {
      id: 5,
      title: "Web Component Fundamentals",
      watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
      authorId: "cory-house",
      length: "5:10",
      category: "HTML5",
      done: true
    }
  ];

  getCourses(): Course[] {
    return this.courses.slice();
  }

  // addTask(task: Task) {
  //   this.tasks.push({
  //     ...task,
  //     id: this.tasks.length + 1
  //   });
  // }

  // updateTask(task: Task) {
  //   const index = this.tasks
  //     .findIndex((t) => t.id === task.id);
  //   this.tasks[index] = task;
  // }
}
